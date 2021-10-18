# @FattureincloudFattureincloudJsSdk.IssuedDocumentPaymentsList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dueDate** | **Date** | Due date. | [optional] 
**amount** | **Number** | Payment amount. | [optional] 
**status** | **String** | Payment status. | [optional] [default to &#39;not_paid&#39;]
**paymentAccount** | [**PaymentAccount**](PaymentAccount.md) |  | [optional] 
**paidDate** | **Date** | Payment date. [Only if status is paid] | [optional] 
**eiRaw** | **Object** | Advanced raw attributes for e-invoices. | [optional] 



## Enum: StatusEnum


* `not_paid` (value: `"not_paid"`)

* `paid` (value: `"paid"`)

* `reversed` (value: `"reversed"`)




