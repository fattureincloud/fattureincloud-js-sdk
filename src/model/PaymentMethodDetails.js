/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.30
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'

/**
 * The PaymentMethodDetails model module.
 * @module model/PaymentMethodDetails
 * @version 2.0.23
 */
class PaymentMethodDetails {
  /**
     * Constructs a new <code>PaymentMethodDetails</code>.
     * @alias module:model/PaymentMethodDetails
     */
  constructor () {
    PaymentMethodDetails.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>PaymentMethodDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentMethodDetails} obj Optional instance to populate.
     * @return {module:model/PaymentMethodDetails} The populated <code>PaymentMethodDetails</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new PaymentMethodDetails()

      if (data.hasOwnProperty('title')) {
        obj.title = ApiClient.convertToType(data.title, 'String')
      }
      if (data.hasOwnProperty('description')) {
        obj.description = ApiClient.convertToType(data.description, 'String')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>PaymentMethodDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymentMethodDetails</code>.
     */
  static validateJSON (data) {
    // ensure the json data is a string
    if (data.title && !(typeof data.title === 'string' || data.title instanceof String)) {
      throw new Error('Expected the field `title` to be a primitive type in the JSON string but got ' + data.title)
    }
    // ensure the json data is a string
    if (data.description && !(typeof data.description === 'string' || data.description instanceof String)) {
      throw new Error('Expected the field `description` to be a primitive type in the JSON string but got ' + data.description)
    }

    return true
  }
}

/**
 * Payment method details title
 * @member {String} title
 */
PaymentMethodDetails.prototype.title = undefined

/**
 * Payment method details description
 * @member {String} description
 */
PaymentMethodDetails.prototype.description = undefined

export default PaymentMethodDetails
