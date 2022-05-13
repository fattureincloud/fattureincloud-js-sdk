/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.16
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'

/**
 * The IssuedDocumentOptions model module.
 * @module model/IssuedDocumentOptions
 * @version 5.0.0
 */
class IssuedDocumentOptions {
  /**
     * Constructs a new <code>IssuedDocumentOptions</code>.
     * @alias module:model/IssuedDocumentOptions
     */
  constructor () {
    IssuedDocumentOptions.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>IssuedDocumentOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuedDocumentOptions} obj Optional instance to populate.
     * @return {module:model/IssuedDocumentOptions} The populated <code>IssuedDocumentOptions</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new IssuedDocumentOptions()

      if (data.hasOwnProperty('fix_payments')) {
        obj.fix_payments = ApiClient.convertToType(data.fix_payments, 'Boolean')
      }
    }
    return obj
  }
}

/**
 * Fixes your last payment amount to match your document total
 * @member {Boolean} fix_payments
 */
IssuedDocumentOptions.prototype.fix_payments = undefined

export default IssuedDocumentOptions
