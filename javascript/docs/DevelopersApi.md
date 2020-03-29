# WhatApi.DevelopersApi

All URIs are relative to *https://what-appy-server.herokuapp.com/whatapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNote**](DevelopersApi.md#addNote) | **POST** /note | adds a note item
[**addSong**](DevelopersApi.md#addSong) | **POST** /song | adds a song item
[**addTag**](DevelopersApi.md#addTag) | **POST** /tag | adds a tag item
[**getYtItems**](DevelopersApi.md#getYtItems) | **GET** /ytitems | Get data
[**removeNote**](DevelopersApi.md#removeNote) | **DELETE** /note | removes a note item
[**removeSong**](DevelopersApi.md#removeSong) | **DELETE** /song | removes a song item
[**removeTag**](DevelopersApi.md#removeTag) | **DELETE** /tag | removes a song item
[**removeUser**](DevelopersApi.md#removeUser) | **DELETE** /user | removes a user
[**searchNote**](DevelopersApi.md#searchNote) | **GET** /note | searches note
[**searchSong**](DevelopersApi.md#searchSong) | **GET** /song | Search song
[**searchTag**](DevelopersApi.md#searchTag) | **GET** /tag | Search tag
[**searchUser**](DevelopersApi.md#searchUser) | **GET** /user | Search users
[**signInUser**](DevelopersApi.md#signInUser) | **POST** /user/login | login user
[**signUpUser**](DevelopersApi.md#signUpUser) | **POST** /user/register | register new user
[**updateNote**](DevelopersApi.md#updateNote) | **PUT** /note | updates a note item
[**updateSong**](DevelopersApi.md#updateSong) | **PUT** /song | updates a song item
[**updateTag**](DevelopersApi.md#updateTag) | **PUT** /tag | updates a tag item
[**updateUser**](DevelopersApi.md#updateUser) | **PUT** /user | updates a user item


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
 - **Accept**: text/plain

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
 - **Accept**: text/plain

<a name="addTag"></a>
# **addTag**
> 'String' addTag(opts)

adds a tag item

Adds an item to the database

### Example
```javascript
import {WhatApi} from 'what_api';

let apiInstance = new WhatApi.DevelopersApi();

let opts = { 
  'tagItem': new WhatApi.TagItem() // TagItem | Tag item to add
};
apiInstance.addTag(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagItem** | [**TagItem**](TagItem.md)| Tag item to add | [optional] 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain

<a name="getYtItems"></a>
# **getYtItems**
> [YtVideoItem] getYtItems(title, opts)

Get data

By passing in url, you can fetch data 

### Example
```javascript
import {WhatApi} from 'what_api';

let apiInstance = new WhatApi.DevelopersApi();

let title = "title_example"; // String | title to search

let opts = { 
  'limit': 5 // Number | maximum number of records to return
};
apiInstance.getYtItems(title, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **String**| title to search | 
 **limit** | **Number**| maximum number of records to return | [optional] [default to 5]

### Return type

[**[YtVideoItem]**](YtVideoItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
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

let id = "id_example"; // String | song id

apiInstance.removeSong(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| song id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="removeTag"></a>
# **removeTag**
> removeTag(id)

removes a song item

Removes an item from the database

### Example
```javascript
import {WhatApi} from 'what_api';

let apiInstance = new WhatApi.DevelopersApi();

let id = "id_example"; // String | tag id

apiInstance.removeTag(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| tag id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="removeUser"></a>
# **removeUser**
> removeUser(id)

removes a user

Removes an item from the database

### Example
```javascript
import {WhatApi} from 'what_api';

let apiInstance = new WhatApi.DevelopersApi();

let id = "id_example"; // String | user id

apiInstance.removeUser(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| user id | 

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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchTag"></a>
# **searchTag**
> [TagItem] searchTag(opts)

Search tag

By passing in the appropriate options, you can search for available tag in the system 

### Example
```javascript
import {WhatApi} from 'what_api';

let apiInstance = new WhatApi.DevelopersApi();

let opts = { 
  'id': "id_example", // String | tag id
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};
apiInstance.searchTag(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| tag id | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[TagItem]**](TagItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchUser"></a>
# **searchUser**
> [User] searchUser(opts)

Search users

By passing in the appropriate options, you can search for available user in the system 

### Example
```javascript
import {WhatApi} from 'what_api';

let apiInstance = new WhatApi.DevelopersApi();

let opts = { 
  'id': "id_example", // String | user id
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56, // Number | maximum number of records to return
  'email': "email_example" // String | email of wanted user
};
apiInstance.searchUser(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| user id | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 
 **email** | **String**| email of wanted user | [optional] 

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="signInUser"></a>
# **signInUser**
> 'String' signInUser(opts)

login user

signs in user

### Example
```javascript
import {WhatApi} from 'what_api';

let apiInstance = new WhatApi.DevelopersApi();

let opts = { 
  'usersCredentials': new WhatApi.UserPost() // UserPost | User's credentials
};
apiInstance.signInUser(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usersCredentials** | [**UserPost**](UserPost.md)| User's credentials | [optional] 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain

<a name="signUpUser"></a>
# **signUpUser**
> 'String' signUpUser(opts)

register new user

signs up new user

### Example
```javascript
import {WhatApi} from 'what_api';

let apiInstance = new WhatApi.DevelopersApi();

let opts = { 
  'usersCredentials': new WhatApi.UserPost() // UserPost | User's credentials
};
apiInstance.signUpUser(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usersCredentials** | [**UserPost**](UserPost.md)| User's credentials | [optional] 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain

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
 - **Accept**: Not defined

<a name="updateSong"></a>
# **updateSong**
> SongItem updateSong(opts)

updates a song item

Updates an item in the database

### Example
```javascript
import {WhatApi} from 'what_api';

let apiInstance = new WhatApi.DevelopersApi();

let opts = { 
  'songItem': new WhatApi.SongItem() // SongItem | Note item to update
};
apiInstance.updateSong(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **songItem** | [**SongItem**](SongItem.md)| Note item to update | [optional] 

### Return type

[**SongItem**](SongItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="updateTag"></a>
# **updateTag**
> updateTag(opts)

updates a tag item

Updates an item in the database

### Example
```javascript
import {WhatApi} from 'what_api';

let apiInstance = new WhatApi.DevelopersApi();

let opts = { 
  'tagItem': new WhatApi.TagItem() // TagItem | Note item to update
};
apiInstance.updateTag(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagItem** | [**TagItem**](TagItem.md)| Note item to update | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="updateUser"></a>
# **updateUser**
> 'String' updateUser(opts)

updates a user item

Updates an item in the database

### Example
```javascript
import {WhatApi} from 'what_api';

let apiInstance = new WhatApi.DevelopersApi();

let opts = { 
  'user': new WhatApi.User() // User | User to update
};
apiInstance.updateUser(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)| User to update | [optional] 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

