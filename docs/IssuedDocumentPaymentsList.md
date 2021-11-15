# fattureInCloudSdk.IssuedDocumentPaymentsList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**due_date** | **Date** | Due date. | [optional] 
**amount** | **Number** | Payment amount. | [optional] 
**status** | **String** | Payment status. | [optional] [default to &#39;not_paid&#39;]
**payment_account** | [**PaymentAccount**](PaymentAccount.md) |  | [optional] 
**paid_date** | **Date** | Payment date. [Only if status is paid] | [optional] 
**ei_raw** | **Object** | Advanced raw attributes for e-invoices. | [optional] 



## Enum: StatusEnum


* `not_paid` (value: `"not_paid"`)

* `paid` (value: `"paid"`)

* `reversed` (value: `"reversed"`)




