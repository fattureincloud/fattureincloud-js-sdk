# fattureInCloudSdk.SettingsApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPaymentAccount**](SettingsApi.md#createPaymentAccount) | **POST** /c/{companyId}/settings/payment_accounts | Create Payment Account
[**createPaymentMethod**](SettingsApi.md#createPaymentMethod) | **POST** /c/{companyId}/settings/payment_methods | Create Payment Method
[**deletePaymentAccount**](SettingsApi.md#deletePaymentAccount) | **DELETE** /c/{companyId}/settings/payment_accounts/{paymentAccountId} | Delete Payment Account
[**deletePaymentMethod**](SettingsApi.md#deletePaymentMethod) | **DELETE** /c/{companyId}/settings/payment_method/{paymentMethodId} | Delete Payment Method
[**getPaymentAccount**](SettingsApi.md#getPaymentAccount) | **GET** /c/{companyId}/settings/payment_accounts/{paymentAccountId} | Get Payment Account
[**getPaymentMethod**](SettingsApi.md#getPaymentMethod) | **GET** /c/{companyId}/settings/payment_method/{paymentMethodId} | Get Payment Method
[**modifyPaymentAccount**](SettingsApi.md#modifyPaymentAccount) | **PUT** /c/{companyId}/settings/payment_accounts/{paymentAccountId} | Modify Payment Account
[**modifyPaymentMethod**](SettingsApi.md#modifyPaymentMethod) | **PUT** /c/{companyId}/settings/payment_method/{paymentMethodId} | Modify Payment Method



## createPaymentAccount

> CreatePaymentAccountResponse createPaymentAccount(company_id, opts)

Create Payment Account

Creates a new payment account.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.SettingsApi();
let company_id = 12345; // Number | The ID of the company.
let opts = {
  'CreatePaymentAccountRequest': {"data":{"id":12345,"name":"Indesa","type":"bank","iban":"IT17Q0051343200000003497636","sia":"T1234","virtual":false}} // CreatePaymentAccountRequest | 
};
apiInstance.createPaymentAccount(company_id, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **CreatePaymentAccountRequest** | [**CreatePaymentAccountRequest**](CreatePaymentAccountRequest.md)|  | [optional] 

### Return type

[**CreatePaymentAccountResponse**](CreatePaymentAccountResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPaymentMethod

> CreatePaymentMethodResponse createPaymentMethod(company_id, opts)

Create Payment Method

Creates a new payment method.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.SettingsApi();
let company_id = 12345; // Number | The ID of the company.
let opts = {
  'CreatePaymentMethodRequest': {"data":{"id":386683,"name":"Bonifico bancario","is_default":true,"type":"standard","details":[{"title":"Banca","description":"Sao Paulo"}],"default_payment_account":{"id":12345,"name":"conto banca SP"}}} // CreatePaymentMethodRequest | 
};
apiInstance.createPaymentMethod(company_id, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **CreatePaymentMethodRequest** | [**CreatePaymentMethodRequest**](CreatePaymentMethodRequest.md)|  | [optional] 

### Return type

[**CreatePaymentMethodResponse**](CreatePaymentMethodResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePaymentAccount

> deletePaymentAccount(company_id, paymentAccountId)

Delete Payment Account

Deletes the specified payment account.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.SettingsApi();
let company_id = 12345; // Number | The ID of the company.
let paymentAccountId = 1; // String | The Referred Payment Account Id.
apiInstance.deletePaymentAccount(company_id, paymentAccountId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **paymentAccountId** | **String**| The Referred Payment Account Id. | 

### Return type

null (empty response body)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deletePaymentMethod

> deletePaymentMethod(company_id, paymentMethodId)

Delete Payment Method

Deletes the specified payment method.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.SettingsApi();
let company_id = 12345; // Number | The ID of the company.
let paymentMethodId = 1; // Number | The Referred Payment Method Id.
apiInstance.deletePaymentMethod(company_id, paymentMethodId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **paymentMethodId** | **Number**| The Referred Payment Method Id. | 

### Return type

null (empty response body)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getPaymentAccount

> GetPaymentAccountResponse getPaymentAccount(company_id, paymentAccountId, opts)

Get Payment Account

Gets the specified payment account.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.SettingsApi();
let company_id = 12345; // Number | The ID of the company.
let paymentAccountId = 1; // String | The Referred Payment Account Id.
let opts = {
  'fields': "fields_example", // String | List of comma-separated fields.
  'fieldset': "fieldset_example", // String | Name of the fieldset.
  'body': {key: null} // Object | 
};
apiInstance.getPaymentAccount(company_id, paymentAccountId, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **paymentAccountId** | **String**| The Referred Payment Account Id. | 
 **fields** | **String**| List of comma-separated fields. | [optional] 
 **fieldset** | **String**| Name of the fieldset. | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

[**GetPaymentAccountResponse**](GetPaymentAccountResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getPaymentMethod

> GetPaymentMethodResponse getPaymentMethod(company_id, paymentMethodId, opts)

Get Payment Method

Gets the specified payment method.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.SettingsApi();
let company_id = 12345; // Number | The ID of the company.
let paymentMethodId = 1; // Number | The Referred Payment Method Id.
let opts = {
  'fields': "fields_example", // String | List of comma-separated fields.
  'fieldset': "fieldset_example" // String | Name of the fieldset.
};
apiInstance.getPaymentMethod(company_id, paymentMethodId, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **paymentMethodId** | **Number**| The Referred Payment Method Id. | 
 **fields** | **String**| List of comma-separated fields. | [optional] 
 **fieldset** | **String**| Name of the fieldset. | [optional] 

### Return type

[**GetPaymentMethodResponse**](GetPaymentMethodResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyPaymentAccount

> ModifyPaymentAccountResponse modifyPaymentAccount(company_id, paymentAccountId, opts)

Modify Payment Account

Modifies the specified payment account.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.SettingsApi();
let company_id = 12345; // Number | The ID of the company.
let paymentAccountId = 1; // String | The Referred Payment Account Id.
let opts = {
  'ModifyPaymentAccountRequest': {"data":{"id":0,"name":"Conto Banca Intesa","type":"standard","iban":"string","sia":"string","cuc":"string","virtual":true}} // ModifyPaymentAccountRequest | 
};
apiInstance.modifyPaymentAccount(company_id, paymentAccountId, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **paymentAccountId** | **String**| The Referred Payment Account Id. | 
 **ModifyPaymentAccountRequest** | [**ModifyPaymentAccountRequest**](ModifyPaymentAccountRequest.md)|  | [optional] 

### Return type

[**ModifyPaymentAccountResponse**](ModifyPaymentAccountResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## modifyPaymentMethod

> ModifyPaymentMethodResponse modifyPaymentMethod(company_id, paymentMethodId, opts)

Modify Payment Method

Modifies the specified payment method.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.SettingsApi();
let company_id = 12345; // Number | The ID of the company.
let paymentMethodId = 1; // Number | The Referred Payment Method Id.
let opts = {
  'ModifyPaymentMethodRequest': {"data":{"id":386683,"name":"Bonifico bancario","is_default":true,"type":"standard","details":[{"title":"Banca","description":"Sao Paulo"}],"default_payment_account":{"id":12345,"name":"conto banca SP"}}} // ModifyPaymentMethodRequest | 
};
apiInstance.modifyPaymentMethod(company_id, paymentMethodId, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **paymentMethodId** | **Number**| The Referred Payment Method Id. | 
 **ModifyPaymentMethodRequest** | [**ModifyPaymentMethodRequest**](ModifyPaymentMethodRequest.md)|  | [optional] 

### Return type

[**ModifyPaymentMethodResponse**](ModifyPaymentMethodResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

