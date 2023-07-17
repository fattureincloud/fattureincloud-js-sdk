# fattureInCloudSdk.IssuedDocumentPaymentsListItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Issued document payment item id | [optional] 
**dueDate** | **Date** | Issued document payment due date | [optional] 
**amount** | **Number** | Issued document payment amount | [optional] 
**status** | [**IssuedDocumentStatus**](IssuedDocumentStatus.md) |  | [optional] 
**paymentAccount** | [**PaymentAccount**](PaymentAccount.md) |  | [optional] 
**paidDate** | **Date** | Issued document payment date [Only if status is paid] | [optional] 
**eiRaw** | **Object** | Issued document payment advanced raw attributes for e-invoices | [optional] 
**paymentTerms** | [**IssuedDocumentPaymentsListItemPaymentTerms**](IssuedDocumentPaymentsListItemPaymentTerms.md) |  | [optional] 


