# fattureInCloudSdk.IssuedEInvoicesApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendEInvoice**](IssuedEInvoicesApi.md#sendEInvoice) | **POST** /c/{company_id}/issued_documents/{document_id}/e_invoice/send | Send the e-invoice
[**verifyEInvoiceXml**](IssuedEInvoicesApi.md#verifyEInvoiceXml) | **GET** /c/{company_id}/issued_documents/{document_id}/e_invoice/xml_verify | Verify e-invoice xml



## sendEInvoice

> SendEInvoiceResponse sendEInvoice(company_id, document_id, opts)

Send the e-invoice

Sends the e-invoice to SDI.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.IssuedEInvoicesApi();
let company_id = 12345; // Number | The ID of the company.
let document_id = 56; // Number | The ID of the document.
let opts = {
  'SendEInvoiceRequest': {"data":{"withholding_tax_causal":"causale"}} // SendEInvoiceRequest | 
};
apiInstance.sendEInvoice(company_id, document_id, opts).then((result) => {
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
 **SendEInvoiceRequest** | [**SendEInvoiceRequest**](SendEInvoiceRequest.md)|  | [optional] 

### Return type

[**SendEInvoiceResponse**](SendEInvoiceResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## verifyEInvoiceXml

> VerifyEInvoiceXmlResponse verifyEInvoiceXml(company_id, document_id)

Verify e-invoice xml

Verifies the e-invoice xml format. Checks if all of the mandatory fields are filled and compliant to the right format.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.IssuedEInvoicesApi();
let company_id = 12345; // Number | The ID of the company.
let document_id = 56; // Number | The ID of the document.
apiInstance.verifyEInvoiceXml(company_id, document_id).then((result) => {
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

[**VerifyEInvoiceXmlResponse**](VerifyEInvoiceXmlResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

