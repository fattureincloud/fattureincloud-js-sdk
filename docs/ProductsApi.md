# fattureInCloudSdk.ProductsApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProduct**](ProductsApi.md#createProduct) | **POST** /c/{company_id}/products | Create Product
[**deleteProduct**](ProductsApi.md#deleteProduct) | **DELETE** /c/{company_id}/products/{product_id} | Delete Product
[**getProduct**](ProductsApi.md#getProduct) | **GET** /c/{company_id}/products/{product_id} | Get Product
[**listProducts**](ProductsApi.md#listProducts) | **GET** /c/{company_id}/products | List Products
[**modifyProduct**](ProductsApi.md#modifyProduct) | **PUT** /c/{company_id}/products/{product_id} | Modify Product



## createProduct

> CreateProductResponse createProduct(company_id, opts)

Create Product

Creates a new product.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ProductsApi();
let company_id = 12345; // Number | The ID of the company.
let opts = {
  'CreateProductRequest': {"data":{"name":"Tavolo di marmo","code":"TAVOLO003","net_price":240,"gross_price":280,"use_gross_price":false,"net_cost":0,"measure":"","description":"Tavolo in marmo pregiato","category":"arredamento","in_stock":true,"default_vat":{"id":3,"value":22,"description":"Non imponibile art. 123","notes":"IVA non imponibile ai sensi dell'articolo 123, comma 2","is_disabled":false}}} // CreateProductRequest | 
};
apiInstance.createProduct(company_id, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **CreateProductRequest** | [**CreateProductRequest**](CreateProductRequest.md)|  | [optional] 

### Return type

[**CreateProductResponse**](CreateProductResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteProduct

> deleteProduct(company_id, product_id)

Delete Product

Deletes the specified product.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ProductsApi();
let company_id = 12345; // Number | The ID of the company.
let product_id = 56; // Number | The ID of the product.
apiInstance.deleteProduct(company_id, product_id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **product_id** | **Number**| The ID of the product. | 

### Return type

null (empty response body)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getProduct

> GetProductResponse getProduct(company_id, product_id, opts)

Get Product

Gets the specified product.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ProductsApi();
let company_id = 12345; // Number | The ID of the company.
let product_id = 56; // Number | The ID of the product.
let opts = {
  'fields': "fields_example", // String | List of comma-separated fields.
  'fieldset': "fieldset_example" // String | Name of the fieldset.
};
apiInstance.getProduct(company_id, product_id, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **product_id** | **Number**| The ID of the product. | 
 **fields** | **String**| List of comma-separated fields. | [optional] 
 **fieldset** | **String**| Name of the fieldset. | [optional] 

### Return type

[**GetProductResponse**](GetProductResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProducts

> ListProductsResponse listProducts(company_id, opts)

List Products

Lists the products.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ProductsApi();
let company_id = 12345; // Number | The ID of the company.
let opts = {
  'fields': "fields_example", // String | List of comma-separated fields.
  'fieldset': "fieldset_example", // String | Name of the fieldset.
  'sort': "sort_example", // String | List of comma-separated fields for result sorting (minus for desc sorting).
  'page': 1, // Number | The page to retrieve.
  'per_page': 5 // Number | The size of the page.
};
apiInstance.listProducts(company_id, opts).then((result) => {
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

[**ListProductsResponse**](ListProductsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyProduct

> ModifyProductResponse modifyProduct(company_id, product_id, opts)

Modify Product

Modifies the specified product.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ProductsApi();
let company_id = 12345; // Number | The ID of the company.
let product_id = 56; // Number | The ID of the product.
let opts = {
  'ModifyProductRequest': {"data":{"name":"Tavolo di marmo","code":"TAVOLO003","net_price":240,"gross_price":280,"use_gross_price":false,"net_cost":0,"measure":"","description":"Tavolo in marmo pregiato","category":"arredamento","in_stock":true,"default_vat":{"id":3,"value":22,"description":"Non imponibile art. 123","notes":"IVA non imponibile ai sensi dell'articolo 123, comma 2","is_disabled":false}}} // ModifyProductRequest | Modified product details.
};
apiInstance.modifyProduct(company_id, product_id, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **product_id** | **Number**| The ID of the product. | 
 **ModifyProductRequest** | [**ModifyProductRequest**](ModifyProductRequest.md)| Modified product details. | [optional] 

### Return type

[**ModifyProductResponse**](ModifyProductResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

