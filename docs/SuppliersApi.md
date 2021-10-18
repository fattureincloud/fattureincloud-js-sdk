# @FattureincloudFattureincloudJsSdk.SuppliersApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSupplier**](SuppliersApi.md#createSupplier) | **POST** /c/{company_id}/entities/suppliers | Create Supplier
[**deleteSupplier**](SuppliersApi.md#deleteSupplier) | **DELETE** /c/{company_id}/entities/suppliers/{supplier_id} | Delete Supplier
[**getSupplier**](SuppliersApi.md#getSupplier) | **GET** /c/{company_id}/entities/suppliers/{supplier_id} | Get Supplier
[**listSuppliers**](SuppliersApi.md#listSuppliers) | **GET** /c/{company_id}/entities/suppliers | List Suppliers
[**modifySupplier**](SuppliersApi.md#modifySupplier) | **PUT** /c/{company_id}/entities/suppliers/{supplier_id} | Modify Supplier



## createSupplier

> CreateSupplierResponse createSupplier(companyId, opts)

Create Supplier

Creates a new supplier.

### Example

```javascript
import @FattureincloudFattureincloudJsSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = @FattureincloudFattureincloudJsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @FattureincloudFattureincloudJsSdk.SuppliersApi();
let companyId = 12345; // Number | The ID of the company.
let opts = {
  'createSupplierRequest': {"data":{"id":12345,"code":"AE86","name":"Mario Rossi S.R.L.","type":"company","first_name":"Mario","last_name":"Rossi","contact_person":"","vat_number":"111222333","tax_code":"111122233","address_street":"Corso Magellano, 46","address_postal_code":"20146","address_city":"Milano","address_province":"MI","address_extra":"","country":"Italia","email":"mario.rossi@example.com","certified_email":"mario.rossi@pec.example.com","phone":"1234567890","fax":"123456789","notes":""}} // CreateSupplierRequest | The supplier to create
};
apiInstance.createSupplier(companyId, opts, (error, data, response) => {
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
 **createSupplierRequest** | [**CreateSupplierRequest**](CreateSupplierRequest.md)| The supplier to create | [optional] 

### Return type

[**CreateSupplierResponse**](CreateSupplierResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSupplier

> deleteSupplier(companyId, supplierId)

Delete Supplier

Deletes the specified supplier.

### Example

```javascript
import @FattureincloudFattureincloudJsSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = @FattureincloudFattureincloudJsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @FattureincloudFattureincloudJsSdk.SuppliersApi();
let companyId = 12345; // Number | The ID of the company.
let supplierId = 56; // Number | The ID of the supplier.
apiInstance.deleteSupplier(companyId, supplierId, (error, data, response) => {
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
 **supplierId** | **Number**| The ID of the supplier. | 

### Return type

null (empty response body)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getSupplier

> GetSupplierResponse getSupplier(companyId, supplierId, opts)

Get Supplier

Gets the specified supplier.

### Example

```javascript
import @FattureincloudFattureincloudJsSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = @FattureincloudFattureincloudJsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @FattureincloudFattureincloudJsSdk.SuppliersApi();
let companyId = 12345; // Number | The ID of the company.
let supplierId = 56; // Number | The ID of the supplier.
let opts = {
  'fields': "fields_example", // String | List of comma-separated fields.
  'fieldset': "fieldset_example" // String | Name of the fieldset.
};
apiInstance.getSupplier(companyId, supplierId, opts, (error, data, response) => {
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
 **supplierId** | **Number**| The ID of the supplier. | 
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

> ListSuppliersResponse listSuppliers(companyId, opts)

List Suppliers

Lists the suppliers.

### Example

```javascript
import @FattureincloudFattureincloudJsSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = @FattureincloudFattureincloudJsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @FattureincloudFattureincloudJsSdk.SuppliersApi();
let companyId = 12345; // Number | The ID of the company.
let opts = {
  'fields': "fields_example", // String | List of comma-separated fields.
  'fieldset': "fieldset_example", // String | Name of the fieldset.
  'sort': "sort_example", // String | List of comma-separated fields for result sorting (minus for desc sorting).
  'page': 1, // Number | The page to retrieve.
  'perPage': 5 // Number | The size of the page.
};
apiInstance.listSuppliers(companyId, opts, (error, data, response) => {
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
 **fields** | **String**| List of comma-separated fields. | [optional] 
 **fieldset** | **String**| Name of the fieldset. | [optional] 
 **sort** | **String**| List of comma-separated fields for result sorting (minus for desc sorting). | [optional] 
 **page** | **Number**| The page to retrieve. | [optional] [default to 1]
 **perPage** | **Number**| The size of the page. | [optional] [default to 5]

### Return type

[**ListSuppliersResponse**](ListSuppliersResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifySupplier

> ModifySupplierResponse modifySupplier(companyId, supplierId, opts)

Modify Supplier

Modifies the specified supplier.

### Example

```javascript
import @FattureincloudFattureincloudJsSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = @FattureincloudFattureincloudJsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @FattureincloudFattureincloudJsSdk.SuppliersApi();
let companyId = 12345; // Number | The ID of the company.
let supplierId = 56; // Number | The ID of the supplier.
let opts = {
  'modifySupplierRequest': {"data":{"id":12345,"code":"AE86","name":"Mario Rossi S.R.L.","type":"company","first_name":"Mario","last_name":"Rossi","contact_person":"","vat_number":"111222333","tax_code":"111122233","address_street":"Corso Magellano, 46","address_postal_code":"20146","address_city":"Milano","address_province":"MI","address_extra":"","country":"Italia","email":"mario.rossi@example.com","certified_email":"mario.rossi@pec.example.com","phone":"1234567890","fax":"123456789","notes":""}} // ModifySupplierRequest | The modified Supplier. First level parameters are managed in delta mode.
};
apiInstance.modifySupplier(companyId, supplierId, opts, (error, data, response) => {
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
 **supplierId** | **Number**| The ID of the supplier. | 
 **modifySupplierRequest** | [**ModifySupplierRequest**](ModifySupplierRequest.md)| The modified Supplier. First level parameters are managed in delta mode. | [optional] 

### Return type

[**ModifySupplierResponse**](ModifySupplierResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

