# WhatApi.DevelopersApi

All URIs are relative to *https://what-appy-server.herokuapp.com/whatapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**signInUser**](DevelopersApi.md#signInUser) | **POST** /user/login | login user
[**signUpUser**](DevelopersApi.md#signUpUser) | **POST** /user/register | register new user


<a name="signInUser"></a>
# **signInUser**
> SimpleResponse signInUser(opts)

login user

signs in user

### Example
```javascript
import {WhatApi} from 'what_api';

let apiInstance = new WhatApi.DevelopersApi();

let opts = { 
  'userCredentials': new WhatApi.UserPost() // UserPost | User's credentials
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
 **userCredentials** | [**UserPost**](UserPost.md)| User's credentials | [optional] 

### Return type

[**SimpleResponse**](SimpleResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="signUpUser"></a>
# **signUpUser**
> SimpleResponse signUpUser(opts)

register new user

signs up new user

### Example
```javascript
import {WhatApi} from 'what_api';

let apiInstance = new WhatApi.DevelopersApi();

let opts = { 
  'userCredentials': new WhatApi.UserPost() // UserPost | User's credentials
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
 **userCredentials** | [**UserPost**](UserPost.md)| User's credentials | [optional] 

### Return type

[**SimpleResponse**](SimpleResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

