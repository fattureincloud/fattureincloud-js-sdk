# fattureInCloudSdk.IssuedDocumentsApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createIssuedDocument**](IssuedDocumentsApi.md#createIssuedDocument) | **POST** /c/{company_id}/issued_documents | Create Issued Document
[**deleteIssuedDocument**](IssuedDocumentsApi.md#deleteIssuedDocument) | **DELETE** /c/{company_id}/issued_documents/{document_id} | Delete Issued Document
[**deleteIssuedDocumentAttachment**](IssuedDocumentsApi.md#deleteIssuedDocumentAttachment) | **DELETE** /c/{company_id}/issued_documents/{document_id}/attachment | Delete Issued Document Attachment
[**getEmailData**](IssuedDocumentsApi.md#getEmailData) | **GET** /c/{company_id}/issued_documents/{document_id}/email | Get Email Data
[**getExistingIssuedDocumentTotals**](IssuedDocumentsApi.md#getExistingIssuedDocumentTotals) | **POST** /c/{company_id}/issued_documents/{document_id}/totals | Get Existing Issued Document Totals
[**getIssuedDocument**](IssuedDocumentsApi.md#getIssuedDocument) | **GET** /c/{company_id}/issued_documents/{document_id} | Get Issued Document
[**getIssuedDocumentPreCreateInfo**](IssuedDocumentsApi.md#getIssuedDocumentPreCreateInfo) | **GET** /c/{company_id}/issued_documents/info | Get Issued Document Pre-create info
[**getNewIssuedDocumentTotals**](IssuedDocumentsApi.md#getNewIssuedDocumentTotals) | **POST** /c/{company_id}/issued_documents/totals | Get New Issued Document Totals
[**listIssuedDocuments**](IssuedDocumentsApi.md#listIssuedDocuments) | **GET** /c/{company_id}/issued_documents | List Issued Documents
[**modifyIssuedDocument**](IssuedDocumentsApi.md#modifyIssuedDocument) | **PUT** /c/{company_id}/issued_documents/{document_id} | Modify Issued Document
[**scheduleEmail**](IssuedDocumentsApi.md#scheduleEmail) | **POST** /c/{company_id}/issued_documents/{document_id}/email | Schedule Email
[**uploadIssuedDocumentAttachment**](IssuedDocumentsApi.md#uploadIssuedDocumentAttachment) | **POST** /c/{company_id}/issued_documents/attachment | Upload Issued Document Attachment



## createIssuedDocument

> CreateIssuedDocumentResponse createIssuedDocument(company_id, opts)

Create Issued Document

Creates a new document.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.IssuedDocumentsApi();
let company_id = 12345; // Number | The ID of the company.
let opts = {
  'CreateIssuedDocumentRequest': {"data":{"type":"receipt","numeration":"rec123","subject":"","visible_subject":"","amount_net":68.18,"amount_vat":6.82,"amount_gross":75,"amount_due_discount":0,"entity":{"id":54321,"name":"Mary Red S.r.L.","vat_number":"IT05432181211","tax_code":"IT05432181211","address_street":"Via Italia, 66","address_postal_code":"20900","address_city":"Milano","address_province":"MI","address_extra":"","country":"Italia","certified_email":"mary@pec.red.com","ei_code":"ABCXCR1"},"date":"2021-08-20","number":1,"next_due_date":"2021-12-31","attachment_token":"ypbqqe4u8w8bdabcd5fd5b1a","items_list":[{"product_id":333,"code":"SG3","name":"Soggiorno","measure":"","net_price":68.18182,"category":"","id":277875565,"gross_price":75,"apply_withholding_taxes":true,"discount":0,"discount_highlight":false,"in_dn":false,"qty":1,"vat":{"id":3,"value":10,"description":""},"stock":true,"description":"","not_taxable":false}],"payments_list":[{"amount":75,"due_date":"2020-08-23","paid_date":null,"id":444,"payment_terms":{"days":0,"type":"standard"},"status":"not_paid","payment_account":null}]}} // CreateIssuedDocumentRequest | The Issued Document
};
apiInstance.createIssuedDocument(company_id, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **CreateIssuedDocumentRequest** | [**CreateIssuedDocumentRequest**](CreateIssuedDocumentRequest.md)| The Issued Document | [optional] 

### Return type

[**CreateIssuedDocumentResponse**](CreateIssuedDocumentResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteIssuedDocument

> deleteIssuedDocument(company_id, document_id)

Delete Issued Document

Deletes the specified document.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.IssuedDocumentsApi();
let company_id = 12345; // Number | The ID of the company.
let document_id = 56; // Number | The ID of the document.
apiInstance.deleteIssuedDocument(company_id, document_id).then(() => {
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


## deleteIssuedDocumentAttachment

> deleteIssuedDocumentAttachment(company_id, document_id)

Delete Issued Document Attachment

Removes the attachment of the specified document.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.IssuedDocumentsApi();
let company_id = 12345; // Number | The ID of the company.
let document_id = 56; // Number | The ID of the document.
apiInstance.deleteIssuedDocumentAttachment(company_id, document_id).then(() => {
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


## getEmailData

> GetEmailDataResponse getEmailData(company_id, document_id)

Get Email Data

Gets the pre-compiled email details.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.IssuedDocumentsApi();
let company_id = 12345; // Number | The ID of the company.
let document_id = 56; // Number | The ID of the document.
apiInstance.getEmailData(company_id, document_id).then((result) => {
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

### Return type

[**GetEmailDataResponse**](GetEmailDataResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExistingIssuedDocumentTotals

> GetExistingIssuedDocumentTotalsResponse getExistingIssuedDocumentTotals(company_id, document_id, opts)

Get Existing Issued Document Totals

Returns the totals for a specified document.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.IssuedDocumentsApi();
let company_id = 12345; // Number | The ID of the company.
let document_id = 56; // Number | The ID of the document.
let opts = {
  'GetExistingIssuedDocumentTotalsRequest': {"data":{"rivalsa":20}} // GetExistingIssuedDocumentTotalsRequest | 
};
apiInstance.getExistingIssuedDocumentTotals(company_id, document_id, opts).then((result) => {
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
 **GetExistingIssuedDocumentTotalsRequest** | [**GetExistingIssuedDocumentTotalsRequest**](GetExistingIssuedDocumentTotalsRequest.md)|  | [optional] 

### Return type

[**GetExistingIssuedDocumentTotalsResponse**](GetExistingIssuedDocumentTotalsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getIssuedDocument

> GetIssuedDocumentResponse getIssuedDocument(company_id, document_id, opts)

Get Issued Document

Gets the specified document. 

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.IssuedDocumentsApi();
let company_id = 12345; // Number | The ID of the company.
let document_id = 56; // Number | The ID of the document.
let opts = {
  'fields': "fields_example", // String | List of comma-separated fields.
  'fieldset': "fieldset_example" // String | Name of the fieldset.
};
apiInstance.getIssuedDocument(company_id, document_id, opts).then((result) => {
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

[**GetIssuedDocumentResponse**](GetIssuedDocumentResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIssuedDocumentPreCreateInfo

> GetIssuedDocumentPreCreateInfoResponse getIssuedDocumentPreCreateInfo(company_id, type)

Get Issued Document Pre-create info

Retrieves the information useful while creating a new document.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.IssuedDocumentsApi();
let company_id = 12345; // Number | The ID of the company.
let type = "type_example"; // String | The type of the issued document.
apiInstance.getIssuedDocumentPreCreateInfo(company_id, type).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **type** | **String**| The type of the issued document. | 

### Return type

[**GetIssuedDocumentPreCreateInfoResponse**](GetIssuedDocumentPreCreateInfoResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNewIssuedDocumentTotals

> GetNewIssuedDocumentTotalsResponse getNewIssuedDocumentTotals(company_id, opts)

Get New Issued Document Totals

Returns the totals for a new document.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.IssuedDocumentsApi();
let company_id = 12345; // Number | The ID of the company.
let opts = {
  'GetNewIssuedDocumentTotalsRequest': {"data":{"id":12345,"type":"receipt","year":2021,"numeration":"rec123","subject":"","visible_subject":"","rc_center":"","ei_cassa_type":null,"ei_withholding_tax_causal":null,"ei_other_withholding_tax_type":null,"ei_other_withholding_tax_causal":null,"stamp_duty":0,"use_gross_prices":false,"e_invoice":false,"agyo_company_id":null,"agyo_id":null,"agyo_sent_at":null,"delivery_note":false,"accompanying_invoice":false,"amount_net":68.18,"amount_vat":6.82,"amount_gross":75,"amount_due_discount":0,"amount_rivalsa":0,"amount_cassa":0,"amount_withholding_tax":0,"amount_other_withholding_tax":0,"permanent_token":"6pzguy12h45rn9yqwertp43t7ec90vr","h_margins":15,"v_margins":16,"show_payment_method":false,"show_payments":true,"show_totals":"all","show_paypal_button":true,"show_notification_button":false,"is_marked":false,"created_at":"2021-08-13 09:30:20","updated_at":"2021-08-23 05:34:20","entity":{"id":54321,"name":"Mary Red S.r.L.","vat_number":"IT05432181211","tax_code":"IT05432181211","address_street":"Via Italia, 66","address_postal_code":"20900","address_city":"Milano","address_province":"MI","address_extra":"","country":"Italia","certified_email":"mary@pec.red.com","ei_code":"ABCXCR1"},"date":"2021-08-20","number":1,"currency":{"id":"EUR","exchange_rate":"1.00000","symbol":"€"},"language":{"code":"it","name":"Italiano"},"notes":"","rivalsa":0,"cassa":0,"withholding_tax":0,"withholding_tax_taxable":100,"other_withholding_tax":0,"payment_method":{"id":4,"name":"Credit card"},"use_split_payment":false,"merged_in":null,"original_document":null,"items_list":[{"product_id":5432,"code":"SG3","name":"Soggiorno","measure":"","net_price":68.18182,"category":"","id":277876033,"gross_price":75,"apply_withholding_taxes":true,"discount":0,"discount_highlight":false,"in_dn":false,"qty":1,"vat":{"id":3,"value":10,"description":""},"stock":false,"description":"","not_taxable":false}],"payments_list":[{"amount":75,"due_date":"2020-08-23","paid_date":null,"id":69078013,"payment_terms":{"days":0,"type":"standard"},"status":"not_paid","payment_account":null}],"attachment_url":"kdijrnf893hnwkfk45f50f.pdf","seen_date":null,"next_due_date":"2020-08-23","template":{"id":2821,"name":"Light Smoke"},"extra_data":null,"url":"y12h45rn9yf2mse0p43t7ec90vr.pdf","locked":false,"has_ts_pay_pending_payment":false,"show_tspay_button":false,"pay_with_tspay_url":null}} // GetNewIssuedDocumentTotalsRequest | 
};
apiInstance.getNewIssuedDocumentTotals(company_id, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **GetNewIssuedDocumentTotalsRequest** | [**GetNewIssuedDocumentTotalsRequest**](GetNewIssuedDocumentTotalsRequest.md)|  | [optional] 

### Return type

[**GetNewIssuedDocumentTotalsResponse**](GetNewIssuedDocumentTotalsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listIssuedDocuments

> ListIssuedDocumentsResponse listIssuedDocuments(company_id, type, opts)

List Issued Documents

Lists the issued documents.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.IssuedDocumentsApi();
let company_id = 12345; // Number | The ID of the company.
let type = "type_example"; // String | The type of the issued document.
let opts = {
  'fields': "fields_example", // String | List of comma-separated fields.
  'fieldset': "fieldset_example", // String | Name of the fieldset.
  'sort': "sort_example", // String | List of comma-separated fields for result sorting (minus for desc sorting).
  'page': 1, // Number | The page to retrieve.
  'per_page': 5 // Number | The size of the page.
};
apiInstance.listIssuedDocuments(company_id, type, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **type** | **String**| The type of the issued document. | 
 **fields** | **String**| List of comma-separated fields. | [optional] 
 **fieldset** | **String**| Name of the fieldset. | [optional] 
 **sort** | **String**| List of comma-separated fields for result sorting (minus for desc sorting). | [optional] 
 **page** | **Number**| The page to retrieve. | [optional] [default to 1]
 **per_page** | **Number**| The size of the page. | [optional] [default to 5]

### Return type

[**ListIssuedDocumentsResponse**](ListIssuedDocumentsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyIssuedDocument

> ModifyIssuedDocumentResponse modifyIssuedDocument(company_id, document_id, opts)

Modify Issued Document

Modifies the specified document.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.IssuedDocumentsApi();
let company_id = 12345; // Number | The ID of the company.
let document_id = 56; // Number | The ID of the document.
let opts = {
  'ModifyIssuedDocumentRequest': {"data":{"type":"receipt","numeration":"rec123","subject":"","visible_subject":"","amount_net":68.18,"amount_vat":6.82,"amount_gross":75,"amount_due_discount":0,"entity":{"id":54321,"name":"Mary Red S.r.L.","vat_number":"IT05432181211","tax_code":"IT05432181211","address_street":"Via Italia, 66","address_postal_code":"20900","address_city":"Milano","address_province":"MI","address_extra":"","country":"Italia","certified_email":"mary@pec.red.com","ei_code":"ABCXCR1"},"date":"2021-08-20","number":1,"next_due_date":"2021-12-31","attachment_token":"ypbqqe4u8w8bdabcd5fd5b1a","items_list":[{"product_id":333,"code":"SG3","name":"Soggiorno","measure":"","net_price":68.18182,"category":"","id":277875565,"gross_price":75,"apply_withholding_taxes":true,"discount":0,"discount_highlight":false,"in_dn":false,"qty":1,"vat":{"id":3,"value":10,"description":""},"stock":true,"description":"","not_taxable":false}],"payments_list":[{"amount":75,"due_date":"2020-08-23","paid_date":null,"id":444,"payment_terms":{"days":0,"type":"standard"},"status":"not_paid","payment_account":null}]}} // ModifyIssuedDocumentRequest | The modified document
};
apiInstance.modifyIssuedDocument(company_id, document_id, opts).then((result) => {
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
 **ModifyIssuedDocumentRequest** | [**ModifyIssuedDocumentRequest**](ModifyIssuedDocumentRequest.md)| The modified document | [optional] 

### Return type

[**ModifyIssuedDocumentResponse**](ModifyIssuedDocumentResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## scheduleEmail

> scheduleEmail(company_id, document_id, opts)

Schedule Email

Schedules the sending of a document by email.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.IssuedDocumentsApi();
let company_id = 12345; // Number | The ID of the company.
let document_id = 56; // Number | The ID of the document.
let opts = {
  'ScheduleEmailRequest': {"data":{"sender_email":"mariorossi@fattureincloud.it","recipient_email":"mary.red@example.com","subject":"Nostra pro forma nr. 1","body":"Gentile Mario Rossi,<br>per vedere la nostra pro forma di  o per scaricarne una copia in versione PDF prema sul bottone sottostante.<br><br>{{allegati}}<br><br>Cordiali saluti,<br><b>Mario Rossi</b>","include":{"document":false,"delivery_note":false,"attachment":false,"accompanying_invoice":false},"attach_pdf":true,"send_copy":false}} // ScheduleEmailRequest | Email Schedule
};
apiInstance.scheduleEmail(company_id, document_id, opts).then(() => {
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
 **ScheduleEmailRequest** | [**ScheduleEmailRequest**](ScheduleEmailRequest.md)| Email Schedule | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## uploadIssuedDocumentAttachment

> UploadIssuedDocumentAttachmentResponse uploadIssuedDocumentAttachment(company_id, opts)

Upload Issued Document Attachment

Uploads an attachment destined to an issued document. The actual association between the document and the attachment must be implemented separately, using the returned token.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.IssuedDocumentsApi();
let company_id = 12345; // Number | The ID of the company.
let opts = {
  'filename': "filename_example", // String | Name of the file.
  'attachment': "/path/to/file" // File | Valid format: .png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx
};
apiInstance.uploadIssuedDocumentAttachment(company_id, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 
 **filename** | **String**| Name of the file. | [optional] 
 **attachment** | **File**| Valid format: .png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx | [optional] 

### Return type

[**UploadIssuedDocumentAttachmentResponse**](UploadIssuedDocumentAttachmentResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

