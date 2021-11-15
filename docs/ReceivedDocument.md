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
**amount_net** | **Number** | Total net amount. | [optional] 
**amount_vat** | **Number** | Total vat amount. | [optional] 
**amount_withholding_tax** | **Number** | Withholding tax amount. | [optional] 
**amount_other_withholding_tax** | **Number** | Other withholding tax amount. | [optional] 
**amount_gross** | **Number** | [Read Only] Total gross amount. | [optional] [readonly] 
**amortization** | **Number** | Amortization value | [optional] 
**rc_center** | **String** | Revenue center. | [optional] 
**invoice_number** | **String** | Invoice number | [optional] 
**is_marked** | **Boolean** |  | [optional] 
**is_detailed** | **Boolean** |  | [optional] 
**e_invoice** | **Boolean** | [Read Only] Indicates if this is an e-invoice. | [optional] 
**next_due_date** | **Date** | [Read Only] Next due date. | [optional] [readonly] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**tax_deductibility** | **Number** | Tax deducibility percentage. | [optional] 
**vat_deductibility** | **Number** | Vat deducibility percentage. | [optional] 
**items_list** | [**[ReceivedDocumentItemsList]**](ReceivedDocumentItemsList.md) |  | [optional] 
**payments_list** | [**[ReceivedDocumentPaymentsList]**](ReceivedDocumentPaymentsList.md) |  | [optional] 
**attachment_url** | **String** | [Read Only] Attachment url. | [optional] [readonly] 
**attachment_preview_url** | **String** | [Read Only] Attachment preview url. | [optional] [readonly] 
**attachment_token** | **String** | Uploaded attachement token. | [optional] 


