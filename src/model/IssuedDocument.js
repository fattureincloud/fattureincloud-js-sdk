/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.20
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import Currency from './Currency'
import DocumentTemplate from './DocumentTemplate'
import Entity from './Entity'
import IssuedDocumentEiData from './IssuedDocumentEiData'
import IssuedDocumentExtraData from './IssuedDocumentExtraData'
import IssuedDocumentItemsListItem from './IssuedDocumentItemsListItem'
import IssuedDocumentPaymentsListItem from './IssuedDocumentPaymentsListItem'
import IssuedDocumentType from './IssuedDocumentType'
import Language from './Language'
import PaymentMethod from './PaymentMethod'
import ShowTotalsMode from './ShowTotalsMode'

/**
 * The IssuedDocument model module.
 * @module model/IssuedDocument
 * @version 2.0.16
 */
class IssuedDocument {
  /**
     * Constructs a new <code>IssuedDocument</code>.
     *
     * @alias module:model/IssuedDocument
     */
  constructor () {
    IssuedDocument.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>IssuedDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuedDocument} obj Optional instance to populate.
     * @return {module:model/IssuedDocument} The populated <code>IssuedDocument</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new IssuedDocument()

      if (data.hasOwnProperty('id')) {
        obj.id = ApiClient.convertToType(data.id, 'Number')
      }
      if (data.hasOwnProperty('entity')) {
        obj.entity = Entity.constructFromObject(data.entity)
      }
      if (data.hasOwnProperty('type')) {
        obj.type = IssuedDocumentType.constructFromObject(data.type)
      }
      if (data.hasOwnProperty('number')) {
        obj.number = ApiClient.convertToType(data.number, 'Number')
      }
      if (data.hasOwnProperty('numeration')) {
        obj.numeration = ApiClient.convertToType(data.numeration, 'String')
      }
      if (data.hasOwnProperty('date')) {
        obj.date = ApiClient.convertToType(data.date, 'Date')
      }
      if (data.hasOwnProperty('year')) {
        obj.year = ApiClient.convertToType(data.year, 'Number')
      }
      if (data.hasOwnProperty('currency')) {
        obj.currency = Currency.constructFromObject(data.currency)
      }
      if (data.hasOwnProperty('language')) {
        obj.language = Language.constructFromObject(data.language)
      }
      if (data.hasOwnProperty('subject')) {
        obj.subject = ApiClient.convertToType(data.subject, 'String')
      }
      if (data.hasOwnProperty('visible_subject')) {
        obj.visible_subject = ApiClient.convertToType(data.visible_subject, 'String')
      }
      if (data.hasOwnProperty('rc_center')) {
        obj.rc_center = ApiClient.convertToType(data.rc_center, 'String')
      }
      if (data.hasOwnProperty('notes')) {
        obj.notes = ApiClient.convertToType(data.notes, 'String')
      }
      if (data.hasOwnProperty('rivalsa')) {
        obj.rivalsa = ApiClient.convertToType(data.rivalsa, 'Number')
      }
      if (data.hasOwnProperty('cassa')) {
        obj.cassa = ApiClient.convertToType(data.cassa, 'Number')
      }
      if (data.hasOwnProperty('amount_cassa')) {
        obj.amount_cassa = ApiClient.convertToType(data.amount_cassa, 'Number')
      }
      if (data.hasOwnProperty('cassa_taxable')) {
        obj.cassa_taxable = ApiClient.convertToType(data.cassa_taxable, 'Number')
      }
      if (data.hasOwnProperty('amount_cassa_taxable')) {
        obj.amount_cassa_taxable = ApiClient.convertToType(data.amount_cassa_taxable, 'Number')
      }
      if (data.hasOwnProperty('cassa2')) {
        obj.cassa2 = ApiClient.convertToType(data.cassa2, 'Number')
      }
      if (data.hasOwnProperty('amount_cassa2')) {
        obj.amount_cassa2 = ApiClient.convertToType(data.amount_cassa2, 'Number')
      }
      if (data.hasOwnProperty('cassa2_taxable')) {
        obj.cassa2_taxable = ApiClient.convertToType(data.cassa2_taxable, 'Number')
      }
      if (data.hasOwnProperty('amount_cassa2_taxable')) {
        obj.amount_cassa2_taxable = ApiClient.convertToType(data.amount_cassa2_taxable, 'Number')
      }
      if (data.hasOwnProperty('global_cassa_taxable')) {
        obj.global_cassa_taxable = ApiClient.convertToType(data.global_cassa_taxable, 'Number')
      }
      if (data.hasOwnProperty('amount_global_cassa_taxable')) {
        obj.amount_global_cassa_taxable = ApiClient.convertToType(data.amount_global_cassa_taxable, 'Number')
      }
      if (data.hasOwnProperty('withholding_tax')) {
        obj.withholding_tax = ApiClient.convertToType(data.withholding_tax, 'Number')
      }
      if (data.hasOwnProperty('withholding_tax_taxable')) {
        obj.withholding_tax_taxable = ApiClient.convertToType(data.withholding_tax_taxable, 'Number')
      }
      if (data.hasOwnProperty('other_withholding_tax')) {
        obj.other_withholding_tax = ApiClient.convertToType(data.other_withholding_tax, 'Number')
      }
      if (data.hasOwnProperty('stamp_duty')) {
        obj.stamp_duty = ApiClient.convertToType(data.stamp_duty, 'Number')
      }
      if (data.hasOwnProperty('payment_method')) {
        obj.payment_method = PaymentMethod.constructFromObject(data.payment_method)
      }
      if (data.hasOwnProperty('use_split_payment')) {
        obj.use_split_payment = ApiClient.convertToType(data.use_split_payment, 'Boolean')
      }
      if (data.hasOwnProperty('use_gross_prices')) {
        obj.use_gross_prices = ApiClient.convertToType(data.use_gross_prices, 'Boolean')
      }
      if (data.hasOwnProperty('e_invoice')) {
        obj.e_invoice = ApiClient.convertToType(data.e_invoice, 'Boolean')
      }
      if (data.hasOwnProperty('ei_data')) {
        obj.ei_data = IssuedDocumentEiData.constructFromObject(data.ei_data)
      }
      if (data.hasOwnProperty('ei_cassa_type')) {
        obj.ei_cassa_type = ApiClient.convertToType(data.ei_cassa_type, 'String')
      }
      if (data.hasOwnProperty('ei_cassa2_type')) {
        obj.ei_cassa2_type = ApiClient.convertToType(data.ei_cassa2_type, 'String')
      }
      if (data.hasOwnProperty('ei_withholding_tax_causal')) {
        obj.ei_withholding_tax_causal = ApiClient.convertToType(data.ei_withholding_tax_causal, 'String')
      }
      if (data.hasOwnProperty('ei_other_withholding_tax_type')) {
        obj.ei_other_withholding_tax_type = ApiClient.convertToType(data.ei_other_withholding_tax_type, 'String')
      }
      if (data.hasOwnProperty('ei_other_withholding_tax_causal')) {
        obj.ei_other_withholding_tax_causal = ApiClient.convertToType(data.ei_other_withholding_tax_causal, 'String')
      }
      if (data.hasOwnProperty('items_list')) {
        obj.items_list = ApiClient.convertToType(data.items_list, [IssuedDocumentItemsListItem])
      }
      if (data.hasOwnProperty('payments_list')) {
        obj.payments_list = ApiClient.convertToType(data.payments_list, [IssuedDocumentPaymentsListItem])
      }
      if (data.hasOwnProperty('template')) {
        obj.template = DocumentTemplate.constructFromObject(data.template)
      }
      if (data.hasOwnProperty('delivery_note_template')) {
        obj.delivery_note_template = DocumentTemplate.constructFromObject(data.delivery_note_template)
      }
      if (data.hasOwnProperty('acc_inv_template')) {
        obj.acc_inv_template = DocumentTemplate.constructFromObject(data.acc_inv_template)
      }
      if (data.hasOwnProperty('h_margins')) {
        obj.h_margins = ApiClient.convertToType(data.h_margins, 'Number')
      }
      if (data.hasOwnProperty('v_margins')) {
        obj.v_margins = ApiClient.convertToType(data.v_margins, 'Number')
      }
      if (data.hasOwnProperty('show_payments')) {
        obj.show_payments = ApiClient.convertToType(data.show_payments, 'Boolean')
      }
      if (data.hasOwnProperty('show_payment_method')) {
        obj.show_payment_method = ApiClient.convertToType(data.show_payment_method, 'Boolean')
      }
      if (data.hasOwnProperty('show_totals')) {
        obj.show_totals = ShowTotalsMode.constructFromObject(data.show_totals)
      }
      if (data.hasOwnProperty('show_paypal_button')) {
        obj.show_paypal_button = ApiClient.convertToType(data.show_paypal_button, 'Boolean')
      }
      if (data.hasOwnProperty('show_notification_button')) {
        obj.show_notification_button = ApiClient.convertToType(data.show_notification_button, 'Boolean')
      }
      if (data.hasOwnProperty('show_tspay_button')) {
        obj.show_tspay_button = ApiClient.convertToType(data.show_tspay_button, 'Boolean')
      }
      if (data.hasOwnProperty('delivery_note')) {
        obj.delivery_note = ApiClient.convertToType(data.delivery_note, 'Boolean')
      }
      if (data.hasOwnProperty('accompanying_invoice')) {
        obj.accompanying_invoice = ApiClient.convertToType(data.accompanying_invoice, 'Boolean')
      }
      if (data.hasOwnProperty('dn_number')) {
        obj.dn_number = ApiClient.convertToType(data.dn_number, 'Number')
      }
      if (data.hasOwnProperty('dn_date')) {
        obj.dn_date = ApiClient.convertToType(data.dn_date, 'Date')
      }
      if (data.hasOwnProperty('dn_ai_packages_number')) {
        obj.dn_ai_packages_number = ApiClient.convertToType(data.dn_ai_packages_number, 'String')
      }
      if (data.hasOwnProperty('dn_ai_weight')) {
        obj.dn_ai_weight = ApiClient.convertToType(data.dn_ai_weight, 'String')
      }
      if (data.hasOwnProperty('dn_ai_causal')) {
        obj.dn_ai_causal = ApiClient.convertToType(data.dn_ai_causal, 'String')
      }
      if (data.hasOwnProperty('dn_ai_destination')) {
        obj.dn_ai_destination = ApiClient.convertToType(data.dn_ai_destination, 'String')
      }
      if (data.hasOwnProperty('dn_ai_transporter')) {
        obj.dn_ai_transporter = ApiClient.convertToType(data.dn_ai_transporter, 'String')
      }
      if (data.hasOwnProperty('dn_ai_notes')) {
        obj.dn_ai_notes = ApiClient.convertToType(data.dn_ai_notes, 'String')
      }
      if (data.hasOwnProperty('is_marked')) {
        obj.is_marked = ApiClient.convertToType(data.is_marked, 'Boolean')
      }
      if (data.hasOwnProperty('amount_net')) {
        obj.amount_net = ApiClient.convertToType(data.amount_net, 'Number')
      }
      if (data.hasOwnProperty('amount_vat')) {
        obj.amount_vat = ApiClient.convertToType(data.amount_vat, 'Number')
      }
      if (data.hasOwnProperty('amount_gross')) {
        obj.amount_gross = ApiClient.convertToType(data.amount_gross, 'Number')
      }
      if (data.hasOwnProperty('amount_due_discount')) {
        obj.amount_due_discount = ApiClient.convertToType(data.amount_due_discount, 'Number')
      }
      if (data.hasOwnProperty('amount_rivalsa')) {
        obj.amount_rivalsa = ApiClient.convertToType(data.amount_rivalsa, 'Number')
      }
      if (data.hasOwnProperty('amount_rivalsa_taxable')) {
        obj.amount_rivalsa_taxable = ApiClient.convertToType(data.amount_rivalsa_taxable, 'Number')
      }
      if (data.hasOwnProperty('amount_withholding_tax')) {
        obj.amount_withholding_tax = ApiClient.convertToType(data.amount_withholding_tax, 'Number')
      }
      if (data.hasOwnProperty('amount_withholding_tax_taxable')) {
        obj.amount_withholding_tax_taxable = ApiClient.convertToType(data.amount_withholding_tax_taxable, 'Number')
      }
      if (data.hasOwnProperty('amount_other_withholding_tax')) {
        obj.amount_other_withholding_tax = ApiClient.convertToType(data.amount_other_withholding_tax, 'Number')
      }
      if (data.hasOwnProperty('amount_other_withholding_tax_taxable')) {
        obj.amount_other_withholding_tax_taxable = ApiClient.convertToType(data.amount_other_withholding_tax_taxable, 'Number')
      }
      if (data.hasOwnProperty('amount_enasarco_taxable')) {
        obj.amount_enasarco_taxable = ApiClient.convertToType(data.amount_enasarco_taxable, 'Number')
      }
      if (data.hasOwnProperty('extra_data')) {
        obj.extra_data = IssuedDocumentExtraData.constructFromObject(data.extra_data)
      }
      if (data.hasOwnProperty('seen_date')) {
        obj.seen_date = ApiClient.convertToType(data.seen_date, 'Date')
      }
      if (data.hasOwnProperty('next_due_date')) {
        obj.next_due_date = ApiClient.convertToType(data.next_due_date, 'Date')
      }
      if (data.hasOwnProperty('url')) {
        obj.url = ApiClient.convertToType(data.url, 'String')
      }
      if (data.hasOwnProperty('attachment_url')) {
        obj.attachment_url = ApiClient.convertToType(data.attachment_url, 'String')
      }
      if (data.hasOwnProperty('attachment_token')) {
        obj.attachment_token = ApiClient.convertToType(data.attachment_token, 'String')
      }
      if (data.hasOwnProperty('ei_raw')) {
        obj.ei_raw = ApiClient.convertToType(data.ei_raw, Object)
      }
      if (data.hasOwnProperty('ei_status')) {
        obj.ei_status = ApiClient.convertToType(data.ei_status, 'String')
      }
    }
    return obj
  }
}

/**
 * Unique identifier of the document.
 * @member {Number} id
 */
IssuedDocument.prototype.id = undefined

/**
 * @member {module:model/Entity} entity
 */
IssuedDocument.prototype.entity = undefined

/**
 * @member {module:model/IssuedDocumentType} type
 */
IssuedDocument.prototype.type = undefined

/**
 * Number of the document [If not specified, next number is used]
 * @member {Number} number
 */
IssuedDocument.prototype.number = undefined

/**
 * Numeration of the document [Not available if type=delivery_note]
 * @member {String} numeration
 */
IssuedDocument.prototype.numeration = undefined

/**
 * Date of the document [If not specified, today date is used]
 * @member {Date} date
 */
IssuedDocument.prototype.date = undefined

/**
 * Invoice year.
 * @member {Number} year
 */
IssuedDocument.prototype.year = undefined

/**
 * @member {module:model/Currency} currency
 */
IssuedDocument.prototype.currency = undefined

/**
 * @member {module:model/Language} language
 */
IssuedDocument.prototype.language = undefined

/**
 * Issued document subject.
 * @member {String} subject
 */
IssuedDocument.prototype.subject = undefined

/**
 * Issued document visible subject.
 * @member {String} visible_subject
 */
IssuedDocument.prototype.visible_subject = undefined

/**
 * Revenue center [or cost center if type=supplier_order].
 * @member {String} rc_center
 */
IssuedDocument.prototype.rc_center = undefined

/**
 * Issued document extra notes.
 * @member {String} notes
 */
IssuedDocument.prototype.notes = undefined

/**
 * \"Rivalsa INPS\" percentual value
 * @member {Number} rivalsa
 */
IssuedDocument.prototype.rivalsa = undefined

/**
 * \"Cassa previdenziale\" percentual value
 * @member {Number} cassa
 */
IssuedDocument.prototype.cassa = undefined

/**
 * [Read Only] Cassa amount.
 * @member {Number} amount_cassa
 */
IssuedDocument.prototype.amount_cassa = undefined

/**
 * Cassa taxable percentage
 * @member {Number} cassa_taxable
 */
IssuedDocument.prototype.cassa_taxable = undefined

/**
 * [Can be set only if cassa_taxable is NULL] Cassa2 taxable amount
 * @member {Number} amount_cassa_taxable
 */
IssuedDocument.prototype.amount_cassa_taxable = undefined

/**
 * \"Cassa previdenziale 2\" percentual value
 * @member {Number} cassa2
 */
IssuedDocument.prototype.cassa2 = undefined

/**
 * [Read Only] Cassa amount.
 * @member {Number} amount_cassa2
 */
IssuedDocument.prototype.amount_cassa2 = undefined

/**
 * Cassa2 taxable percentage
 * @member {Number} cassa2_taxable
 */
IssuedDocument.prototype.cassa2_taxable = undefined

/**
 * [Can be set only if cassa2_taxable is NULL] Cassa2 taxable amount
 * @member {Number} amount_cassa2_taxable
 */
IssuedDocument.prototype.amount_cassa2_taxable = undefined

/**
 * Global cassa taxable percentage
 * @member {Number} global_cassa_taxable
 */
IssuedDocument.prototype.global_cassa_taxable = undefined

/**
 * [Can be set only if global_cassa_taxable is NULL] Global cassa taxable amount
 * @member {Number} amount_global_cassa_taxable
 */
IssuedDocument.prototype.amount_global_cassa_taxable = undefined

/**
 * Withholding tax (ritenuta d'acconto) percentual value
 * @member {Number} withholding_tax
 */
IssuedDocument.prototype.withholding_tax = undefined

/**
 * Withholding tax taxable (imponibile) percentual value
 * @member {Number} withholding_tax_taxable
 */
IssuedDocument.prototype.withholding_tax_taxable = undefined

/**
 * Other withholding tax (altra ritenuta) percentual value
 * @member {Number} other_withholding_tax
 */
IssuedDocument.prototype.other_withholding_tax = undefined

/**
 * Stamp duty value [0 if not present]
 * @member {Number} stamp_duty
 */
IssuedDocument.prototype.stamp_duty = undefined

/**
 * @member {module:model/PaymentMethod} payment_method
 */
IssuedDocument.prototype.payment_method = undefined

/**
 * Use split payment
 * @member {Boolean} use_split_payment
 */
IssuedDocument.prototype.use_split_payment = undefined

/**
 * Use gross prices
 * @member {Boolean} use_gross_prices
 */
IssuedDocument.prototype.use_gross_prices = undefined

/**
 * Indicates if this is an e-invoice.
 * @member {Boolean} e_invoice
 */
IssuedDocument.prototype.e_invoice = undefined

/**
 * @member {module:model/IssuedDocumentEiData} ei_data
 */
IssuedDocument.prototype.ei_data = undefined

/**
 * E-invoice cassa type
 * @member {String} ei_cassa_type
 */
IssuedDocument.prototype.ei_cassa_type = undefined

/**
 * E-invoice cassa2 type
 * @member {String} ei_cassa2_type
 */
IssuedDocument.prototype.ei_cassa2_type = undefined

/**
 * E-invoice withholding tax causal
 * @member {String} ei_withholding_tax_causal
 */
IssuedDocument.prototype.ei_withholding_tax_causal = undefined

/**
 * E-invoice other withholding tax type
 * @member {String} ei_other_withholding_tax_type
 */
IssuedDocument.prototype.ei_other_withholding_tax_type = undefined

/**
 * E-invoice other withholding tax causal
 * @member {String} ei_other_withholding_tax_causal
 */
IssuedDocument.prototype.ei_other_withholding_tax_causal = undefined

/**
 * @member {Array.<module:model/IssuedDocumentItemsListItem>} items_list
 */
IssuedDocument.prototype.items_list = undefined

/**
 * @member {Array.<module:model/IssuedDocumentPaymentsListItem>} payments_list
 */
IssuedDocument.prototype.payments_list = undefined

/**
 * @member {module:model/DocumentTemplate} template
 */
IssuedDocument.prototype.template = undefined

/**
 * @member {module:model/DocumentTemplate} delivery_note_template
 */
IssuedDocument.prototype.delivery_note_template = undefined

/**
 * @member {module:model/DocumentTemplate} acc_inv_template
 */
IssuedDocument.prototype.acc_inv_template = undefined

/**
 * Horizontal margins.
 * @member {Number} h_margins
 */
IssuedDocument.prototype.h_margins = undefined

/**
 * Vertical margins.
 * @member {Number} v_margins
 */
IssuedDocument.prototype.v_margins = undefined

/**
 * Shows the expiration dates of the payments on the document.
 * @member {Boolean} show_payments
 */
IssuedDocument.prototype.show_payments = undefined

/**
 * Show the payment method details on the document.
 * @member {Boolean} show_payment_method
 */
IssuedDocument.prototype.show_payment_method = undefined

/**
 * @member {module:model/ShowTotalsMode} show_totals
 */
IssuedDocument.prototype.show_totals = undefined

/**
 * Show paypal button
 * @member {Boolean} show_paypal_button
 */
IssuedDocument.prototype.show_paypal_button = undefined

/**
 * Show notification button
 * @member {Boolean} show_notification_button
 */
IssuedDocument.prototype.show_notification_button = undefined

/**
 * Show ts pay button.
 * @member {Boolean} show_tspay_button
 */
IssuedDocument.prototype.show_tspay_button = undefined

/**
 * @member {Boolean} delivery_note
 */
IssuedDocument.prototype.delivery_note = undefined

/**
 * Attach an accompanying invoice.
 * @member {Boolean} accompanying_invoice
 */
IssuedDocument.prototype.accompanying_invoice = undefined

/**
 * Number (for the attached delivery note).
 * @member {Number} dn_number
 */
IssuedDocument.prototype.dn_number = undefined

/**
 * Date (for the attached delivery note).
 * @member {Date} dn_date
 */
IssuedDocument.prototype.dn_date = undefined

/**
 * Number of packages (for the attached delivery note).
 * @member {String} dn_ai_packages_number
 */
IssuedDocument.prototype.dn_ai_packages_number = undefined

/**
 * Weight (for the attached delivery note).
 * @member {String} dn_ai_weight
 */
IssuedDocument.prototype.dn_ai_weight = undefined

/**
 * Causal (for the attached delivery note).
 * @member {String} dn_ai_causal
 */
IssuedDocument.prototype.dn_ai_causal = undefined

/**
 * Destination (for the attached delivery note).
 * @member {String} dn_ai_destination
 */
IssuedDocument.prototype.dn_ai_destination = undefined

/**
 * Transporter (for the attached delivery note).
 * @member {String} dn_ai_transporter
 */
IssuedDocument.prototype.dn_ai_transporter = undefined

/**
 * Notes (for the attached delivery note).
 * @member {String} dn_ai_notes
 */
IssuedDocument.prototype.dn_ai_notes = undefined

/**
 * This is true if the document is marked.
 * @member {Boolean} is_marked
 */
IssuedDocument.prototype.is_marked = undefined

/**
 * [Read Only] Total net amount (competenze).
 * @member {Number} amount_net
 */
IssuedDocument.prototype.amount_net = undefined

/**
 * [Read Only] Total vat amount (IVA).
 * @member {Number} amount_vat
 */
IssuedDocument.prototype.amount_vat = undefined

/**
 * [Read Only] Total gross amount (totale documento).
 * @member {Number} amount_gross
 */
IssuedDocument.prototype.amount_gross = undefined

/**
 * Amount due discount
 * @member {Number} amount_due_discount
 */
IssuedDocument.prototype.amount_due_discount = undefined

/**
 * [Read Only] Rivalsa amount.
 * @member {Number} amount_rivalsa
 */
IssuedDocument.prototype.amount_rivalsa = undefined

/**
 * Taxable rivalsa amount
 * @member {Number} amount_rivalsa_taxable
 */
IssuedDocument.prototype.amount_rivalsa_taxable = undefined

/**
 * [Read Only] Withholding tax amount (ritenuta d'acconto).
 * @member {Number} amount_withholding_tax
 */
IssuedDocument.prototype.amount_withholding_tax = undefined

/**
 * Taxable withholding tax amount
 * @member {Number} amount_withholding_tax_taxable
 */
IssuedDocument.prototype.amount_withholding_tax_taxable = undefined

/**
 * [Read Only] Other withholding tax amount (altra ritenuta).
 * @member {Number} amount_other_withholding_tax
 */
IssuedDocument.prototype.amount_other_withholding_tax = undefined

/**
 * Taxable other withholding tax amount
 * @member {Number} amount_other_withholding_tax_taxable
 */
IssuedDocument.prototype.amount_other_withholding_tax_taxable = undefined

/**
 * Taxable enasarco amount
 * @member {Number} amount_enasarco_taxable
 */
IssuedDocument.prototype.amount_enasarco_taxable = undefined

/**
 * @member {module:model/IssuedDocumentExtraData} extra_data
 */
IssuedDocument.prototype.extra_data = undefined

/**
 * Date when the client/supplier has seen the document.
 * @member {Date} seen_date
 */
IssuedDocument.prototype.seen_date = undefined

/**
 * Date of the next not paid payment.
 * @member {Date} next_due_date
 */
IssuedDocument.prototype.next_due_date = undefined

/**
 * Public url of the document PDF file.
 * @member {String} url
 */
IssuedDocument.prototype.url = undefined

/**
 * [Read Only] Public url of the attached file. Authomatically set if a valid attachment token is passed via POST /issued_documents or PUT /issued_documents/{documentId}.
 * @member {String} attachment_url
 */
IssuedDocument.prototype.attachment_url = undefined

/**
 * [Write Only] Attachment token returned by POST /issued_documents/attachment. Used to attach the file already uploaded.
 * @member {String} attachment_token
 */
IssuedDocument.prototype.attachment_token = undefined

/**
 * Advanced raw attributes for e-invoices.
 * @member {Object} ei_raw
 */
IssuedDocument.prototype.ei_raw = undefined

/**
 * [Read only] Status of the e-invoice.   * `attempt` - We are trying to send the invoice, please wait up to 2 hours   * `missing` - The invoice is missing   * `not_sent` - The invoice has yet to be sent   * `sent` - The invoice was sent   * `pending` - The checks for the digital signature and sending are in progress   * `processing` - The SDI is delivering the invoice to the customer   * `error` - An error occurred while handling the invoice, please try to resend it or contact support   * `discarded` - The invoice has been rejected by the SDI, so it must be corrected and re-sent   * `not_delivered` - The SDI was unable to deliver the invoice   * `accepted` - The customer accepted the invoice   * `rejected` - The customer rejected the invoice, so it must be corrected   * `no_response` - A response has not yet been received whithin the deadline, contact the customer to ascertain the status of the invoice   * `manual_accepted` - The customer accepted the invoice   * `manual_rejected` - The customer rejected the invoice
 * @member {module:model/IssuedDocument.EiStatusEnum} ei_status
 */
IssuedDocument.prototype.ei_status = undefined

/**
 * Allowed values for the <code>ei_status</code> property.
 * @enum {String}
 * @readonly
 */
IssuedDocument.EiStatusEnum = {

  /**
     * value: "attempt"
     * @const
     */
  attempt: 'attempt',

  /**
     * value: "missing"
     * @const
     */
  missing: 'missing',

  /**
     * value: "not_sent"
     * @const
     */
  not_sent: 'not_sent',

  /**
     * value: "sent"
     * @const
     */
  sent: 'sent',

  /**
     * value: "pending"
     * @const
     */
  pending: 'pending',

  /**
     * value: "processing"
     * @const
     */
  processing: 'processing',

  /**
     * value: "error"
     * @const
     */
  error: 'error',

  /**
     * value: "discarded"
     * @const
     */
  discarded: 'discarded',

  /**
     * value: "not_delivered"
     * @const
     */
  not_delivered: 'not_delivered',

  /**
     * value: "accepted"
     * @const
     */
  accepted: 'accepted',

  /**
     * value: "rejected"
     * @const
     */
  rejected: 'rejected',

  /**
     * value: "no_response"
     * @const
     */
  no_response: 'no_response',

  /**
     * value: "manual_accepted"
     * @const
     */
  manual_accepted: 'manual_accepted',

  /**
     * value: "manual_rejected"
     * @const
     */
  manual_rejected: 'manual_rejected'
}

export default IssuedDocument
