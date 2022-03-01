# fattureInCloudSdk.Receipt

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Receipt unique identifier. | [optional] 
**date** | **Date** | Receipt date. | [optional] 
**number** | **Number** | Receipt number. | [optional] 
**numeration** | **String** | If it&#39;s null or empty string use the default numeration. | [optional] 
**amountNet** | **Number** | Total net amount. | [optional] 
**amountVat** | **Number** | Total vat amount. | [optional] 
**amountGross** | **Number** | Total gross amount. | [optional] 
**useGrossPrices** | **Boolean** |  | [optional] 
**type** | [**ReceiptType**](ReceiptType.md) |  | [optional] 
**description** | **String** | Receipt description. | [optional] 
**rcCenter** | **String** | Revenue center. | [optional] 
**createdAt** | **String** |  | [optional] 
**updatedAt** | **String** |  | [optional] 
**paymentAccount** | [**PaymentAccount**](PaymentAccount.md) |  | [optional] 
**itemsList** | [**[ReceiptItemsListItem]**](ReceiptItemsListItem.md) |  | [optional] 


