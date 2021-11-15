# fattureInCloudSdk.CashbookEntryInOut

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Cashbook unique identifier. | 
**date** | **Date** | Cashbook date. | 
**description** | **String** | Cashbook description. | 
**kind** | **String** | Cashbook kind. | 
**type** | **String** | Cashbook type. | 
**entity_name** | **String** | Entity name. | [optional] 
**document** | [**CashbookEntryDataDocument**](CashbookEntryDataDocument.md) |  | [optional] 
**amount_out** | **Number** | Total amount out. | [optional] 
**payment_account_out** | [**PaymentAccount**](PaymentAccount.md) |  | [optional] 
**amount_in** | **Number** | Total amount in. | [optional] 
**payment_account_in** | [**PaymentAccount**](PaymentAccount.md) |  | [optional] 



## Enum: KindEnum


* `cashbook` (value: `"cashbook"`)

* `issued_document` (value: `"issued_document"`)

* `received_document` (value: `"received_document"`)

* `tax` (value: `"tax"`)

* `receipt` (value: `"receipt"`)





## Enum: TypeEnum


* `in` (value: `"in"`)

* `out` (value: `"out"`)




