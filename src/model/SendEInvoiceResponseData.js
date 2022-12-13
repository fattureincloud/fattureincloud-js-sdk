/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.24
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'

/**
 * The SendEInvoiceResponseData model module.
 * @module model/SendEInvoiceResponseData
 * @version 2.0.18
 */
class SendEInvoiceResponseData {
  /**
     * Constructs a new <code>SendEInvoiceResponseData</code>.
     * @alias module:model/SendEInvoiceResponseData
     */
  constructor () {
    SendEInvoiceResponseData.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>SendEInvoiceResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendEInvoiceResponseData} obj Optional instance to populate.
     * @return {module:model/SendEInvoiceResponseData} The populated <code>SendEInvoiceResponseData</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new SendEInvoiceResponseData()

      if (data.hasOwnProperty('name')) {
        obj.name = ApiClient.convertToType(data.name, 'String')
      }
      if (data.hasOwnProperty('date')) {
        obj.date = ApiClient.convertToType(data.date, 'String')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>SendEInvoiceResponseData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SendEInvoiceResponseData</code>.
     */
  static validateJSON (data) {
    // ensure the json data is a string
    if (data.name && !(typeof data.name === 'string' || data.name instanceof String)) {
      throw new Error('Expected the field `name` to be a primitive type in the JSON string but got ' + data.name)
    }
    // ensure the json data is a string
    if (data.date && !(typeof data.date === 'string' || data.date instanceof String)) {
      throw new Error('Expected the field `date` to be a primitive type in the JSON string but got ' + data.date)
    }

    return true
  }
}

/**
 * Response message.
 * @member {String} name
 */
SendEInvoiceResponseData.prototype.name = undefined

/**
 * E-invoice sent date.
 * @member {String} date
 */
SendEInvoiceResponseData.prototype.date = undefined

export default SendEInvoiceResponseData
