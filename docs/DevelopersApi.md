# WhatApi.DevelopersApi

All URIs are relative to *https://what-appy-server.herokuapp.com/whatapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNote**](DevelopersApi.md#addNote) | **POST** /note | adds a note item
[**addSong**](DevelopersApi.md#addSong) | **POST** /song | adds a song item
[**removeNote**](DevelopersApi.md#removeNote) | **DELETE** /note | removes a note item
[**removeSong**](DevelopersApi.md#removeSong) | **DELETE** /song | removes a song item
[**searchNote**](DevelopersApi.md#searchNote) | **GET** /note | searches note
[**searchSong**](DevelopersApi.md#searchSong) | **GET** /song | Search song
[**updateNote**](DevelopersApi.md#updateNote) | **PUT** /note | updates a note item
[**updateSong**](DevelopersApi.md#updateSong) | **PUT** /song | updates a song item


<a name="addNote"></a>
# **addNote**
> 'String' addNote(opts)

adds a note item

Adds an item to the database

### Example
```javascript
import {WhatApi} from 'what_api';

let apiInstance = new WhatApi.DevelopersApi();

let opts = { 
  'noteItem': new WhatApi.NoteItem() // NoteItem | Note item to add
};
apiInstance.addNote(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteItem** | [**NoteItem**](NoteItem.md)| Note item to add | [optional] 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addSong"></a>
# **addSong**
> 'String' addSong(opts)

adds a song item

Adds an item to the database

### Example
```javascript
import {WhatApi} from 'what_api';

let apiInstance = new WhatApi.DevelopersApi();

let opts = { 
  'songItem': new WhatApi.SongItem() // SongItem | Song item to add
};
apiInstance.addSong(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **songItem** | [**SongItem**](SongItem.md)| Song item to add | [optional] 

### Return type

**'String'**

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
import {WhatApi} from 'what_api';

let apiInstance = new WhatApi.DevelopersApi();

let id = "id_example"; // String | note id

apiInstance.removeNote(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
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

<a name="removeSong"></a>
# **removeSong**
> removeSong(id)

removes a song item

Removes an item from the database

### Example
```javascript
import {WhatApi} from 'what_api';

let apiInstance = new WhatApi.DevelopersApi();

let id = "id_example"; // String | note id

apiInstance.removeSong(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
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
import {WhatApi} from 'what_api';

let apiInstance = new WhatApi.DevelopersApi();

let opts = { 
  'id': "id_example", // String | note id
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};
apiInstance.searchNote(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| note id | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[NoteItem]**](NoteItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchSong"></a>
# **searchSong**
> [SongItem] searchSong(opts)

Search song

By passing in the appropriate options, you can search for available song in the system 

### Example
```javascript
import {WhatApi} from 'what_api';

let apiInstance = new WhatApi.DevelopersApi();

let opts = { 
  'id': "id_example", // String | song id
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
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

### Return type

[**[SongItem]**](SongItem.md)

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
import {WhatApi} from 'what_api';

let apiInstance = new WhatApi.DevelopersApi();

let opts = { 
  'noteItem': new WhatApi.NoteItem() // NoteItem | Note item to update
};
apiInstance.updateNote(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
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

<a name="updateSong"></a>
# **updateSong**
> updateSong(opts)

updates a song item

Updates an item in the database

### Example
```javascript
import {WhatApi} from 'what_api';

let apiInstance = new WhatApi.DevelopersApi();

let opts = { 
  'songItem': new WhatApi.SongItem() // SongItem | Note item to update
};
apiInstance.updateSong(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **songItem** | [**SongItem**](SongItem.md)| Note item to update | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

