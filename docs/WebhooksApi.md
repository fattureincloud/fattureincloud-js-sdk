# fattureInCloudSdk.WebhooksApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebhooksSubscription**](WebhooksApi.md#createWebhooksSubscription) | **POST** /c/{company_id}/subscriptions | Create a Webhook Subscription
[**deleteWebhooksSubscription**](WebhooksApi.md#deleteWebhooksSubscription) | **DELETE** /c/{company_id}/subscriptions/{subscription_id} | Delete Webhooks Subscription
[**getWebhooksSubscription**](WebhooksApi.md#getWebhooksSubscription) | **GET** /c/{company_id}/subscriptions/{subscription_id} | Get Webhooks Subscription
[**listWebhooksSubscriptions**](WebhooksApi.md#listWebhooksSubscriptions) | **GET** /c/{company_id}/subscriptions | List Webhooks Subscriptions
[**modifyWebhooksSubscription**](WebhooksApi.md#modifyWebhooksSubscription) | **PUT** /c/{company_id}/subscriptions/{subscription_id} | Modify Webhooks Subscription



## createWebhooksSubscription

> CreateWebhooksSubscriptionResponse createWebhooksSubscription(companyId, opts)

Create a Webhook Subscription

Register some webhooks Subscriptions.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.WebhooksApi();
let companyId = 12345; // Number | The ID of the company.
let opts = {
  'createWebhooksSubscriptionRequest': {"data":{"sink":"http://www.test.com","types":["it.fattureincloud.webhooks.entities.create","it.fattureincloud.webhooks.issued_documents.create"]}} // CreateWebhooksSubscriptionRequest | 
};
apiInstance.createWebhooksSubscription(companyId, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **createWebhooksSubscriptionRequest** | [**CreateWebhooksSubscriptionRequest**](CreateWebhooksSubscriptionRequest.md)|  | [optional] 

### Return type

[**CreateWebhooksSubscriptionResponse**](CreateWebhooksSubscriptionResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteWebhooksSubscription

> deleteWebhooksSubscription(companyId, subscriptionId)

Delete Webhooks Subscription

Delete a webhooks subscription.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.WebhooksApi();
let companyId = 12345; // Number | The ID of the company.
let subscriptionId = SUB123; // String | The ID of the subscription.
apiInstance.deleteWebhooksSubscription(companyId, subscriptionId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **subscriptionId** | **String**| The ID of the subscription. | 

### Return type

null (empty response body)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getWebhooksSubscription

> GetWebhooksSubscriptionResponse getWebhooksSubscription(companyId, subscriptionId)

Get Webhooks Subscription

Get a webhooks subscription.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.WebhooksApi();
let companyId = 12345; // Number | The ID of the company.
let subscriptionId = SUB123; // String | The ID of the subscription.
apiInstance.getWebhooksSubscription(companyId, subscriptionId).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **subscriptionId** | **String**| The ID of the subscription. | 

### Return type

[**GetWebhooksSubscriptionResponse**](GetWebhooksSubscriptionResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listWebhooksSubscriptions

> ListWebhooksSubscriptionsResponse listWebhooksSubscriptions(companyId)

List Webhooks Subscriptions

List active webhooks subscriptions.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.WebhooksApi();
let companyId = 12345; // Number | The ID of the company.
apiInstance.listWebhooksSubscriptions(companyId).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 

### Return type

[**ListWebhooksSubscriptionsResponse**](ListWebhooksSubscriptionsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyWebhooksSubscription

> ModifyWebhooksSubscriptionResponse modifyWebhooksSubscription(companyId, subscriptionId, opts)

Modify Webhooks Subscription

Edit a webhooks subscription.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.WebhooksApi();
let companyId = 12345; // Number | The ID of the company.
let subscriptionId = SUB123; // String | The ID of the subscription.
let opts = {
  'modifyWebhooksSubscriptionRequest': new fattureInCloudSdk.ModifyWebhooksSubscriptionRequest() // ModifyWebhooksSubscriptionRequest | 
};
apiInstance.modifyWebhooksSubscription(companyId, subscriptionId, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **subscriptionId** | **String**| The ID of the subscription. | 
 **modifyWebhooksSubscriptionRequest** | [**ModifyWebhooksSubscriptionRequest**](ModifyWebhooksSubscriptionRequest.md)|  | [optional] 

### Return type

[**ModifyWebhooksSubscriptionResponse**](ModifyWebhooksSubscriptionResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

