# fattureInCloudSdk.Receipt

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Receipt unique identifier. | [optional] 
**date** | **Date** | Receipt date. | 
**number** | **Number** | Receipt number. | [optional] 
**numeration** | **String** | If it&#39;s null or empty string use the default numeration. | [optional] 
**amount_net** | **Number** | Total net amount. | [optional] 
**amount_vat** | **Number** | Total vat amount. | [optional] 
**amount_gross** | **Number** | Total gross amount. | [optional] 
**use_gross_prices** | **Boolean** |  | [optional] [default to false]
**type** | [**ReceiptType**](ReceiptType.md) |  | 
**description** | **String** | Receipt description. | [optional] 
**rc_center** | **String** | Revenue center. | [optional] 
**created_at** | **String** |  | [optional] 
**updated_at** | **String** |  | [optional] 
**payment_account** | [**PaymentAccount**](PaymentAccount.md) |  | 
**items_list** | [**[ReceiptItemsListItem]**](ReceiptItemsListItem.md) |  | [optional] 


