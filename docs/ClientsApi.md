# fattureInCloudSdk.ClientsApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createClient**](ClientsApi.md#createClient) | **POST** /c/{company_id}/entities/clients | Create Client
[**deleteClient**](ClientsApi.md#deleteClient) | **DELETE** /c/{company_id}/entities/clients/{client_id} | Delete Client
[**getClient**](ClientsApi.md#getClient) | **GET** /c/{company_id}/entities/clients/{client_id} | Get Client
[**listClients**](ClientsApi.md#listClients) | **GET** /c/{company_id}/entities/clients | List Clients
[**modifyClient**](ClientsApi.md#modifyClient) | **PUT** /c/{company_id}/entities/clients/{client_id} | Modify Client



## createClient

> CreateClientResponse createClient(companyId, opts)

Create Client

Creates a new client.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ClientsApi();
let companyId = 12345; // Number | The ID of the company.
let opts = {
  'createClientRequest': {"data":{"code":"AE86","name":"Avv. Maria Rossi","type":"person","first_name":"Maria","last_name":"Rossi","contact_person":"","vat_number":"IT12345640962","tax_code":"BLTGNI5ABCDA794E","address_street":"Via Roma, 1","address_postal_code":"20900","address_city":"Milano","address_province":"MI","address_extra":"","country":"Italia","email":"maria.rossi@example.com","certified_email":"maria.rossi@pec.example.com","phone":"1234567890","fax":"","notes":"","default_payment_terms":1,"default_payment_terms_type":"standard","bank_name":"Indesa","bank_iban":"IT40P123456781000000123456","bank_swift_code":"AK86PCT","shipping_address":"Corso Magellano 4","e_invoice":true,"ei_code":"111111","default_vat":{"id":54321,"value":45,"description":"","is_disabled":false}}} // CreateClientRequest | The client to create
};
apiInstance.createClient(companyId, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **createClientRequest** | [**CreateClientRequest**](CreateClientRequest.md)| The client to create | [optional] 

### Return type

[**CreateClientResponse**](CreateClientResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteClient

> deleteClient(companyId, clientId)

Delete Client

Deletes the specified client.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ClientsApi();
let companyId = 12345; // Number | The ID of the company.
let clientId = 56; // Number | The ID of the client.
apiInstance.deleteClient(companyId, clientId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **clientId** | **Number**| The ID of the client. | 

### Return type

null (empty response body)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getClient

> GetClientResponse getClient(companyId, clientId, opts)

Get Client

Gets the specified client.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ClientsApi();
let companyId = 12345; // Number | The ID of the company.
let clientId = 56; // Number | The ID of the client.
let opts = {
  'fields': "fields_example", // String | List of comma-separated fields.
  'fieldset': "fieldset_example" // String | Name of the fieldset.
};
apiInstance.getClient(companyId, clientId, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **clientId** | **Number**| The ID of the client. | 
 **fields** | **String**| List of comma-separated fields. | [optional] 
 **fieldset** | **String**| Name of the fieldset. | [optional] 

### Return type

[**GetClientResponse**](GetClientResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listClients

> ListClientsResponse listClients(companyId, opts)

List Clients

Lists the clients.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ClientsApi();
let companyId = 12345; // Number | The ID of the company.
let opts = {
  'fields': "fields_example", // String | List of comma-separated fields.
  'fieldset': "fieldset_example", // String | Name of the fieldset.
  'sort': "sort_example", // String | List of comma-separated fields for result sorting (minus for desc sorting).
  'page': 1, // Number | The page to retrieve.
  'perPage': 5, // Number | The size of the page.
  'q': "q_example" // String | Query for filtering the results.
};
apiInstance.listClients(companyId, opts).then((result) => {
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
 **sort** | **String**| List of comma-separated fields for result sorting (minus for desc sorting). | [optional] 
 **page** | **Number**| The page to retrieve. | [optional] [default to 1]
 **perPage** | **Number**| The size of the page. | [optional] [default to 5]
 **q** | **String**| Query for filtering the results. | [optional] 

### Return type

[**ListClientsResponse**](ListClientsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyClient

> ModifyClientResponse modifyClient(companyId, clientId, opts)

Modify Client

Modifies the specified client.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.ClientsApi();
let companyId = 12345; // Number | The ID of the company.
let clientId = 56; // Number | The ID of the client.
let opts = {
  'modifyClientRequest': {"data":{"code":"AE86","name":"Avv. Maria Rossi","type":"person","first_name":"Maria","last_name":"Rossi","contact_person":"","vat_number":"IT12345640962","tax_code":"BLTGNI5ABCDA794E","address_street":"Via Roma, 1","address_postal_code":"20900","address_city":"Milano","address_province":"MI","address_extra":"","country":"Italia","email":"maria.rossi@example.com","certified_email":"maria.rossi@pec.example.com","phone":"1234567890","fax":"","notes":"","default_payment_terms":1,"default_payment_terms_type":"standard","bank_name":"Indesa","bank_iban":"IT40P123456781000000123456","bank_swift_code":"AK86PCT","shipping_address":"Corso Magellano 4","e_invoice":true,"ei_code":"111111","default_vat":{"id":54321,"value":45,"description":"","is_disabled":false}}} // ModifyClientRequest | The modified Client. First level parameters are managed in delta mode.
};
apiInstance.modifyClient(companyId, clientId, opts).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **clientId** | **Number**| The ID of the client. | 
 **modifyClientRequest** | [**ModifyClientRequest**](ModifyClientRequest.md)| The modified Client. First level parameters are managed in delta mode. | [optional] 

### Return type

[**ModifyClientResponse**](ModifyClientResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

