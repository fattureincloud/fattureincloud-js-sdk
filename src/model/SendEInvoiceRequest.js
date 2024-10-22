/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.1.2
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import SendEInvoiceRequestData from './SendEInvoiceRequestData'
import SendEInvoiceRequestOptions from './SendEInvoiceRequestOptions'

/**
 * The SendEInvoiceRequest model module.
 * @module model/SendEInvoiceRequest
 * @version 2.1.1
 */
class SendEInvoiceRequest {
  /**
     * Constructs a new <code>SendEInvoiceRequest</code>.
     * @alias module:model/SendEInvoiceRequest
     */
  constructor () {
    SendEInvoiceRequest.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>SendEInvoiceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendEInvoiceRequest} obj Optional instance to populate.
     * @return {module:model/SendEInvoiceRequest} The populated <code>SendEInvoiceRequest</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new SendEInvoiceRequest()

      if (data.hasOwnProperty('data')) {
        obj.data = SendEInvoiceRequestData.constructFromObject(data.data)
      }
      if (data.hasOwnProperty('options')) {
        obj.options = SendEInvoiceRequestOptions.constructFromObject(data.options)
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>SendEInvoiceRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SendEInvoiceRequest</code>.
     */
  static validateJSON (data) {
    // validate the optional field `data`
    if (data.data) { // data not null
      SendEInvoiceRequestData.validateJSON(data.data)
    }
    // validate the optional field `options`
    if (data.options) { // data not null
      SendEInvoiceRequestOptions.validateJSON(data.options)
    }

    return true
  }
}

/**
 * @member {module:model/SendEInvoiceRequestData} data
 */
SendEInvoiceRequest.prototype.data = undefined

/**
 * @member {module:model/SendEInvoiceRequestOptions} options
 */
SendEInvoiceRequest.prototype.options = undefined

export default SendEInvoiceRequest
