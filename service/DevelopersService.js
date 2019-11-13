'use strict';

const ObjectId = require('mongodb').ObjectId;

const DBService = require('./DatabaseService');
const scrape = require('./scraperService').scrape;


/**
 * adds a note item
 * Adds an item to the database
 *
 * noteItem NoteItem Note item to add (optional)
 * no response value expected for this operation
 **/
exports.addNote = function(noteItem) {
	return new Promise(function(resolve, reject) {
		DBService.getDB()
			.then(insertNote);

		function insertNote(db) {
			const collection = db.collection('notes');
			collection.insertOne(noteItem, function(err, r) {
				if (err) {
					console.log('Error while inserting note: ', err);
					reject(err);
				} else {
					console.log('NOTE INSERTED:', r.ops);
					resolve([r.ops[0]['_id']]);
				}
			});
		}
	});

}


/**
 * adds a song item
 * Adds an item to the database
 *
 * songItem SongItem Song item to add (optional)
 * returns String
 **/
exports.addSong = function(songItem) {
  return new Promise(function(resolve, reject) {
    DBService.getDB()
      .then(insertSong);

    function insertSong(db) {
      const collection = db.collection('songs');
      collection.insertOne(songItem, function (err, r) {
        if (err) {
          console.log('Error while inserting song: ', err);
          reject(err);
        } else {
          console.log('Song inserted', r.ops);
          resolve([r.ops[0]['_id']]);
        }
      });
    }
  });
}

/**
 * adds a tag item
 * Adds an item to the database
 *
 * tagItem TagItem Tag item to add (optional)
 * returns String
 **/
exports.addTag = function(tagItem) {
  return new Promise(function(resolve, reject) {
    DBService.getDB()
      .then(insertTag);

    function insertTag(db) {
      const collection = db.collection('tags');
      collection.insertOne(tagItem, function (err, r) {
        if (err) {
          console.log('Error while inserting tag: ', err);
          reject(err);
        } else {
          console.log('Tag inserted', r.ops);
          resolve([r.ops[0]['_id']]);
        }
      });
    }
  });
}

/**
 * removes a note item
 * Removes an item from the database
 *
 * id String note id
 * no response value expected for this operation
 **/
exports.removeNote = function(id) {
  return new Promise(function(resolve, reject) {
		DBService.getDB()
			.then(removeNote);

		function removeNote(db) {
			const collection = db.collection('notes');

			collection.deleteOne({ _id: new ObjectId(id) }, (err, r) => {
				if (err) {
					console.error(err);
					reject();
				}
				else {
					console.log('Note removed: ', r);
					resolve();
				}
			});
		}
  });
}


/**
 * removes a song item
 * Removes an item from the database
 *
 * id String note id
 * no response value expected for this operation
 **/
exports.removeSong = function(id) {
  return new Promise(function(resolve, reject) {
    DBService.getDB()
      .then(removeSong);

    function removeSong() {
			const collection = db.collection('songs');

			collection.deleteOne({ _id: new ObjectId(id) }, (err, r) => {
				if (err) {
					console.error(err);
					reject();
				}
				else {
					console.log('Song removed: ', r);
					resolve();
				}
			});
    }
  });
}


/**
 * removes a song item
 * Removes an item from the database
 *
 * id String tag id
 * no response value expected for this operation
 **/
exports.removeTag = function(id) {
  return new Promise(function(resolve, reject) {
    DBService.getDB()
      .then(removeTag);

    function removeTag() {
			const collection = db.collection('tags');

			collection.deleteOne({ _id: new ObjectId(id) }, (err, r) => {
				if (err) {
					console.error(err);
					reject();
				}
				else {
					console.log('Tag removed: ', r);
					resolve();
				}
			});
    }
  });
}

/**
 * searches note
 * By passing in the appropriate options, you can search for available note in the system 
 *
 * id UUID note id (optional)
 * skip Integer number of records to skip for pagination (optional)
 * limit Integer maximum number of records to return (optional)
 * returns List
 **/
exports.searchNote = function(id,skip,limit) {
	const data = {};
	if (id) data._id = new ObjectId(id);

	return new Promise(function(resolve, reject) {
		DBService.getDB()
			.then(findNote);

		function findNote(db) {
			const collection = db.collection('notes');
			collection.find(data).toArray(log);
		}

		function log(err, docs) {
			if (err)
				console.log(err);
			else {
				console.log('Found: ', docs);
				resolve(docs);
			}
		}
  });
}


/**
 * Search song
 * By passing in the appropriate options, you can search for available song in the system 
 *
 * id String song id (optional)
 * skip Integer number of records to skip for pagination (optional)
 * limit Integer maximum number of records to return (optional)
 * returns List
 **/
exports.searchSong = function(id,skip,limit, tags) {
	const data = {}
	if (id) data._id = new ObjectId(id);
	if (tags && tags.length > 0) data.tags = { $in: tags };

  return new Promise(function(resolve, reject) {
		DBService.getDB()
			.then(findSong);

		function findSong(db) {
			const collection = db.collection('songs');
			collection.find(data).skip(skip).limit(limit).toArray(log);
		}

		function log(err, docs) {
			if (err)
				console.log(err);
			else {
				console.log('Found: ', docs);
				resolve(docs);
			}
		}
  });
}

/**
 * Search tag
 * By passing in the appropriate options, you can search for available tag in the system 
 *
 * id String tag id (optional)
 * skip Integer number of records to skip for pagination (optional)
 * limit Integer maximum number of records to return (optional)
 * returns List
 **/
exports.searchTag = function(id,skip,limit) {
	const data = {};
	if (id) data._id = new ObjectId(id);

	return new Promise(function(resolve, reject) {
		DBService.getDB()
			.then(findTag);

		function findTag(db) {
			const collection = db.collection('tags');
			collection.find(data).skip(skip).limit(limit).toArray(log);
		}

		function log(err, docs) {
			if (err)
				console.log(err);
			else {
				console.log('Found: ', docs);
				resolve(docs);
			}
		}
  });
}

/**
 * Get data
 * By passing in url, you can fetch data
 *
 * url String url
 * returns String
 **/
exports.getData = function(url) {
	console.log('Scraping url: ', url);
	const resultContainer = data.match(/<ol id=\"item-section(.*\s*)*?<\/ol>/)[0];
	const results = resultContainer.split('<div class="yt-lockup ')
		.slice(1,7)
		.map((el)=> {
			return {
				title: el.match('<a href=.*?title="([^"]*)')[1],
				videoId: el.match('<a href=.*?v=([^"&]*)')[1],
				thumbnailUrl: el.match('<img.*?src="([^"?]*)')[1]
			}
		});
	return scrape(url);
}

/**
 * updates a note item
 * Updates an item in the database
 *
 * noteItem NoteItem Note item to update (optional)
 * no response value expected for this operation
 **/
exports.updateNote = function(noteItem) {
	return new Promise(function(resolve, reject) {
		DBService.getDB()
			.then(updateNote);

		function updateNote(db) {
			const collection = db.collection('notes');
			console.log('New item to update', noteItem);
			collection.updateOne({ _id: new ObjectId(noteItem.id) }, { $set: { text: noteItem.text }}, function(err, r) {
				if (err) {
					console.log('Error while updating note: ', err)
					reject(err);
				}
				else {
					console.log('Note updated', r);
					resolve();
				}
			});
		}
	});
}


/**
 * updates a song item
 * Updates an item in the database
 *
 * songItem SongItem Note item to update (optional)
 * no response value expected for this operation
 **/
exports.updateSong = function(songItem) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}



/**
 * updates a tag item
 * Updates an item in the database
 *
 * tagItem TagItem Note item to update (optional)
 * no response value expected for this operation
 **/
exports.updateTag = function(tagItem) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}
