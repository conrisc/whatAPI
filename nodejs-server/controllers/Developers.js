'use strict';

var utils = require('../utils/writer.js');
var Developers = require('../service/DevelopersService');

module.exports.signInUser = function signInUser (req, res, next) {
  var userCredentials = req.swagger.params['userCredentials'].value;
  Developers.signInUser(userCredentials)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.signUpUser = function signUpUser (req, res, next) {
  var userCredentials = req.swagger.params['userCredentials'].value;
  Developers.signUpUser(userCredentials)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
