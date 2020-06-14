'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.addNote = function addNote (req, res, next) {
  var noteItem = req.swagger.params['NoteItem'].value;
  Users.addNote(noteItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addSong = function addSong (req, res, next) {
  var songItem = req.swagger.params['SongItem'].value;
  Users.addSong(songItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addTag = function addTag (req, res, next) {
  var tagItem = req.swagger.params['TagItem'].value;
  Users.addTag(tagItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getYtItems = function getYtItems (req, res, next) {
  var title = req.swagger.params['title'].value;
  var limit = req.swagger.params['limit'].value;
  Users.getYtItems(title,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeNote = function removeNote (req, res, next) {
  var id = req.swagger.params['id'].value;
  Users.removeNote(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeSong = function removeSong (req, res, next) {
  var id = req.swagger.params['id'].value;
  Users.removeSong(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeTag = function removeTag (req, res, next) {
  var id = req.swagger.params['id'].value;
  Users.removeTag(id)
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
  Users.searchNote(id,skip,limit)
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

module.exports.searchTag = function searchTag (req, res, next) {
  var id = req.swagger.params['id'].value;
  var skip = req.swagger.params['skip'].value;
  var limit = req.swagger.params['limit'].value;
  Users.searchTag(id,skip,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateNote = function updateNote (req, res, next) {
  var noteItem = req.swagger.params['NoteItem'].value;
  Users.updateNote(noteItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSong = function updateSong (req, res, next) {
  var songItem = req.swagger.params['SongItem'].value;
  Users.updateSong(songItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTag = function updateTag (req, res, next) {
  var tagItem = req.swagger.params['TagItem'].value;
  Users.updateTag(tagItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
