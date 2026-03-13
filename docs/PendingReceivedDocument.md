# fattureInCloudSdk.PendingReceivedDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Pending received document id | [optional] 
**date** | **Date** | Pending received document date | [optional] 
**subject** | **String** | Pending received document subject | [optional] 
**filename** | **String** | Pending received document filename | [optional] 
**type** | [**PendingReceivedDocumentType**](PendingReceivedDocumentType.md) |  | [optional] 
**attachmentUrl** | **String** | [Temporary] [Read Only] Pending received document url of the attached file | [optional] [readonly] 
**amountGross** | **Number** | [Read Only] Pending received document total gross amount | [optional] [readonly] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**documentType** | [**ReceivedDocumentType**](ReceivedDocumentType.md) |  | [optional] 
**supplierName** | **String** | Pending received document supplier name | [optional] 
**costCenter** | **String** | Pending received document cost center | [optional] 
**category** | **String** | Pending received document category | [optional] 
**otherAttachments** | [**[Attachment]**](Attachment.md) | Pending received document other attachments | [optional] 
**emssionDate** | **Date** | Pending received document emission date | [optional] 
**paymentsList** | [**[PendingReceivedDocumentPaymentsListItem]**](PendingReceivedDocumentPaymentsListItem.md) |  | [optional] 
**amountNet** | **Number** | Pending received document total net amount | [optional] 
**amountVat** | **Number** | Pending received document total vat amount | [optional] 
**importError** | **String** | Pending received document import error | [optional] 
**extractedData** | [**PendingReceivedDocumentExtractedData**](PendingReceivedDocumentExtractedData.md) |  | [optional] 


