'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

var utils = require('../utils/writer.js');
const DBService = require('./DatabaseService');


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
						const token = jwt.sign({ userId: userData._id }, 'my-ultr4-priv4t3-k3y');
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
