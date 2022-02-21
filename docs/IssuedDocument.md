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
**year** | **Number** | Invoice year. | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**language** | [**Language**](Language.md) |  | [optional] 
**subject** | **String** | Issued document subject. | [optional] 
**visibleSubject** | **String** | Issued document visible subject. | [optional] 
**rcCenter** | **String** | Revenue center [or cost center if type&#x3D;supplier_order]. | [optional] 
**notes** | **String** | Issued document extra notes. | [optional] 
**rivalsa** | **Number** | \&quot;Rivalsa INPS\&quot; percentual value | [optional] 
**cassa** | **Number** | \&quot;Cassa previdenziale\&quot; percentual value | [optional] 
**amountCassa** | **Number** | [Read Only] Cassa amount. | [optional] [readonly] 
**cassaTaxable** | **Number** | Cassa taxable percentage | [optional] 
**amountCassaTaxable** | **Number** | [Can be set only if cassa_taxable is NULL] Cassa2 taxable amount | [optional] 
**cassa2** | **Number** | \&quot;Cassa previdenziale 2\&quot; percentual value | [optional] 
**amountCassa2** | **Number** | [Read Only] Cassa amount. | [optional] [readonly] 
**cassa2Taxable** | **Number** | Cassa2 taxable percentage | [optional] 
**amountCassa2Taxable** | **Number** | [Can be set only if cassa2_taxable is NULL] Cassa2 taxable amount | [optional] 
**globalCassaTaxable** | **Number** | Global cassa taxable percentage | [optional] 
**amountGlobalCassaTaxable** | **Number** | [Can be set only if global_cassa_taxable is NULL] Global cassa taxable amount | [optional] 
**withholdingTax** | **Number** | Withholding tax (ritenuta d&#39;acconto) percentual value | [optional] 
**withholdingTaxTaxable** | **Number** | Withholding tax taxable (imponibile) percentual value | [optional] 
**otherWithholdingTax** | **Number** | Other withholding tax (altra ritenuta) percentual value | [optional] 
**stampDuty** | **Number** | Stamp duty value [0 if not present] | [optional] 
**paymentMethod** | [**PaymentMethod**](PaymentMethod.md) |  | [optional] 
**useSplitPayment** | **Boolean** | Use split payment | [optional] 
**useGrossPrices** | **Boolean** | Use gross prices | [optional] 
**eInvoice** | **Boolean** | Indicates if this is an e-invoice. | [optional] 
**eiData** | [**IssuedDocumentEiData**](IssuedDocumentEiData.md) |  | [optional] 
**eiCassaType** | **String** | Einvoice cassa type | [optional] 
**eiCassa2Type** | **String** | Einvoice cassa2 type | [optional] 
**eiWithholdingTaxCausal** | **String** | Einvoice withholding tax causal | [optional] 
**eiOtherWithholdingTaxType** | **String** | Einvoice other withholding tax type | [optional] 
**eiOtherWithholdingTaxCausal** | **String** | Einvoice other withholding tax causal | [optional] 
**itemsList** | [**[IssuedDocumentItemsListItem]**](IssuedDocumentItemsListItem.md) |  | [optional] 
**paymentsList** | [**[IssuedDocumentPaymentsListItem]**](IssuedDocumentPaymentsListItem.md) |  | [optional] 
**template** | [**DocumentTemplate**](DocumentTemplate.md) |  | [optional] 
**deliveryNoteTemplate** | [**DocumentTemplate**](DocumentTemplate.md) |  | [optional] 
**accInvTemplate** | [**DocumentTemplate**](DocumentTemplate.md) |  | [optional] 
**hMargins** | **Number** | Horizontal margins. | [optional] 
**vMargins** | **Number** | Vertical margins. | [optional] 
**showPayments** | **Boolean** | Shows the expiration dates of the payments on the document. | [optional] 
**showPaymentMethod** | **Boolean** | Show the payment method details on the document. | [optional] 
**showTotals** | [**ShowTotalsMode**](ShowTotalsMode.md) |  | [optional] 
**showPaypalButton** | **Boolean** | Show paypal button | [optional] 
**showNotificationButton** | **Boolean** | Show notification button | [optional] 
**showTspayButton** | **Boolean** | Show ts pay button. | [optional] 
**deliveryNote** | **Boolean** |  | [optional] 
**accompanyingInvoice** | **Boolean** | Attach an accompanying invoice. | [optional] 
**dnNumber** | **Number** | Number (for the attached delivery note). | [optional] 
**dnDate** | **Date** | Date (for the attached delivery note). | [optional] 
**dnAiPackagesNumber** | **String** | Number of packages (for the attached delivery note). | [optional] 
**dnAiWeight** | **String** | Weight (for the attached delivery note). | [optional] 
**dnAiCausal** | **String** | Causal (for the attached delivery note). | [optional] 
**dnAiDestination** | **String** | Destination (for the attached delivery note). | [optional] 
**dnAiTransporter** | **String** | Transporter (for the attached delivery note). | [optional] 
**dnAiNotes** | **String** | Notes (for the attached delivery note). | [optional] 
**isMarked** | **Boolean** | This is true if the document is marked. | [optional] 
**amountNet** | **Number** | [Read Only] Total net amount (competenze). | [optional] [readonly] 
**amountVat** | **Number** | [Read Only] Total vat amount (IVA). | [optional] [readonly] 
**amountGross** | **Number** | [Read Only] Total gross amount (totale documento). | [optional] [readonly] 
**amountDueDiscount** | **Number** | Amount due discount | [optional] 
**amountRivalsa** | **Number** | [Read Only] Rivalsa amount. | [optional] [readonly] 
**amountRivalsaTaxable** | **Number** | Taxable rivalsa amount | [optional] 
**amountWithholdingTax** | **Number** | [Read Only] Withholding tax amount (ritenuta d&#39;acconto). | [optional] [readonly] 
**amountWithholdingTaxTaxable** | **Number** | Taxable withholding tax amount | [optional] 
**amountOtherWithholdingTax** | **Number** | [Read Only] Other withholding tax amount (altra ritenuta). | [optional] [readonly] 
**amountOtherWithholdingTaxTaxable** | **Number** | Taxable other withholding tax amount | [optional] 
**amountEnasarcoTaxable** | **Number** | Taxable enasarco amount | [optional] 
**extraData** | [**IssuedDocumentExtraData**](IssuedDocumentExtraData.md) |  | [optional] 
**seenDate** | **Date** | Date when the client/supplier has seen the document. | [optional] 
**nextDueDate** | **Date** | Date of the next not paid payment. | [optional] 
**url** | **String** | Public url of the document PDF file. | [optional] 
**attachmentUrl** | **String** | [Read Only] Public url of the attached file. Authomatically set if a valid attachment token is passed via POST /issued_documents or PUT /issued_documents/{documentId}. | [optional] [readonly] 
**attachmentToken** | **String** | [Write Only] Attachment token returned by POST /issued_documents/attachment. Used to attach the file already uploaded. | [optional] 
**eiRaw** | **Object** | Advanced raw attributes for e-invoices. | [optional] 
**eiStatus** | **String** | [Read only] Status of the e-invoice.   * &#x60;attempt&#x60; - We are trying to send the invoice, please wait up to 2 hours   * &#x60;missing&#x60; - The invoice is missing   * &#x60;not_sent&#x60; - The invoice has yet to be sent   * &#x60;pending&#x60; - The checks for the digital signature and sending are in progress   * &#x60;processing&#x60; - The SDI is delivering the invoice to the customer   * &#x60;error&#x60; - An error occurred while handling the invoice, please try to resend it or contact support   * &#x60;discarded&#x60; - The invoice has been rejected by the SDI, so it must be corrected and re-sent   * &#x60;not_delivered&#x60; - The SDI was unable to deliver the invoice   * &#x60;accepted&#x60; - The customer accepted the invoice   * &#x60;rejected&#x60; - The customer rejected the invoice, so it must be corrected   * &#x60;no_response&#x60; - A response has not yet been received whithin the deadline, contact the customer to ascertain the status of the invoice  | [optional] 



## Enum: EiStatusEnum


* `attempt` (value: `"attempt"`)

* `missing` (value: `"missing"`)

* `not_sent` (value: `"not_sent"`)

* `pending` (value: `"pending"`)

* `processing` (value: `"processing"`)

* `error` (value: `"error"`)

* `discarded` (value: `"discarded"`)

* `not_delivered` (value: `"not_delivered"`)

* `accepted` (value: `"accepted"`)

* `rejected` (value: `"rejected"`)

* `no_response` (value: `"no_response"`)




