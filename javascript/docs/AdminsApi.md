# WhatApi.AdminsApi

All URIs are relative to *https://what-appy-server.herokuapp.com/whatapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNote**](AdminsApi.md#addNote) | **POST** /note | adds a note item


<a name="addNote"></a>
# **addNote**
> addNote(opts)

adds a note item

Adds an item to the system

### Example
```javascript
var WhatApi = require('what_api');

var apiInstance = new WhatApi.AdminsApi();

var opts = { 
  'noteItem': new WhatApi.NoteItem() // NoteItem | Note item to add
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addNote(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteItem** | [**NoteItem**](NoteItem.md)| Note item to add | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

