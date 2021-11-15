# fattureInCloudSdk.IssuedDocumentItemsList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_id** | **Number** | Unique identifier of the product. | [optional] 
**code** | **String** | Product code. | [optional] 
**name** | **String** | Product name. | [optional] 
**description** | **String** | Product description. | [optional] 
**qty** | **Number** | Items quantity, | [optional] 
**measure** | **String** | Item measure. | [optional] 
**net_price** | **Number** | Net price. | [optional] 
**gross_price** | **Number** | Gross price. | [optional] 
**vat** | [**VatType**](VatType.md) |  | [optional] 
**not_taxable** | **Boolean** |  | [optional] [default to false]
**apply_withholding_taxes** | **Boolean** | Apply withholding taxes, rivalsa and cassa. | [optional] [default to true]
**discount** | **Number** | Discount percentual value. | [optional] 
**discount_highlight** | **Boolean** |  | [optional] [default to false]
**in_ddt** | **Boolean** |  | [optional] [default to true]
**stock** | **Boolean** |  | [optional] 
**ei_raw** | **Object** | Advanced raw attributes for e-invoices. | [optional] 


