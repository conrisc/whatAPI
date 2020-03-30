# WhatApi.UsersApi

All URIs are relative to *https://what-appy-server.herokuapp.com/whatapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchSong**](UsersApi.md#searchSong) | **GET** /song | Search song


<a name="searchSong"></a>
# **searchSong**
> [SongItem] searchSong(opts)

Search song

By passing in the appropriate options, you can search for available song in the system 

### Example
```javascript
import {WhatApi} from 'what_api';
let defaultClient = WhatApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new WhatApi.UsersApi();

let opts = { 
  'id': "id_example", // String | song id
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56, // Number | maximum number of records to return
  'title': "title_example", // String | a phrase song's title must contain
  'tags': ["tags_example"], // [String] | tags which song must contain
  'sort': "sort_example" // String | type of sort to use
};
apiInstance.searchSong(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| song id | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 
 **title** | **String**| a phrase song's title must contain | [optional] 
 **tags** | [**[String]**](String.md)| tags which song must contain | [optional] 
 **sort** | **String**| type of sort to use | [optional] 

### Return type

[**[SongItem]**](SongItem.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

