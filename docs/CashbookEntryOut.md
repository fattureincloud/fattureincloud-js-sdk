# fattureInCloudSdk.CashbookEntryOut

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Cashbook unique identifier. | 
**date** | **Date** | Cashbook date. | 
**description** | **String** | Cashbook description. | 
**kind** | **String** | Cashbook kind. | 
**type** | **String** | Cashbook type. | 
**entityName** | **String** | Entity name. | [optional] 
**document** | [**CashbookEntryDataDocument**](CashbookEntryDataDocument.md) |  | [optional] 
**amountOut** | **Number** | Total amount out. | [optional] 
**paymentAccountOut** | [**PaymentAccount**](PaymentAccount.md) |  | [optional] 



## Enum: KindEnum


* `cashbook` (value: `"cashbook"`)

* `issued_document` (value: `"issued_document"`)

* `received_document` (value: `"received_document"`)

* `tax` (value: `"tax"`)

* `receipt` (value: `"receipt"`)





## Enum: TypeEnum


* `in` (value: `"in"`)

* `out` (value: `"out"`)




