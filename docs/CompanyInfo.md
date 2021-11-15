# fattureInCloudSdk.CompanyInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Company unique identifier. | [optional] 
**name** | **String** | Company name. | [optional] 
**email** | **String** | Company email. | [optional] 
**type** | **String** | Company type. | [optional] 
**fic** | **Boolean** | Determine if the company has a FIC account. | [optional] 
**fic_plan_name** | **String** | Company FIC account plan. | [optional] 
**fic_license_type** | **String** | Company FIC account plan.  | [optional] 
**fic_payment_subject** | **String** | Company FIC account payment subject. | [optional] 
**fic_license_expire** | **Date** | Company FIC license expiration date. | [optional] 
**fic_signup_date** | **String** | FIC account sign up date. | [optional] 
**use_fic** | **Boolean** | Determine if the FIC account is actually used. If type&#x3D;\&quot;company\&quot; this is always true; if type&#x3D;\&quot;accountant\&quot; it can be true or false. If false, it means that the accountant uses FIC only to control other companies and not to control itself. | [optional] 
**fic_need_setup** | **Boolean** | Indicate that the initial setup for FIC is required. | [optional] 
**dic** | **Boolean** | Determine if the company has a DIC account. | [optional] 
**dic_plan** | **String** | Company DIC account plan. | [optional] 
**dic_license_expire** | **Date** | Company FIC license expiration date. | [optional] 
**use_dic** | **Boolean** | Determine if the DIC account is actually used. If type&#x3D;“company” this is always true; if type&#x3D;“accountant” it can be true or false. If false, it means that the accountant uses DIC only to control other companies and not to control itself. | [optional] 
**dic_need_setup** | **Boolean** | Indicate that the initial setup for DIC is required. | [optional] 
**access_info** | [**CompanyInfoAccessInfo**](CompanyInfoAccessInfo.md) |  | [optional] 
**plan_info** | [**CompanyInfoPlanInfo**](CompanyInfoPlanInfo.md) |  | [optional] 
**can_use_coupon** | **Boolean** | Determine if a coupon can be used. | [optional] 
**accountant_id** | **Number** | Accountant unique identifier. | [optional] 
**dic_license_type** | **String** | Company DIC account license type. | [optional] 
**dic_payment_subject** | **String** | Company DIC account payment subject. | [optional] 
**dic_plan_name** | **String** | Company DIC account plan name. | [optional] 
**dic_signup_date** | **String** | DIC account sign up date. | [optional] 
**is_accountant** | **Boolean** | Determine if the logged account is an accountant. | [optional] 
**registration_service** | **String** |  | [optional] 



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




