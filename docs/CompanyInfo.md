# @FattureincloudFattureincloudJsSdk.CompanyInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Company unique identifier. | [optional] 
**name** | **String** | Company name. | [optional] 
**email** | **String** | Company email. | [optional] 
**type** | **String** | Company type. | [optional] 
**fic** | **Boolean** | Determine if the company has a FIC account. | [optional] 
**ficPlanName** | **String** | Company FIC account plan. | [optional] 
**ficLicenseType** | **String** | Company FIC account plan.  | [optional] 
**ficPaymentSubject** | **String** | Company FIC account payment subject. | [optional] 
**ficLicenseExpire** | **Date** | Company FIC license expiration date. | [optional] 
**ficSignupDate** | **String** | FIC account sign up date. | [optional] 
**useFic** | **Boolean** | Determine if the FIC account is actually used. If type&#x3D;\&quot;company\&quot; this is always true; if type&#x3D;\&quot;accountant\&quot; it can be true or false. If false, it means that the accountant uses FIC only to control other companies and not to control itself. | [optional] 
**ficNeedSetup** | **Boolean** | Indicate that the initial setup for FIC is required. | [optional] 
**dic** | **Boolean** | Determine if the company has a DIC account. | [optional] 
**dicPlan** | **String** | Company DIC account plan. | [optional] 
**dicLicenseExpire** | **Date** | Company FIC license expiration date. | [optional] 
**useDic** | **Boolean** | Determine if the DIC account is actually used. If type&#x3D;“company” this is always true; if type&#x3D;“accountant” it can be true or false. If false, it means that the accountant uses DIC only to control other companies and not to control itself. | [optional] 
**dicNeedSetup** | **Boolean** | Indicate that the initial setup for DIC is required. | [optional] 
**accessInfo** | [**CompanyInfoAccessInfo**](CompanyInfoAccessInfo.md) |  | [optional] 
**planInfo** | [**CompanyInfoPlanInfo**](CompanyInfoPlanInfo.md) |  | [optional] 
**canUseCoupon** | **Boolean** | Determine if a coupon can be used. | [optional] 
**accountantId** | **Number** | Accountant unique identifier. | [optional] 
**dicLicenseType** | **String** | Company DIC account license type. | [optional] 
**dicPaymentSubject** | **String** | Company DIC account payment subject. | [optional] 
**dicPlanName** | **String** | Company DIC account plan name. | [optional] 
**dicSignupDate** | **String** | DIC account sign up date. | [optional] 
**isAccountant** | **Boolean** | Determine if the logged account is an accountant. | [optional] 
**registrationService** | **String** |  | [optional] 



## Enum: TypeEnum


* `company` (value: `"company"`)

* `accountant` (value: `"accountant"`)





## Enum: FicPlanNameEnum


* `trial` (value: `"trial"`)

* `standard` (value: `"standard"`)

* `premium` (value: `"premium"`)

* `premium_plus` (value: `"premium_plus"`)





## Enum: DicPlanEnum


* `trial` (value: `"trial"`)




