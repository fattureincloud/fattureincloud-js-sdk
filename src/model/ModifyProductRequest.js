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

import Product from './Product'

/**
 * The ModifyProductRequest model module.
 * @module model/ModifyProductRequest
 * @version 2.1.1
 */
class ModifyProductRequest {
  /**
     * Constructs a new <code>ModifyProductRequest</code>.
     * @alias module:model/ModifyProductRequest
     */
  constructor () {
    ModifyProductRequest.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>ModifyProductRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyProductRequest} obj Optional instance to populate.
     * @return {module:model/ModifyProductRequest} The populated <code>ModifyProductRequest</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new ModifyProductRequest()

      if (data.hasOwnProperty('data')) {
        obj.data = Product.constructFromObject(data.data)
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>ModifyProductRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModifyProductRequest</code>.
     */
  static validateJSON (data) {
    // validate the optional field `data`
    if (data.data) { // data not null
      Product.validateJSON(data.data)
    }

    return true
  }
}

/**
 * @member {module:model/Product} data
 */
ModifyProductRequest.prototype.data = undefined

export default ModifyProductRequest
