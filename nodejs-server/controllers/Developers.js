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

module.exports.addTag = function addTag (req, res, next) {
  var tagItem = req.swagger.params['TagItem'].value;
  Developers.addTag(tagItem)
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
  Developers.getYtItems(title,limit)
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

module.exports.removeTag = function removeTag (req, res, next) {
  var id = req.swagger.params['id'].value;
  Developers.removeTag(id)
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
  var title = req.swagger.params['title'].value;
  var tags = req.swagger.params['tags'].value;
  Developers.searchSong(id,skip,limit,title,tags)
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
  Developers.searchTag(id,skip,limit)
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

module.exports.updateTag = function updateTag (req, res, next) {
  var tagItem = req.swagger.params['TagItem'].value;
  Developers.updateTag(tagItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
