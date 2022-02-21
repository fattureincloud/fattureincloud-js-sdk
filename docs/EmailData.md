# fattureInCloudSdk.EmailData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipientEmail** | **String** | Recipient&#39;s email | [optional] 
**defaultSenderEmail** | [**EmailDataDefaultSenderEmail**](EmailDataDefaultSenderEmail.md) |  | [optional] 
**senderEmailsList** | [**[SenderEmail]**](SenderEmail.md) | List of all emails from which the document can be sent | [optional] 
**ccEmail** | **String** | By default is the logged company email. This is the email address to which a copy will be sent. | [optional] 
**subject** | **String** | Email subject | [optional] 
**body** | **String** | Email body | [optional] 
**documentExists** | **Boolean** | If the document is not a delivery note, this flag will be set to true | [optional] 
**deliveryNoteExists** | **Boolean** | If the document is a delivery note, this flag will be set to true | [optional] 
**attachmentExists** | **Boolean** | If the document has one or more attachments, this flag will be set to true | [optional] 
**accompanyingInvoiceExists** | **Boolean** | If an accompanying invoice exists, this flag will be set to true | [optional] 
**defaultAttachPdf** | **Boolean** | If a pdf is attached, this flag will be set to true | [optional] 


