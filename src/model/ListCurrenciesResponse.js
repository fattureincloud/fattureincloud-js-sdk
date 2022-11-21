/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.22
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import Currency from './Currency'

/**
 * The ListCurrenciesResponse model module.
 * @module model/ListCurrenciesResponse
 * @version 2.0.17
 */
class ListCurrenciesResponse {
  /**
     * Constructs a new <code>ListCurrenciesResponse</code>.
     *
     * @alias module:model/ListCurrenciesResponse
     */
  constructor () {
    ListCurrenciesResponse.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>ListCurrenciesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListCurrenciesResponse} obj Optional instance to populate.
     * @return {module:model/ListCurrenciesResponse} The populated <code>ListCurrenciesResponse</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new ListCurrenciesResponse()

      if (data.hasOwnProperty('data')) {
        obj.data = ApiClient.convertToType(data.data, [Currency])
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>ListCurrenciesResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListCurrenciesResponse</code>.
     */
  static validateJSON (data) {
    if (data.data) { // data not null
      // ensure the json data is an array
      if (!Array.isArray(data.data)) {
        throw new Error('Expected the field `data` to be an array in the JSON data but got ' + data.data)
      }
      // validate the optional field `data` (array)
      for (const item of data.data) {
        Currency.validateJsonObject(item)
      }
    }

    return true
  }
}

/**
 * @member {Array.<module:model/Currency>} data
 */
ListCurrenciesResponse.prototype.data = undefined

export default ListCurrenciesResponse
