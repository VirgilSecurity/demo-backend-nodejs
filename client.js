const fetch = require('isomorphic-fetch');

async function getUserToken() {
    const res = await fetch('http://localhost:3000/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            identity: 'alice'
        })
    });
    if (res.ok) {
        const data = await res.json();
        return data.token;
    }

    throw 'Error in getJWT with code: ' + res.status;
}

async function getVirgilToken(userToken) {
    const res = await fetch('http://localhost:3000/virgil-jwt', {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userToken}`,
        }
    })

    if (res.ok) {
        const data = await res.json();
        return data.token;
    }

    throw 'Error in getJWT with code: ' + res.status;
}

getUserToken().then(getVirgilToken).then(console.log).catch(console.error)