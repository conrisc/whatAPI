# what_api

WhatApi - JavaScript client for what_api
This is what-api
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install what_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/what_api
then install it via:

```shell
    npm install YOUR_USERNAME/what_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var WhatApi = require('what_api');

var api = new WhatApi.DevelopersApi()

var opts = { 
  'noteItem': new WhatApi.NoteItem() // {NoteItem} Note item to add
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addNote(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://what-appy-server.herokuapp.com/whatapi*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*WhatApi.DevelopersApi* | [**addNote**](docs/DevelopersApi.md#addNote) | **POST** /note | adds a note item
*WhatApi.DevelopersApi* | [**searchNote**](docs/DevelopersApi.md#searchNote) | **GET** /note | searches note
*WhatApi.DevelopersApi* | [**updateNote**](docs/DevelopersApi.md#updateNote) | **PUT** /note | updates a note item


## Documentation for Models

 - [WhatApi.NoteItem](docs/NoteItem.md)


## Documentation for Authorization

 All endpoints do not require authorization.

