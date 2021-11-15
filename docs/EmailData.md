# fattureInCloudSdk.EmailData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipient_email** | **String** | Recipient&#39;s email | 
**default_sender_email** | [**EmailDataDefaultSenderEmail**](EmailDataDefaultSenderEmail.md) |  | 
**sender_emails_list** | [**[EmailDataSenderEmailsList]**](EmailDataSenderEmailsList.md) | List of all emails from which the document can be sent | 
**cc_email** | **String** | By default is the logged company email. This is the email address to which a copy will be sent. | 
**subject** | **String** | Email subject | 
**body** | **String** | Email body | 
**document_exists** | **Boolean** | If the document is not a delivery note, this flag will be set to true | 
**delivery_note_exists** | **Boolean** | If the document is a delivery note, this flag will be set to true | 
**attachment_exists** | **Boolean** | If the document has one or more attachments, this flag will be set to true | 
**accompanying_invoice_exists** | **Boolean** | If an accompanying invoice exists, this flag will be set to true | 
**default_attach_pdf** | **Boolean** | If a pdf is attached, this flag will be set to true | 


