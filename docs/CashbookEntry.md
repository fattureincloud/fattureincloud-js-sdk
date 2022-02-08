# fattureInCloudSdk.CashbookEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Cashbook unique identifier. | 
**date** | **Date** | Cashbook date. | 
**description** | **String** | Cashbook description. | 
**kind** | [**CashbookEntryKind**](CashbookEntryKind.md) |  | 
**type** | [**CashbookEntryType**](CashbookEntryType.md) |  | [optional] 
**entityName** | **String** | Entity name. | [optional] 
**document** | [**CashbookEntryDocument**](CashbookEntryDocument.md) |  | [optional] 
**amountIn** | **Number** | [Only for cashbook entry in] Total amount in. | [optional] 
**paymentAccountIn** | [**PaymentAccount**](PaymentAccount.md) |  | [optional] 
**amountOut** | **Number** | [Only for cashbook entry out] Total amount out. | [optional] 
**paymentAccountOut** | [**PaymentAccount**](PaymentAccount.md) |  | [optional] 


