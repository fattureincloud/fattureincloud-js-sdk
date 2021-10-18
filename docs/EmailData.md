# @FattureincloudFattureincloudJsSdk.EmailData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipientEmail** | **String** | Recipient&#39;s email | 
**defaultSenderEmail** | [**EmailDataDefaultSenderEmail**](EmailDataDefaultSenderEmail.md) |  | 
**senderEmailsList** | [**[EmailDataSenderEmailsList]**](EmailDataSenderEmailsList.md) | List of all emails from which the document can be sent | 
**ccEmail** | **String** | By default is the logged company email. This is the email address to which a copy will be sent. | 
**subject** | **String** | Email subject | 
**body** | **String** | Email body | 
**documentExists** | **Boolean** | If the document is not a delivery note, this flag will be set to true | 
**deliveryNoteExists** | **Boolean** | If the document is a delivery note, this flag will be set to true | 
**attachmentExists** | **Boolean** | If the document has one or more attachments, this flag will be set to true | 
**accompanyingInvoiceExists** | **Boolean** | If an accompanying invoice exists, this flag will be set to true | 
**defaultAttachPdf** | **Boolean** | If a pdf is attached, this flag will be set to true | 


