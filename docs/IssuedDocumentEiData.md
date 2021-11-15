# fattureInCloudSdk.IssuedDocumentEiData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vat_kind** | **String** | Vat kind (esigibilità IVA). | [optional] 
**original_document_type** | **String** | Type of document followed by the the current invoice. | [optional] [default to &#39;ordine&#39;]
**od_number** | **String** | Original document number. | [optional] 
**od_date** | **Date** | Original document date. | [optional] 
**cig** | **String** | CIG. | [optional] 
**cup** | **String** | CUP. | [optional] 
**payment_method** | **String** | Payment method (see https://www.fatturapa.gov.it/export/documenti/fatturapa/v1.2.1/Rappresentazione-tabellare-fattura-ordinaria.pdf for the accepted values of ModalitaPagamento). | [optional] 
**bank_name** | **String** | Bank name. | [optional] 
**bank_iban** | **String** | IBAN. | [optional] 
**bank_beneficiary** | **String** | Bank beneficiary. | [optional] 
**invoice_number** | **String** | Invoice number. | [optional] 
**invoice_date** | **Date** | Invoice date. | [optional] 



## Enum: VatKindEnum


* `null` (value: `"null"`)

* `I` (value: `"I"`)

* `D` (value: `"D"`)

* `S` (value: `"S"`)





## Enum: OriginalDocumentTypeEnum


* `ordine` (value: `"ordine"`)

* `contratto` (value: `"contratto"`)

* `convenzione` (value: `"convenzione"`)




