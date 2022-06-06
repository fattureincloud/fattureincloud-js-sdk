/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.18
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import Currency from './Currency'
import ReceivedDocumentEntity from './ReceivedDocumentEntity'
import ReceivedDocumentItemsListItem from './ReceivedDocumentItemsListItem'
import ReceivedDocumentPaymentsListItem from './ReceivedDocumentPaymentsListItem'
import ReceivedDocumentType from './ReceivedDocumentType'

/**
 * The ReceivedDocument model module.
 * @module model/ReceivedDocument
 * @version 2.0.14
 */
class ReceivedDocument {
  /**
     * Constructs a new <code>ReceivedDocument</code>.
     * @alias module:model/ReceivedDocument
     */
  constructor () {
    ReceivedDocument.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>ReceivedDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReceivedDocument} obj Optional instance to populate.
     * @return {module:model/ReceivedDocument} The populated <code>ReceivedDocument</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new ReceivedDocument()

      if (data.hasOwnProperty('id')) {
        obj.id = ApiClient.convertToType(data.id, 'Number')
      }
      if (data.hasOwnProperty('type')) {
        obj.type = ReceivedDocumentType.constructFromObject(data.type)
      }
      if (data.hasOwnProperty('entity')) {
        obj.entity = ReceivedDocumentEntity.constructFromObject(data.entity)
      }
      if (data.hasOwnProperty('date')) {
        obj.date = ApiClient.convertToType(data.date, 'Date')
      }
      if (data.hasOwnProperty('category')) {
        obj.category = ApiClient.convertToType(data.category, 'String')
      }
      if (data.hasOwnProperty('description')) {
        obj.description = ApiClient.convertToType(data.description, 'String')
      }
      if (data.hasOwnProperty('amount_net')) {
        obj.amount_net = ApiClient.convertToType(data.amount_net, 'Number')
      }
      if (data.hasOwnProperty('amount_vat')) {
        obj.amount_vat = ApiClient.convertToType(data.amount_vat, 'Number')
      }
      if (data.hasOwnProperty('amount_withholding_tax')) {
        obj.amount_withholding_tax = ApiClient.convertToType(data.amount_withholding_tax, 'Number')
      }
      if (data.hasOwnProperty('amount_other_withholding_tax')) {
        obj.amount_other_withholding_tax = ApiClient.convertToType(data.amount_other_withholding_tax, 'Number')
      }
      if (data.hasOwnProperty('amount_gross')) {
        obj.amount_gross = ApiClient.convertToType(data.amount_gross, 'Number')
      }
      if (data.hasOwnProperty('amortization')) {
        obj.amortization = ApiClient.convertToType(data.amortization, 'Number')
      }
      if (data.hasOwnProperty('rc_center')) {
        obj.rc_center = ApiClient.convertToType(data.rc_center, 'String')
      }
      if (data.hasOwnProperty('invoice_number')) {
        obj.invoice_number = ApiClient.convertToType(data.invoice_number, 'String')
      }
      if (data.hasOwnProperty('is_marked')) {
        obj.is_marked = ApiClient.convertToType(data.is_marked, 'Boolean')
      }
      if (data.hasOwnProperty('is_detailed')) {
        obj.is_detailed = ApiClient.convertToType(data.is_detailed, 'Boolean')
      }
      if (data.hasOwnProperty('e_invoice')) {
        obj.e_invoice = ApiClient.convertToType(data.e_invoice, 'Boolean')
      }
      if (data.hasOwnProperty('next_due_date')) {
        obj.next_due_date = ApiClient.convertToType(data.next_due_date, 'Date')
      }
      if (data.hasOwnProperty('currency')) {
        obj.currency = Currency.constructFromObject(data.currency)
      }
      if (data.hasOwnProperty('tax_deductibility')) {
        obj.tax_deductibility = ApiClient.convertToType(data.tax_deductibility, 'Number')
      }
      if (data.hasOwnProperty('vat_deductibility')) {
        obj.vat_deductibility = ApiClient.convertToType(data.vat_deductibility, 'Number')
      }
      if (data.hasOwnProperty('items_list')) {
        obj.items_list = ApiClient.convertToType(data.items_list, [ReceivedDocumentItemsListItem])
      }
      if (data.hasOwnProperty('payments_list')) {
        obj.payments_list = ApiClient.convertToType(data.payments_list, [ReceivedDocumentPaymentsListItem])
      }
      if (data.hasOwnProperty('attachment_url')) {
        obj.attachment_url = ApiClient.convertToType(data.attachment_url, 'String')
      }
      if (data.hasOwnProperty('attachment_preview_url')) {
        obj.attachment_preview_url = ApiClient.convertToType(data.attachment_preview_url, 'String')
      }
      if (data.hasOwnProperty('attachment_token')) {
        obj.attachment_token = ApiClient.convertToType(data.attachment_token, 'String')
      }
    }
    return obj
  }
}

/**
 * Unique identifier of the document.
 * @member {Number} id
 */
ReceivedDocument.prototype.id = undefined

/**
 * @member {module:model/ReceivedDocumentType} type
 */
ReceivedDocument.prototype.type = undefined

/**
 * @member {module:model/ReceivedDocumentEntity} entity
 */
ReceivedDocument.prototype.entity = undefined

/**
 * Date of the document [If not specified, today date is used].
 * @member {Date} date
 */
ReceivedDocument.prototype.date = undefined

/**
 * Document category.
 * @member {String} category
 */
ReceivedDocument.prototype.category = undefined

/**
 * Document description.
 * @member {String} description
 */
ReceivedDocument.prototype.description = undefined

/**
 * Total net amount.
 * @member {Number} amount_net
 */
ReceivedDocument.prototype.amount_net = undefined

/**
 * Total vat amount.
 * @member {Number} amount_vat
 */
ReceivedDocument.prototype.amount_vat = undefined

/**
 * Withholding tax amount.
 * @member {Number} amount_withholding_tax
 */
ReceivedDocument.prototype.amount_withholding_tax = undefined

/**
 * Other withholding tax amount.
 * @member {Number} amount_other_withholding_tax
 */
ReceivedDocument.prototype.amount_other_withholding_tax = undefined

/**
 * [Read Only] Total gross amount.
 * @member {Number} amount_gross
 */
ReceivedDocument.prototype.amount_gross = undefined

/**
 * Amortization value
 * @member {Number} amortization
 */
ReceivedDocument.prototype.amortization = undefined

/**
 * Revenue center.
 * @member {String} rc_center
 */
ReceivedDocument.prototype.rc_center = undefined

/**
 * Invoice number
 * @member {String} invoice_number
 */
ReceivedDocument.prototype.invoice_number = undefined

/**
 * @member {Boolean} is_marked
 */
ReceivedDocument.prototype.is_marked = undefined

/**
 * @member {Boolean} is_detailed
 */
ReceivedDocument.prototype.is_detailed = undefined

/**
 * [Read Only] Indicates if this is an e-invoice.
 * @member {Boolean} e_invoice
 */
ReceivedDocument.prototype.e_invoice = undefined

/**
 * [Read Only] Next due date.
 * @member {Date} next_due_date
 */
ReceivedDocument.prototype.next_due_date = undefined

/**
 * @member {module:model/Currency} currency
 */
ReceivedDocument.prototype.currency = undefined

/**
 * Tax deducibility percentage.
 * @member {Number} tax_deductibility
 */
ReceivedDocument.prototype.tax_deductibility = undefined

/**
 * Vat deducibility percentage.
 * @member {Number} vat_deductibility
 */
ReceivedDocument.prototype.vat_deductibility = undefined

/**
 * @member {Array.<module:model/ReceivedDocumentItemsListItem>} items_list
 */
ReceivedDocument.prototype.items_list = undefined

/**
 * @member {Array.<module:model/ReceivedDocumentPaymentsListItem>} payments_list
 */
ReceivedDocument.prototype.payments_list = undefined

/**
 * [Read Only] Attachment url.
 * @member {String} attachment_url
 */
ReceivedDocument.prototype.attachment_url = undefined

/**
 * [Read Only] Attachment preview url.
 * @member {String} attachment_preview_url
 */
ReceivedDocument.prototype.attachment_preview_url = undefined

/**
 * Uploaded attachement token.
 * @member {String} attachment_token
 */
ReceivedDocument.prototype.attachment_token = undefined

export default ReceivedDocument
