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

import Receipt from './Receipt'

/**
 * The CreateReceiptResponse model module.
 * @module model/CreateReceiptResponse
 * @version 5.0.0
 */
class CreateReceiptResponse {
  /**
     * Constructs a new <code>CreateReceiptResponse</code>.
     *
     * @alias module:model/CreateReceiptResponse
     */
  constructor () {
    CreateReceiptResponse.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>CreateReceiptResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateReceiptResponse} obj Optional instance to populate.
     * @return {module:model/CreateReceiptResponse} The populated <code>CreateReceiptResponse</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new CreateReceiptResponse()

      if (data.hasOwnProperty('data')) {
        obj.data = Receipt.constructFromObject(data.data)
      }
    }
    return obj
  }
}

/**
 * @member {module:model/Receipt} data
 */
CreateReceiptResponse.prototype.data = undefined

export default CreateReceiptResponse
