'use strict';

const ObjectId = require('mongodb').ObjectId;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

var utils = require('../utils/writer.js');
const DBService = require('./DatabaseService');
const scrape = require('./scraperService').scrape;
const decodeHtml = require('./htmlDecoderService').decodeHtml;


/**
 * adds a note item
 * Adds an item to the database
 *
 * noteItem NoteItem Note item to add (optional)
 * returns String
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
 * Get data
 * By passing in url, you can fetch data 
 *
 * title String title to search
 * limit Integer maximum number of records to return (optional)
 * returns List
 **/
exports.getYtItems = function(title,limit) {
	const ytSearchUrl = `https://www.youtube.com/results?search_query=${title}&sp=EgIQAQ%253D%253D`;
	return scrape(ytSearchUrl)
		.then(createYtItems)
		.catch(err => {
			console.error(err);
			return [];
		});

	function createYtItems(rawHtml) {
		const resultsContainer = rawHtml.match(/<ol id=\"item-section(.*\s*)*?<\/ol>/)[0];
		const ytItems = resultsContainer.split('<div class="yt-lockup ')
			.slice(1, limit + 1)
			.map((singleYtResult)=> {
				const encodedTitle = singleYtResult.match('<a href=.*?title="([^"]*)')[1];
				return {
					title: decodeHtml(encodedTitle),
					videoId: singleYtResult.match('<a href=.*?v=([^"&]*)')[1],
					thumbnailUrl: singleYtResult.match('<img.*?src="([^"?]*)')[1]
				}
			});
		return ytItems;
	}
}


/**
 * removes a note item
 * Removes an item from the database
 *
 * id String song id
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

    function removeSong(db) {
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

exports.signInUser = function(userCredentials) {
	const response = new utils.ResponsePayload(200, {}, {});
	return new Promise((resolve, reject) => {
		const data = {
			email: userCredentials.email
		};
		DBService.getDB()
			.then(findUser);

		function findUser(db) {
			const collection = db.collection('users');
			collection.find(data).toArray(log);
		}

		function log(err, docs) {
			if (err) {
				console.log(err);
				response.payload = {
					message: 'Something went wrong :('
				};
				reject(response)
			}
			else if (docs.length === 1) {
				console.log('Found: ', docs);
				const userData = docs[0];
				bcrypt.compare(userCredentials.password, userData.hash, (err, result) => {
					if (result) {
						const token = jwt.sign({ userId: userData._id }, 'ultra-key');
						response.payload = {
							message: `Signed in user ${userCredentials.email}`,
							data: {
								authToken: token
							}
						};
						resolve(response);
					} else {
						response.payload = {
							message: 'Invalid credentials'
						};
						reject(response);
					}
				});
			} else {
				response.payload = {
					message: 'Invalid credentials'
				};
				reject(response);
			}
		}
	});
}

exports.signUpUser = function(userCredentials) {
	return new Promise((resolve, reject) => {
		const saltRounds = 11;

		if (userCredentials.email.length < 4) {
			console.log('Email is too short');
			return reject({
				message: 'Email is too short'
			});
		}
		if (userCredentials.password.length < 6) {
			console.log('Password is too short');
			return reject({
				message: 'Password is too short'
			});
		}
		bcrypt.hash(userCredentials.password, saltRounds, function(err, hash) {
			const user = {
				email: userCredentials.email,
				hash
			};

			DBService.getDB()
				.then((db) => insertUser(db, user));
		});

		function insertUser(db, user) {
			const collection = db.collection('users');
			collection.insertOne(user, function (err, r) {
				if (err) {
					console.log('Error while inserting user: ', err);
					reject({
						message: 'Error while inserting user',
						data: err
					});
				} else {
					console.log('User inserted', r.ops);
					resolve({
						message: `Signed up user ${userCredentials.email}`
					})
				}
			});
		}
	});
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
			console.log('New note to update', noteItem);
			collection.updateOne(
				{ _id: new ObjectId(noteItem.id) },
				{ $set: { text: noteItem.text }},
				function(err, r) {
					if (err) {
						console.log('Error while updating note: ', err)
						reject(err);
					}
					else {
						console.log('Note updated', r);
						resolve();
					}
				}
			);
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
		DBService.getDB()
			.then(updateSong);

		function updateSong(db) {
			const tagsIds = songItem.tags.map(tag => new ObjectId(tag));
			const collection = db.collection('tags');
			collection.find({ _id: { $in: tagsIds } }).toArray(updateSongWithCorrectData);

			function updateSongWithCorrectData(error, tagItems) {
				if (error) reject(error);
				const correctTags = tagItems.map(tagItem => tagItem._id.toHexString());
				const collection = db.collection('songs');
				console.log('New song to update', songItem);

				collection.findOneAndUpdate(
					{ _id: new ObjectId(songItem.id) },
					{ $set: { title: songItem.title, url: songItem.url, tags: correctTags} },
					{ returnOriginal: false }
				)
					.then(result => {
						console.log('Song updated, updated songItem:', result.value);
						resolve(result.value);
					})
					.catch(error => {
						console.log('Error while updating song: ', error)
						reject(err);
					});
			}
		}

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
