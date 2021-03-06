'use strict';


var oauth2orize = require('oauth2orize');
var passport = require('passport');
var crypto = require('crypto');

var src = process.cwd() + '/src/';

var config = require(src + '../config/config');

var User = require(src + 'users/model');
var Client = require(src + 'users/clients/model');
var AccessToken = require(src + 'users/accessToken/model');
var RefreshToken = require(src + 'users/refreshToken/model');

// create OAuth 2.0 server
var aserver = oauth2orize.createServer();

// Generic error handler
var errFn = function (cb, err) {
  if (err) {
    return cb(err);
  }
};

// Destroys any old tokens and generates a new access and refresh token
var generateTokens = function (data, done) {

  // curries in `done` callback so we don't need to pass it
  var errorHandler = errFn.bind(undefined, done),
    refreshToken,
    refreshTokenValue,
    token,
    tokenValue;

  RefreshToken.remove(data, errorHandler);
  AccessToken.remove(data, errorHandler);

  tokenValue = crypto.randomBytes(32).toString('hex');
  refreshTokenValue = crypto.randomBytes(32).toString('hex');

  data.token = tokenValue;
  token = new AccessToken(data);

  data.token = refreshTokenValue;
  refreshToken = new RefreshToken(data);

  RefreshToken.remove({
    userId: data.userId
  }).exec().then(function (response) {
    refreshToken.save(errorHandler);
  });

  AccessToken.remove({
    userId: data.userId
  }).exec().then(function (response) {
    token.save(function (err) {
      if (err) {
        return done(err);
      }
      done(null, tokenValue, refreshTokenValue, {
        'expires_in': config.security.tokenLife
      });
    });
  });
};

// Exchange phonenumber & password for access token.
aserver.exchange(oauth2orize.exchange.password(function (client, username, password, scope, done) {
  var objToFind = {};
  if (isNaN(username)) {
    objToFind.email = username;
  }
  else {
    objToFind.phonenumber = username;
  }
  User.findOne(objToFind, function (err, user) {
    if (err) {
      return done(err);
    }

    if (!user) {
      return done(null, false);
    }

    user.verifyPassword(password, function (err, isMatch) {
      if (err) {
        return done(err);
      }
      // Password did not match
      if (!isMatch) {
        return done(null, false);
      }

      // Success
      var model = {
        userId: user._id,
        clientId: client.clientId
      };

      generateTokens(model, done);
    });
  });

}));

// Exchange refreshToken for access token.
aserver.exchange(oauth2orize.exchange.refreshToken(function (client, refreshToken, scope, done) {
  RefreshToken.findOne({
    token: refreshToken,
    clientId: client.clientId
  }, function (err, token) {
    if (err) {
      return done(err);
    }

    if (!token) {
      return done(null, false);
    }

    User.findById(token.userId, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }

      var model = {
        userId: user._id,
        clientId: client.clientId
      };

      generateTokens(model, done);
    });
  });
}));

// token endpoint
//
// `token` middleware handles client requests to exchange authorization grants
// for access tokens.  Based on the grant type being exchanged, the above
// exchange middleware will be invoked to handle the request.  Clients must
// authenticate when making requests to this endpoint.

exports.token = [
  passport.authenticate(['basic', 'oauth2-client-password'], {
    session: false
  }),
  aserver.token(),
  aserver.errorHandler()
];
