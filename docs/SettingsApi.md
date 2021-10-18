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

> CreatePaymentAccountResponse createPaymentAccount(companyId, opts)

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
let companyId = 12345; // Number | The ID of the company.
let opts = {
  'createPaymentAccountRequest': {"data":{"id":12345,"name":"Indesa","type":"bank","iban":"IT17Q0051343200000003497636","sia":"T1234","virtual":false}} // CreatePaymentAccountRequest | 
};
apiInstance.createPaymentAccount(companyId, opts, (error, data, response) => {
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
 **companyId** | **Number**| The ID of the company. | 
 **createPaymentAccountRequest** | [**CreatePaymentAccountRequest**](CreatePaymentAccountRequest.md)|  | [optional] 

### Return type

[**CreatePaymentAccountResponse**](CreatePaymentAccountResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPaymentMethod

> CreatePaymentMethodResponse createPaymentMethod(companyId, opts)

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
let companyId = 12345; // Number | The ID of the company.
let opts = {
  'createPaymentMethodRequest': {"data":{"id":386683,"name":"Bonifico bancario","is_default":true,"type":"standard","details":[{"title":"Banca","description":"Sao Paulo"}],"default_payment_account":{"id":12345,"name":"conto banca SP"}}} // CreatePaymentMethodRequest | 
};
apiInstance.createPaymentMethod(companyId, opts, (error, data, response) => {
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
 **companyId** | **Number**| The ID of the company. | 
 **createPaymentMethodRequest** | [**CreatePaymentMethodRequest**](CreatePaymentMethodRequest.md)|  | [optional] 

### Return type

[**CreatePaymentMethodResponse**](CreatePaymentMethodResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePaymentAccount

> deletePaymentAccount(companyId, paymentAccountId)

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
let companyId = 12345; // Number | The ID of the company.
let paymentAccountId = 1; // String | The Referred Payment Account Id.
apiInstance.deletePaymentAccount(companyId, paymentAccountId, (error, data, response) => {
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
 **companyId** | **Number**| The ID of the company. | 
 **paymentAccountId** | **String**| The Referred Payment Account Id. | 

### Return type

null (empty response body)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deletePaymentMethod

> deletePaymentMethod(companyId, paymentMethodId)

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
let companyId = 12345; // Number | The ID of the company.
let paymentMethodId = 1; // Number | The Referred Payment Method Id.
apiInstance.deletePaymentMethod(companyId, paymentMethodId, (error, data, response) => {
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
 **companyId** | **Number**| The ID of the company. | 
 **paymentMethodId** | **Number**| The Referred Payment Method Id. | 

### Return type

null (empty response body)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getPaymentAccount

> GetPaymentAccountResponse getPaymentAccount(companyId, paymentAccountId, opts)

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
let companyId = 12345; // Number | The ID of the company.
let paymentAccountId = 1; // String | The Referred Payment Account Id.
let opts = {
  'fields': "fields_example", // String | List of comma-separated fields.
  'fieldset': "fieldset_example", // String | Name of the fieldset.
  'body': null // Object | 
};
apiInstance.getPaymentAccount(companyId, paymentAccountId, opts, (error, data, response) => {
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
 **companyId** | **Number**| The ID of the company. | 
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

> GetPaymentMethodResponse getPaymentMethod(companyId, paymentMethodId, opts)

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
let companyId = 12345; // Number | The ID of the company.
let paymentMethodId = 1; // Number | The Referred Payment Method Id.
let opts = {
  'fields': "fields_example", // String | List of comma-separated fields.
  'fieldset': "fieldset_example" // String | Name of the fieldset.
};
apiInstance.getPaymentMethod(companyId, paymentMethodId, opts, (error, data, response) => {
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
 **companyId** | **Number**| The ID of the company. | 
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

> ModifyPaymentAccountResponse modifyPaymentAccount(companyId, paymentAccountId, opts)

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
let companyId = 12345; // Number | The ID of the company.
let paymentAccountId = 1; // String | The Referred Payment Account Id.
let opts = {
  'modifyPaymentAccountRequest': {"data":{"id":0,"name":"Conto Banca Intesa","type":"standard","iban":"string","sia":"string","cuc":"string","virtual":true}} // ModifyPaymentAccountRequest | 
};
apiInstance.modifyPaymentAccount(companyId, paymentAccountId, opts, (error, data, response) => {
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
 **companyId** | **Number**| The ID of the company. | 
 **paymentAccountId** | **String**| The Referred Payment Account Id. | 
 **modifyPaymentAccountRequest** | [**ModifyPaymentAccountRequest**](ModifyPaymentAccountRequest.md)|  | [optional] 

### Return type

[**ModifyPaymentAccountResponse**](ModifyPaymentAccountResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## modifyPaymentMethod

> ModifyPaymentMethodResponse modifyPaymentMethod(companyId, paymentMethodId, opts)

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
let companyId = 12345; // Number | The ID of the company.
let paymentMethodId = 1; // Number | The Referred Payment Method Id.
let opts = {
  'modifyPaymentMethodRequest': {"data":{"id":386683,"name":"Bonifico bancario","is_default":true,"type":"standard","details":[{"title":"Banca","description":"Sao Paulo"}],"default_payment_account":{"id":12345,"name":"conto banca SP"}}} // ModifyPaymentMethodRequest | 
};
apiInstance.modifyPaymentMethod(companyId, paymentMethodId, opts, (error, data, response) => {
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
 **companyId** | **Number**| The ID of the company. | 
 **paymentMethodId** | **Number**| The Referred Payment Method Id. | 
 **modifyPaymentMethodRequest** | [**ModifyPaymentMethodRequest**](ModifyPaymentMethodRequest.md)|  | [optional] 

### Return type

[**ModifyPaymentMethodResponse**](ModifyPaymentMethodResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

