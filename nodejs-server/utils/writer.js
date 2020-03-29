var ResponsePayload = exports.ResponsePayload = function(code, payload, headers) {
  this.code = code;
  this.payload = payload;
  this.headers = headers;
}

exports.respondWithCode = function(code, payload) {
  return new ResponsePayload(code, payload);
}

var writeJson = exports.writeJson = function(response, arg1, arg2, arg3) {
  var code;
  var payload;
  var headers;

  if(arg1 && arg1 instanceof ResponsePayload) {
    writeJson(response, arg1.payload, arg1.code, arg1.headers);
    return;
  }

  if(arg2 && Number.isInteger(arg2)) {
    code = arg2;
  }
  else {
    if(arg1 && Number.isInteger(arg1)) {
      code = arg1;
    }
  }
  if(code && arg1) {
    payload = arg1;
  }
  else if(arg1) {
    payload = arg1;
  }


  if(!code) {
    // if no response code given, we default to 200
    code = 200;
  }
  if(typeof payload === 'object') {
    payload = JSON.stringify(payload, null, 2);
  }

  headers = arg3 || {};

  response.writeHead(code, { ...headers, 'Content-Type': 'application/json' });
  response.end(payload);
}
