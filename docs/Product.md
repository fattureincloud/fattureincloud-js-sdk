# fattureInCloudSdk.Product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier. | [optional] 
**name** | **String** | Product name. | [optional] 
**code** | **String** | Product code. | [optional] 
**netPrice** | **Number** | Net sale price (used if use_gross_price is false, otherwise it&#39;s competed automatically). | [optional] 
**grossPrice** | **Number** | Gross sale price (used if use_gross_price is false, otherwise it&#39;s competed automatically). | [optional] 
**useGrossPrice** | **Boolean** | Determine which price to use for calculations. | [optional] 
**defaultVat** | [**VatType**](VatType.md) |  | [optional] 
**netCost** | **Number** | Net cost of the product (used for received documents). | [optional] 
**measure** | **String** | Unit of measure. | [optional] 
**description** | **String** | Product description. | [optional] 
**category** | **String** | Product category. | [optional] 
**notes** | **String** | Extra notes. | [optional] 
**inStock** | **Boolean** | Determine if the product is in stock. | [optional] 
**stockInitial** | **Number** | Product initial stock. | [optional] 
**stockCurrent** | **Number** | [Read Only] Product current stock. | [optional] [readonly] 
**averageCost** | **Number** | Product average cost. | [optional] 
**averagePrice** | **Number** | Product average price. | [optional] 
**createdAt** | **String** |  | [optional] 
**updatedAt** | **String** |  | [optional] 


