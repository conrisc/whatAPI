# WhatApi.DevelopersApi

All URIs are relative to *https://what-appy-server.herokuapp.com/whatapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNote**](DevelopersApi.md#addNote) | **POST** /note | adds a note item
[**removeNote**](DevelopersApi.md#removeNote) | **DELETE** /note | removes a note item
[**searchNote**](DevelopersApi.md#searchNote) | **GET** /note | searches note
[**updateNote**](DevelopersApi.md#updateNote) | **PUT** /note | updates a note item


<a name="addNote"></a>
# **addNote**
> &#39;String&#39; addNote(opts)

adds a note item

Adds an item to the database

### Example
```javascript
import WhatApi from 'what_api';

let apiInstance = new WhatApi.DevelopersApi();

let opts = { 
  'noteItem': new WhatApi.NoteItem() // NoteItem | Note item to add
};

apiInstance.addNote(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteItem** | [**NoteItem**](NoteItem.md)| Note item to add | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeNote"></a>
# **removeNote**
> removeNote(id)

removes a note item

Removes an item from the database

### Example
```javascript
import WhatApi from 'what_api';

let apiInstance = new WhatApi.DevelopersApi();

let id = "id_example"; // String | note id


apiInstance.removeNote(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| note id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="searchNote"></a>
# **searchNote**
> [NoteItem] searchNote(opts)

searches note

By passing in the appropriate options, you can search for available note in the system 

### Example
```javascript
import WhatApi from 'what_api';

let apiInstance = new WhatApi.DevelopersApi();

let opts = { 
  'id': "id_example", // String | note id
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

apiInstance.searchNote(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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

<a name="updateNote"></a>
# **updateNote**
> updateNote(opts)

updates a note item

Updates an item in the database

### Example
```javascript
import WhatApi from 'what_api';

let apiInstance = new WhatApi.DevelopersApi();

let opts = { 
  'noteItem': new WhatApi.NoteItem() // NoteItem | Note item to update
};

apiInstance.updateNote(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteItem** | [**NoteItem**](NoteItem.md)| Note item to update | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

