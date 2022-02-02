# fattureInCloudSdk.ReceivedDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier of the document. | [optional] 
**type** | [**ReceivedDocumentType**](ReceivedDocumentType.md) |  | [optional] 
**entity** | [**ReceivedDocumentEntity**](ReceivedDocumentEntity.md) |  | 
**date** | **Date** | Date of the document [If not specified, today date is used]. | [optional] 
**category** | **String** | Document category. | [optional] 
**description** | **String** | Document description. | [optional] 
**amountNet** | **Number** | Total net amount. | [optional] 
**amountVat** | **Number** | Total vat amount. | [optional] 
**amountWithholdingTax** | **Number** | Withholding tax amount. | [optional] 
**amountOtherWithholdingTax** | **Number** | Other withholding tax amount. | [optional] 
**amountGross** | **Number** | [Read Only] Total gross amount. | [optional] [readonly] 
**amortization** | **Number** | Amortization value | [optional] 
**rcCenter** | **String** | Revenue center. | [optional] 
**invoiceNumber** | **String** | Invoice number | [optional] 
**isMarked** | **Boolean** |  | [optional] 
**isDetailed** | **Boolean** |  | [optional] 
**eInvoice** | **Boolean** | [Read Only] Indicates if this is an e-invoice. | [optional] 
**nextDueDate** | **Date** | [Read Only] Next due date. | [optional] [readonly] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**taxDeductibility** | **Number** | Tax deducibility percentage. | [optional] 
**vatDeductibility** | **Number** | Vat deducibility percentage. | [optional] 
**itemsList** | [**[ReceivedDocumentItemsListItem]**](ReceivedDocumentItemsListItem.md) |  | [optional] 
**paymentsList** | [**[ReceivedDocumentPaymentsListItem]**](ReceivedDocumentPaymentsListItem.md) |  | [optional] 
**attachmentUrl** | **String** | [Read Only] Attachment url. | [optional] [readonly] 
**attachmentPreviewUrl** | **String** | [Read Only] Attachment preview url. | [optional] [readonly] 
**attachmentToken** | **String** | Uploaded attachement token. | [optional] 


