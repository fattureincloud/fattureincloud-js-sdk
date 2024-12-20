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
import CashbookEntryDocument from './CashbookEntryDocument'
import CashbookEntryKind from './CashbookEntryKind'
import CashbookEntryType from './CashbookEntryType'
import PaymentAccount from './PaymentAccount'

/**
 * The CashbookEntry model module.
 * @module model/CashbookEntry
 * @version 2.1.1
 */
class CashbookEntry {
  /**
     * Constructs a new <code>CashbookEntry</code>.
     * @alias module:model/CashbookEntry
     */
  constructor () {
    CashbookEntry.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>CashbookEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CashbookEntry} obj Optional instance to populate.
     * @return {module:model/CashbookEntry} The populated <code>CashbookEntry</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new CashbookEntry()

      if (data.hasOwnProperty('id')) {
        obj.id = ApiClient.convertToType(data.id, 'String')
      }
      if (data.hasOwnProperty('date')) {
        obj.date = ApiClient.convertToType(data.date, 'Date')
      }
      if (data.hasOwnProperty('description')) {
        obj.description = ApiClient.convertToType(data.description, 'String')
      }
      if (data.hasOwnProperty('kind')) {
        obj.kind = CashbookEntryKind.constructFromObject(data.kind)
      }
      if (data.hasOwnProperty('type')) {
        obj.type = CashbookEntryType.constructFromObject(data.type)
      }
      if (data.hasOwnProperty('entity_name')) {
        obj.entity_name = ApiClient.convertToType(data.entity_name, 'String')
      }
      if (data.hasOwnProperty('document')) {
        obj.document = CashbookEntryDocument.constructFromObject(data.document)
      }
      if (data.hasOwnProperty('amount_in')) {
        obj.amount_in = ApiClient.convertToType(data.amount_in, 'Number')
      }
      if (data.hasOwnProperty('payment_account_in')) {
        obj.payment_account_in = PaymentAccount.constructFromObject(data.payment_account_in)
      }
      if (data.hasOwnProperty('amount_out')) {
        obj.amount_out = ApiClient.convertToType(data.amount_out, 'Number')
      }
      if (data.hasOwnProperty('payment_account_out')) {
        obj.payment_account_out = PaymentAccount.constructFromObject(data.payment_account_out)
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>CashbookEntry</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CashbookEntry</code>.
     */
  static validateJSON (data) {
    // ensure the json data is a string
    if (data.id && !(typeof data.id === 'string' || data.id instanceof String)) {
      throw new Error('Expected the field `id` to be a primitive type in the JSON string but got ' + data.id)
    }
    // ensure the json data is a string
    if (data.description && !(typeof data.description === 'string' || data.description instanceof String)) {
      throw new Error('Expected the field `description` to be a primitive type in the JSON string but got ' + data.description)
    }
    // ensure the json data is a string
    if (data.entity_name && !(typeof data.entity_name === 'string' || data.entity_name instanceof String)) {
      throw new Error('Expected the field `entity_name` to be a primitive type in the JSON string but got ' + data.entity_name)
    }
    // validate the optional field `document`
    if (data.document) { // data not null
      CashbookEntryDocument.validateJSON(data.document)
    }
    // validate the optional field `payment_account_in`
    if (data.payment_account_in) { // data not null
      PaymentAccount.validateJSON(data.payment_account_in)
    }
    // validate the optional field `payment_account_out`
    if (data.payment_account_out) { // data not null
      PaymentAccount.validateJSON(data.payment_account_out)
    }

    return true
  }
}

/**
 * Cashbook id
 * @member {String} id
 */
CashbookEntry.prototype.id = undefined

/**
 * Cashbook date
 * @member {Date} date
 */
CashbookEntry.prototype.date = undefined

/**
 * Cashbook description
 * @member {String} description
 */
CashbookEntry.prototype.description = undefined

/**
 * @member {module:model/CashbookEntryKind} kind
 */
CashbookEntry.prototype.kind = undefined

/**
 * @member {module:model/CashbookEntryType} type
 */
CashbookEntry.prototype.type = undefined

/**
 * Cashbook entity name
 * @member {String} entity_name
 */
CashbookEntry.prototype.entity_name = undefined

/**
 * @member {module:model/CashbookEntryDocument} document
 */
CashbookEntry.prototype.document = undefined

/**
 * [Only for cashbook entry in] Cashbook total amount in
 * @member {Number} amount_in
 */
CashbookEntry.prototype.amount_in = undefined

/**
 * @member {module:model/PaymentAccount} payment_account_in
 */
CashbookEntry.prototype.payment_account_in = undefined

/**
 * [Only for cashbook entry out] Cashbook total amount out
 * @member {Number} amount_out
 */
CashbookEntry.prototype.amount_out = undefined

/**
 * @member {module:model/PaymentAccount} payment_account_out
 */
CashbookEntry.prototype.payment_account_out = undefined

export default CashbookEntry
