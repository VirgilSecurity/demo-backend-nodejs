const express = require('express');
const crypto = require('crypto');
const cors = require('cors');
const { JwtGenerator } = require('virgil-sdk');
const { VirgilCrypto, VirgilAccessTokenSigner } = require('virgil-crypto');

require('dotenv').config();

const app = express();

app.use(cors({ origin: true, methods: 'OPTIONS,POST,GET', }));
app.use(express.json());

const usersStorage = new Map();

const generateUserToken = () => crypto.randomBytes(32).toString('base64');
const pseudoEncodeToken = (identity, token) => usersStorage.set(token, identity);
const pseudoDecodeToken = (token) => usersStorage.get(token);
const pseudoVerifyToken = (token) => usersStorage.has(token);

app.post('/authenticate', (req, res) => {
  if (!req.body || !req.body.identity) {
    res.statusMessage = 'You should specify identity in body';
    res.status(400).end();
    return;
  }
  const token = generateUserToken();
  pseudoEncodeToken(req.body.identity, token);
  res.json({ authToken: token });
});

const virgilCrypto = new VirgilCrypto();

const generator = new JwtGenerator({
  appId: process.env.APP_ID,
  apiKeyId: process.env.API_KEY_ID,
  apiKey: virgilCrypto.importPrivateKey(process.env.API_PRIVATE_KEY),
  accessTokenSigner: new VirgilAccessTokenSigner(virgilCrypto)
});

app.get('/virgil-jwt', (req, res) => {

  // 'Check if request is authorized with token from POST /authorize'
  if ((!req.headers.authorization || !req.headers.authorization.startsWith('Bearer '))) {
    res.statusMessage = "No Authorization header";
    res.status(401).send('Unauthorized');
    return;
  }

  const userToken = req.headers.authorization.split('Bearer ')[1];

  if (!pseudoVerifyToken(userToken)) res.status(401).send('Unauthorized');
  
  const identity = pseudoDecodeToken(userToken);
  
  const virgilJwtToken = generator.generateToken(identity);

  res.json({ virgilToken: virgilJwtToken.toString() });
});

module.exports = app;