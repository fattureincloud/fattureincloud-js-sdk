# fattureInCloudSdk.CashbookApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCashbookEntry**](CashbookApi.md#createCashbookEntry) | **POST** /c/{company_id}/cashbook | Create Cashbook Entry
[**deleteCashbookEntry**](CashbookApi.md#deleteCashbookEntry) | **DELETE** /c/{company_id}/cashbook/{document_id} | Delete Cashbook Entry
[**getCashbookEntry**](CashbookApi.md#getCashbookEntry) | **GET** /c/{company_id}/cashbook/{document_id} | Get Cashbook Entry
[**listCashbookEntries**](CashbookApi.md#listCashbookEntries) | **GET** /c/{company_id}/cashbook | List Cashbook Entries
[**modifyCashbookEntry**](CashbookApi.md#modifyCashbookEntry) | **PUT** /c/{company_id}/cashbook/{document_id} | Modify Cashbook Entry



## createCashbookEntry

> CreateCashbookEntryResponse createCashbookEntry(company_id, opts)

Create Cashbook Entry

Creates a new cashbook entry.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.CashbookApi();
let company_id = 12345; // Number | The ID of the company.
let opts = {
  'CreateCashbookEntryRequest': {"data":{"date":"2021-08-24","amount_in":122,"payment_account_in":{"id":333},"description":"Fattura n. 201/2021","entity_name":"Rossi S.r.l.","kind":"issued_document","document":{"id":54321},"type":"in"}} // CreateCashbookEntryRequest | Cashbook entry. 
};
apiInstance.createCashbookEntry(company_id, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **CreateCashbookEntryRequest** | [**CreateCashbookEntryRequest**](CreateCashbookEntryRequest.md)| Cashbook entry.  | [optional] 

### Return type

[**CreateCashbookEntryResponse**](CreateCashbookEntryResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCashbookEntry

> deleteCashbookEntry(company_id, document_id)

Delete Cashbook Entry

Deletes the specified cashbook entry.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.CashbookApi();
let company_id = 12345; // Number | The ID of the company.
let document_id = 56; // Number | The ID of the document.
apiInstance.deleteCashbookEntry(company_id, document_id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **document_id** | **Number**| The ID of the document. | 

### Return type

null (empty response body)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCashbookEntry

> GetCashbookEntryResponse getCashbookEntry(company_id, document_id, opts)

Get Cashbook Entry

Gets the specified cashbook entry.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.CashbookApi();
let company_id = 12345; // Number | The ID of the company.
let document_id = 56; // Number | The ID of the document.
let opts = {
  'fields': "fields_example", // String | List of comma-separated fields.
  'fieldset': "fieldset_example" // String | Name of the fieldset.
};
apiInstance.getCashbookEntry(company_id, document_id, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **document_id** | **Number**| The ID of the document. | 
 **fields** | **String**| List of comma-separated fields. | [optional] 
 **fieldset** | **String**| Name of the fieldset. | [optional] 

### Return type

[**GetCashbookEntryResponse**](GetCashbookEntryResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCashbookEntries

> ListCashbookEntriesResponse listCashbookEntries(company_id, date_from, date_to, opts)

List Cashbook Entries

Lists the cashbook entries.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.CashbookApi();
let company_id = 12345; // Number | The ID of the company.
let date_from = "date_from_example"; // String | Start date.
let date_to = "date_to_example"; // String | End date.
let opts = {
  'year': 56, // Number | Filter cashbook by year.
  'type': "type_example", // String | Filter cashbook by type.
  'payment_account_id': 56 // Number | Filter by payment account.
};
apiInstance.listCashbookEntries(company_id, date_from, date_to, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **date_from** | **String**| Start date. | 
 **date_to** | **String**| End date. | 
 **year** | **Number**| Filter cashbook by year. | [optional] 
 **type** | **String**| Filter cashbook by type. | [optional] 
 **payment_account_id** | **Number**| Filter by payment account. | [optional] 

### Return type

[**ListCashbookEntriesResponse**](ListCashbookEntriesResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyCashbookEntry

> ModifyCashbookEntryResponse modifyCashbookEntry(company_id, document_id, opts)

Modify Cashbook Entry

Modifies the specified cashbook entry.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.CashbookApi();
let company_id = 12345; // Number | The ID of the company.
let document_id = 56; // Number | The ID of the document.
let opts = {
  'ModifyCashbookEntryRequest': {"data":{"date":"2021-08-24","amount_in":122,"payment_account_in":{"id":333},"description":"Fattura n. 201/2021","entity_name":"Rossi S.r.l."}} // ModifyCashbookEntryRequest | Cashbook Entry
};
apiInstance.modifyCashbookEntry(company_id, document_id, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **document_id** | **Number**| The ID of the document. | 
 **ModifyCashbookEntryRequest** | [**ModifyCashbookEntryRequest**](ModifyCashbookEntryRequest.md)| Cashbook Entry | [optional] 

### Return type

[**ModifyCashbookEntryResponse**](ModifyCashbookEntryResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

