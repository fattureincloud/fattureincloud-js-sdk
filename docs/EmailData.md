# fattureInCloudSdk.EmailData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipientEmail** | **String** | Email recipient | [optional] 
**defaultSenderEmail** | [**EmailDataDefaultSenderEmail**](EmailDataDefaultSenderEmail.md) |  | [optional] 
**senderEmailsList** | [**[SenderEmail]**](SenderEmail.md) | List of all emails from which the document can be sent | [optional] 
**ccEmail** | **String** | Email cc [by default is the logged company email] | [optional] 
**subject** | **String** | Email subject | [optional] 
**body** | **String** | Email body | [optional] 
**documentExists** | **Boolean** | Document exists if it is not a delivery note | [optional] 
**deliveryNoteExists** | **Boolean** | Document is a delivery note | [optional] 
**attachmentExists** | **Boolean** | Document has attachment | [optional] 
**accompanyingInvoiceExists** | **Boolean** | Document has accompanying invoice | [optional] 
**defaultAttachPdf** | **Boolean** | Attach document pdf | [optional] 


