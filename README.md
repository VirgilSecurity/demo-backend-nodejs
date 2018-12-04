# Sample backend for Node.js

This repository contains a sample backend code that demonstrates how to generate a Virgil JWT using Node.js.

## Clone

Clone the repository from GitHub.

```
$ git clone https://github.com/VirgilSecurity/e3kit-js.git
```

## Get Virgil Credentials

If you don't have an account yet, [sign up for one](https://dashboard.virgilsecurity.com/signup) using your e-mail.

To generate a JWT the following values are required:

| Variable Name                     | Description                    |
|-----------------------------------|--------------------------------|
| API_PRIVATE_KEY                  | Private key of your API key that is used to sign the JWTs. |
| API_KEY_ID               | ID of your API key. A unique string value that identifies your account in the Virgil Cloud. |
| APP_ID                   | ID of your Virgil Application. |

## Add your Virgil account credentials to .env

- open the project folder
- create a `.env` file
- fill it with your account credentials (take a look at the `.env.example` file to find out how to setup your own `.env` file)
- save the `.env` file


## Install dependencies and run the server

```
$ npm install
$ npm run start
```

Now, use your client code to make a request to get a JWT from the sample backend that is working on http://localhost:3000.

## License

This library is released under the [3-clause BSD License](LICENSE.md).

## Support
Our developer support team is here to help you. Find out more information on our [Help Center](https://help.virgilsecurity.com/).

You can find us on [Twitter](https://twitter.com/VirgilSecurity) or send us email support@VirgilSecurity.com.

Also, get extra help from our support team on [Slack](https://virgilsecurity.slack.com/join/shared_invite/enQtMjg4MDE4ODM3ODA4LTc2OWQwOTQ3YjNhNTQ0ZjJiZDc2NjkzYjYxNTI0YzhmNTY2ZDliMGJjYWQ5YmZiOGU5ZWEzNmJiMWZhYWVmYTM).
