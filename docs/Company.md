# fattureInCloudSdk.Company

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Company unique identifier. | [optional] 
**name** | **String** | Company name. | [optional] 
**type** | **String** | Company type. | [optional] 
**access_token** | **String** | CompanyAuthentication token for this company. [Only if type&#x3D;company] | [optional] 
**permissions** | [**Permissions**](Permissions.md) |  | [optional] 
**controlled_companies** | [**[Company]**](Company.md) | List of controlled companies. [Only if type&#x3D;accountant] | [optional] 
**connection_id** | **Number** | Company connection id. | [optional] 
**dic** | **Boolean** | Determine if the company has a DIC account. | [optional] 
**fic** | **Boolean** | Determine if the company has a FIC account. | [optional] 
**fic_license_expire** | **Date** | Company FIC license expiration date. | [optional] 
**fic_plan** | **String** | Company FIC account plan. | [optional] 
**tax_code** | **String** | Tax code. | [optional] 



## Enum: TypeEnum


* `company` (value: `"company"`)

* `accountant` (value: `"accountant"`)




