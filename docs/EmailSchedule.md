# fattureInCloudSdk.EmailSchedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**senderId** | **Number** | Email sender id [required if **sender_email** is not specified] | [optional] 
**senderEmail** | **String** | Email sender address [required if **sender_id** is not specified] | [optional] 
**recipientEmail** | **String** | Email recipient emails [comma separated] | [optional] 
**subject** | **String** | Email subject | [optional] 
**body** | **String** | Email body [HTML Escaped] [max size 50KiB] | [optional] 
**include** | [**EmailScheduleInclude**](EmailScheduleInclude.md) |  | [optional] 
**attachPdf** | **Boolean** | Attach the pdf of the document | [optional] 
**sendCopy** | **Boolean** | Send a copy of the email to the **cc_email** specified by **Get email data** | [optional] 


