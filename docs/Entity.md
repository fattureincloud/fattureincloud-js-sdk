# fattureInCloudSdk.Entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier | [optional] 
**code** | **String** | Supplier code. | [optional] 
**name** | **String** | Supplier name. | 
**type** | **String** | Supplier type. | [optional] 
**first_name** | **String** | Supplier first name. | [optional] 
**last_name** | **String** | Supplier last name. | [optional] 
**contact_person** | **String** |  | [optional] 
**vat_number** | **String** | Supplier vat number. | [optional] 
**tax_code** | **String** | Supplier tax code. | [optional] 
**address_street** | **String** | Supplier street address. | [optional] 
**address_postal_code** | **String** | Supplier postal code. | [optional] 
**address_city** | **String** | Supplier city. | [optional] 
**address_province** | **String** | Supplier province. | [optional] 
**address_extra** | **String** | Supplier address extra info. | [optional] 
**country** | **String** | Supplier country. | [optional] [default to &#39;Italia&#39;]
**email** | **String** | Supplier email. | [optional] 
**certified_email** | **String** | Supplier certified email. | [optional] 
**phone** | **String** | Supplier phone. | [optional] 
**fax** | **String** | Supplier fax. | [optional] 
**notes** | **String** | Supplier extra notes. | [optional] 
**default_vat** | [**VatType**](VatType.md) |  | [optional] 
**default_payment_terms** | **Number** |  | [optional] 
**default_payment_terms_type** | **String** |  | [optional] [default to &#39;standard&#39;]
**default_payment_method** | [**PaymentMethod**](PaymentMethod.md) |  | [optional] 
**bank_name** | **String** | Client bank name. | [optional] 
**bank_iban** | **String** | Client iban. | [optional] 
**bank_swift_code** | **String** | Client bank swift code. | [optional] 
**shipping_address** | **String** | Client shipping address. | [optional] 
**e_invoice** | **Boolean** | Use e-invoices for this entity | [optional] [default to false]
**ei_code** | **String** | E-invoice code | [optional] 
**created_at** | **String** |  | [optional] 
**updated_at** | **String** |  | [optional] 



## Enum: TypeEnum


* `null` (value: `"null"`)

* `company` (value: `"company"`)

* `person` (value: `"person"`)

* `pa` (value: `"pa"`)

* `condo` (value: `"condo"`)





## Enum: DefaultPaymentTermsTypeEnum


* `standard` (value: `"standard"`)

* `end_of_month` (value: `"end_of_month"`)




