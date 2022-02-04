# FattureInCloud JavaScript SDK

@fattureincloud/fattureincloud-js-sdk - JavaScript client for Fatture in Cloud API.

Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy. 

The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2.0.10
- Package version: 2.0.8
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen


For more information, please visit [https://www.fattureincloud.it](https://www.fattureincloud.it)

## Installation

### For [Node.js](https://nodejs.org/)

Using npm:

```shell
npm install @fattureincloud/fattureincloud-js-sdk
```

Using yarn:

```shell
yarn add @fattureincloud/fattureincloud-js-sdk
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var fattureInCloudSdk = require('@fattureincloud/fattureincloud-js-sdk');

var defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
var OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = "YOUR ACCESS TOKEN"

var api = new fattureInCloudSdk.ArchiveApi()
var companyId = 12345; // {Number} The ID of the company.
var opts = {
  'createArchiveDocumentRequest': {"data":{"date":"2021-08-20","category":"Altri documenti","description":"spesa 1","attachment_token":"ibfjdbf94ey9w94g3w894qbasrga"}} // {CreateArchiveDocumentRequest} The Archive Document.
};
api.createArchiveDocument(companyId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://api-v2.fattureincloud.it*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*fattureInCloudSdk.ArchiveApi* | [**createArchiveDocument**](docs/ArchiveApi.md#createArchiveDocument) | **POST** /c/{company_id}/archive | Create Archive Document
*fattureInCloudSdk.ArchiveApi* | [**deleteArchiveDocument**](docs/ArchiveApi.md#deleteArchiveDocument) | **DELETE** /c/{company_id}/archive/{document_id} | Delete Archive Document
*fattureInCloudSdk.ArchiveApi* | [**getArchiveDocument**](docs/ArchiveApi.md#getArchiveDocument) | **GET** /c/{company_id}/archive/{document_id} | Get Archive Document
*fattureInCloudSdk.ArchiveApi* | [**listArchiveDocuments**](docs/ArchiveApi.md#listArchiveDocuments) | **GET** /c/{company_id}/archive | List Archive Documents
*fattureInCloudSdk.ArchiveApi* | [**modifyArchiveDocument**](docs/ArchiveApi.md#modifyArchiveDocument) | **PUT** /c/{company_id}/archive/{document_id} | Modify Archive Document
*fattureInCloudSdk.ArchiveApi* | [**uploadArchiveDocumentAttachment**](docs/ArchiveApi.md#uploadArchiveDocumentAttachment) | **POST** /c/{company_id}/archive/attachment | Upload Archive Document Attachment
*fattureInCloudSdk.CashbookApi* | [**createCashbookEntry**](docs/CashbookApi.md#createCashbookEntry) | **POST** /c/{company_id}/cashbook | Create Cashbook Entry
*fattureInCloudSdk.CashbookApi* | [**deleteCashbookEntry**](docs/CashbookApi.md#deleteCashbookEntry) | **DELETE** /c/{company_id}/cashbook/{document_id} | Delete Cashbook Entry
*fattureInCloudSdk.CashbookApi* | [**getCashbookEntry**](docs/CashbookApi.md#getCashbookEntry) | **GET** /c/{company_id}/cashbook/{document_id} | Get Cashbook Entry
*fattureInCloudSdk.CashbookApi* | [**listCashbookEntries**](docs/CashbookApi.md#listCashbookEntries) | **GET** /c/{company_id}/cashbook | List Cashbook Entries
*fattureInCloudSdk.CashbookApi* | [**modifyCashbookEntry**](docs/CashbookApi.md#modifyCashbookEntry) | **PUT** /c/{company_id}/cashbook/{document_id} | Modify Cashbook Entry
*fattureInCloudSdk.ClientsApi* | [**createClient**](docs/ClientsApi.md#createClient) | **POST** /c/{company_id}/entities/clients | Create Client
*fattureInCloudSdk.ClientsApi* | [**deleteClient**](docs/ClientsApi.md#deleteClient) | **DELETE** /c/{company_id}/entities/clients/{client_id} | Delete Client
*fattureInCloudSdk.ClientsApi* | [**getClient**](docs/ClientsApi.md#getClient) | **GET** /c/{company_id}/entities/clients/{client_id} | Get Client
*fattureInCloudSdk.ClientsApi* | [**listClients**](docs/ClientsApi.md#listClients) | **GET** /c/{company_id}/entities/clients | List Clients
*fattureInCloudSdk.ClientsApi* | [**modifyClient**](docs/ClientsApi.md#modifyClient) | **PUT** /c/{company_id}/entities/clients/{client_id} | Modify Client
*fattureInCloudSdk.CompaniesApi* | [**getCompanyInfo**](docs/CompaniesApi.md#getCompanyInfo) | **GET** /c/{company_id}/company/info | Get Company Info
*fattureInCloudSdk.InfoApi* | [**listArchiveCategories**](docs/InfoApi.md#listArchiveCategories) | **GET** /c/{company_id}/info/archive_categories | List Archive Categories
*fattureInCloudSdk.InfoApi* | [**listCities**](docs/InfoApi.md#listCities) | **GET** /info/cities | List Cities
*fattureInCloudSdk.InfoApi* | [**listCostCenters**](docs/InfoApi.md#listCostCenters) | **GET** /c/{company_id}/info/cost_centers | List Cost Centers
*fattureInCloudSdk.InfoApi* | [**listCountries**](docs/InfoApi.md#listCountries) | **GET** /info/countries | List Countries
*fattureInCloudSdk.InfoApi* | [**listCurrencies**](docs/InfoApi.md#listCurrencies) | **GET** /info/currencies | List Currencies
*fattureInCloudSdk.InfoApi* | [**listDeliveryNotesDefaultCausals**](docs/InfoApi.md#listDeliveryNotesDefaultCausals) | **GET** /info/dn_causals | List Delivery Notes Default Causals
*fattureInCloudSdk.InfoApi* | [**listLanguages**](docs/InfoApi.md#listLanguages) | **GET** /info/languages | List Languages
*fattureInCloudSdk.InfoApi* | [**listPaymentAccounts**](docs/InfoApi.md#listPaymentAccounts) | **GET** /c/{company_id}/info/payment_accounts | List Payment Accounts
*fattureInCloudSdk.InfoApi* | [**listPaymentMethods**](docs/InfoApi.md#listPaymentMethods) | **GET** /c/{company_id}/info/payment_methods | List Payment Methods
*fattureInCloudSdk.InfoApi* | [**listProductCategories**](docs/InfoApi.md#listProductCategories) | **GET** /c/{company_id}/info/product_categories | List Product Categories
*fattureInCloudSdk.InfoApi* | [**listReceivedDocumentCategories**](docs/InfoApi.md#listReceivedDocumentCategories) | **GET** /c/{company_id}/info/received_document_categories | List Received Document Categories
*fattureInCloudSdk.InfoApi* | [**listRevenueCenters**](docs/InfoApi.md#listRevenueCenters) | **GET** /c/{company_id}/info/revenue_centers | List Revenue Centers
*fattureInCloudSdk.InfoApi* | [**listTemplates**](docs/InfoApi.md#listTemplates) | **GET** /info/templates | List Templates
*fattureInCloudSdk.InfoApi* | [**listUnitsOfMeasure**](docs/InfoApi.md#listUnitsOfMeasure) | **GET** /info/measures | List Units of Measure
*fattureInCloudSdk.InfoApi* | [**listVatTypes**](docs/InfoApi.md#listVatTypes) | **GET** /c/{company_id}/info/vat_types | List Vat Types
*fattureInCloudSdk.IssuedDocumentsApi* | [**createIssuedDocument**](docs/IssuedDocumentsApi.md#createIssuedDocument) | **POST** /c/{company_id}/issued_documents | Create Issued Document
*fattureInCloudSdk.IssuedDocumentsApi* | [**deleteIssuedDocument**](docs/IssuedDocumentsApi.md#deleteIssuedDocument) | **DELETE** /c/{company_id}/issued_documents/{document_id} | Delete Issued Document
*fattureInCloudSdk.IssuedDocumentsApi* | [**deleteIssuedDocumentAttachment**](docs/IssuedDocumentsApi.md#deleteIssuedDocumentAttachment) | **DELETE** /c/{company_id}/issued_documents/{document_id}/attachment | Delete Issued Document Attachment
*fattureInCloudSdk.IssuedDocumentsApi* | [**getEmailData**](docs/IssuedDocumentsApi.md#getEmailData) | **GET** /c/{company_id}/issued_documents/{document_id}/email | Get Email Data
*fattureInCloudSdk.IssuedDocumentsApi* | [**getExistingIssuedDocumentTotals**](docs/IssuedDocumentsApi.md#getExistingIssuedDocumentTotals) | **POST** /c/{company_id}/issued_documents/{document_id}/totals | Get Existing Issued Document Totals
*fattureInCloudSdk.IssuedDocumentsApi* | [**getIssuedDocument**](docs/IssuedDocumentsApi.md#getIssuedDocument) | **GET** /c/{company_id}/issued_documents/{document_id} | Get Issued Document
*fattureInCloudSdk.IssuedDocumentsApi* | [**getIssuedDocumentPreCreateInfo**](docs/IssuedDocumentsApi.md#getIssuedDocumentPreCreateInfo) | **GET** /c/{company_id}/issued_documents/info | Get Issued Document Pre-create info
*fattureInCloudSdk.IssuedDocumentsApi* | [**getNewIssuedDocumentTotals**](docs/IssuedDocumentsApi.md#getNewIssuedDocumentTotals) | **POST** /c/{company_id}/issued_documents/totals | Get New Issued Document Totals
*fattureInCloudSdk.IssuedDocumentsApi* | [**listIssuedDocuments**](docs/IssuedDocumentsApi.md#listIssuedDocuments) | **GET** /c/{company_id}/issued_documents | List Issued Documents
*fattureInCloudSdk.IssuedDocumentsApi* | [**modifyIssuedDocument**](docs/IssuedDocumentsApi.md#modifyIssuedDocument) | **PUT** /c/{company_id}/issued_documents/{document_id} | Modify Issued Document
*fattureInCloudSdk.IssuedDocumentsApi* | [**scheduleEmail**](docs/IssuedDocumentsApi.md#scheduleEmail) | **POST** /c/{company_id}/issued_documents/{document_id}/email | Schedule Email
*fattureInCloudSdk.IssuedDocumentsApi* | [**uploadIssuedDocumentAttachment**](docs/IssuedDocumentsApi.md#uploadIssuedDocumentAttachment) | **POST** /c/{company_id}/issued_documents/attachment | Upload Issued Document Attachment
*fattureInCloudSdk.IssuedEInvoicesApi* | [**getEInvoiceRejectionReason**](docs/IssuedEInvoicesApi.md#getEInvoiceRejectionReason) | **GET** /c/{company_id}/issued_documents/{document_id}/e_invoice/error_reason | Get EInvoice rejection reason
*fattureInCloudSdk.IssuedEInvoicesApi* | [**getEInvoiceXml**](docs/IssuedEInvoicesApi.md#getEInvoiceXml) | **GET** /c/{company_id}/issued_documents/{document_id}/e_invoice/xml | Get e-invoice XML
*fattureInCloudSdk.IssuedEInvoicesApi* | [**sendEInvoice**](docs/IssuedEInvoicesApi.md#sendEInvoice) | **POST** /c/{company_id}/issued_documents/{document_id}/e_invoice/send | Send the e-invoice
*fattureInCloudSdk.IssuedEInvoicesApi* | [**verifyEInvoiceXml**](docs/IssuedEInvoicesApi.md#verifyEInvoiceXml) | **GET** /c/{company_id}/issued_documents/{document_id}/e_invoice/xml_verify | Verify e-invoice xml
*fattureInCloudSdk.ProductsApi* | [**createProduct**](docs/ProductsApi.md#createProduct) | **POST** /c/{company_id}/products | Create Product
*fattureInCloudSdk.ProductsApi* | [**deleteProduct**](docs/ProductsApi.md#deleteProduct) | **DELETE** /c/{company_id}/products/{product_id} | Delete Product
*fattureInCloudSdk.ProductsApi* | [**getProduct**](docs/ProductsApi.md#getProduct) | **GET** /c/{company_id}/products/{product_id} | Get Product
*fattureInCloudSdk.ProductsApi* | [**listProducts**](docs/ProductsApi.md#listProducts) | **GET** /c/{company_id}/products | List Products
*fattureInCloudSdk.ProductsApi* | [**modifyProduct**](docs/ProductsApi.md#modifyProduct) | **PUT** /c/{company_id}/products/{product_id} | Modify Product
*fattureInCloudSdk.ReceiptsApi* | [**createReceipt**](docs/ReceiptsApi.md#createReceipt) | **POST** /c/{company_id}/receipts | Create Receipt
*fattureInCloudSdk.ReceiptsApi* | [**deleteReceipt**](docs/ReceiptsApi.md#deleteReceipt) | **DELETE** /c/{company_id}/receipts/{document_id} | Delete Receipt
*fattureInCloudSdk.ReceiptsApi* | [**getReceipt**](docs/ReceiptsApi.md#getReceipt) | **GET** /c/{company_id}/receipts/{document_id} | Get Receipt
*fattureInCloudSdk.ReceiptsApi* | [**getReceiptPreCreateInfo**](docs/ReceiptsApi.md#getReceiptPreCreateInfo) | **GET** /c/{company_id}/receipts/info | Get Receipt Pre-Create Info
*fattureInCloudSdk.ReceiptsApi* | [**getReceiptsMonthlyTotals**](docs/ReceiptsApi.md#getReceiptsMonthlyTotals) | **GET** /c/{company_id}/receipts/monthly_totals | Get Receipts Monthly Totals
*fattureInCloudSdk.ReceiptsApi* | [**listReceipts**](docs/ReceiptsApi.md#listReceipts) | **GET** /c/{company_id}/receipts | List Receipts
*fattureInCloudSdk.ReceiptsApi* | [**modifyReceipt**](docs/ReceiptsApi.md#modifyReceipt) | **PUT** /c/{company_id}/receipts/{document_id} | Modify Receipt
*fattureInCloudSdk.ReceivedDocumentsApi* | [**createReceivedDocument**](docs/ReceivedDocumentsApi.md#createReceivedDocument) | **POST** /c/{company_id}/received_documents | Create Received Document
*fattureInCloudSdk.ReceivedDocumentsApi* | [**deleteReceivedDocument**](docs/ReceivedDocumentsApi.md#deleteReceivedDocument) | **DELETE** /c/{company_id}/received_documents/{document_id} | Delete Received Document
*fattureInCloudSdk.ReceivedDocumentsApi* | [**deleteReceivedDocumentAttachment**](docs/ReceivedDocumentsApi.md#deleteReceivedDocumentAttachment) | **DELETE** /c/{company_id}/received_documents/{document_id}/attachment | Delete Received Document Attachment
*fattureInCloudSdk.ReceivedDocumentsApi* | [**getExistingReceivedDocumentTotals**](docs/ReceivedDocumentsApi.md#getExistingReceivedDocumentTotals) | **POST** /c/{company_id}/received_documents/{document_id}/totals | Get Existing Received Document Totals
*fattureInCloudSdk.ReceivedDocumentsApi* | [**getNewReceivedDocumentTotals**](docs/ReceivedDocumentsApi.md#getNewReceivedDocumentTotals) | **POST** /c/{company_id}/received_documents/totals | Get New Received Document Totals
*fattureInCloudSdk.ReceivedDocumentsApi* | [**getReceivedDocument**](docs/ReceivedDocumentsApi.md#getReceivedDocument) | **GET** /c/{company_id}/received_documents/{document_id} | Get Received Document
*fattureInCloudSdk.ReceivedDocumentsApi* | [**getReceivedDocumentPreCreateInfo**](docs/ReceivedDocumentsApi.md#getReceivedDocumentPreCreateInfo) | **GET** /c/{company_id}/received_documents/info | Get Received Document Pre-Create Info
*fattureInCloudSdk.ReceivedDocumentsApi* | [**listReceivedDocuments**](docs/ReceivedDocumentsApi.md#listReceivedDocuments) | **GET** /c/{company_id}/received_documents | List Received Documents
*fattureInCloudSdk.ReceivedDocumentsApi* | [**modifyReceivedDocument**](docs/ReceivedDocumentsApi.md#modifyReceivedDocument) | **PUT** /c/{company_id}/received_documents/{document_id} | Modify Received Document
*fattureInCloudSdk.ReceivedDocumentsApi* | [**uploadReceivedDocumentAttachment**](docs/ReceivedDocumentsApi.md#uploadReceivedDocumentAttachment) | **POST** /c/{company_id}/received_documents/attachment | Upload Received Document Attachment
*fattureInCloudSdk.SettingsApi* | [**createPaymentAccount**](docs/SettingsApi.md#createPaymentAccount) | **POST** /c/{company_id}/settings/payment_accounts | Create Payment Account
*fattureInCloudSdk.SettingsApi* | [**createPaymentMethod**](docs/SettingsApi.md#createPaymentMethod) | **POST** /c/{company_id}/settings/payment_methods | Create Payment Method
*fattureInCloudSdk.SettingsApi* | [**createVatType**](docs/SettingsApi.md#createVatType) | **POST** /c/{company_id}/settings/vat_types | Create Vat Type
*fattureInCloudSdk.SettingsApi* | [**deletePaymentAccount**](docs/SettingsApi.md#deletePaymentAccount) | **DELETE** /c/{company_id}/settings/payment_accounts/{payment_account_id} | Delete Payment Account
*fattureInCloudSdk.SettingsApi* | [**deletePaymentMethod**](docs/SettingsApi.md#deletePaymentMethod) | **DELETE** /c/{company_id}/settings/payment_methods/{payment_method_id} | Delete Payment Method
*fattureInCloudSdk.SettingsApi* | [**deleteVatType**](docs/SettingsApi.md#deleteVatType) | **DELETE** /c/{company_id}/settings/vat_types/{vat_type_id} | Delete Vat Type
*fattureInCloudSdk.SettingsApi* | [**getPaymentAccount**](docs/SettingsApi.md#getPaymentAccount) | **GET** /c/{company_id}/settings/payment_accounts/{payment_account_id} | Get Payment Account
*fattureInCloudSdk.SettingsApi* | [**getPaymentMethod**](docs/SettingsApi.md#getPaymentMethod) | **GET** /c/{company_id}/settings/payment_methods/{payment_method_id} | Get Payment Method
*fattureInCloudSdk.SettingsApi* | [**getVatType**](docs/SettingsApi.md#getVatType) | **GET** /c/{company_id}/settings/vat_types/{vat_type_id} | Get Vat Type
*fattureInCloudSdk.SettingsApi* | [**modifyPaymentAccount**](docs/SettingsApi.md#modifyPaymentAccount) | **PUT** /c/{company_id}/settings/payment_accounts/{payment_account_id} | Modify Payment Account
*fattureInCloudSdk.SettingsApi* | [**modifyPaymentMethod**](docs/SettingsApi.md#modifyPaymentMethod) | **PUT** /c/{company_id}/settings/payment_methods/{payment_method_id} | Modify Payment Method
*fattureInCloudSdk.SettingsApi* | [**modifyVatType**](docs/SettingsApi.md#modifyVatType) | **PUT** /c/{company_id}/settings/vat_types/{vat_type_id} | Modify Vat Type
*fattureInCloudSdk.SuppliersApi* | [**createSupplier**](docs/SuppliersApi.md#createSupplier) | **POST** /c/{company_id}/entities/suppliers | Create Supplier
*fattureInCloudSdk.SuppliersApi* | [**deleteSupplier**](docs/SuppliersApi.md#deleteSupplier) | **DELETE** /c/{company_id}/entities/suppliers/{supplier_id} | Delete Supplier
*fattureInCloudSdk.SuppliersApi* | [**getSupplier**](docs/SuppliersApi.md#getSupplier) | **GET** /c/{company_id}/entities/suppliers/{supplier_id} | Get Supplier
*fattureInCloudSdk.SuppliersApi* | [**listSuppliers**](docs/SuppliersApi.md#listSuppliers) | **GET** /c/{company_id}/entities/suppliers | List Suppliers
*fattureInCloudSdk.SuppliersApi* | [**modifySupplier**](docs/SuppliersApi.md#modifySupplier) | **PUT** /c/{company_id}/entities/suppliers/{supplier_id} | Modify Supplier
*fattureInCloudSdk.TaxesApi* | [**createF24**](docs/TaxesApi.md#createF24) | **POST** /c/{company_id}/taxes | Create F24
*fattureInCloudSdk.TaxesApi* | [**deleteF24**](docs/TaxesApi.md#deleteF24) | **DELETE** /c/{company_id}/taxes/{document_id} | Delete F24
*fattureInCloudSdk.TaxesApi* | [**deleteF24Attachment**](docs/TaxesApi.md#deleteF24Attachment) | **DELETE** /c/{company_id}/taxes/{document_id}/attachment | Delete F24 Attachment
*fattureInCloudSdk.TaxesApi* | [**getF24**](docs/TaxesApi.md#getF24) | **GET** /c/{company_id}/taxes/{document_id} | Get F24
*fattureInCloudSdk.TaxesApi* | [**listF24**](docs/TaxesApi.md#listF24) | **GET** /c/{company_id}/taxes | List F24
*fattureInCloudSdk.TaxesApi* | [**modifyF24**](docs/TaxesApi.md#modifyF24) | **PUT** /c/{company_id}/taxes/{document_id} | Modify F24
*fattureInCloudSdk.TaxesApi* | [**uploadF24Attachment**](docs/TaxesApi.md#uploadF24Attachment) | **POST** /c/{company_id}/taxes/attachment | Upload F24 Attachment
*fattureInCloudSdk.UserApi* | [**getUserInfo**](docs/UserApi.md#getUserInfo) | **GET** /user/info | Get User Info
*fattureInCloudSdk.UserApi* | [**listUserCompanies**](docs/UserApi.md#listUserCompanies) | **GET** /user/companies | List User Companies


## Documentation for Models

 - [fattureInCloudSdk.ArchiveDocument](docs/ArchiveDocument.md)
 - [fattureInCloudSdk.AttachmentData](docs/AttachmentData.md)
 - [fattureInCloudSdk.CashbookEntry](docs/CashbookEntry.md)
 - [fattureInCloudSdk.CashbookEntryData](docs/CashbookEntryData.md)
 - [fattureInCloudSdk.CashbookEntryDataDocument](docs/CashbookEntryDataDocument.md)
 - [fattureInCloudSdk.CashbookEntryIn](docs/CashbookEntryIn.md)
 - [fattureInCloudSdk.CashbookEntryInData](docs/CashbookEntryInData.md)
 - [fattureInCloudSdk.CashbookEntryInOut](docs/CashbookEntryInOut.md)
 - [fattureInCloudSdk.CashbookEntryKind](docs/CashbookEntryKind.md)
 - [fattureInCloudSdk.CashbookEntryOut](docs/CashbookEntryOut.md)
 - [fattureInCloudSdk.CashbookEntryOutData](docs/CashbookEntryOutData.md)
 - [fattureInCloudSdk.CashbookEntryType](docs/CashbookEntryType.md)
 - [fattureInCloudSdk.City](docs/City.md)
 - [fattureInCloudSdk.Client](docs/Client.md)
 - [fattureInCloudSdk.ClientType](docs/ClientType.md)
 - [fattureInCloudSdk.Company](docs/Company.md)
 - [fattureInCloudSdk.CompanyInfo](docs/CompanyInfo.md)
 - [fattureInCloudSdk.CompanyInfoAccessInfo](docs/CompanyInfoAccessInfo.md)
 - [fattureInCloudSdk.CompanyInfoPlanInfo](docs/CompanyInfoPlanInfo.md)
 - [fattureInCloudSdk.CompanyInfoPlanInfoFunctions](docs/CompanyInfoPlanInfoFunctions.md)
 - [fattureInCloudSdk.CompanyInfoPlanInfoFunctionsStatus](docs/CompanyInfoPlanInfoFunctionsStatus.md)
 - [fattureInCloudSdk.CompanyInfoPlanInfoLimits](docs/CompanyInfoPlanInfoLimits.md)
 - [fattureInCloudSdk.CompanyType](docs/CompanyType.md)
 - [fattureInCloudSdk.ControlledCompany](docs/ControlledCompany.md)
 - [fattureInCloudSdk.CreateArchiveDocumentRequest](docs/CreateArchiveDocumentRequest.md)
 - [fattureInCloudSdk.CreateArchiveDocumentResponse](docs/CreateArchiveDocumentResponse.md)
 - [fattureInCloudSdk.CreateCashbookEntryRequest](docs/CreateCashbookEntryRequest.md)
 - [fattureInCloudSdk.CreateCashbookEntryResponse](docs/CreateCashbookEntryResponse.md)
 - [fattureInCloudSdk.CreateClientRequest](docs/CreateClientRequest.md)
 - [fattureInCloudSdk.CreateClientResponse](docs/CreateClientResponse.md)
 - [fattureInCloudSdk.CreateF24Request](docs/CreateF24Request.md)
 - [fattureInCloudSdk.CreateF24Response](docs/CreateF24Response.md)
 - [fattureInCloudSdk.CreateIssuedDocumentRequest](docs/CreateIssuedDocumentRequest.md)
 - [fattureInCloudSdk.CreateIssuedDocumentResponse](docs/CreateIssuedDocumentResponse.md)
 - [fattureInCloudSdk.CreatePaymentAccountRequest](docs/CreatePaymentAccountRequest.md)
 - [fattureInCloudSdk.CreatePaymentAccountResponse](docs/CreatePaymentAccountResponse.md)
 - [fattureInCloudSdk.CreatePaymentMethodRequest](docs/CreatePaymentMethodRequest.md)
 - [fattureInCloudSdk.CreatePaymentMethodResponse](docs/CreatePaymentMethodResponse.md)
 - [fattureInCloudSdk.CreateProductRequest](docs/CreateProductRequest.md)
 - [fattureInCloudSdk.CreateProductResponse](docs/CreateProductResponse.md)
 - [fattureInCloudSdk.CreateReceiptRequest](docs/CreateReceiptRequest.md)
 - [fattureInCloudSdk.CreateReceiptResponse](docs/CreateReceiptResponse.md)
 - [fattureInCloudSdk.CreateReceivedDocumentRequest](docs/CreateReceivedDocumentRequest.md)
 - [fattureInCloudSdk.CreateReceivedDocumentResponse](docs/CreateReceivedDocumentResponse.md)
 - [fattureInCloudSdk.CreateSupplierRequest](docs/CreateSupplierRequest.md)
 - [fattureInCloudSdk.CreateSupplierResponse](docs/CreateSupplierResponse.md)
 - [fattureInCloudSdk.CreateVatTypeRequest](docs/CreateVatTypeRequest.md)
 - [fattureInCloudSdk.CreateVatTypeResponse](docs/CreateVatTypeResponse.md)
 - [fattureInCloudSdk.Currency](docs/Currency.md)
 - [fattureInCloudSdk.DefaultPaymentTermsType](docs/DefaultPaymentTermsType.md)
 - [fattureInCloudSdk.DocumentTemplate](docs/DocumentTemplate.md)
 - [fattureInCloudSdk.EinvoiceRejectionReason](docs/EinvoiceRejectionReason.md)
 - [fattureInCloudSdk.EmailData](docs/EmailData.md)
 - [fattureInCloudSdk.EmailDataDefaultSenderEmail](docs/EmailDataDefaultSenderEmail.md)
 - [fattureInCloudSdk.EmailSchedule](docs/EmailSchedule.md)
 - [fattureInCloudSdk.EmailScheduleInclude](docs/EmailScheduleInclude.md)
 - [fattureInCloudSdk.Entity](docs/Entity.md)
 - [fattureInCloudSdk.EntityType](docs/EntityType.md)
 - [fattureInCloudSdk.F24](docs/F24.md)
 - [fattureInCloudSdk.F24Status](docs/F24Status.md)
 - [fattureInCloudSdk.FunctionStatus](docs/FunctionStatus.md)
 - [fattureInCloudSdk.GetArchiveDocumentResponse](docs/GetArchiveDocumentResponse.md)
 - [fattureInCloudSdk.GetCashbookEntryResponse](docs/GetCashbookEntryResponse.md)
 - [fattureInCloudSdk.GetClientResponse](docs/GetClientResponse.md)
 - [fattureInCloudSdk.GetCompanyInfoResponse](docs/GetCompanyInfoResponse.md)
 - [fattureInCloudSdk.GetEInvoiceRejectionReasonResponse](docs/GetEInvoiceRejectionReasonResponse.md)
 - [fattureInCloudSdk.GetEmailDataResponse](docs/GetEmailDataResponse.md)
 - [fattureInCloudSdk.GetExistingIssuedDocumentTotalsRequest](docs/GetExistingIssuedDocumentTotalsRequest.md)
 - [fattureInCloudSdk.GetExistingIssuedDocumentTotalsResponse](docs/GetExistingIssuedDocumentTotalsResponse.md)
 - [fattureInCloudSdk.GetExistingReceivedDocumentTotalsRequest](docs/GetExistingReceivedDocumentTotalsRequest.md)
 - [fattureInCloudSdk.GetExistingReceivedDocumentTotalsResponse](docs/GetExistingReceivedDocumentTotalsResponse.md)
 - [fattureInCloudSdk.GetF24Response](docs/GetF24Response.md)
 - [fattureInCloudSdk.GetIssuedDocumentPreCreateInfoResponse](docs/GetIssuedDocumentPreCreateInfoResponse.md)
 - [fattureInCloudSdk.GetIssuedDocumentResponse](docs/GetIssuedDocumentResponse.md)
 - [fattureInCloudSdk.GetNewIssuedDocumentTotalsRequest](docs/GetNewIssuedDocumentTotalsRequest.md)
 - [fattureInCloudSdk.GetNewIssuedDocumentTotalsResponse](docs/GetNewIssuedDocumentTotalsResponse.md)
 - [fattureInCloudSdk.GetNewReceivedDocumentTotalsRequest](docs/GetNewReceivedDocumentTotalsRequest.md)
 - [fattureInCloudSdk.GetNewReceivedDocumentTotalsResponse](docs/GetNewReceivedDocumentTotalsResponse.md)
 - [fattureInCloudSdk.GetPaymentAccountResponse](docs/GetPaymentAccountResponse.md)
 - [fattureInCloudSdk.GetPaymentMethodResponse](docs/GetPaymentMethodResponse.md)
 - [fattureInCloudSdk.GetProductResponse](docs/GetProductResponse.md)
 - [fattureInCloudSdk.GetReceiptPreCreateInfoResponse](docs/GetReceiptPreCreateInfoResponse.md)
 - [fattureInCloudSdk.GetReceiptResponse](docs/GetReceiptResponse.md)
 - [fattureInCloudSdk.GetReceiptsMonthlyTotalsResponse](docs/GetReceiptsMonthlyTotalsResponse.md)
 - [fattureInCloudSdk.GetReceivedDocumentPreCreateInfoResponse](docs/GetReceivedDocumentPreCreateInfoResponse.md)
 - [fattureInCloudSdk.GetReceivedDocumentResponse](docs/GetReceivedDocumentResponse.md)
 - [fattureInCloudSdk.GetSupplierResponse](docs/GetSupplierResponse.md)
 - [fattureInCloudSdk.GetUserInfoResponse](docs/GetUserInfoResponse.md)
 - [fattureInCloudSdk.GetUserInfoResponseEmailConfirmationState](docs/GetUserInfoResponseEmailConfirmationState.md)
 - [fattureInCloudSdk.GetUserInfoResponseInfo](docs/GetUserInfoResponseInfo.md)
 - [fattureInCloudSdk.GetVatTypeResponse](docs/GetVatTypeResponse.md)
 - [fattureInCloudSdk.IssuedDocument](docs/IssuedDocument.md)
 - [fattureInCloudSdk.IssuedDocumentEiData](docs/IssuedDocumentEiData.md)
 - [fattureInCloudSdk.IssuedDocumentExtraData](docs/IssuedDocumentExtraData.md)
 - [fattureInCloudSdk.IssuedDocumentItemsListItem](docs/IssuedDocumentItemsListItem.md)
 - [fattureInCloudSdk.IssuedDocumentPaymentsListItem](docs/IssuedDocumentPaymentsListItem.md)
 - [fattureInCloudSdk.IssuedDocumentPreCreateInfo](docs/IssuedDocumentPreCreateInfo.md)
 - [fattureInCloudSdk.IssuedDocumentPreCreateInfoDefaultValues](docs/IssuedDocumentPreCreateInfoDefaultValues.md)
 - [fattureInCloudSdk.IssuedDocumentPreCreateInfoExtraDataDefaultValues](docs/IssuedDocumentPreCreateInfoExtraDataDefaultValues.md)
 - [fattureInCloudSdk.IssuedDocumentPreCreateInfoItemsDefaultValues](docs/IssuedDocumentPreCreateInfoItemsDefaultValues.md)
 - [fattureInCloudSdk.IssuedDocumentStatus](docs/IssuedDocumentStatus.md)
 - [fattureInCloudSdk.IssuedDocumentTotals](docs/IssuedDocumentTotals.md)
 - [fattureInCloudSdk.IssuedDocumentTotalsVatList](docs/IssuedDocumentTotalsVatList.md)
 - [fattureInCloudSdk.IssuedDocumentTotalsVatListVatItem](docs/IssuedDocumentTotalsVatListVatItem.md)
 - [fattureInCloudSdk.IssuedDocumentType](docs/IssuedDocumentType.md)
 - [fattureInCloudSdk.Language](docs/Language.md)
 - [fattureInCloudSdk.ListArchiveCategoriesResponse](docs/ListArchiveCategoriesResponse.md)
 - [fattureInCloudSdk.ListArchiveDocumentsResponse](docs/ListArchiveDocumentsResponse.md)
 - [fattureInCloudSdk.ListArchiveDocumentsResponsePage](docs/ListArchiveDocumentsResponsePage.md)
 - [fattureInCloudSdk.ListCashbookEntriesResponse](docs/ListCashbookEntriesResponse.md)
 - [fattureInCloudSdk.ListCitiesResponse](docs/ListCitiesResponse.md)
 - [fattureInCloudSdk.ListClientsResponse](docs/ListClientsResponse.md)
 - [fattureInCloudSdk.ListClientsResponsePage](docs/ListClientsResponsePage.md)
 - [fattureInCloudSdk.ListCostCentersResponse](docs/ListCostCentersResponse.md)
 - [fattureInCloudSdk.ListCountriesResponse](docs/ListCountriesResponse.md)
 - [fattureInCloudSdk.ListCurrenciesResponse](docs/ListCurrenciesResponse.md)
 - [fattureInCloudSdk.ListDeliveryNotesDefaultCausalsResponse](docs/ListDeliveryNotesDefaultCausalsResponse.md)
 - [fattureInCloudSdk.ListF24Response](docs/ListF24Response.md)
 - [fattureInCloudSdk.ListF24ResponseAggregatedData](docs/ListF24ResponseAggregatedData.md)
 - [fattureInCloudSdk.ListF24ResponseAggregation](docs/ListF24ResponseAggregation.md)
 - [fattureInCloudSdk.ListF24ResponsePage](docs/ListF24ResponsePage.md)
 - [fattureInCloudSdk.ListIssuedDocumentsResponse](docs/ListIssuedDocumentsResponse.md)
 - [fattureInCloudSdk.ListIssuedDocumentsResponsePage](docs/ListIssuedDocumentsResponsePage.md)
 - [fattureInCloudSdk.ListLanguagesResponse](docs/ListLanguagesResponse.md)
 - [fattureInCloudSdk.ListPaymentAccountsResponse](docs/ListPaymentAccountsResponse.md)
 - [fattureInCloudSdk.ListPaymentMethodsResponse](docs/ListPaymentMethodsResponse.md)
 - [fattureInCloudSdk.ListProductCategoriesResponse](docs/ListProductCategoriesResponse.md)
 - [fattureInCloudSdk.ListProductsResponse](docs/ListProductsResponse.md)
 - [fattureInCloudSdk.ListProductsResponsePage](docs/ListProductsResponsePage.md)
 - [fattureInCloudSdk.ListReceiptsResponse](docs/ListReceiptsResponse.md)
 - [fattureInCloudSdk.ListReceiptsResponsePage](docs/ListReceiptsResponsePage.md)
 - [fattureInCloudSdk.ListReceivedDocumentCategoriesResponse](docs/ListReceivedDocumentCategoriesResponse.md)
 - [fattureInCloudSdk.ListReceivedDocumentsResponse](docs/ListReceivedDocumentsResponse.md)
 - [fattureInCloudSdk.ListReceivedDocumentsResponsePage](docs/ListReceivedDocumentsResponsePage.md)
 - [fattureInCloudSdk.ListRevenueCentersResponse](docs/ListRevenueCentersResponse.md)
 - [fattureInCloudSdk.ListSuppliersResponse](docs/ListSuppliersResponse.md)
 - [fattureInCloudSdk.ListSuppliersResponsePage](docs/ListSuppliersResponsePage.md)
 - [fattureInCloudSdk.ListTemplatesResponse](docs/ListTemplatesResponse.md)
 - [fattureInCloudSdk.ListUnitsOfMeasureResponse](docs/ListUnitsOfMeasureResponse.md)
 - [fattureInCloudSdk.ListUserCompaniesResponse](docs/ListUserCompaniesResponse.md)
 - [fattureInCloudSdk.ListUserCompaniesResponseData](docs/ListUserCompaniesResponseData.md)
 - [fattureInCloudSdk.ListVatTypesResponse](docs/ListVatTypesResponse.md)
 - [fattureInCloudSdk.ModifyArchiveDocumentRequest](docs/ModifyArchiveDocumentRequest.md)
 - [fattureInCloudSdk.ModifyArchiveDocumentResponse](docs/ModifyArchiveDocumentResponse.md)
 - [fattureInCloudSdk.ModifyCashbookEntryRequest](docs/ModifyCashbookEntryRequest.md)
 - [fattureInCloudSdk.ModifyCashbookEntryResponse](docs/ModifyCashbookEntryResponse.md)
 - [fattureInCloudSdk.ModifyClientRequest](docs/ModifyClientRequest.md)
 - [fattureInCloudSdk.ModifyClientResponse](docs/ModifyClientResponse.md)
 - [fattureInCloudSdk.ModifyF24Request](docs/ModifyF24Request.md)
 - [fattureInCloudSdk.ModifyF24Response](docs/ModifyF24Response.md)
 - [fattureInCloudSdk.ModifyIssuedDocumentRequest](docs/ModifyIssuedDocumentRequest.md)
 - [fattureInCloudSdk.ModifyIssuedDocumentResponse](docs/ModifyIssuedDocumentResponse.md)
 - [fattureInCloudSdk.ModifyPaymentAccountRequest](docs/ModifyPaymentAccountRequest.md)
 - [fattureInCloudSdk.ModifyPaymentAccountResponse](docs/ModifyPaymentAccountResponse.md)
 - [fattureInCloudSdk.ModifyPaymentMethodRequest](docs/ModifyPaymentMethodRequest.md)
 - [fattureInCloudSdk.ModifyPaymentMethodResponse](docs/ModifyPaymentMethodResponse.md)
 - [fattureInCloudSdk.ModifyProductRequest](docs/ModifyProductRequest.md)
 - [fattureInCloudSdk.ModifyProductResponse](docs/ModifyProductResponse.md)
 - [fattureInCloudSdk.ModifyReceiptRequest](docs/ModifyReceiptRequest.md)
 - [fattureInCloudSdk.ModifyReceiptResponse](docs/ModifyReceiptResponse.md)
 - [fattureInCloudSdk.ModifyReceivedDocumentRequest](docs/ModifyReceivedDocumentRequest.md)
 - [fattureInCloudSdk.ModifyReceivedDocumentResponse](docs/ModifyReceivedDocumentResponse.md)
 - [fattureInCloudSdk.ModifySupplierRequest](docs/ModifySupplierRequest.md)
 - [fattureInCloudSdk.ModifySupplierResponse](docs/ModifySupplierResponse.md)
 - [fattureInCloudSdk.ModifyVatTypeRequest](docs/ModifyVatTypeRequest.md)
 - [fattureInCloudSdk.ModifyVatTypeResponse](docs/ModifyVatTypeResponse.md)
 - [fattureInCloudSdk.MonthlyTotal](docs/MonthlyTotal.md)
 - [fattureInCloudSdk.OriginalDocumentType](docs/OriginalDocumentType.md)
 - [fattureInCloudSdk.Pagination](docs/Pagination.md)
 - [fattureInCloudSdk.PaymentAccount](docs/PaymentAccount.md)
 - [fattureInCloudSdk.PaymentAccountType](docs/PaymentAccountType.md)
 - [fattureInCloudSdk.PaymentMethod](docs/PaymentMethod.md)
 - [fattureInCloudSdk.PaymentMethodDetails](docs/PaymentMethodDetails.md)
 - [fattureInCloudSdk.PaymentMethodType](docs/PaymentMethodType.md)
 - [fattureInCloudSdk.PermissionLevel](docs/PermissionLevel.md)
 - [fattureInCloudSdk.Permissions](docs/Permissions.md)
 - [fattureInCloudSdk.PermissionsFicIssuedDocumentsDetailed](docs/PermissionsFicIssuedDocumentsDetailed.md)
 - [fattureInCloudSdk.Product](docs/Product.md)
 - [fattureInCloudSdk.Receipt](docs/Receipt.md)
 - [fattureInCloudSdk.ReceiptItemsListItem](docs/ReceiptItemsListItem.md)
 - [fattureInCloudSdk.ReceiptPreCreateInfo](docs/ReceiptPreCreateInfo.md)
 - [fattureInCloudSdk.ReceiptType](docs/ReceiptType.md)
 - [fattureInCloudSdk.ReceivedDocument](docs/ReceivedDocument.md)
 - [fattureInCloudSdk.ReceivedDocumentEntity](docs/ReceivedDocumentEntity.md)
 - [fattureInCloudSdk.ReceivedDocumentInfo](docs/ReceivedDocumentInfo.md)
 - [fattureInCloudSdk.ReceivedDocumentInfoDefaultValues](docs/ReceivedDocumentInfoDefaultValues.md)
 - [fattureInCloudSdk.ReceivedDocumentInfoItemsDefaultValues](docs/ReceivedDocumentInfoItemsDefaultValues.md)
 - [fattureInCloudSdk.ReceivedDocumentItemsListItem](docs/ReceivedDocumentItemsListItem.md)
 - [fattureInCloudSdk.ReceivedDocumentPaymentsListItem](docs/ReceivedDocumentPaymentsListItem.md)
 - [fattureInCloudSdk.ReceivedDocumentPaymentsListItemPaymentTerms](docs/ReceivedDocumentPaymentsListItemPaymentTerms.md)
 - [fattureInCloudSdk.ReceivedDocumentTotals](docs/ReceivedDocumentTotals.md)
 - [fattureInCloudSdk.ReceivedDocumentType](docs/ReceivedDocumentType.md)
 - [fattureInCloudSdk.ScheduleEmailRequest](docs/ScheduleEmailRequest.md)
 - [fattureInCloudSdk.SendEInvoiceRequest](docs/SendEInvoiceRequest.md)
 - [fattureInCloudSdk.SendEInvoiceRequestData](docs/SendEInvoiceRequestData.md)
 - [fattureInCloudSdk.SendEInvoiceResponse](docs/SendEInvoiceResponse.md)
 - [fattureInCloudSdk.SendEInvoiceResponseData](docs/SendEInvoiceResponseData.md)
 - [fattureInCloudSdk.SenderEmail](docs/SenderEmail.md)
 - [fattureInCloudSdk.ShowTotalsMode](docs/ShowTotalsMode.md)
 - [fattureInCloudSdk.Supplier](docs/Supplier.md)
 - [fattureInCloudSdk.SupplierType](docs/SupplierType.md)
 - [fattureInCloudSdk.UploadArchiveAttachmentResponse](docs/UploadArchiveAttachmentResponse.md)
 - [fattureInCloudSdk.UploadF24AttachmentResponse](docs/UploadF24AttachmentResponse.md)
 - [fattureInCloudSdk.UploadIssuedDocumentAttachmentResponse](docs/UploadIssuedDocumentAttachmentResponse.md)
 - [fattureInCloudSdk.UploadReceivedDocumentAttachmentResponse](docs/UploadReceivedDocumentAttachmentResponse.md)
 - [fattureInCloudSdk.User](docs/User.md)
 - [fattureInCloudSdk.UserCompanyRole](docs/UserCompanyRole.md)
 - [fattureInCloudSdk.VatKind](docs/VatKind.md)
 - [fattureInCloudSdk.VatType](docs/VatType.md)
 - [fattureInCloudSdk.VerifyEInvoiceXmlErrorResponse](docs/VerifyEInvoiceXmlErrorResponse.md)
 - [fattureInCloudSdk.VerifyEInvoiceXmlErrorResponseError](docs/VerifyEInvoiceXmlErrorResponseError.md)
 - [fattureInCloudSdk.VerifyEInvoiceXmlErrorResponseExtra](docs/VerifyEInvoiceXmlErrorResponseExtra.md)
 - [fattureInCloudSdk.VerifyEInvoiceXmlResponse](docs/VerifyEInvoiceXmlResponse.md)
 - [fattureInCloudSdk.VerifyEInvoiceXmlResponseData](docs/VerifyEInvoiceXmlResponseData.md)


## Documentation for Authorization



### OAuth2AuthenticationCodeFlow


- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://api-v2.fattureincloud.it/oauth/authorize
- **Scopes**: 
  - _entity.clients:r_: 
  - _entity.clients:a_: 
  - _entity.suppliers:r_: 
  - _entity.suppliers:a_: 
  - _products:r_: 
  - _products:a_: 
  - _issued_documents.invoice:r_: 
  - _issued_documents.credit_note:r_: 
  - _issued_documents.receipt:r_: 
  - _issued_documents.order:r_: 
  - _issued_documents.quote:r_: 
  - _issued_documents.proforma:r_: 
  - _issued_documents.delivery_note:r_: 
  - _issued_documents.invoice:a_: 
  - _issued_documents.credit_note:a_: 
  - _issued_documents.receipt:a_: 
  - _issued_documents.order:a_: 
  - _issued_documents.quote:a_: 
  - _issued_documents.proforma:a_: 
  - _issued_documents.delivery_note:a_: 
  - _received_documents:r_: 
  - _received_documents:a_: 
  - _stock:r_: 
  - _stock:a_: 
  - _receipts:r_: 
  - _receipts:a_: 
  - _taxes:r_: 
  - _taxes:a_: 
  - _archive:r_: 
  - _archive:a_: 
  - _cashbook:r_: 
  - _cashbook:a_: 
  - _settings:r_: 
  - _settings:a_: 
  - _situation:r_: 

