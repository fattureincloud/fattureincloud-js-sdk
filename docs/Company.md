# fattureInCloudSdk.Company

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Company unique identifier. | [optional] 
**name** | **String** | Company name. | [optional] 
**type** | [**CompanyType**](CompanyType.md) |  | [optional] 
**accessToken** | **String** | CompanyAuthentication token for this company. [Only if type&#x3D;company] | [optional] 
**controlledCompanies** | [**[Company]**](Company.md) | List of controlled companies. [Only if type&#x3D;accountant] | [optional] 
**connectionId** | **Number** | Company connection id. | [optional] 
**taxCode** | **String** | Tax code. | [optional] 


