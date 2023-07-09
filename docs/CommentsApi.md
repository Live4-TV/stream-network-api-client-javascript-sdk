# Live4tvStreamNetworksApiJavascript.CommentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**commentsControllerGetComments**](CommentsApi.md#commentsControllerGetComments) | **GET** /api/v1/live-streams/{uuid}/comments | Get a list of comments (call it every minute)
[**commentsControllerMuteComment**](CommentsApi.md#commentsControllerMuteComment) | **POST** /api/v1/live-streams/{uuid}/comments/mute | Mute comments to the live stream
[**commentsControllerPostComment**](CommentsApi.md#commentsControllerPostComment) | **POST** /api/v1/live-streams/{uuid}/comments | Post a comment into the live stream (all accounts)
[**commentsControllerStartListening**](CommentsApi.md#commentsControllerStartListening) | **POST** /api/v1/live-streams/{uuid}/comments/start-listening | Start listening comments of the live stream
[**commentsControllerStopListening**](CommentsApi.md#commentsControllerStopListening) | **POST** /api/v1/live-streams/{uuid}/comments/stop-listening | Stop listening comments of the live stream
[**commentsControllerUnmuteComment**](CommentsApi.md#commentsControllerUnmuteComment) | **POST** /api/v1/live-streams/{uuid}/comments/unmute | Unmute comments to the live stream



## commentsControllerGetComments

> GetCommentsResponse commentsControllerGetComments(xApiKey, uuid, lastCommentTimestamp)

Get a list of comments (call it every minute)

### Example

```javascript
import Live4tvStreamNetworksApiJavascript from '@live4tv/stream_networks_api_javascript';

let apiInstance = new Live4tvStreamNetworksApiJavascript.CommentsApi();
let xApiKey = "xApiKey_example"; // String | 
let uuid = "uuid_example"; // String | The uuid of the live stream
let lastCommentTimestamp = 1619515200000; // Number | The timestamp of the last comment received. If requesting for the first time, you can send 0
apiInstance.commentsControllerGetComments(xApiKey, uuid, lastCommentTimestamp, (error, data, response) => {
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
 **uuid** | **String**| The uuid of the live stream | 
 **lastCommentTimestamp** | **Number**| The timestamp of the last comment received. If requesting for the first time, you can send 0 | 

### Return type

[**GetCommentsResponse**](GetCommentsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## commentsControllerMuteComment

> ToggleCommentResponse commentsControllerMuteComment(xApiKey, uuid, toggleCommentRequest)

Mute comments to the live stream

### Example

```javascript
import Live4tvStreamNetworksApiJavascript from '@live4tv/stream_networks_api_javascript';

let apiInstance = new Live4tvStreamNetworksApiJavascript.CommentsApi();
let xApiKey = "xApiKey_example"; // String | 
let uuid = "uuid_example"; // String | The uuid of the live stream
let toggleCommentRequest = new Live4tvStreamNetworksApiJavascript.ToggleCommentRequest(); // ToggleCommentRequest | 
apiInstance.commentsControllerMuteComment(xApiKey, uuid, toggleCommentRequest, (error, data, response) => {
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
 **uuid** | **String**| The uuid of the live stream | 
 **toggleCommentRequest** | [**ToggleCommentRequest**](ToggleCommentRequest.md)|  | 

### Return type

[**ToggleCommentResponse**](ToggleCommentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## commentsControllerPostComment

> PostCommentResponse commentsControllerPostComment(xApiKey, uuid, postCommentRequest)

Post a comment into the live stream (all accounts)

### Example

```javascript
import Live4tvStreamNetworksApiJavascript from '@live4tv/stream_networks_api_javascript';

let apiInstance = new Live4tvStreamNetworksApiJavascript.CommentsApi();
let xApiKey = "xApiKey_example"; // String | 
let uuid = "uuid_example"; // String | The uuid of the live stream
let postCommentRequest = new Live4tvStreamNetworksApiJavascript.PostCommentRequest(); // PostCommentRequest | 
apiInstance.commentsControllerPostComment(xApiKey, uuid, postCommentRequest, (error, data, response) => {
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
 **uuid** | **String**| The uuid of the live stream | 
 **postCommentRequest** | [**PostCommentRequest**](PostCommentRequest.md)|  | 

### Return type

[**PostCommentResponse**](PostCommentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## commentsControllerStartListening

> StartListeningToCommentsResponse commentsControllerStartListening(xApiKey, uuid, startListeningToCommentsRequest)

Start listening comments of the live stream

### Example

```javascript
import Live4tvStreamNetworksApiJavascript from '@live4tv/stream_networks_api_javascript';

let apiInstance = new Live4tvStreamNetworksApiJavascript.CommentsApi();
let xApiKey = "xApiKey_example"; // String | 
let uuid = "uuid_example"; // String | The uuid of the live stream
let startListeningToCommentsRequest = new Live4tvStreamNetworksApiJavascript.StartListeningToCommentsRequest(); // StartListeningToCommentsRequest | 
apiInstance.commentsControllerStartListening(xApiKey, uuid, startListeningToCommentsRequest, (error, data, response) => {
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
 **uuid** | **String**| The uuid of the live stream | 
 **startListeningToCommentsRequest** | [**StartListeningToCommentsRequest**](StartListeningToCommentsRequest.md)|  | 

### Return type

[**StartListeningToCommentsResponse**](StartListeningToCommentsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## commentsControllerStopListening

> StopListeningToCommentsResponse commentsControllerStopListening(xApiKey, uuid, stopListeningToCommentsRequest)

Stop listening comments of the live stream

### Example

```javascript
import Live4tvStreamNetworksApiJavascript from '@live4tv/stream_networks_api_javascript';

let apiInstance = new Live4tvStreamNetworksApiJavascript.CommentsApi();
let xApiKey = "xApiKey_example"; // String | 
let uuid = "uuid_example"; // String | The uuid of the live stream
let stopListeningToCommentsRequest = new Live4tvStreamNetworksApiJavascript.StopListeningToCommentsRequest(); // StopListeningToCommentsRequest | 
apiInstance.commentsControllerStopListening(xApiKey, uuid, stopListeningToCommentsRequest, (error, data, response) => {
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
 **uuid** | **String**| The uuid of the live stream | 
 **stopListeningToCommentsRequest** | [**StopListeningToCommentsRequest**](StopListeningToCommentsRequest.md)|  | 

### Return type

[**StopListeningToCommentsResponse**](StopListeningToCommentsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## commentsControllerUnmuteComment

> ToggleCommentResponse commentsControllerUnmuteComment(xApiKey, uuid, toggleCommentRequest)

Unmute comments to the live stream

### Example

```javascript
import Live4tvStreamNetworksApiJavascript from '@live4tv/stream_networks_api_javascript';

let apiInstance = new Live4tvStreamNetworksApiJavascript.CommentsApi();
let xApiKey = "xApiKey_example"; // String | 
let uuid = "uuid_example"; // String | The uuid of the live stream
let toggleCommentRequest = new Live4tvStreamNetworksApiJavascript.ToggleCommentRequest(); // ToggleCommentRequest | 
apiInstance.commentsControllerUnmuteComment(xApiKey, uuid, toggleCommentRequest, (error, data, response) => {
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
 **uuid** | **String**| The uuid of the live stream | 
 **toggleCommentRequest** | [**ToggleCommentRequest**](ToggleCommentRequest.md)|  | 

### Return type

[**ToggleCommentResponse**](ToggleCommentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

