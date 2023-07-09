# Live4TvStreamTargets.AccountsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**socialNetworkAccountControllerGetAccount**](AccountsApi.md#socialNetworkAccountControllerGetAccount) | **GET** /api/v1/social-network-account/{userExternalId}/{uuid} | Get social account information logged from user account
[**socialNetworkAccountControllerGetAuthoriseUrl**](AccountsApi.md#socialNetworkAccountControllerGetAuthoriseUrl) | **POST** /api/v1/social-network-account/{network}/authorise-url | Add a new social network account (e.g instagram account)



## socialNetworkAccountControllerGetAccount

> SocialNetworkAccount socialNetworkAccountControllerGetAccount(xApiKey, userExternalId, uuid)

Get social account information logged from user account

### Example

```javascript
import Live4TvStreamTargets from 'live4_tv_stream_targets';

let apiInstance = new Live4TvStreamTargets.AccountsApi();
let xApiKey = "xApiKey_example"; // String | 
let userExternalId = john.doe@gmail.com; // String | The user's unique identifier on your system. The same of you use to authorise-url endpoint.
let uuid = 21d6ac22-cf0c-42d2-8aa9-95e71ec32c2b; // String | The reference to the new account that you can use to identify the account. The same of you use to authorise-url endpoint
apiInstance.socialNetworkAccountControllerGetAccount(xApiKey, userExternalId, uuid, (error, data, response) => {
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
 **xApiKey** | **String**|  | 
 **userExternalId** | **String**| The user&#39;s unique identifier on your system. The same of you use to authorise-url endpoint. | 
 **uuid** | **String**| The reference to the new account that you can use to identify the account. The same of you use to authorise-url endpoint | 

### Return type

[**SocialNetworkAccount**](SocialNetworkAccount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## socialNetworkAccountControllerGetAuthoriseUrl

> Redirect socialNetworkAccountControllerGetAuthoriseUrl(xApiKey, network, getAuthoriseUrlRequest)

Add a new social network account (e.g instagram account)

### Example

```javascript
import Live4TvStreamTargets from 'live4_tv_stream_targets';

let apiInstance = new Live4TvStreamTargets.AccountsApi();
let xApiKey = "xApiKey_example"; // String | 
let network = instagram; // String | The social network code
let getAuthoriseUrlRequest = new Live4TvStreamTargets.GetAuthoriseUrlRequest(); // GetAuthoriseUrlRequest | 
apiInstance.socialNetworkAccountControllerGetAuthoriseUrl(xApiKey, network, getAuthoriseUrlRequest, (error, data, response) => {
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
 **xApiKey** | **String**|  | 
 **network** | **String**| The social network code | 
 **getAuthoriseUrlRequest** | [**GetAuthoriseUrlRequest**](GetAuthoriseUrlRequest.md)|  | 

### Return type

[**Redirect**](Redirect.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

