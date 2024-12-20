/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.1.3
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import Currency from './Currency'
import Entity from './Entity'
import ReceivedDocumentItemsListItem from './ReceivedDocumentItemsListItem'
import ReceivedDocumentPaymentsListItem from './ReceivedDocumentPaymentsListItem'
import ReceivedDocumentType from './ReceivedDocumentType'

/**
 * The ReceivedDocument model module.
 * @module model/ReceivedDocument
 * @version 2.1.1
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
        obj.entity = Entity.constructFromObject(data.entity)
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
      if (data.hasOwnProperty('auto_calculate')) {
        obj.auto_calculate = ApiClient.convertToType(data.auto_calculate, 'Boolean')
      }
      if (data.hasOwnProperty('attachment_token')) {
        obj.attachment_token = ApiClient.convertToType(data.attachment_token, 'String')
      }
      if (data.hasOwnProperty('locked')) {
        obj.locked = ApiClient.convertToType(data.locked, 'Boolean')
      }
      if (data.hasOwnProperty('created_at')) {
        obj.created_at = ApiClient.convertToType(data.created_at, 'String')
      }
      if (data.hasOwnProperty('updated_at')) {
        obj.updated_at = ApiClient.convertToType(data.updated_at, 'String')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>ReceivedDocument</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReceivedDocument</code>.
     */
  static validateJSON (data) {
    // validate the optional field `entity`
    if (data.entity) { // data not null
      Entity.validateJSON(data.entity)
    }
    // ensure the json data is a string
    if (data.category && !(typeof data.category === 'string' || data.category instanceof String)) {
      throw new Error('Expected the field `category` to be a primitive type in the JSON string but got ' + data.category)
    }
    // ensure the json data is a string
    if (data.description && !(typeof data.description === 'string' || data.description instanceof String)) {
      throw new Error('Expected the field `description` to be a primitive type in the JSON string but got ' + data.description)
    }
    // ensure the json data is a string
    if (data.rc_center && !(typeof data.rc_center === 'string' || data.rc_center instanceof String)) {
      throw new Error('Expected the field `rc_center` to be a primitive type in the JSON string but got ' + data.rc_center)
    }
    // ensure the json data is a string
    if (data.invoice_number && !(typeof data.invoice_number === 'string' || data.invoice_number instanceof String)) {
      throw new Error('Expected the field `invoice_number` to be a primitive type in the JSON string but got ' + data.invoice_number)
    }
    // validate the optional field `currency`
    if (data.currency) { // data not null
      Currency.validateJSON(data.currency)
    }
    if (data.items_list) { // data not null
      // ensure the json data is an array
      if (!Array.isArray(data.items_list)) {
        throw new Error('Expected the field `items_list` to be an array in the JSON data but got ' + data.items_list)
      }
      // validate the optional field `items_list` (array)
      for (const item of data.items_list) {
        ReceivedDocumentItemsListItem.validateJSON(item)
      }
    }
    if (data.payments_list) { // data not null
      // ensure the json data is an array
      if (!Array.isArray(data.payments_list)) {
        throw new Error('Expected the field `payments_list` to be an array in the JSON data but got ' + data.payments_list)
      }
      // validate the optional field `payments_list` (array)
      for (const item of data.payments_list) {
        ReceivedDocumentPaymentsListItem.validateJSON(item)
      }
    }
    // ensure the json data is a string
    if (data.attachment_url && !(typeof data.attachment_url === 'string' || data.attachment_url instanceof String)) {
      throw new Error('Expected the field `attachment_url` to be a primitive type in the JSON string but got ' + data.attachment_url)
    }
    // ensure the json data is a string
    if (data.attachment_preview_url && !(typeof data.attachment_preview_url === 'string' || data.attachment_preview_url instanceof String)) {
      throw new Error('Expected the field `attachment_preview_url` to be a primitive type in the JSON string but got ' + data.attachment_preview_url)
    }
    // ensure the json data is a string
    if (data.attachment_token && !(typeof data.attachment_token === 'string' || data.attachment_token instanceof String)) {
      throw new Error('Expected the field `attachment_token` to be a primitive type in the JSON string but got ' + data.attachment_token)
    }
    // ensure the json data is a string
    if (data.created_at && !(typeof data.created_at === 'string' || data.created_at instanceof String)) {
      throw new Error('Expected the field `created_at` to be a primitive type in the JSON string but got ' + data.created_at)
    }
    // ensure the json data is a string
    if (data.updated_at && !(typeof data.updated_at === 'string' || data.updated_at instanceof String)) {
      throw new Error('Expected the field `updated_at` to be a primitive type in the JSON string but got ' + data.updated_at)
    }

    return true
  }
}

/**
 * Received document id
 * @member {Number} id
 */
ReceivedDocument.prototype.id = undefined

/**
 * @member {module:model/ReceivedDocumentType} type
 */
ReceivedDocument.prototype.type = undefined

/**
 * @member {module:model/Entity} entity
 */
ReceivedDocument.prototype.entity = undefined

/**
 * Received document date [defaults to today's date]
 * @member {Date} date
 */
ReceivedDocument.prototype.date = undefined

/**
 * Received document category
 * @member {String} category
 */
ReceivedDocument.prototype.category = undefined

/**
 * Received document description
 * @member {String} description
 */
ReceivedDocument.prototype.description = undefined

/**
 * Received document total net amount
 * @member {Number} amount_net
 */
ReceivedDocument.prototype.amount_net = undefined

/**
 * Received document total vat amount
 * @member {Number} amount_vat
 */
ReceivedDocument.prototype.amount_vat = undefined

/**
 * Received document withholding tax amount
 * @member {Number} amount_withholding_tax
 */
ReceivedDocument.prototype.amount_withholding_tax = undefined

/**
 * Received document other withholding tax amount
 * @member {Number} amount_other_withholding_tax
 */
ReceivedDocument.prototype.amount_other_withholding_tax = undefined

/**
 * [Read Only] Received document total gross amount
 * @member {Number} amount_gross
 */
ReceivedDocument.prototype.amount_gross = undefined

/**
 * Received document amortization value
 * @member {Number} amortization
 */
ReceivedDocument.prototype.amortization = undefined

/**
 * Received document revenue center
 * @member {String} rc_center
 */
ReceivedDocument.prototype.rc_center = undefined

/**
 * Received document invoice number
 * @member {String} invoice_number
 */
ReceivedDocument.prototype.invoice_number = undefined

/**
 * Received document is marked
 * @member {Boolean} is_marked
 */
ReceivedDocument.prototype.is_marked = undefined

/**
 * Received document has items
 * @member {Boolean} is_detailed
 */
ReceivedDocument.prototype.is_detailed = undefined

/**
 * [Read Only] Received document is an e-invoice
 * @member {Boolean} e_invoice
 */
ReceivedDocument.prototype.e_invoice = undefined

/**
 * [Read Only] Received document date of the next not paid payment
 * @member {Date} next_due_date
 */
ReceivedDocument.prototype.next_due_date = undefined

/**
 * @member {module:model/Currency} currency
 */
ReceivedDocument.prototype.currency = undefined

/**
 * Received document tax deducibility percentage
 * @member {Number} tax_deductibility
 */
ReceivedDocument.prototype.tax_deductibility = undefined

/**
 * Received document vat deducibility percentage
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
 * [Temporary] [Read Only] Received document url of the attached file
 * @member {String} attachment_url
 */
ReceivedDocument.prototype.attachment_url = undefined

/**
 * [Temporary] [Read Only] Received document url of the attachment preview
 * @member {String} attachment_preview_url
 */
ReceivedDocument.prototype.attachment_preview_url = undefined

/**
 * Received document total items amount and total payments amount can differ if this field is set to false
 * @member {Boolean} auto_calculate
 */
ReceivedDocument.prototype.auto_calculate = undefined

/**
 * [Write Only] Received document attachment token returned by POST /received_documents/attachment
 * @member {String} attachment_token
 */
ReceivedDocument.prototype.attachment_token = undefined

/**
 * Received Document can't be edited
 * @member {Boolean} locked
 */
ReceivedDocument.prototype.locked = undefined

/**
 * Received document creation date
 * @member {String} created_at
 */
ReceivedDocument.prototype.created_at = undefined

/**
 * Received document last update date
 * @member {String} updated_at
 */
ReceivedDocument.prototype.updated_at = undefined

export default ReceivedDocument
