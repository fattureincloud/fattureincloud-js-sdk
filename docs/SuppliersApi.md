# fattureInCloudSdk.SuppliersApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSupplier**](SuppliersApi.md#createSupplier) | **POST** /c/{company_id}/entities/suppliers | Create Supplier
[**deleteSupplier**](SuppliersApi.md#deleteSupplier) | **DELETE** /c/{company_id}/entities/suppliers/{supplier_id} | Delete Supplier
[**getSupplier**](SuppliersApi.md#getSupplier) | **GET** /c/{company_id}/entities/suppliers/{supplier_id} | Get Supplier
[**listSuppliers**](SuppliersApi.md#listSuppliers) | **GET** /c/{company_id}/entities/suppliers | List Suppliers
[**modifySupplier**](SuppliersApi.md#modifySupplier) | **PUT** /c/{company_id}/entities/suppliers/{supplier_id} | Modify Supplier



## createSupplier

> CreateSupplierResponse createSupplier(company_id, opts)

Create Supplier

Creates a new supplier.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.SuppliersApi();
let company_id = 12345; // Number | The ID of the company.
let opts = {
  'CreateSupplierRequest': {"data":{"id":12345,"code":"AE86","name":"Mario Rossi S.R.L.","type":"company","first_name":"Mario","last_name":"Rossi","contact_person":"","vat_number":"111222333","tax_code":"111122233","address_street":"Corso Magellano, 46","address_postal_code":"20146","address_city":"Milano","address_province":"MI","address_extra":"","country":"Italia","email":"mario.rossi@example.com","certified_email":"mario.rossi@pec.example.com","phone":"1234567890","fax":"123456789","notes":""}} // CreateSupplierRequest | The supplier to create
};
apiInstance.createSupplier(company_id, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **CreateSupplierRequest** | [**CreateSupplierRequest**](CreateSupplierRequest.md)| The supplier to create | [optional] 

### Return type

[**CreateSupplierResponse**](CreateSupplierResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSupplier

> deleteSupplier(company_id, supplier_id)

Delete Supplier

Deletes the specified supplier.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.SuppliersApi();
let company_id = 12345; // Number | The ID of the company.
let supplier_id = 56; // Number | The ID of the supplier.
apiInstance.deleteSupplier(company_id, supplier_id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **supplier_id** | **Number**| The ID of the supplier. | 

### Return type

null (empty response body)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getSupplier

> GetSupplierResponse getSupplier(company_id, supplier_id, opts)

Get Supplier

Gets the specified supplier.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.SuppliersApi();
let company_id = 12345; // Number | The ID of the company.
let supplier_id = 56; // Number | The ID of the supplier.
let opts = {
  'fields': "fields_example", // String | List of comma-separated fields.
  'fieldset': "fieldset_example" // String | Name of the fieldset.
};
apiInstance.getSupplier(company_id, supplier_id, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **supplier_id** | **Number**| The ID of the supplier. | 
 **fields** | **String**| List of comma-separated fields. | [optional] 
 **fieldset** | **String**| Name of the fieldset. | [optional] 

### Return type

[**GetSupplierResponse**](GetSupplierResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSuppliers

> ListSuppliersResponse listSuppliers(company_id, opts)

List Suppliers

Lists the suppliers.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.SuppliersApi();
let company_id = 12345; // Number | The ID of the company.
let opts = {
  'fields': "fields_example", // String | List of comma-separated fields.
  'fieldset': "fieldset_example", // String | Name of the fieldset.
  'sort': "sort_example", // String | List of comma-separated fields for result sorting (minus for desc sorting).
  'page': 1, // Number | The page to retrieve.
  'per_page': 5 // Number | The size of the page.
};
apiInstance.listSuppliers(company_id, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **fields** | **String**| List of comma-separated fields. | [optional] 
 **fieldset** | **String**| Name of the fieldset. | [optional] 
 **sort** | **String**| List of comma-separated fields for result sorting (minus for desc sorting). | [optional] 
 **page** | **Number**| The page to retrieve. | [optional] [default to 1]
 **per_page** | **Number**| The size of the page. | [optional] [default to 5]

### Return type

[**ListSuppliersResponse**](ListSuppliersResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifySupplier

> ModifySupplierResponse modifySupplier(company_id, supplier_id, opts)

Modify Supplier

Modifies the specified supplier.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.SuppliersApi();
let company_id = 12345; // Number | The ID of the company.
let supplier_id = 56; // Number | The ID of the supplier.
let opts = {
  'ModifySupplierRequest': {"data":{"id":12345,"code":"AE86","name":"Mario Rossi S.R.L.","type":"company","first_name":"Mario","last_name":"Rossi","contact_person":"","vat_number":"111222333","tax_code":"111122233","address_street":"Corso Magellano, 46","address_postal_code":"20146","address_city":"Milano","address_province":"MI","address_extra":"","country":"Italia","email":"mario.rossi@example.com","certified_email":"mario.rossi@pec.example.com","phone":"1234567890","fax":"123456789","notes":""}} // ModifySupplierRequest | The modified Supplier. First level parameters are managed in delta mode.
};
apiInstance.modifySupplier(company_id, supplier_id, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **supplier_id** | **Number**| The ID of the supplier. | 
 **ModifySupplierRequest** | [**ModifySupplierRequest**](ModifySupplierRequest.md)| The modified Supplier. First level parameters are managed in delta mode. | [optional] 

### Return type

[**ModifySupplierResponse**](ModifySupplierResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

