'use strict';

const ObjectId = require('mongodb').ObjectId;

const DBService = require('./DatabaseService');


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
					console.log('Error while inserting note: ', err)
					resolve(err);
				}
				else {
					console.log('Note inserted', r.ops);
					resolve([r.ops[0]['_id']]);
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
	return new Promise(function(resolve, reject) {
		DBService.getDB()
			.then(findNote);

		function findNote(db) {
			const collection = db.collection('notes');
			collection.find({ _id: new ObjectId(id) }).toArray(log);
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
    resolve();
  });
}

