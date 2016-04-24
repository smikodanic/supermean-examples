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
        callbackURL: 'http://localhost:8080/auth/facebook/callback'
    }
};