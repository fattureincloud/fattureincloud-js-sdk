# fattureInCloudSdk.Entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier | [optional] 
**code** | **String** | Supplier code. | [optional] 
**name** | **String** | Supplier name. | 
**type** | **String** | Supplier type. | [optional] 
**firstName** | **String** | Supplier first name. | [optional] 
**lastName** | **String** | Supplier last name. | [optional] 
**contactPerson** | **String** |  | [optional] 
**vatNumber** | **String** | Supplier vat number. | [optional] 
**taxCode** | **String** | Supplier tax code. | [optional] 
**addressStreet** | **String** | Supplier street address. | [optional] 
**addressPostalCode** | **String** | Supplier postal code. | [optional] 
**addressCity** | **String** | Supplier city. | [optional] 
**addressProvince** | **String** | Supplier province. | [optional] 
**addressExtra** | **String** | Supplier address extra info. | [optional] 
**country** | **String** | Supplier country. | [optional] [default to &#39;Italia&#39;]
**email** | **String** | Supplier email. | [optional] 
**certifiedEmail** | **String** | Supplier certified email. | [optional] 
**phone** | **String** | Supplier phone. | [optional] 
**fax** | **String** | Supplier fax. | [optional] 
**notes** | **String** | Supplier extra notes. | [optional] 
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


* `null` (value: `"null"`)

* `company` (value: `"company"`)

* `person` (value: `"person"`)

* `pa` (value: `"pa"`)

* `condo` (value: `"condo"`)





## Enum: DefaultPaymentTermsTypeEnum


* `standard` (value: `"standard"`)

* `end_of_month` (value: `"end_of_month"`)




