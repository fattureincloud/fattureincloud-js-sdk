/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.19
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'

/**
 * The ReceivedDocumentTotals model module.
 * @module model/ReceivedDocumentTotals
 * @version 2.0.15
 */
class ReceivedDocumentTotals {
  /**
     * Constructs a new <code>ReceivedDocumentTotals</code>.
     *
     * @alias module:model/ReceivedDocumentTotals
     */
  constructor () {
    ReceivedDocumentTotals.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>ReceivedDocumentTotals</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReceivedDocumentTotals} obj Optional instance to populate.
     * @return {module:model/ReceivedDocumentTotals} The populated <code>ReceivedDocumentTotals</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new ReceivedDocumentTotals()

      if (data.hasOwnProperty('amount_net')) {
        obj.amount_net = ApiClient.convertToType(data.amount_net, 'Number')
      }
      if (data.hasOwnProperty('amount_vat')) {
        obj.amount_vat = ApiClient.convertToType(data.amount_vat, 'Number')
      }
      if (data.hasOwnProperty('amount_gross')) {
        obj.amount_gross = ApiClient.convertToType(data.amount_gross, 'Number')
      }
      if (data.hasOwnProperty('amount_withholding_tax')) {
        obj.amount_withholding_tax = ApiClient.convertToType(data.amount_withholding_tax, 'Number')
      }
      if (data.hasOwnProperty('amount_other_withholding_tax')) {
        obj.amount_other_withholding_tax = ApiClient.convertToType(data.amount_other_withholding_tax, 'Number')
      }
      if (data.hasOwnProperty('amount_due')) {
        obj.amount_due = ApiClient.convertToType(data.amount_due, 'Number')
      }
      if (data.hasOwnProperty('payments_sum')) {
        obj.payments_sum = ApiClient.convertToType(data.payments_sum, 'Number')
      }
    }
    return obj
  }
}

/**
 * Total net amount.
 * @member {Number} amount_net
 */
ReceivedDocumentTotals.prototype.amount_net = undefined

/**
 * Total vat amount.
 * @member {Number} amount_vat
 */
ReceivedDocumentTotals.prototype.amount_vat = undefined

/**
 * Total gross amount.
 * @member {Number} amount_gross
 */
ReceivedDocumentTotals.prototype.amount_gross = undefined

/**
 * Total withholding tax amount.
 * @member {Number} amount_withholding_tax
 */
ReceivedDocumentTotals.prototype.amount_withholding_tax = undefined

/**
 * Total other withholding tax amount.
 * @member {Number} amount_other_withholding_tax
 */
ReceivedDocumentTotals.prototype.amount_other_withholding_tax = undefined

/**
 * Total amount due.
 * @member {Number} amount_due
 */
ReceivedDocumentTotals.prototype.amount_due = undefined

/**
 * Payments sum.
 * @member {Number} payments_sum
 */
ReceivedDocumentTotals.prototype.payments_sum = undefined

export default ReceivedDocumentTotals
