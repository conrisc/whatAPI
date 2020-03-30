const jwt = require('jsonwebtoken');
const ObjectId = require('mongodb').ObjectId;

const DBService = require('./DatabaseService');
const key = 'my-ultr4-priv4t3-k3y';

exports.verifyToken = function(req, authOrSecDef, token, next) {
    function getError() {
        return new Error('Error: Access Denied');
    }

    jwt.verify(token, key, function(err, decoded) {
        if (!err && decoded && decoded.userId) {
            findUser(decoded.userId)
                .then(() => {
                    return next();
                })
                .catch(() => {
                    return next(getError());
                })
        } else {
            return next(getError());
        }
    });
}

function findUser(userId) {
    const data = {
        _id: new ObjectId(userId)
    };
    return new Promise((resolve, reject) => {
        DBService.getDB()
            .then(findUser);

        function findUser(db) {
            const collection = db.collection('users');
            collection.find(data).toArray(log);
        }

        function log(err, docs) {
            if (!err && docs.length === 1) {
                resolve(docs[0]);
            }
            else {
                reject('Something went wrong :(');
            }
        }
    });
}
