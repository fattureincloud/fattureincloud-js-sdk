# fattureInCloudSdk.PriceListsApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPriceListItems**](PriceListsApi.md#getPriceListItems) | **GET** /c/{company_id}/price_lists/{price_list_id}/items | Get PriceList Items List
[**getPriceLists**](PriceListsApi.md#getPriceLists) | **GET** /c/{company_id}/price_lists | Get PriceLists



## getPriceListItems

> GetPriceListItemsResponse getPriceListItems(companyId, priceListId)

Get PriceList Items List

Retrieves all the Items of a PriceList

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.PriceListsApi();
let companyId = 12345; // Number | The ID of the company.
let priceListId = "priceListId_example"; // String | 
apiInstance.getPriceListItems(companyId, priceListId).then((result) => {
  console.log('API called successfully. Returned result: ' + JSON.stringify(result));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **priceListId** | **String**|  | 

### Return type

[**GetPriceListItemsResponse**](GetPriceListItemsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPriceLists

> ListPriceListsResponse getPriceLists(companyId)

Get PriceLists

Retrieves all price lists of the company

### Example

```javascript
import fattureInCloudSdk from '@fattureincloud/fattureincloud-js-sdk';
let defaultClient = fattureInCloudSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
let OAuth2AuthenticationCodeFlow = defaultClient.authentications['OAuth2AuthenticationCodeFlow'];
OAuth2AuthenticationCodeFlow.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new fattureInCloudSdk.PriceListsApi();
let companyId = 12345; // Number | The ID of the company.
apiInstance.getPriceLists(companyId).then((result) => {
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

[**ListPriceListsResponse**](ListPriceListsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

