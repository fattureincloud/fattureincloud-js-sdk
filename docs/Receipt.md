# @FattureincloudFattureincloudJsSdk.Receipt

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Receipt unique identifier. | [optional] 
**date** | **Date** | Receipt date. | 
**number** | **Number** | Receipt number. | [optional] 
**numeration** | **String** | If it&#39;s null or empty string use the default numeration. | [optional] 
**amountNet** | **Number** | Total net amount. | [optional] 
**amountVat** | **Number** | Total vat amount. | [optional] 
**amountGross** | **Number** | Total gross amount. | [optional] 
**useGrossPrices** | **Boolean** |  | [optional] [default to false]
**type** | [**ReceiptType**](ReceiptType.md) |  | 
**description** | **String** | Receipt description. | [optional] 
**rcCenter** | **String** | Revenue center. | [optional] 
**createdAt** | **String** |  | [optional] 
**updatedAt** | **String** |  | [optional] 
**paymentAccount** | [**PaymentAccount**](PaymentAccount.md) |  | 
**itemsList** | [**[ReceiptItemsListItem]**](ReceiptItemsListItem.md) |  | [optional] 


