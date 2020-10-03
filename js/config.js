require('dotenv').config()

window._config = {
    cognito: {
        userPoolId: process.env.ENV === "production" ? USERPOOLID : process.env.USERPOOLID, // e.g. us-east-2_uXboG5pAb
        userPoolClientId: process.env.ENV === "production" ? USERPOOLCLIENTID : process.env.USERPOOLCLIENTID, // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
        region: 'ap-southeast-1' // e.g. us-east-2
    },
    api: {
        invokeUrl: '' // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod',
    }
};
