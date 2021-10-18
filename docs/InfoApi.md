# @FattureincloudFattureincloudJsSdk.InfoApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listArchiveCategories**](InfoApi.md#listArchiveCategories) | **GET** /c/{company_id}/info/archive_categories | List Archive Categories
[**listCities**](InfoApi.md#listCities) | **GET** /info/cities | List Cities
[**listCostCenters**](InfoApi.md#listCostCenters) | **GET** /c/{company_id}/info/cost_centers | List Cost Centers
[**listCountries**](InfoApi.md#listCountries) | **GET** /info/countries | List Countries
[**listCurrencies**](InfoApi.md#listCurrencies) | **GET** /info/currencies | List Currencies
[**listDeliveryNotesDefaultCausals**](InfoApi.md#listDeliveryNotesDefaultCausals) | **GET** /info/dn_causals | List Delivery Notes Default Causals
[**listLanguages**](InfoApi.md#listLanguages) | **GET** /info/languages | List Languages
[**listPaymentAccounts**](InfoApi.md#listPaymentAccounts) | **GET** /c/{company_id}/info/payment_accounts | List Payment Accounts
[**listPaymentMethods**](InfoApi.md#listPaymentMethods) | **GET** /c/{company_id}/info/payment_methods | List Payment Methods
[**listProductCategories**](InfoApi.md#listProductCategories) | **GET** /c/{company_id}/info/product_categories | List Product Categories
[**listReceivedDocumentCategories**](InfoApi.md#listReceivedDocumentCategories) | **GET** /c/{company_id}/info/received_document_categories | List Received Document Categories
[**listRevenueCenters**](InfoApi.md#listRevenueCenters) | **GET** /c/{company_id}/info/revenue_centers | List Revenue Centers
[**listTemplates**](InfoApi.md#listTemplates) | **GET** /info/templates | List Templates
[**listUnitsOfMeasure**](InfoApi.md#listUnitsOfMeasure) | **GET** /info/measures | List Units of Measure
[**listVatTypes**](InfoApi.md#listVatTypes) | **GET** /c/{company_id}/info/vat_types | List Vat Types



## listArchiveCategories

> ListArchiveCategoriesResponse listArchiveCategories(companyId)

List Archive Categories

Lists the archive categories.

### Example

```javascript
import @FattureincloudFattureincloudJsSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = @FattureincloudFattureincloudJsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @FattureincloudFattureincloudJsSdk.InfoApi();
let companyId = 12345; // Number | The ID of the company.
apiInstance.listArchiveCategories(companyId, (error, data, response) => {
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

### Return type

[**ListArchiveCategoriesResponse**](ListArchiveCategoriesResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCities

> ListCitiesResponse listCities(opts)

List Cities

Lists the Italian cities.

### Example

```javascript
import @FattureincloudFattureincloudJsSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = @FattureincloudFattureincloudJsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @FattureincloudFattureincloudJsSdk.InfoApi();
let opts = {
  'postalCode': "postalCode_example", // String | Postal code for filtering.
  'city': "city_example" // String | City for filtering (ignored if postal_code is passed).
};
apiInstance.listCities(opts, (error, data, response) => {
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
 **postalCode** | **String**| Postal code for filtering. | [optional] 
 **city** | **String**| City for filtering (ignored if postal_code is passed). | [optional] 

### Return type

[**ListCitiesResponse**](ListCitiesResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCostCenters

> ListCostCentersResponse listCostCenters(companyId)

List Cost Centers

Lists the cost centers.

### Example

```javascript
import @FattureincloudFattureincloudJsSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = @FattureincloudFattureincloudJsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @FattureincloudFattureincloudJsSdk.InfoApi();
let companyId = 12345; // Number | The ID of the company.
apiInstance.listCostCenters(companyId, (error, data, response) => {
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

### Return type

[**ListCostCentersResponse**](ListCostCentersResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCountries

> ListCountriesResponse listCountries()

List Countries

Lists the supported countries.

### Example

```javascript
import @FattureincloudFattureincloudJsSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = @FattureincloudFattureincloudJsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @FattureincloudFattureincloudJsSdk.InfoApi();
apiInstance.listCountries((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListCountriesResponse**](ListCountriesResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCurrencies

> ListCurrenciesResponse listCurrencies()

List Currencies

Lists the supported currencies.

### Example

```javascript
import @FattureincloudFattureincloudJsSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = @FattureincloudFattureincloudJsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @FattureincloudFattureincloudJsSdk.InfoApi();
apiInstance.listCurrencies((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListCurrenciesResponse**](ListCurrenciesResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listDeliveryNotesDefaultCausals

> ListDeliveryNotesDefaultCausalsResponse listDeliveryNotesDefaultCausals()

List Delivery Notes Default Causals

Lists the delivery note default causals.

### Example

```javascript
import @FattureincloudFattureincloudJsSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = @FattureincloudFattureincloudJsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @FattureincloudFattureincloudJsSdk.InfoApi();
apiInstance.listDeliveryNotesDefaultCausals((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListDeliveryNotesDefaultCausalsResponse**](ListDeliveryNotesDefaultCausalsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLanguages

> ListLanguagesResponse listLanguages()

List Languages

Lists the supported languages.

### Example

```javascript
import @FattureincloudFattureincloudJsSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = @FattureincloudFattureincloudJsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @FattureincloudFattureincloudJsSdk.InfoApi();
apiInstance.listLanguages((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListLanguagesResponse**](ListLanguagesResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPaymentAccounts

> ListPaymentAccountsResponse listPaymentAccounts(companyId, opts)

List Payment Accounts

Lists the available payment accounts.

### Example

```javascript
import @FattureincloudFattureincloudJsSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = @FattureincloudFattureincloudJsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @FattureincloudFattureincloudJsSdk.InfoApi();
let companyId = 12345; // Number | The ID of the company.
let opts = {
  'fields': "fields_example", // String | List of comma-separated fields.
  'fieldset': "fieldset_example", // String | Name of the fieldset.
  'sort': "sort_example" // String | List of comma-separated fields for result sorting (minus for desc sorting).
};
apiInstance.listPaymentAccounts(companyId, opts, (error, data, response) => {
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

### Return type

[**ListPaymentAccountsResponse**](ListPaymentAccountsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPaymentMethods

> ListPaymentMethodsResponse listPaymentMethods(companyId, opts)

List Payment Methods

Lists the available payment methods.

### Example

```javascript
import @FattureincloudFattureincloudJsSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = @FattureincloudFattureincloudJsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @FattureincloudFattureincloudJsSdk.InfoApi();
let companyId = 12345; // Number | The ID of the company.
let opts = {
  'fields': "fields_example", // String | List of comma-separated fields.
  'fieldset': "fieldset_example", // String | Name of the fieldset.
  'sort': "sort_example" // String | List of comma-separated fields for result sorting (minus for desc sorting).
};
apiInstance.listPaymentMethods(companyId, opts, (error, data, response) => {
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

### Return type

[**ListPaymentMethodsResponse**](ListPaymentMethodsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProductCategories

> ListProductCategoriesResponse listProductCategories(companyId, context)

List Product Categories

Lists the product categories.

### Example

```javascript
import @FattureincloudFattureincloudJsSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = @FattureincloudFattureincloudJsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @FattureincloudFattureincloudJsSdk.InfoApi();
let companyId = 12345; // Number | The ID of the company.
let context = "context_example"; // String | 
apiInstance.listProductCategories(companyId, context, (error, data, response) => {
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
 **context** | **String**|  | 

### Return type

[**ListProductCategoriesResponse**](ListProductCategoriesResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listReceivedDocumentCategories

> ListReceivedDocumentCategoriesResponse listReceivedDocumentCategories(companyId)

List Received Document Categories

Lists the received document categories.

### Example

```javascript
import @FattureincloudFattureincloudJsSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = @FattureincloudFattureincloudJsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @FattureincloudFattureincloudJsSdk.InfoApi();
let companyId = 12345; // Number | The ID of the company.
apiInstance.listReceivedDocumentCategories(companyId, (error, data, response) => {
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

### Return type

[**ListReceivedDocumentCategoriesResponse**](ListReceivedDocumentCategoriesResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listRevenueCenters

> ListRevenueCentersResponse listRevenueCenters(companyId)

List Revenue Centers

Lists the revenue centers.

### Example

```javascript
import @FattureincloudFattureincloudJsSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = @FattureincloudFattureincloudJsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @FattureincloudFattureincloudJsSdk.InfoApi();
let companyId = 12345; // Number | The ID of the company.
apiInstance.listRevenueCenters(companyId, (error, data, response) => {
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

### Return type

[**ListRevenueCentersResponse**](ListRevenueCentersResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTemplates

> ListTemplatesResponse listTemplates(opts)

List Templates

Lists the available templates.

### Example

```javascript
import @FattureincloudFattureincloudJsSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = @FattureincloudFattureincloudJsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @FattureincloudFattureincloudJsSdk.InfoApi();
let opts = {
  'type': "'all'", // String | Type of the templates.
  'byType': false // Boolean | [Only if type=all] If true, splits the list in objects, grouping templates by type.
};
apiInstance.listTemplates(opts, (error, data, response) => {
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
 **type** | **String**| Type of the templates. | [optional] [default to &#39;all&#39;]
 **byType** | **Boolean**| [Only if type&#x3D;all] If true, splits the list in objects, grouping templates by type. | [optional] [default to false]

### Return type

[**ListTemplatesResponse**](ListTemplatesResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listUnitsOfMeasure

> ListUnitsOfMeasureResponse listUnitsOfMeasure()

List Units of Measure

Lists the units of measure.

### Example

```javascript
import @FattureincloudFattureincloudJsSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = @FattureincloudFattureincloudJsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @FattureincloudFattureincloudJsSdk.InfoApi();
apiInstance.listUnitsOfMeasure((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListUnitsOfMeasureResponse**](ListUnitsOfMeasureResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listVatTypes

> ListVatTypesResponse listVatTypes(companyId, opts)

List Vat Types

Lists the available vat types.

### Example

```javascript
import @FattureincloudFattureincloudJsSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = @FattureincloudFattureincloudJsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @FattureincloudFattureincloudJsSdk.InfoApi();
let companyId = 12345; // Number | The ID of the company.
let opts = {
  'fieldset': "fieldset_example" // String | Name of the fieldset.
};
apiInstance.listVatTypes(companyId, opts, (error, data, response) => {
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
 **fieldset** | **String**| Name of the fieldset. | [optional] 

### Return type

[**ListVatTypesResponse**](ListVatTypesResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

