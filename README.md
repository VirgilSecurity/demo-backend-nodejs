# Sample backend for Node.js

## Clone

Clone the repository from GitHub.

```
$ git clone https://github.com/VirgilSecurity/e3kit-js.git
```

## Get Virgil Credentials

If you don't yet have a Virgil account, [sign up for one](https://VirgilSecurity.com/getstarted).

Create a new app and api key

## Add your Twilio account data to .env

| Variable Name                     | Description                    |
|-----------------------------------|--------------------------------|
| API_PRIVATE_KEY                  | Private key of your API key that is used to sign the JWTs. |
| API_KEY_ID               | ID of your API key. A unique string value that identifies your account in the Virgil Cloud. |
| APP_ID                   | ID of your Virgil Application. |

## Install dependencies and run the app

```
$ npm install
$ npm run start
```