# fattureInCloudSdk.CompaniesApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCompanyInfo**](CompaniesApi.md#getCompanyInfo) | **GET** /c/{company_id}/company/info | Get Company Info



## getCompanyInfo

> GetCompanyInfoResponse getCompanyInfo(companyId)

Get Company Info

Gets the company detailed info.

### Example

```javascript
import fattureInCloudSdk from 'fatture_in_cloud_api_v2_api_reference';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.CompaniesApi();
let companyId = 12345; // Number | The ID of the company.
apiInstance.getCompanyInfo(companyId, (error, data, response) => {
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

[**GetCompanyInfoResponse**](GetCompanyInfoResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

