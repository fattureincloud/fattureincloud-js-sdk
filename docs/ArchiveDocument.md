# fattureInCloudSdk.ArchiveDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Archive document unique identifier. | [optional] 
**date** | **Date** | Archive document date. | [optional] 
**description** | **String** | Archive Document description. | [optional] 
**attachmentUrl** | **String** | [Temporary] [Read Only] Absolute url of the attached file. Authomatically set if a valid attachment token is passed via POST /archive or PUT /archive/{documentId}. | [optional] [readonly] 
**category** | **String** | Archive document category. | [optional] 
**attachmentToken** | **String** | [Write Only]  [Required] Attachment token returned by POST /archive/attachment. Used to attach the file already uploaded. | [optional] 


