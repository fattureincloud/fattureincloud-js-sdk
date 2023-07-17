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
 * The Currency model module.
 * @module model/Currency
 * @version 2.0.22
 */
class Currency {
  /**
     * Constructs a new <code>Currency</code>.
     * @alias module:model/Currency
     */
  constructor () {
    Currency.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>Currency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Currency} obj Optional instance to populate.
     * @return {module:model/Currency} The populated <code>Currency</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new Currency()

      if (data.hasOwnProperty('id')) {
        obj.id = ApiClient.convertToType(data.id, 'String')
      }
      if (data.hasOwnProperty('symbol')) {
        obj.symbol = ApiClient.convertToType(data.symbol, 'String')
      }
      if (data.hasOwnProperty('exchange_rate')) {
        obj.exchange_rate = ApiClient.convertToType(data.exchange_rate, 'String')
      }
      if (data.hasOwnProperty('html_symbol')) {
        obj.html_symbol = ApiClient.convertToType(data.html_symbol, 'String')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>Currency</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Currency</code>.
     */
  static validateJSON (data) {
    // ensure the json data is a string
    if (data.id && !(typeof data.id === 'string' || data.id instanceof String)) {
      throw new Error('Expected the field `id` to be a primitive type in the JSON string but got ' + data.id)
    }
    // ensure the json data is a string
    if (data.symbol && !(typeof data.symbol === 'string' || data.symbol instanceof String)) {
      throw new Error('Expected the field `symbol` to be a primitive type in the JSON string but got ' + data.symbol)
    }
    // ensure the json data is a string
    if (data.exchange_rate && !(typeof data.exchange_rate === 'string' || data.exchange_rate instanceof String)) {
      throw new Error('Expected the field `exchange_rate` to be a primitive type in the JSON string but got ' + data.exchange_rate)
    }
    // ensure the json data is a string
    if (data.html_symbol && !(typeof data.html_symbol === 'string' || data.html_symbol instanceof String)) {
      throw new Error('Expected the field `html_symbol` to be a primitive type in the JSON string but got ' + data.html_symbol)
    }

    return true
  }
}

/**
 * Currency code
 * @member {String} id
 */
Currency.prototype.id = undefined

/**
 * Currency symbol
 * @member {String} symbol
 */
Currency.prototype.symbol = undefined

/**
 * Currency exchange rate (EUR to this)
 * @member {String} exchange_rate
 */
Currency.prototype.exchange_rate = undefined

/**
 * Currency html code
 * @member {String} html_symbol
 */
Currency.prototype.html_symbol = undefined

export default Currency
