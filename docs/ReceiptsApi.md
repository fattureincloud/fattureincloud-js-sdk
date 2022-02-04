# fattureInCloudSdk.ReceiptsApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createReceipt**](ReceiptsApi.md#createReceipt) | **POST** /c/{company_id}/receipts | Create Receipt
[**deleteReceipt**](ReceiptsApi.md#deleteReceipt) | **DELETE** /c/{company_id}/receipts/{document_id} | Delete Receipt
[**getReceipt**](ReceiptsApi.md#getReceipt) | **GET** /c/{company_id}/receipts/{document_id} | Get Receipt
[**getReceiptPreCreateInfo**](ReceiptsApi.md#getReceiptPreCreateInfo) | **GET** /c/{company_id}/receipts/info | Get Receipt Pre-Create Info
[**getReceiptsMonthlyTotals**](ReceiptsApi.md#getReceiptsMonthlyTotals) | **GET** /c/{company_id}/receipts/monthly_totals | Get Receipts Monthly Totals
[**listReceipts**](ReceiptsApi.md#listReceipts) | **GET** /c/{company_id}/receipts | List Receipts
[**modifyReceipt**](ReceiptsApi.md#modifyReceipt) | **PUT** /c/{company_id}/receipts/{document_id} | Modify Receipt



## createReceipt

> CreateReceiptResponse createReceipt(companyId, opts)

Create Receipt

Creates a new receipt.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ReceiptsApi();
let companyId = 12345; // Number | The ID of the company.
let opts = {
  'createReceiptRequest': {"data":{"date":"2021-08-19","number":6,"numeration":"REC006","amount_net":8.2,"amount_vat":1.8,"type":"sales_receipt","description":"cassa 1","rc_center":"","payment_account":{"id":555,"name":"contanti"},"items_list":[{"id":888,"amount_net":8.2,"amount_vat":1.8,"category":"altro","vat":{"id":0,"value":22,"description":"iva"}}]}} // CreateReceiptRequest | The Receipt to create.
};
apiInstance.createReceipt(companyId, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **createReceiptRequest** | [**CreateReceiptRequest**](CreateReceiptRequest.md)| The Receipt to create. | [optional] 

### Return type

[**CreateReceiptResponse**](CreateReceiptResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteReceipt

> deleteReceipt(companyId, documentId)

Delete Receipt

Deletes the specified receipt.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ReceiptsApi();
let companyId = 12345; // Number | The ID of the company.
let documentId = 56; // Number | The ID of the document.
apiInstance.deleteReceipt(companyId, documentId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **documentId** | **Number**| The ID of the document. | 

### Return type

null (empty response body)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getReceipt

> GetReceiptResponse getReceipt(companyId, documentId, opts)

Get Receipt

Gets the specified receipt.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ReceiptsApi();
let companyId = 12345; // Number | The ID of the company.
let documentId = 56; // Number | The ID of the document.
let opts = {
  'fields': "fields_example", // String | List of comma-separated fields.
  'fieldset': "fieldset_example" // String | Name of the fieldset.
};
apiInstance.getReceipt(companyId, documentId, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **documentId** | **Number**| The ID of the document. | 
 **fields** | **String**| List of comma-separated fields. | [optional] 
 **fieldset** | **String**| Name of the fieldset. | [optional] 

### Return type

[**GetReceiptResponse**](GetReceiptResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReceiptPreCreateInfo

> GetReceiptPreCreateInfoResponse getReceiptPreCreateInfo(companyId)

Get Receipt Pre-Create Info

Retrieves the information useful while creating a new receipt.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ReceiptsApi();
let companyId = 12345; // Number | The ID of the company.
apiInstance.getReceiptPreCreateInfo(companyId).then((result) => {
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

[**GetReceiptPreCreateInfoResponse**](GetReceiptPreCreateInfoResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReceiptsMonthlyTotals

> GetReceiptsMonthlyTotalsResponse getReceiptsMonthlyTotals(companyId, type, year)

Get Receipts Monthly Totals

Returns the monthly totals by year and receipt type.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ReceiptsApi();
let companyId = 12345; // Number | The ID of the company.
let type = "type_example"; // String | Receipt Type
let year = "year_example"; // String | Year for which you want monthly totals
apiInstance.getReceiptsMonthlyTotals(companyId, type, year).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **type** | **String**| Receipt Type | 
 **year** | **String**| Year for which you want monthly totals | 

### Return type

[**GetReceiptsMonthlyTotalsResponse**](GetReceiptsMonthlyTotalsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listReceipts

> ListReceiptsResponse listReceipts(companyId, opts)

List Receipts

Lists the receipts.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ReceiptsApi();
let companyId = 12345; // Number | The ID of the company.
let opts = {
  'fields': "fields_example", // String | List of comma-separated fields.
  'fieldset': "fieldset_example", // String | Name of the fieldset.
  'page': 1, // Number | The page to retrieve.
  'perPage': 5, // Number | The size of the page.
  'sort': "sort_example" // String | List of comma-separated fields for result sorting (minus for desc sorting).
};
apiInstance.listReceipts(companyId, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **fields** | **String**| List of comma-separated fields. | [optional] 
 **fieldset** | **String**| Name of the fieldset. | [optional] 
 **page** | **Number**| The page to retrieve. | [optional] [default to 1]
 **perPage** | **Number**| The size of the page. | [optional] [default to 5]
 **sort** | **String**| List of comma-separated fields for result sorting (minus for desc sorting). | [optional] 

### Return type

[**ListReceiptsResponse**](ListReceiptsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyReceipt

> ModifyReceiptResponse modifyReceipt(companyId, documentId, opts)

Modify Receipt

Modifies the specified receipt.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ReceiptsApi();
let companyId = 12345; // Number | The ID of the company.
let documentId = 56; // Number | The ID of the document.
let opts = {
  'modifyReceiptRequest': {"data":{"date":"2021-08-19","number":6,"numeration":"REC006","amount_net":8.2,"amount_vat":1.8,"type":"sales_receipt","description":"cassa 1","rc_center":"","payment_account":{"id":555,"name":"contanti"},"items_list":[{"id":888,"amount_net":8.2,"amount_vat":1.8,"category":"altro","vat":{"id":0,"value":22,"description":"iva"}}]}} // ModifyReceiptRequest | Modified receipt.
};
apiInstance.modifyReceipt(companyId, documentId, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **documentId** | **Number**| The ID of the document. | 
 **modifyReceiptRequest** | [**ModifyReceiptRequest**](ModifyReceiptRequest.md)| Modified receipt. | [optional] 

### Return type

[**ModifyReceiptResponse**](ModifyReceiptResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

