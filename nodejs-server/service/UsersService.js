'use strict';


const ObjectId = require('mongodb').ObjectId;

const DBService = require('./DatabaseService');
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
