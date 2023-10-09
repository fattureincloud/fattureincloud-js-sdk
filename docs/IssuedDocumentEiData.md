# fattureInCloudSdk.IssuedDocumentEiData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vatKind** | [**VatKind**](VatKind.md) |  | [optional] 
**originalDocumentType** | [**OriginalDocumentType**](OriginalDocumentType.md) |  | [optional] 
**odNumber** | **String** | E-invoice original document number | [optional] 
**odDate** | **Date** | E-invoice original document date | [optional] 
**cig** | **String** | E-invoice CIG | [optional] 
**cup** | **String** | E-invoice CUP | [optional] 
**paymentMethod** | **String** | E-invoice payment method [required for e-invoices] (see [here](https://www.fatturapa.gov.it/export/documenti/fatturapa/v1.2.2/Rappresentazione_Tabellare_FattOrdinaria_V1.2.2.pdf) for the accepted values of ModalitaPagamento) | [optional] 
**bankName** | **String** | E-invoice bank name | [optional] 
**bankIban** | **String** | E-invoice bank IBAN | [optional] 
**bankBeneficiary** | **String** | E-invoice bank beneficiary | [optional] 
**invoiceNumber** | **String** | E-invoice invoice number | [optional] 
**invoiceDate** | **Date** | E-invoice invoice date | [optional] 


