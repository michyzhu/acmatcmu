
/**
 * Expose
 */

module.exports = {
  db: 'mongodb://dev:acmdev1@ds151997.mlab.com:51997/heroku_mztvh6zg',
  facebook: {
    clientID: 'APP_ID',
    clientSecret: 'SECRET',
    callbackURL: 'http://localhost:3000/',
    scope: [
      'email',
      'user_about_me',
      'user_friends'
    ]
  },
  google: {
    clientID: '799612153838-k46hmt1v7l477vkaalprjpg910bqjibc.apps.googleusercontent.com',
    clientSecret: 'jSVCNQ99MkNaS1UI0dwYyQh2',
    callbackURL: 'http://localhost:3000/',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
      // 'https://www.google.com/m8/feeds',
      // 'https://www.googleapis.com/auth/calendar',
    ],
  }
};