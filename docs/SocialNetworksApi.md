# Live4tvStreamNetworksApiJavascript.SocialNetworksApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**socialNetworkControllerGetAllActive**](SocialNetworksApi.md#socialNetworkControllerGetAllActive) | **GET** /api/v1/social-networks | Get all social network integrations available



## socialNetworkControllerGetAllActive

> SocialNetworkResponse socialNetworkControllerGetAllActive(xApiKey)

Get all social network integrations available

### Example

```javascript
import Live4tvStreamNetworksApiJavascript from 'live4tv_stream_networks_api_javascript';

let apiInstance = new Live4tvStreamNetworksApiJavascript.SocialNetworksApi();
let xApiKey = "xApiKey_example"; // String | 
apiInstance.socialNetworkControllerGetAllActive(xApiKey, (error, data, response) => {
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

### Return type

[**SocialNetworkResponse**](SocialNetworkResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

