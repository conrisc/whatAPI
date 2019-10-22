'use strict';

const MongoCredentials = require('../credentials').mongoDB;
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${MongoCredentials.user}:${MongoCredentials.password}@${MongoCredentials.cluster}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });
let database = null;




function getDB() {
    return new Promise(function (resolve, reject) {
        if (database)
            resolve(database);
        else 
            client.connect(function (err) {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                else {
                    console.log('Successfully connected to the database');
                    database = client.db('what');
                    resolve(database);
                }
            })
    });
}

module.exports = {
    getDB: getDB
}