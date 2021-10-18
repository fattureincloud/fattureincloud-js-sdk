# @FattureincloudFattureincloudJsSdk.EmailSchedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**senderId** | **Number** | Sender id. Required if &#x60;sender_email&#x60; is not specified | [optional] 
**senderEmail** | **String** | Sender email. Required if &#x60;sender_id&#x60; is not specified | [optional] 
**recipientEmail** | **String** | One or more comma separated recipient emails | 
**subject** | **String** | Email subject | 
**body** | **String** | Email body | 
**include** | [**EmailScheduleInclude**](EmailScheduleInclude.md) |  | 
**attachPdf** | **Boolean** | If set to true, documents will be sent as PDF attachments too | 
**sendCopy** | **Boolean** | If set to true, a copy of the email will be sent to the &#x60;cc_email&#x60; specified by &#x60;Get email data&#x60; | 


