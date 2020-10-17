'use strict';

const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useUnifiedTopology: true });

const db = new Promise((resolve, reject) => {
    client.connect((err) => {
        if (err) {
            console.log(err);
            reject(err);
        }
        else {
            console.log('Successfully connected to the database');
            const database = client.db();
            resolve(database);
        }
    })
});

module.exports = {
    getDB: () => db
}
