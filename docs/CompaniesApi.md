# fattureInCloudSdk.CompaniesApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCompanyInfo**](CompaniesApi.md#getCompanyInfo) | **GET** /c/{company_id}/company/info | Get Company Info



## getCompanyInfo

> GetCompanyInfoResponse getCompanyInfo(company_id)

Get Company Info

Gets the company detailed info.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.CompaniesApi();
let company_id = 12345; // Number | The ID of the company.
apiInstance.getCompanyInfo(company_id).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **Number**| The ID of the company. | 

### Return type

[**GetCompanyInfoResponse**](GetCompanyInfoResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

