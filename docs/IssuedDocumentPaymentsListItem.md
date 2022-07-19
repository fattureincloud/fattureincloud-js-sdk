# fattureInCloudSdk.IssuedDocumentPaymentsListItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier. | [optional] 
**dueDate** | **Date** | Due date. | [optional] 
**amount** | **Number** | Payment amount. | [optional] 
**status** | [**IssuedDocumentStatus**](IssuedDocumentStatus.md) |  | [optional] 
**paymentAccount** | [**PaymentAccount**](PaymentAccount.md) |  | [optional] 
**paidDate** | **Date** | Payment date. [Only if status is paid] | [optional] 
**eiRaw** | **Object** | Advanced raw attributes for e-invoices. | [optional] 
**paymentTerms** | [**IssuedDocumentPaymentsListItemPaymentTerms**](IssuedDocumentPaymentsListItemPaymentTerms.md) |  | [optional] 


