# fattureInCloudSdk.EmailSchedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**senderId** | **Number** | Sender id. Required if &#x60;sender_email&#x60; is not specified | [optional] 
**senderEmail** | **String** | Sender email. Required if &#x60;sender_id&#x60; is not specified | [optional] 
**recipientEmail** | **String** | One or more comma separated recipient emails | [optional] 
**subject** | **String** | Email subject | [optional] 
**body** | **String** | Email body | [optional] 
**include** | [**EmailScheduleInclude**](EmailScheduleInclude.md) |  | [optional] 
**attachPdf** | **Boolean** | If set to true, documents will be sent as PDF attachments too | [optional] 
**sendCopy** | **Boolean** | If set to true, a copy of the email will be sent to the &#x60;cc_email&#x60; specified by &#x60;Get email data&#x60; | [optional] 


