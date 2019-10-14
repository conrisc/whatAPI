'use strict';

var utils = require('../utils/writer.js');
var Admins = require('../service/AdminsService');

module.exports.addNote = function addNote (req, res, next) {
  var noteItem = req.swagger.params['NoteItem'].value;
  Admins.addNote(noteItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
