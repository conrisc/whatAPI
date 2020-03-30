'use strict';


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
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "_id" : "5daef72831cae99923dad6ez",
  "title" : "G-Eazy - Far alone",
  "url" : "https://youtube.com/watch?v=sxV1_Lr1yf0",
  "dateAdded" : "Wed Oct 09 2019 13:39:18 GMT+0200 (Central European Summer Time)",
  "tags" : [ "dance", "party" ]
}, {
  "_id" : "5daef72831cae99923dad6ez",
  "title" : "G-Eazy - Far alone",
  "url" : "https://youtube.com/watch?v=sxV1_Lr1yf0",
  "dateAdded" : "Wed Oct 09 2019 13:39:18 GMT+0200 (Central European Summer Time)",
  "tags" : [ "dance", "party" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

