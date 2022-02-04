# fattureInCloudSdk.Entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier | [optional] 
**code** | **String** | Code. | [optional] 
**name** | **String** | Name | 
**type** | [**EntityType**](EntityType.md) |  | [optional] 
**firstName** | **String** | First name. | [optional] 
**lastName** | **String** | Last name. | [optional] 
**contactPerson** | **String** |  | [optional] 
**vatNumber** | **String** | Vat number | [optional] 
**taxCode** | **String** | Tax code. | [optional] 
**addressStreet** | **String** | Street address. | [optional] 
**addressPostalCode** | **String** | Postal code. | [optional] 
**addressCity** | **String** | City. | [optional] 
**addressProvince** | **String** | Province. | [optional] 
**addressExtra** | **String** | Address extra info. | [optional] 
**country** | **String** | Country | [optional] [default to &#39;Italia&#39;]
**email** | **String** | Email. | [optional] 
**certifiedEmail** | **String** | Certified email. | [optional] 
**phone** | **String** | Phone. | [optional] 
**fax** | **String** | Fax. | [optional] 
**notes** | **String** | Extra notes. | [optional] 
**defaultVat** | [**VatType**](VatType.md) |  | [optional] 
**defaultPaymentTerms** | **Number** | [Only for client] Default payment terms. | [optional] 
**defaultPaymentTermsType** | [**DefaultPaymentTermsType**](DefaultPaymentTermsType.md) |  | [optional] 
**defaultPaymentMethod** | [**PaymentMethod**](PaymentMethod.md) |  | [optional] 
**bankName** | **String** | [Only for client] Bank name. | [optional] 
**bankIban** | **String** | [Only for client] Iban. | [optional] 
**bankSwiftCode** | **String** | [Only for client] Bank swift code. | [optional] 
**shippingAddress** | **String** | [Only for client] Shipping address. | [optional] 
**eInvoice** | **Boolean** | [Only for client] Use e-invoices. | [optional] [default to false]
**eiCode** | **String** | [Only for client] E-invoices code. | [optional] 
**createdAt** | **String** |  | [optional] 
**updatedAt** | **String** |  | [optional] 


