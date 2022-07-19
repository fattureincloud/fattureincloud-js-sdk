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
 * The EInvoiceRejectionReason model module.
 * @module model/EInvoiceRejectionReason
 * @version 2.0.15
 */
class EInvoiceRejectionReason {
  /**
     * Constructs a new <code>EInvoiceRejectionReason</code>.
     * @alias module:model/EInvoiceRejectionReason
     */
  constructor () {
    EInvoiceRejectionReason.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>EInvoiceRejectionReason</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EInvoiceRejectionReason} obj Optional instance to populate.
     * @return {module:model/EInvoiceRejectionReason} The populated <code>EInvoiceRejectionReason</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new EInvoiceRejectionReason()

      if (data.hasOwnProperty('reason')) {
        obj.reason = ApiClient.convertToType(data.reason, 'String')
      }
      if (data.hasOwnProperty('ei_status')) {
        obj.ei_status = ApiClient.convertToType(data.ei_status, 'String')
      }
      if (data.hasOwnProperty('solution')) {
        obj.solution = ApiClient.convertToType(data.solution, 'String')
      }
      if (data.hasOwnProperty('code')) {
        obj.code = ApiClient.convertToType(data.code, 'String')
      }
      if (data.hasOwnProperty('date')) {
        obj.date = ApiClient.convertToType(data.date, 'Date')
      }
    }
    return obj
  }
}

/**
 * Rejection reason.
 * @member {String} reason
 */
EInvoiceRejectionReason.prototype.reason = undefined

/**
 * E-invoice status.
 * @member {String} ei_status
 */
EInvoiceRejectionReason.prototype.ei_status = undefined

/**
 * Error solution.
 * @member {String} solution
 */
EInvoiceRejectionReason.prototype.solution = undefined

/**
 * Error code.
 * @member {String} code
 */
EInvoiceRejectionReason.prototype.code = undefined

/**
 * Rejection date.
 * @member {Date} date
 */
EInvoiceRejectionReason.prototype.date = undefined

export default EInvoiceRejectionReason
