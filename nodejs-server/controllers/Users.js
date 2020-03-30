'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.searchSong = function searchSong (req, res, next) {
  var id = req.swagger.params['id'].value;
  var skip = req.swagger.params['skip'].value;
  var limit = req.swagger.params['limit'].value;
  var title = req.swagger.params['title'].value;
  var tags = req.swagger.params['tags'].value;
  var sort = req.swagger.params['sort'].value;
  Users.searchSong(id,skip,limit,title,tags,sort)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
