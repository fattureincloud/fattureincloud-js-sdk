/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.22
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import PaymentAccount from './PaymentAccount'
import ReceivedDocumentPaymentsListItemPaymentTerms from './ReceivedDocumentPaymentsListItemPaymentTerms'

/**
 * The ReceivedDocumentPaymentsListItem model module.
 * @module model/ReceivedDocumentPaymentsListItem
 * @version 2.0.17
 */
class ReceivedDocumentPaymentsListItem {
  /**
     * Constructs a new <code>ReceivedDocumentPaymentsListItem</code>.
     * @alias module:model/ReceivedDocumentPaymentsListItem
     */
  constructor () {
    ReceivedDocumentPaymentsListItem.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>ReceivedDocumentPaymentsListItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReceivedDocumentPaymentsListItem} obj Optional instance to populate.
     * @return {module:model/ReceivedDocumentPaymentsListItem} The populated <code>ReceivedDocumentPaymentsListItem</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new ReceivedDocumentPaymentsListItem()

      if (data.hasOwnProperty('id')) {
        obj.id = ApiClient.convertToType(data.id, 'Number')
      }
      if (data.hasOwnProperty('amount')) {
        obj.amount = ApiClient.convertToType(data.amount, 'Number')
      }
      if (data.hasOwnProperty('due_date')) {
        obj.due_date = ApiClient.convertToType(data.due_date, 'Date')
      }
      if (data.hasOwnProperty('paid_date')) {
        obj.paid_date = ApiClient.convertToType(data.paid_date, 'Date')
      }
      if (data.hasOwnProperty('payment_terms')) {
        obj.payment_terms = ReceivedDocumentPaymentsListItemPaymentTerms.constructFromObject(data.payment_terms)
      }
      if (data.hasOwnProperty('status')) {
        obj.status = ApiClient.convertToType(data.status, 'String')
      }
      if (data.hasOwnProperty('payment_account')) {
        obj.payment_account = PaymentAccount.constructFromObject(data.payment_account)
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>ReceivedDocumentPaymentsListItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReceivedDocumentPaymentsListItem</code>.
     */
  static validateJSON (data) {
    // validate the optional field `payment_terms`
    if (data.payment_terms) { // data not null
      ReceivedDocumentPaymentsListItemPaymentTerms.validateJSON(data.payment_terms)
    }
    // ensure the json data is a string
    if (data.status && !(typeof data.status === 'string' || data.status instanceof String)) {
      throw new Error('Expected the field `status` to be a primitive type in the JSON string but got ' + data.status)
    }
    // validate the optional field `payment_account`
    if (data.payment_account) { // data not null
      PaymentAccount.validateJSON(data.payment_account)
    }

    return true
  }
}

/**
 * Unique identifier.
 * @member {Number} id
 */
ReceivedDocumentPaymentsListItem.prototype.id = undefined

/**
 * Amount of items.
 * @member {Number} amount
 */
ReceivedDocumentPaymentsListItem.prototype.amount = undefined

/**
 * Due date
 * @member {Date} due_date
 */
ReceivedDocumentPaymentsListItem.prototype.due_date = undefined

/**
 * Paid date
 * @member {Date} paid_date
 */
ReceivedDocumentPaymentsListItem.prototype.paid_date = undefined

/**
 * @member {module:model/ReceivedDocumentPaymentsListItemPaymentTerms} payment_terms
 */
ReceivedDocumentPaymentsListItem.prototype.payment_terms = undefined

/**
 * Payment status.
 * @member {String} status
 */
ReceivedDocumentPaymentsListItem.prototype.status = undefined

/**
 * @member {module:model/PaymentAccount} payment_account
 */
ReceivedDocumentPaymentsListItem.prototype.payment_account = undefined

export default ReceivedDocumentPaymentsListItem
