# fattureInCloudSdk.CompaniesApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCompanyInfo**](CompaniesApi.md#getCompanyInfo) | **GET** /c/{company_id}/company/info | Get Company Info
[**getCompanyPlanUsage**](CompaniesApi.md#getCompanyPlanUsage) | **GET** /c/{company_id}/company/plan_usage | Get Company Plan Usage



## getCompanyInfo

> GetCompanyInfoResponse getCompanyInfo(companyId)

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
let companyId = 12345; // Number | The ID of the company.
apiInstance.getCompanyInfo(companyId).then((result) => {
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

[**GetCompanyInfoResponse**](GetCompanyInfoResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCompanyPlanUsage

> GetCompanyPlanUsageResponse getCompanyPlanUsage(companyId, category)

Get Company Plan Usage

Gets the company limits usage.

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.CompaniesApi();
let companyId = 12345; // Number | The ID of the company.
let category = "category_example"; // String | Category
apiInstance.getCompanyPlanUsage(companyId, category).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **category** | **String**| Category | 

### Return type

[**GetCompanyPlanUsageResponse**](GetCompanyPlanUsageResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

