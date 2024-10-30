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

/**
 * The SendEInvoiceRequestOptions model module.
 * @module model/SendEInvoiceRequestOptions
 * @version 2.1.1
 */
class SendEInvoiceRequestOptions {
  /**
     * Constructs a new <code>SendEInvoiceRequestOptions</code>.
     * @alias module:model/SendEInvoiceRequestOptions
     */
  constructor () {
    SendEInvoiceRequestOptions.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>SendEInvoiceRequestOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendEInvoiceRequestOptions} obj Optional instance to populate.
     * @return {module:model/SendEInvoiceRequestOptions} The populated <code>SendEInvoiceRequestOptions</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new SendEInvoiceRequestOptions()

      if (data.hasOwnProperty('dry_run')) {
        obj.dry_run = ApiClient.convertToType(data.dry_run, 'Boolean')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>SendEInvoiceRequestOptions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SendEInvoiceRequestOptions</code>.
     */
  static validateJSON (data) {
    return true
  }
}

/**
 * If set to true the e-invoice will not be sent to the SDI.
 * @member {Boolean} dry_run
 */
SendEInvoiceRequestOptions.prototype.dry_run = undefined

export default SendEInvoiceRequestOptions
