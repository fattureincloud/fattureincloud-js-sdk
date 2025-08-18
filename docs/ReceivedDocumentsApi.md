# fattureInCloudSdk.ReceivedDocumentsApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createReceivedDocument**](ReceivedDocumentsApi.md#createReceivedDocument) | **POST** /c/{company_id}/received_documents | Create Received Document
[**deleteBinReceivedDocument**](ReceivedDocumentsApi.md#deleteBinReceivedDocument) | **DELETE** /c/{company_id}/bin/received_documents/{document_id} | 
[**deleteReceivedDocument**](ReceivedDocumentsApi.md#deleteReceivedDocument) | **DELETE** /c/{company_id}/received_documents/{document_id} | Delete Received Document
[**deleteReceivedDocumentAttachment**](ReceivedDocumentsApi.md#deleteReceivedDocumentAttachment) | **DELETE** /c/{company_id}/received_documents/{document_id}/attachment | Delete Received Document Attachment
[**getBinReceivedDocument**](ReceivedDocumentsApi.md#getBinReceivedDocument) | **GET** /c/{company_id}/bin/received_documents/{document_id} | Get Bin Received Documents List
[**getExistingReceivedDocumentTotals**](ReceivedDocumentsApi.md#getExistingReceivedDocumentTotals) | **POST** /c/{company_id}/received_documents/{document_id}/totals | Get Existing Received Document Totals
[**getNewReceivedDocumentTotals**](ReceivedDocumentsApi.md#getNewReceivedDocumentTotals) | **POST** /c/{company_id}/received_documents/totals | Get New Received Document Totals
[**getReceivedDocument**](ReceivedDocumentsApi.md#getReceivedDocument) | **GET** /c/{company_id}/received_documents/{document_id} | Get Received Document
[**getReceivedDocumentPreCreateInfo**](ReceivedDocumentsApi.md#getReceivedDocumentPreCreateInfo) | **GET** /c/{company_id}/received_documents/info | Get Received Document Pre-Create Info
[**listBinReceivedDocuments**](ReceivedDocumentsApi.md#listBinReceivedDocuments) | **GET** /c/{company_id}/bin/received_documents | Get Bin Received Documents List
[**listReceivedDocuments**](ReceivedDocumentsApi.md#listReceivedDocuments) | **GET** /c/{company_id}/received_documents | List Received Documents
[**modifyReceivedDocument**](ReceivedDocumentsApi.md#modifyReceivedDocument) | **PUT** /c/{company_id}/received_documents/{document_id} | Modify Received Document
[**recoverBinReceivedDocument**](ReceivedDocumentsApi.md#recoverBinReceivedDocument) | **POST** /c/{company_id}/bin/received_documents/{document_id}/recover | 
[**uploadReceivedDocumentAttachment**](ReceivedDocumentsApi.md#uploadReceivedDocumentAttachment) | **POST** /c/{company_id}/received_documents/attachment | Upload Received Document Attachment



## createReceivedDocument

> CreateReceivedDocumentResponse createReceivedDocument(companyId, opts)

Create Received Document

Creates a new document.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ReceivedDocumentsApi();
let companyId = 12345; // Number | The ID of the company.
let opts = {
  'createReceivedDocumentRequest': {"data":{"type":"expense","description":"Soggiorno di lavoro","amortization":1,"rc_center":"","invoice_number":"","is_marked":false,"is_detailed":false,"e_invoice":false,"entity":{"id":111,"name":"Hotel Rubino Palace"},"date":"2021-08-15","next_due_date":"2021-08-15","currency":{"id":"EUR","exchange_rate":"1.00000","symbol":"€"},"amount_net":592,"amount_vat":0,"amount_gross":592,"amount_withholding_tax":0,"amount_other_withholding_tax":0,"tax_deductibility":50,"vat_deductibility":100,"payments_list":[{"amount":592,"due_date":"2021-08-15","paid_date":"2021-08-15","id":777,"payment_terms":{"days":0,"type":"standard"},"status":"paid","payment_account":{"id":222,"name":"Contanti","virtual":false}}],"attachment_token":"bnopjao8gvydtgnewgiovs74yrfqwefEF"}} // CreateReceivedDocumentRequest | Document to create
};
apiInstance.createReceivedDocument(companyId, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **createReceivedDocumentRequest** | [**CreateReceivedDocumentRequest**](CreateReceivedDocumentRequest.md)| Document to create | [optional] 

### Return type

[**CreateReceivedDocumentResponse**](CreateReceivedDocumentResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteBinReceivedDocument

> deleteBinReceivedDocument(companyId, documentId)



Delete Bin Received Document

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ReceivedDocumentsApi();
let companyId = 12345; // Number | The ID of the company.
let documentId = 56; // Number | The ID of the document.
apiInstance.deleteBinReceivedDocument(companyId, documentId).then(() => {
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


## deleteReceivedDocument

> deleteReceivedDocument(companyId, documentId)

Delete Received Document

Deletes the specified document.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ReceivedDocumentsApi();
let companyId = 12345; // Number | The ID of the company.
let documentId = 56; // Number | The ID of the document.
apiInstance.deleteReceivedDocument(companyId, documentId).then(() => {
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


## deleteReceivedDocumentAttachment

> deleteReceivedDocumentAttachment(companyId, documentId)

Delete Received Document Attachment

Removes the attachment of the specified document.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ReceivedDocumentsApi();
let companyId = 12345; // Number | The ID of the company.
let documentId = 56; // Number | The ID of the document.
apiInstance.deleteReceivedDocumentAttachment(companyId, documentId).then(() => {
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


## getBinReceivedDocument

> GetBinIssuedDocumentResponse getBinReceivedDocument(companyId, documentId)

Get Bin Received Documents List

Get bin issued documents detail

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ReceivedDocumentsApi();
let companyId = 12345; // Number | The ID of the company.
let documentId = 56; // Number | The ID of the document.
apiInstance.getBinReceivedDocument(companyId, documentId).then((result) => {
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

### Return type

[**GetBinIssuedDocumentResponse**](GetBinIssuedDocumentResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExistingReceivedDocumentTotals

> GetExistingReceivedDocumentTotalsResponse getExistingReceivedDocumentTotals(companyId, documentId, opts)

Get Existing Received Document Totals

Returns the totals for the specified document.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ReceivedDocumentsApi();
let companyId = 12345; // Number | The ID of the company.
let documentId = 56; // Number | The ID of the document.
let opts = {
  'getExistingReceivedDocumentTotalsRequest': {"data":{"amount_vat":20}} // GetExistingReceivedDocumentTotalsRequest | Received document.
};
apiInstance.getExistingReceivedDocumentTotals(companyId, documentId, opts).then((result) => {
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
 **getExistingReceivedDocumentTotalsRequest** | [**GetExistingReceivedDocumentTotalsRequest**](GetExistingReceivedDocumentTotalsRequest.md)| Received document. | [optional] 

### Return type

[**GetExistingReceivedDocumentTotalsResponse**](GetExistingReceivedDocumentTotalsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getNewReceivedDocumentTotals

> GetNewReceivedDocumentTotalsResponse getNewReceivedDocumentTotals(companyId, opts)

Get New Received Document Totals

Returns the totals for a new document.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ReceivedDocumentsApi();
let companyId = 12345; // Number | The ID of the company.
let opts = {
  'getNewReceivedDocumentTotalsRequest': {"data":{"type":"expense","description":"Soggiorno di lavoro","amortization":1,"rc_center":"","invoice_number":"","is_marked":false,"is_detailed":false,"e_invoice":false,"created_at":"2021-08-15 14:02:02","updated_at":"2021-08-15 14:02:02","entity":{"id":111,"name":"Hotel Rubino Palace"},"date":"2021-08-15","next_due_date":"2021-08-15","currency":{"id":"EUR","exchange_rate":"1.00000","symbol":"€"},"amount_net":592,"amount_vat":10,"amount_withholding_tax":0,"amount_other_withholding_tax":0,"tax_deductibility":50,"vat_deductibility":100,"payments_list":[{"amount":592,"due_date":"2021-08-15","paid_date":"2021-08-15","id":777,"payment_terms":{"days":0,"type":"standard"},"status":"paid"}]}} // GetNewReceivedDocumentTotalsRequest | Received document.
};
apiInstance.getNewReceivedDocumentTotals(companyId, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **getNewReceivedDocumentTotalsRequest** | [**GetNewReceivedDocumentTotalsRequest**](GetNewReceivedDocumentTotalsRequest.md)| Received document. | [optional] 

### Return type

[**GetNewReceivedDocumentTotalsResponse**](GetNewReceivedDocumentTotalsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getReceivedDocument

> GetReceivedDocumentResponse getReceivedDocument(companyId, documentId, opts)

Get Received Document

Gets the specified document.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ReceivedDocumentsApi();
let companyId = 12345; // Number | The ID of the company.
let documentId = 56; // Number | The ID of the document.
let opts = {
  'fields': "fields_example", // String | List of comma-separated fields.
  'fieldset': "fieldset_example" // String | Name of the fieldset.
};
apiInstance.getReceivedDocument(companyId, documentId, opts).then((result) => {
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

[**GetReceivedDocumentResponse**](GetReceivedDocumentResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReceivedDocumentPreCreateInfo

> GetReceivedDocumentPreCreateInfoResponse getReceivedDocumentPreCreateInfo(companyId, type)

Get Received Document Pre-Create Info

Retrieves the information useful while creating a new document.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ReceivedDocumentsApi();
let companyId = 12345; // Number | The ID of the company.
let type = "type_example"; // String | The type of the received document.
apiInstance.getReceivedDocumentPreCreateInfo(companyId, type).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **type** | **String**| The type of the received document. | 

### Return type

[**GetReceivedDocumentPreCreateInfoResponse**](GetReceivedDocumentPreCreateInfoResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listBinReceivedDocuments

> ListBinReceivedDocuments listBinReceivedDocuments(companyId)

Get Bin Received Documents List

Get bin Received documents list

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ReceivedDocumentsApi();
let companyId = 12345; // Number | The ID of the company.
apiInstance.listBinReceivedDocuments(companyId).then((result) => {
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

[**ListBinReceivedDocuments**](ListBinReceivedDocuments.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listReceivedDocuments

> ListReceivedDocumentsResponse listReceivedDocuments(companyId, type, opts)

List Received Documents

Lists the received documents.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ReceivedDocumentsApi();
let companyId = 12345; // Number | The ID of the company.
let type = "type_example"; // String | The type of the received document.
let opts = {
  'fields': "fields_example", // String | List of comma-separated fields.
  'fieldset': "fieldset_example", // String | Name of the fieldset.
  'sort': "sort_example", // String | List of comma-separated fields for result sorting (minus for desc sorting).
  'page': 1, // Number | The page to retrieve.
  'perPage': 5, // Number | The size of the page.
  'q': "q_example" // String | Query for filtering the results.
};
apiInstance.listReceivedDocuments(companyId, type, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **type** | **String**| The type of the received document. | 
 **fields** | **String**| List of comma-separated fields. | [optional] 
 **fieldset** | **String**| Name of the fieldset. | [optional] 
 **sort** | **String**| List of comma-separated fields for result sorting (minus for desc sorting). | [optional] 
 **page** | **Number**| The page to retrieve. | [optional] [default to 1]
 **perPage** | **Number**| The size of the page. | [optional] [default to 5]
 **q** | **String**| Query for filtering the results. | [optional] 

### Return type

[**ListReceivedDocumentsResponse**](ListReceivedDocumentsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyReceivedDocument

> ModifyReceivedDocumentResponse modifyReceivedDocument(companyId, documentId, opts)

Modify Received Document

Modifies the specified document.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ReceivedDocumentsApi();
let companyId = 12345; // Number | The ID of the company.
let documentId = 56; // Number | The ID of the document.
let opts = {
  'modifyReceivedDocumentRequest': {"data":{"type":"expense","description":"Soggiorno di lavoro","amortization":1,"rc_center":"","invoice_number":"","is_marked":false,"is_detailed":false,"e_invoice":false,"entity":{"id":111,"name":"Hotel Rubino Palace"},"date":"2021-08-15","next_due_date":"2021-08-15","currency":{"id":"EUR","exchange_rate":"1.00000","symbol":"€"},"amount_net":592,"amount_vat":0,"amount_gross":592,"amount_withholding_tax":0,"amount_other_withholding_tax":0,"tax_deductibility":50,"vat_deductibility":100,"payments_list":[{"amount":592,"due_date":"2021-08-15","paid_date":"2021-08-15","id":777,"payment_terms":{"days":0,"type":"standard"},"status":"paid","payment_account":{"id":222,"name":"Contanti","virtual":false}}]}} // ModifyReceivedDocumentRequest | Modified document.
};
apiInstance.modifyReceivedDocument(companyId, documentId, opts).then((result) => {
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
 **modifyReceivedDocumentRequest** | [**ModifyReceivedDocumentRequest**](ModifyReceivedDocumentRequest.md)| Modified document. | [optional] 

### Return type

[**ModifyReceivedDocumentResponse**](ModifyReceivedDocumentResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## recoverBinReceivedDocument

> recoverBinReceivedDocument(companyId, documentId)



Recover Received Document From The Bin

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ReceivedDocumentsApi();
let companyId = 12345; // Number | The ID of the company.
let documentId = 56; // Number | The ID of the document.
apiInstance.recoverBinReceivedDocument(companyId, documentId).then(() => {
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


## uploadReceivedDocumentAttachment

> UploadReceivedDocumentAttachmentResponse uploadReceivedDocumentAttachment(companyId, opts)

Upload Received Document Attachment

Uploads an attachment destined to a received document. The actual association between the document and the attachment must be implemented separately, using the returned token.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ReceivedDocumentsApi();
let companyId = 12345; // Number | The ID of the company.
let opts = {
  'filename': "filename_example", // String | Attachment file name
  'attachment': "/path/to/file" // File | Attachment file [.png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx]
};
apiInstance.uploadReceivedDocumentAttachment(companyId, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **filename** | **String**| Attachment file name | [optional] 
 **attachment** | **File**| Attachment file [.png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx] | [optional] 

### Return type

[**UploadReceivedDocumentAttachmentResponse**](UploadReceivedDocumentAttachmentResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

