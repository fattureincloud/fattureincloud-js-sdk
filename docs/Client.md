# @FattureincloudFattureincloudJsSdk.Client

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier | [optional] 
**code** | **String** | Client code. | [optional] 
**name** | **String** | Client name | 
**type** | **String** | Client type | [optional] 
**firstName** | **String** | Client first name. | [optional] 
**lastName** | **String** | Client last name. | [optional] 
**contactPerson** | **String** |  | [optional] 
**vatNumber** | **String** | Client vat number | [optional] 
**taxCode** | **String** | Client tax code. | [optional] 
**addressStreet** | **String** | Client street address. | [optional] 
**addressPostalCode** | **String** | Client postal code. | [optional] 
**addressCity** | **String** | Client city. | [optional] 
**addressProvince** | **String** | Client province. | [optional] 
**addressExtra** | **String** | Client address extra info. | [optional] 
**country** | **String** | Client country | [optional] [default to &#39;Italia&#39;]
**email** | **String** | Client email. | [optional] 
**certifiedEmail** | **String** | Client certified email. | [optional] 
**phone** | **String** | Client phone. | [optional] 
**fax** | **String** | Client fax. | [optional] 
**notes** | **String** | Extra notes. | [optional] 
**defaultVat** | [**VatType**](VatType.md) |  | [optional] 
**defaultPaymentTerms** | **Number** |  | [optional] 
**defaultPaymentTermsType** | **String** |  | [optional] [default to &#39;standard&#39;]
**defaultPaymentMethod** | [**PaymentMethod**](PaymentMethod.md) |  | [optional] 
**bankName** | **String** | Client bank name. | [optional] 
**bankIban** | **String** | Client iban. | [optional] 
**bankSwiftCode** | **String** | Client bank swift code. | [optional] 
**shippingAddress** | **String** | Client shipping address. | [optional] 
**eInvoice** | **Boolean** | Use e-invoices for this entity | [optional] [default to false]
**eiCode** | **String** | E-invoice code | [optional] 
**createdAt** | **String** |  | [optional] 
**updatedAt** | **String** |  | [optional] 



## Enum: TypeEnum


* `company` (value: `"company"`)

* `person` (value: `"person"`)

* `pa` (value: `"pa"`)

* `condo` (value: `"condo"`)





## Enum: DefaultPaymentTermsTypeEnum


* `standard` (value: `"standard"`)

* `end_of_month` (value: `"end_of_month"`)




