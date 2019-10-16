# WhatApi.DevelopersApi

All URIs are relative to *https://what-appy-server.herokuapp.com/whatapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchNote**](DevelopersApi.md#searchNote) | **GET** /note | searches note


<a name="searchNote"></a>
# **searchNote**
> [NoteItem] searchNote(opts)

searches note

By passing in the appropriate options, you can search for available note in the system 

### Example
```javascript
var WhatApi = require('what_api');

var apiInstance = new WhatApi.DevelopersApi();

var opts = { 
  'id': "id_example", // String | note id
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchNote(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| note id | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[NoteItem]**](NoteItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

