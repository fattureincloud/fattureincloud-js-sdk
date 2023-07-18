/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.29
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'

/**
 * The ListProductCategoriesResponse model module.
 * @module model/ListProductCategoriesResponse
 * @version 2.0.22
 */
class ListProductCategoriesResponse {
  /**
     * Constructs a new <code>ListProductCategoriesResponse</code>.
     *
     * @alias module:model/ListProductCategoriesResponse
     */
  constructor () {
    ListProductCategoriesResponse.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>ListProductCategoriesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListProductCategoriesResponse} obj Optional instance to populate.
     * @return {module:model/ListProductCategoriesResponse} The populated <code>ListProductCategoriesResponse</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new ListProductCategoriesResponse()

      if (data.hasOwnProperty('data')) {
        obj.data = ApiClient.convertToType(data.data, ['String'])
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>ListProductCategoriesResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListProductCategoriesResponse</code>.
     */
  static validateJSON (data) {
    // ensure the json data is an array
    if (!Array.isArray(data.data)) {
      throw new Error('Expected the field `data` to be an array in the JSON data but got ' + data.data)
    }

    return true
  }
}

/**
 * @member {Array.<String>} data
 */
ListProductCategoriesResponse.prototype.data = undefined

export default ListProductCategoriesResponse
