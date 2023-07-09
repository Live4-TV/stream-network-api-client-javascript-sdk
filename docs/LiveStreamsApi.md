# Live4TvStreamTargets.LiveStreamsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**liveStreamsControllerCreateAndStartLive**](LiveStreamsApi.md#liveStreamsControllerCreateAndStartLive) | **POST** /api/v1/live-streams/{uuid}/create-and-start | Start a live stream, return the stream key
[**liveStreamsControllerStopLive**](LiveStreamsApi.md#liveStreamsControllerStopLive) | **POST** /api/v1/live-streams/{uuid}/stop | Stop a live stream



## liveStreamsControllerCreateAndStartLive

> CreateAndStartLiveResponse liveStreamsControllerCreateAndStartLive(xApiKey, uuid, createAndStartLiveRequest)

Start a live stream, return the stream key

### Example

```javascript
import Live4TvStreamTargets from 'live4_tv_stream_targets';

let apiInstance = new Live4TvStreamTargets.LiveStreamsApi();
let xApiKey = "xApiKey_example"; // String | 
let uuid = "uuid_example"; // String | The uuid of the live stream
let createAndStartLiveRequest = new Live4TvStreamTargets.CreateAndStartLiveRequest(); // CreateAndStartLiveRequest | 
apiInstance.liveStreamsControllerCreateAndStartLive(xApiKey, uuid, createAndStartLiveRequest, (error, data, response) => {
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
 **createAndStartLiveRequest** | [**CreateAndStartLiveRequest**](CreateAndStartLiveRequest.md)|  | 

### Return type

[**CreateAndStartLiveResponse**](CreateAndStartLiveResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## liveStreamsControllerStopLive

> StopLiveResponse liveStreamsControllerStopLive(xApiKey, uuid, stopLiveRequest)

Stop a live stream

### Example

```javascript
import Live4TvStreamTargets from 'live4_tv_stream_targets';

let apiInstance = new Live4TvStreamTargets.LiveStreamsApi();
let xApiKey = "xApiKey_example"; // String | 
let uuid = "uuid_example"; // String | The uuid of the live stream
let stopLiveRequest = new Live4TvStreamTargets.StopLiveRequest(); // StopLiveRequest | 
apiInstance.liveStreamsControllerStopLive(xApiKey, uuid, stopLiveRequest, (error, data, response) => {
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
 **stopLiveRequest** | [**StopLiveRequest**](StopLiveRequest.md)|  | 

### Return type

[**StopLiveResponse**](StopLiveResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

