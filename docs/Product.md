# fattureInCloudSdk.Product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier. | [optional] 
**name** | **String** | Product name. | 
**code** | **String** | Product code. | [optional] 
**net_price** | **Number** | Net sale price (used if use_gross_price is false, otherwise it&#39;s competed automatically). | [optional] 
**gross_price** | **Number** | Gross sale price (used if use_gross_price is false, otherwise it&#39;s competed automatically). | [optional] 
**use_gross_price** | **Boolean** | Determine which price to use for calculations. | [optional] 
**default_vat** | [**VatType**](VatType.md) |  | [optional] 
**net_cost** | **Number** | Net cost of the product (used for received documents). | [optional] 
**measure** | **String** | Unit of measure. | [optional] 
**description** | **String** | Product description. | [optional] 
**category** | **String** | Product category. | [optional] 
**notes** | **String** | Extra notes. | [optional] 
**in_stock** | **Boolean** | Determine if the product is in stock. | [optional] 
**stock_initial** | **Number** | Product initial stock. | [optional] 
**stock_current** | **Number** | [Read Only] Product current stock. | [optional] [readonly] 
**average_cost** | **Number** | Product average cost. | [optional] 
**average_price** | **Number** | Product average price. | [optional] 
**created_at** | **String** |  | [optional] 
**updated_at** | **String** |  | [optional] 


