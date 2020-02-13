const express = require('express');
const cors = require('cors');
const { initCrypto } = require('virgil-crypto');

const app = express();

initCrypto().then(() => {
    const { requireAuthHeader } = require('./api/userValidation');
    const { authenticate } = require('./api/authenticate');
    const { generateVirgilJwt } = require('./api/virgilToken');

    app.use(cors({ origin: true, methods: 'OPTIONS,POST,GET', }));
    app.use(express.json());

    app.post('/authenticate', authenticate);
    app.get('/virgil-jwt', requireAuthHeader, generateVirgilJwt);
    app.use(express.static('./public/'));
});

module.exports = app;
