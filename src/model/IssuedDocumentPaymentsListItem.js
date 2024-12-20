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
import IssuedDocumentPaymentsListItemPaymentTerms from './IssuedDocumentPaymentsListItemPaymentTerms'
import IssuedDocumentStatus from './IssuedDocumentStatus'
import PaymentAccount from './PaymentAccount'

/**
 * The IssuedDocumentPaymentsListItem model module.
 * @module model/IssuedDocumentPaymentsListItem
 * @version 2.1.1
 */
class IssuedDocumentPaymentsListItem {
  /**
     * Constructs a new <code>IssuedDocumentPaymentsListItem</code>.
     * @alias module:model/IssuedDocumentPaymentsListItem
     */
  constructor () {
    IssuedDocumentPaymentsListItem.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>IssuedDocumentPaymentsListItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuedDocumentPaymentsListItem} obj Optional instance to populate.
     * @return {module:model/IssuedDocumentPaymentsListItem} The populated <code>IssuedDocumentPaymentsListItem</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new IssuedDocumentPaymentsListItem()

      if (data.hasOwnProperty('id')) {
        obj.id = ApiClient.convertToType(data.id, 'Number')
      }
      if (data.hasOwnProperty('due_date')) {
        obj.due_date = ApiClient.convertToType(data.due_date, 'Date')
      }
      if (data.hasOwnProperty('amount')) {
        obj.amount = ApiClient.convertToType(data.amount, 'Number')
      }
      if (data.hasOwnProperty('status')) {
        obj.status = IssuedDocumentStatus.constructFromObject(data.status)
      }
      if (data.hasOwnProperty('payment_account')) {
        obj.payment_account = PaymentAccount.constructFromObject(data.payment_account)
      }
      if (data.hasOwnProperty('paid_date')) {
        obj.paid_date = ApiClient.convertToType(data.paid_date, 'Date')
      }
      if (data.hasOwnProperty('ei_raw')) {
        obj.ei_raw = ApiClient.convertToType(data.ei_raw, Object)
      }
      if (data.hasOwnProperty('payment_terms')) {
        obj.payment_terms = IssuedDocumentPaymentsListItemPaymentTerms.constructFromObject(data.payment_terms)
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>IssuedDocumentPaymentsListItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IssuedDocumentPaymentsListItem</code>.
     */
  static validateJSON (data) {
    // validate the optional field `payment_account`
    if (data.payment_account) { // data not null
      PaymentAccount.validateJSON(data.payment_account)
    }
    // validate the optional field `payment_terms`
    if (data.payment_terms) { // data not null
      IssuedDocumentPaymentsListItemPaymentTerms.validateJSON(data.payment_terms)
    }

    return true
  }
}

/**
 * Issued document payment item id
 * @member {Number} id
 */
IssuedDocumentPaymentsListItem.prototype.id = undefined

/**
 * Issued document payment due date
 * @member {Date} due_date
 */
IssuedDocumentPaymentsListItem.prototype.due_date = undefined

/**
 * Issued document payment amount
 * @member {Number} amount
 */
IssuedDocumentPaymentsListItem.prototype.amount = undefined

/**
 * @member {module:model/IssuedDocumentStatus} status
 */
IssuedDocumentPaymentsListItem.prototype.status = undefined

/**
 * @member {module:model/PaymentAccount} payment_account
 */
IssuedDocumentPaymentsListItem.prototype.payment_account = undefined

/**
 * Issued document payment date [Only if status is paid]
 * @member {Date} paid_date
 */
IssuedDocumentPaymentsListItem.prototype.paid_date = undefined

/**
 * Issued document payment advanced raw attributes for e-invoices
 * @member {Object} ei_raw
 */
IssuedDocumentPaymentsListItem.prototype.ei_raw = undefined

/**
 * @member {module:model/IssuedDocumentPaymentsListItemPaymentTerms} payment_terms
 */
IssuedDocumentPaymentsListItem.prototype.payment_terms = undefined

export default IssuedDocumentPaymentsListItem
