'use strict';


const ObjectId = require('mongodb').ObjectId;

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
		let resultsContainer = rawHtml.match(/ytInitialData\s=\s(.*);<\/sc/)[1];
		let ytItems = [];
		try {
			const parsed = JSON.parse(resultsContainer);
			const videos = parsed.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents;
			ytItems = videos.map(vid => {
				return vid.videoRenderer && {
					videoId: vid.videoRenderer.videoId,
					title: vid.videoRenderer.title.runs[0].text,
					thumbnailUrl: vid.videoRenderer.thumbnail.thumbnails[0].url
				}
			}).filter(ytItem => !!ytItem).slice(0, limit);
		} catch(e) {
			console.log('### [Error] Unable to parse results to JSON: ', resultsContainer);
		}

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

			collection
				.findOneAndDelete({ _id: new ObjectId(id) })
				.then(res => {
					console.log('Song removed: ', res);
					resolve();
				})
				.catch(err => {
					console.error(err);
					reject();
				})

    }
  });
}


/**
 * removes a tag item
 * Removes an item from the database
 *
 * id String tag id
 * no response value expected for this operation
 **/
exports.removeTag = function(tagId) {
  return new Promise(function(resolve, reject) {
    DBService.getDB()
	  .then(removeTagFromSongs)
	  .then(removeTag)
	  .catch(err => {
		  console.error(err);
		  reject();
	  })

	function removeTagFromSongs(db) {
		const collection = db.collection('songs');
		// collection.updateMany({ tags: { $all: [tagId] } }).
		return collection.updateMany({}, {
			$pull: {
				tags: { $in : [tagId] }
			}
		}).then(res => {
			console.log('Songs updated: ', res);
			return db;
		})
	}

    function removeTag(db) {
			const collection = db.collection('tags');

			collection.deleteOne({ _id: new ObjectId(tagId) }, (err, r) => {
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
 * title String a phrase song's title must contain (optional)
 * tags List tags which song must contain (optional)
 * sort String type of sort to use (optional)
 * returns List
 **/
exports.searchSong = function(id,skip,limit,title,tags,sort) {
	const data = {};
	if (id) data._id = new ObjectId(id);
	if (title) data.title = { $regex: title, $options: 'i' };
	if (tags && tags.length > 0) data.tags = { $in: tags };

	const sortData = {};
	switch(sort) {
		case 'title_asc':
			sortData.title = 1;
			break;
		case 'title_desc':
			sortData.title = -1;
			break;
	}

    return new Promise(function(resolve, reject) {
        DBService.getDB()
            .then(findSong);

        function findSong(db) {
            const collection = db.collection('songs');
            if (sort !== 'random')
                collection.find(data).sort(sortData).skip(skip).limit(limit).toArray(log);
            else
                collection.aggregate([{ $match: data }, { $sample: {size: limit} }]).toArray(log);
        }

        function log(err, docs) {
            if (err)
                console.log(err);
            else {
                console.log(`Found ${docs.length} songs`);
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
