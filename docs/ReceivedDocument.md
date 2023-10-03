# fattureInCloudSdk.ReceivedDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Received document id | [optional] 
**type** | [**ReceivedDocumentType**](ReceivedDocumentType.md) |  | [optional] 
**entity** | [**Entity**](Entity.md) |  | [optional] 
**date** | **Date** | Received document date [defaults to today&#39;s date] | [optional] 
**category** | **String** | Received document category | [optional] 
**description** | **String** | Received document description | [optional] 
**amountNet** | **Number** | Received document total net amount | [optional] 
**amountVat** | **Number** | Received document total vat amount | [optional] 
**amountWithholdingTax** | **Number** | Received document withholding tax amount | [optional] 
**amountOtherWithholdingTax** | **Number** | Received document other withholding tax amount | [optional] 
**amountGross** | **Number** | [Read Only] Received document total gross amount | [optional] [readonly] 
**amortization** | **Number** | Received document amortization value | [optional] 
**rcCenter** | **String** | Received document revenue center | [optional] 
**invoiceNumber** | **String** | Received document invoice number | [optional] 
**isMarked** | **Boolean** | Received document is marked | [optional] 
**isDetailed** | **Boolean** | Received document has items | [optional] 
**eInvoice** | **Boolean** | [Read Only] Received document is an e-invoice | [optional] 
**nextDueDate** | **Date** | [Read Only] Received document date of the next not paid payment | [optional] [readonly] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**taxDeductibility** | **Number** | Received document tax deducibility percentage | [optional] 
**vatDeductibility** | **Number** | Received document vat deducibility percentage | [optional] 
**itemsList** | [**[ReceivedDocumentItemsListItem]**](ReceivedDocumentItemsListItem.md) |  | [optional] 
**paymentsList** | [**[ReceivedDocumentPaymentsListItem]**](ReceivedDocumentPaymentsListItem.md) |  | [optional] 
**attachmentUrl** | **String** | [Temporary] [Read Only] Received document url of the attached file | [optional] [readonly] 
**attachmentPreviewUrl** | **String** | [Temporary] [Read Only] Received document url of the attachment preview | [optional] [readonly] 
**autoCalculate** | **Boolean** | Received document total items amount and total payments amount can differ if this field is set to false | [optional] 
**attachmentToken** | **String** | [Write Only] Received document attachment token returned by POST /received_documents/attachment | [optional] 
**locked** | **Boolean** | Received Document can&#39;t be edited | [optional] 
**createdAt** | **String** | Received document creation date | [optional] 
**updatedAt** | **String** | Received document last update date | [optional] 


