/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.26
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import Receipt from './Receipt'

/**
 * The CreateReceiptRequest model module.
 * @module model/CreateReceiptRequest
 * @version 2.0.19
 */
class CreateReceiptRequest {
  /**
     * Constructs a new <code>CreateReceiptRequest</code>.
     *
     * @alias module:model/CreateReceiptRequest
     */
  constructor () {
    CreateReceiptRequest.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>CreateReceiptRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateReceiptRequest} obj Optional instance to populate.
     * @return {module:model/CreateReceiptRequest} The populated <code>CreateReceiptRequest</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new CreateReceiptRequest()

      if (data.hasOwnProperty('data')) {
        obj.data = Receipt.constructFromObject(data.data)
      }
      if (data.hasOwnProperty('autocomplete_number')) {
        obj.autocomplete_number = ApiClient.convertToType(data.autocomplete_number, 'Boolean')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>CreateReceiptRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateReceiptRequest</code>.
     */
  static validateJSON (data) {
    // validate the optional field `data`
    if (data.data) { // data not null
      Receipt.validateJSON(data.data)
    }

    return true
  }
}

/**
 * @member {module:model/Receipt} data
 */
CreateReceiptRequest.prototype.data = undefined

/**
 * If true, the number is autocompleted progressively.
 * @member {Boolean} autocomplete_number
 */
CreateReceiptRequest.prototype.autocomplete_number = undefined

export default CreateReceiptRequest
