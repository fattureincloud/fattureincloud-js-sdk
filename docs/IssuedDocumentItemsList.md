# fattureInCloudSdk.IssuedDocumentItemsList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**productId** | **Number** | Unique identifier of the product. | [optional] 
**code** | **String** | Product code. | [optional] 
**name** | **String** | Product name. | [optional] 
**description** | **String** | Product description. | [optional] 
**qty** | **Number** | Items quantity, | [optional] 
**measure** | **String** | Item measure. | [optional] 
**netPrice** | **Number** | Net price. | [optional] 
**grossPrice** | **Number** | Gross price. | [optional] 
**vat** | [**VatType**](VatType.md) |  | [optional] 
**notTaxable** | **Boolean** |  | [optional] [default to false]
**applyWithholdingTaxes** | **Boolean** | Apply withholding taxes, rivalsa and cassa. | [optional] [default to true]
**discount** | **Number** | Discount percentual value. | [optional] 
**discountHighlight** | **Boolean** |  | [optional] [default to false]
**inDdt** | **Boolean** |  | [optional] [default to true]
**stock** | **Boolean** |  | [optional] 
**eiRaw** | **Object** | Advanced raw attributes for e-invoices. | [optional] 


