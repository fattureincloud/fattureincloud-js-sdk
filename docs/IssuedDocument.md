# fattureInCloudSdk.IssuedDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier of the document. | [optional] 
**entity** | [**Entity**](Entity.md) |  | [optional] 
**type** | [**IssuedDocumentType**](IssuedDocumentType.md) |  | [optional] 
**number** | **Number** | Number of the document [If not specified, next number is used] | [optional] 
**numeration** | **String** | Numeration of the document [Not available if type&#x3D;delivery_note] | [optional] 
**date** | **Date** | Date of the document [If not specified, today date is used] | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**language** | [**Language**](Language.md) |  | [optional] 
**subject** | **String** | Issued document subject. | [optional] 
**visibleSubject** | **String** | Issued document visible subject. | [optional] 
**rcCenter** | **String** | Revenue center [or cost center if type&#x3D;supplier_order]. | [optional] 
**notes** | **String** | Issued document extra notes. | [optional] 
**rivalsa** | **Number** | \&quot;Rivalsa INPS\&quot; percentual value | [optional] 
**cassa** | **Number** | \&quot;Cassa previdenziale\&quot; percentual value | [optional] 
**withholdingTax** | **Number** | Withholding tax (ritenuta d&#39;acconto) percentual value | [optional] 
**withholdingTaxTaxable** | **Number** | Withholding tax taxable (imponibile) percentual value | [optional] 
**otherWithholdingTax** | **Number** | Other withholding tax (altra ritenuta) percentual value | [optional] 
**stampDuty** | **Number** | Stamp duty value [0 if not present] | [optional] 
**paymentMethod** | [**PaymentMethod**](PaymentMethod.md) |  | [optional] 
**useSplitPayment** | **Boolean** |  | [optional] [default to false]
**useGrossPrices** | **Boolean** |  | [optional] [default to false]
**eInvoice** | **Boolean** | Indicates if this is an e-invoice. | [optional] [default to false]
**eiData** | [**IssuedDocumentEiData**](IssuedDocumentEiData.md) |  | [optional] 
**itemsList** | [**[IssuedDocumentItemsList]**](IssuedDocumentItemsList.md) |  | [optional] 
**paymentsList** | [**[IssuedDocumentPaymentsList]**](IssuedDocumentPaymentsList.md) |  | [optional] 
**template** | [**DocumentTemplate**](DocumentTemplate.md) |  | [optional] 
**deliveryNoteTemplate** | [**DocumentTemplate**](DocumentTemplate.md) |  | [optional] 
**accInvTemplate** | [**DocumentTemplate**](DocumentTemplate.md) |  | [optional] 
**hMargins** | **Number** | Horizontal margins. | [optional] 
**showPayments** | **Boolean** | Shows the expiration dates of the payments on the document. | [optional] 
**showPaymentMethod** | **Boolean** | Show the payment method details on the document. | [optional] 
**showTotals** | **String** | Totals mode. | [optional] [default to &#39;all&#39;]
**vMargins** | **Number** | Vertical margins. | [optional] 
**showPaypalButton** | **Boolean** |  | [optional] [default to false]
**showNotificationButton** | **Boolean** |  | [optional] [default to false]
**deliveryNote** | **Boolean** |  | [optional] 
**accompanyingInvoice** | **Boolean** | Attach an accompanying invoice. | [optional] [default to false]
**dnNumber** | **Number** | Number (for the attached delivery note). | [optional] 
**dnDate** | **Date** | Date (for the attached delivery note). | [optional] 
**dnAiPackagesNumber** | **String** | Number of packages (for the attached delivery note). | [optional] 
**dnAiWeight** | **String** | Weight (for the attached delivery note). | [optional] 
**dnAiCausal** | **String** | Causal (for the attached delivery note). | [optional] 
**dnAiDestination** | **String** | Destination (for the attached delivery note). | [optional] 
**dnAiTransporter** | **String** | Transporter (for the attached delivery note). | [optional] 
**dnAiNotes** | **String** | Notes (for the attached delivery note). | [optional] 
**refersTo** | [**IssuedDocumentRefersTo**](IssuedDocumentRefersTo.md) |  | [optional] 
**isMarked** | **Boolean** | This is true if the document is marked. | [optional] 
**amountNet** | **Number** | [Read Only] Total net amount (competenze). | [optional] [readonly] 
**amountVat** | **Number** | [Read Only] Total vat amount (IVA). | [optional] [readonly] 
**amountGross** | **Number** | [Read Only] Total gross amount (totale documento). | [optional] [readonly] 
**amountRivalsa** | **Number** | [Read Only] Rivalsa amount. | [optional] [readonly] 
**amountCassa** | **Number** | [Read Only] Cassa amount. | [optional] [readonly] 
**amountWithholdingTax** | **Number** | [Read Only] Withholding tax amount (ritenuta d&#39;acconto). | [optional] [readonly] 
**amountOtherWithholdingTax** | **Number** | [Read Only] Other withholding tax amount (altra ritenuta). | [optional] [readonly] 
**extraData** | [**IssuedDocumentExtraData**](IssuedDocumentExtraData.md) |  | [optional] 
**seenDate** | **Date** | Date when the client/supplier has seen the document. | [optional] 
**nextDueDate** | **Date** | Date of the next not paid payment. | [optional] 
**url** | **String** | Public url of the document PDF file. | [optional] 
**attachmentUrl** | **String** | [Read Only] Public url of the attached file. Authomatically set if a valid attachment token is passed via POST /issued_documents or PUT /issued_documents/{documentId}. | [optional] [readonly] 
**attachmentToken** | **String** | [Write Only] Attachment token returned by POST /issued_documents/attachment. Used to attach the file already uploaded. | [optional] 
**eiRaw** | **Object** | Advanced raw attributes for e-invoices. | [optional] 
**showTspayButton** | **Boolean** | Show ts pay button. | [optional] 
**year** | **Number** | Invoice year. | [optional] 
**amountRivalsaTaxable** | **Number** |  | [optional] 
**amountGlobalCassaTaxable** | **Number** |  | [optional] 
**amountCassaTaxable** | **Number** |  | [optional] 
**amountCassa2** | **Number** |  | [optional] 
**amountCassa2Taxable** | **Number** |  | [optional] 
**amountWithholdingTaxTaxable** | **Number** |  | [optional] 
**amountEnasarcoTaxable** | **Number** |  | [optional] 
**amountOtherWithholdingTaxTaxable** | **Number** |  | [optional] 
**eiCassaType** | **String** |  | [optional] 
**eiCassa2Type** | **String** |  | [optional] 
**eiWithholdingTaxCausal** | **String** |  | [optional] 
**eiOtherWithholdingTaxType** | **String** |  | [optional] 
**eiOtherWithholdingTaxCausal** | **String** |  | [optional] 
**amountDueDiscount** | **Number** |  | [optional] 



## Enum: ShowTotalsEnum


* `none` (value: `"none"`)

* `nets` (value: `"nets"`)

* `all` (value: `"all"`)




