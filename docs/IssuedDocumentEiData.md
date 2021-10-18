# @FattureincloudFattureincloudJsSdk.IssuedDocumentEiData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vatKind** | **String** | Vat kind (esigibilità IVA). | [optional] 
**originalDocumentType** | **String** | Type of document followed by the the current invoice. | [optional] [default to &#39;ordine&#39;]
**odNumber** | **String** | Original document number. | [optional] 
**odDate** | **Date** | Original document date. | [optional] 
**cig** | **String** | CIG. | [optional] 
**cup** | **String** | CUP. | [optional] 
**paymentMethod** | **String** | Payment method (see https://www.fatturapa.gov.it/export/documenti/fatturapa/v1.2.1/Rappresentazione-tabellare-fattura-ordinaria.pdf for the accepted values of ModalitaPagamento). | [optional] 
**bankName** | **String** | Bank name. | [optional] 
**bankIban** | **String** | IBAN. | [optional] 
**bankBeneficiary** | **String** | Bank beneficiary. | [optional] 
**invoiceNumber** | **String** | Invoice number. | [optional] 
**invoiceDate** | **Date** | Invoice date. | [optional] 



## Enum: VatKindEnum


* `null` (value: `"null"`)

* `I` (value: `"I"`)

* `D` (value: `"D"`)

* `S` (value: `"S"`)





## Enum: OriginalDocumentTypeEnum


* `ordine` (value: `"ordine"`)

* `contratto` (value: `"contratto"`)

* `convenzione` (value: `"convenzione"`)




