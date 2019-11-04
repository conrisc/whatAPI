'use strict';

var utils = require('../utils/writer.js');
var Developers = require('../service/DevelopersService');

module.exports.addNote = function addNote (req, res, next) {
  var noteItem = req.swagger.params['NoteItem'].value;
  Developers.addNote(noteItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addSong = function addSong (req, res, next) {
  var songItem = req.swagger.params['SongItem'].value;
  Developers.addSong(songItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeNote = function removeNote (req, res, next) {
  var id = req.swagger.params['id'].value;
  Developers.removeNote(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeSong = function removeSong (req, res, next) {
  var id = req.swagger.params['id'].value;
  Developers.removeSong(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchNote = function searchNote (req, res, next) {
  var id = req.swagger.params['id'].value;
  var skip = req.swagger.params['skip'].value;
  var limit = req.swagger.params['limit'].value;
  Developers.searchNote(id,skip,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchSong = function searchSong (req, res, next) {
  var id = req.swagger.params['id'].value;
  var skip = req.swagger.params['skip'].value;
  var limit = req.swagger.params['limit'].value;
  Developers.searchSong(id,skip,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateNote = function updateNote (req, res, next) {
  var noteItem = req.swagger.params['NoteItem'].value;
  Developers.updateNote(noteItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSong = function updateSong (req, res, next) {
  var songItem = req.swagger.params['SongItem'].value;
  Developers.updateSong(songItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
