/**
 * Authentication login credentials
 */


module.exports = {
    local: {
        username: 'someuser',
        password: 'somepass'
    },
    facebook: {
        appID: '265096693823997',
        appSecret: '4d8f626b9e1966d11eac09c0c6ffc550',
        callbackURL: '/examples/auth/passport/facebook/return'
    },
    twitter: {
        apiKey: 'sVP8fWhqtfqZ2VcOBBukeObdh',
        apiSecret: 'fbyYk6uEUePKUvyDEWFoV0wtW2tjbersOSvCC9KW30OdPSIEVg',
        callbackURL: '/examples/auth/passport/twitter/return'
    },
    google: {
        apiKey: 'sVP8fWhqtfqZ2VcOBBukeObdh',
        apiSecret: 'fbyYk6uEUePKUvyDEWFoV0wtW2tjbersOSvCC9KW30OdPSIEVg',
        callbackURL: '/examples/auth/passport/twitter/return'
    }
};
