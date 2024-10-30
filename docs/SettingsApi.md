# fattureInCloudSdk.SettingsApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPaymentAccount**](SettingsApi.md#createPaymentAccount) | **POST** /c/{company_id}/settings/payment_accounts | Create Payment Account
[**createPaymentMethod**](SettingsApi.md#createPaymentMethod) | **POST** /c/{company_id}/settings/payment_methods | Create Payment Method
[**createVatType**](SettingsApi.md#createVatType) | **POST** /c/{company_id}/settings/vat_types | Create Vat Type
[**deletePaymentAccount**](SettingsApi.md#deletePaymentAccount) | **DELETE** /c/{company_id}/settings/payment_accounts/{payment_account_id} | Delete Payment Account
[**deletePaymentMethod**](SettingsApi.md#deletePaymentMethod) | **DELETE** /c/{company_id}/settings/payment_methods/{payment_method_id} | Delete Payment Method
[**deleteVatType**](SettingsApi.md#deleteVatType) | **DELETE** /c/{company_id}/settings/vat_types/{vat_type_id} | Delete Vat Type
[**getPaymentAccount**](SettingsApi.md#getPaymentAccount) | **GET** /c/{company_id}/settings/payment_accounts/{payment_account_id} | Get Payment Account
[**getPaymentMethod**](SettingsApi.md#getPaymentMethod) | **GET** /c/{company_id}/settings/payment_methods/{payment_method_id} | Get Payment Method
[**getTaxProfile**](SettingsApi.md#getTaxProfile) | **GET** /c/{company_id}/settings/tax_profile | Get Tax Profile
[**getVatType**](SettingsApi.md#getVatType) | **GET** /c/{company_id}/settings/vat_types/{vat_type_id} | Get Vat Type
[**modifyPaymentAccount**](SettingsApi.md#modifyPaymentAccount) | **PUT** /c/{company_id}/settings/payment_accounts/{payment_account_id} | Modify Payment Account
[**modifyPaymentMethod**](SettingsApi.md#modifyPaymentMethod) | **PUT** /c/{company_id}/settings/payment_methods/{payment_method_id} | Modify Payment Method
[**modifyVatType**](SettingsApi.md#modifyVatType) | **PUT** /c/{company_id}/settings/vat_types/{vat_type_id} | Modify Vat Type



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
apiInstance.createPaymentAccount(companyId, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
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
apiInstance.createPaymentMethod(companyId, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
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


## createVatType

> CreateVatTypeResponse createVatType(companyId, opts)

Create Vat Type

Creates a vat type.

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
  'createVatTypeRequest': {"data":{"id":0,"value":22,"description":"Non imponibile art. 123","notes":"IVA non imponibile ai sensi dell'articolo 123, comma 2","e_invoice":true,"ei_type":2,"ei_description":"string","editable":true,"is_disabled":true}} // CreateVatTypeRequest | 
};
apiInstance.createVatType(companyId, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **createVatTypeRequest** | [**CreateVatTypeRequest**](CreateVatTypeRequest.md)|  | [optional] 

### Return type

[**CreateVatTypeResponse**](CreateVatTypeResponse.md)

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
let paymentAccountId = 56; // Number | The Referred Payment Account Id.
apiInstance.deletePaymentAccount(companyId, paymentAccountId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **paymentAccountId** | **Number**| The Referred Payment Account Id. | 

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
let paymentMethodId = 56; // Number | The Referred Payment Method Id.
apiInstance.deletePaymentMethod(companyId, paymentMethodId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
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


## deleteVatType

> deleteVatType(companyId, vatTypeId)

Delete Vat Type

Deletes the specified vat type.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.SettingsApi();
let companyId = 12345; // Number | The ID of the company.
let vatTypeId = 56; // Number | The Referred Vat Type Id.
apiInstance.deleteVatType(companyId, vatTypeId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **vatTypeId** | **Number**| The Referred Vat Type Id. | 

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
let paymentAccountId = 56; // Number | The Referred Payment Account Id.
let opts = {
  'fields': "fields_example", // String | List of comma-separated fields.
  'fieldset': "fieldset_example" // String | Name of the fieldset.
};
apiInstance.getPaymentAccount(companyId, paymentAccountId, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **paymentAccountId** | **Number**| The Referred Payment Account Id. | 
 **fields** | **String**| List of comma-separated fields. | [optional] 
 **fieldset** | **String**| Name of the fieldset. | [optional] 

### Return type

[**GetPaymentAccountResponse**](GetPaymentAccountResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
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
let paymentMethodId = 56; // Number | The Referred Payment Method Id.
let opts = {
  'fields': "fields_example", // String | List of comma-separated fields.
  'fieldset': "fieldset_example" // String | Name of the fieldset.
};
apiInstance.getPaymentMethod(companyId, paymentMethodId, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
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


## getTaxProfile

> GetTaxProfileResponse getTaxProfile(companyId)

Get Tax Profile

Gets the Tax Profile

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.SettingsApi();
let companyId = 12345; // Number | The ID of the company.
apiInstance.getTaxProfile(companyId).then((result) => {
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

[**GetTaxProfileResponse**](GetTaxProfileResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVatType

> GetVatTypeResponse getVatType(companyId, vatTypeId)

Get Vat Type

Gets the specified vat type.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.SettingsApi();
let companyId = 12345; // Number | The ID of the company.
let vatTypeId = 56; // Number | The Referred Vat Type Id.
apiInstance.getVatType(companyId, vatTypeId).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **vatTypeId** | **Number**| The Referred Vat Type Id. | 

### Return type

[**GetVatTypeResponse**](GetVatTypeResponse.md)

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
let paymentAccountId = 56; // Number | The Referred Payment Account Id.
let opts = {
  'modifyPaymentAccountRequest': {"data":{"id":0,"name":"Conto Banca Intesa","type":"standard","iban":"string","sia":"string","cuc":"string","virtual":true}} // ModifyPaymentAccountRequest | 
};
apiInstance.modifyPaymentAccount(companyId, paymentAccountId, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **paymentAccountId** | **Number**| The Referred Payment Account Id. | 
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
let paymentMethodId = 56; // Number | The Referred Payment Method Id.
let opts = {
  'modifyPaymentMethodRequest': {"data":{"id":386683,"name":"Bonifico bancario","is_default":true,"type":"standard","details":[{"title":"Banca","description":"Sao Paulo"}],"default_payment_account":{"id":12345,"name":"conto banca SP"}}} // ModifyPaymentMethodRequest | 
};
apiInstance.modifyPaymentMethod(companyId, paymentMethodId, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
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


## modifyVatType

> ModifyVatTypeResponse modifyVatType(companyId, vatTypeId, opts)

Modify Vat Type

Modifies the specified vat type.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.SettingsApi();
let companyId = 12345; // Number | The ID of the company.
let vatTypeId = 56; // Number | The Referred Vat Type Id.
let opts = {
  'modifyVatTypeRequest': {"data":{"id":0,"value":22,"description":"Non imponibile art. 123","notes":"IVA non imponibile ai sensi dell'articolo 123, comma 2","e_invoice":true,"ei_type":2,"ei_description":"string","editable":true,"is_disabled":true}} // ModifyVatTypeRequest | 
};
apiInstance.modifyVatType(companyId, vatTypeId, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **vatTypeId** | **Number**| The Referred Vat Type Id. | 
 **modifyVatTypeRequest** | [**ModifyVatTypeRequest**](ModifyVatTypeRequest.md)|  | [optional] 

### Return type

[**ModifyVatTypeResponse**](ModifyVatTypeResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

