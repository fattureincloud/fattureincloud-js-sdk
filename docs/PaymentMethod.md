# @FattureincloudFattureincloudJsSdk.PaymentMethod

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier | [optional] 
**name** | **String** | Name of the payment method | 
**type** | **String** | Method type | [optional] [default to &#39;standard&#39;]
**isDefault** | **Boolean** | Determines if this is the default payment method. | [optional] 
**defaultPaymentAccount** | [**PaymentAccount**](PaymentAccount.md) |  | [optional] 
**details** | [**[PaymentMethodDetails]**](PaymentMethodDetails.md) | Method details rows | [optional] 
**bankIban** | **String** | Bank iban | [optional] 
**bankName** | **String** | Bank name | [optional] 
**bankBeneficiary** | **String** | Bank beneficiary | [optional] 
**eiPaymentMethod** | **String** | EInvoice payment method | [optional] 



## Enum: TypeEnum


* `standard` (value: `"standard"`)

* `riba` (value: `"riba"`)




