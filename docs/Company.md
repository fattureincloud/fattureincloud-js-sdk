# fattureInCloudSdk.Company

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Company id | [optional] 
**name** | **String** | Company name | [optional] 
**type** | [**CompanyType**](CompanyType.md) |  | [optional] 
**accessToken** | **String** | Company authentication token for this company. [Only if type&#x3D;company] | [optional] 
**controlledCompanies** | [**[ControlledCompany]**](ControlledCompany.md) | Company list of controlled companies [Only if type&#x3D;accountant] | [optional] 
**ficLicenseExpire** | **Date** |  | [optional] 
**ficPlan** | [**FattureInCloudPlanType**](FattureInCloudPlanType.md) |  | [optional] 
**connectionId** | **Number** | Company connection id | [optional] 
**taxCode** | **String** | Company tax code | [optional] 


