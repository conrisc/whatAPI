'use strict';


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
    var examples = {};
    examples['application/json'] = [ {
  "id" : "c290faee-6c54-4b01-90e6-d701748f0851",
  "text" : "Some note",
  "creationDate" : "Wed Oct 09 2019 13:39:18 GMT+0200 (Central European Summer Time)"
}, {
  "id" : "c290faee-6c54-4b01-90e6-d701748f0851",
  "text" : "Some note",
  "creationDate" : "Wed Oct 09 2019 13:39:18 GMT+0200 (Central European Summer Time)"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

