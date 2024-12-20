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

import ApiClient from '../ApiClient'

/**
 * The City model module.
 * @module model/City
 * @version 2.1.1
 */
class City {
  /**
     * Constructs a new <code>City</code>.
     * @alias module:model/City
     */
  constructor () {
    City.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>City</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/City} obj Optional instance to populate.
     * @return {module:model/City} The populated <code>City</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new City()

      if (data.hasOwnProperty('postal_code')) {
        obj.postal_code = ApiClient.convertToType(data.postal_code, 'String')
      }
      if (data.hasOwnProperty('city')) {
        obj.city = ApiClient.convertToType(data.city, 'String')
      }
      if (data.hasOwnProperty('province')) {
        obj.province = ApiClient.convertToType(data.province, 'String')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>City</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>City</code>.
     */
  static validateJSON (data) {
    // ensure the json data is a string
    if (data.postal_code && !(typeof data.postal_code === 'string' || data.postal_code instanceof String)) {
      throw new Error('Expected the field `postal_code` to be a primitive type in the JSON string but got ' + data.postal_code)
    }
    // ensure the json data is a string
    if (data.city && !(typeof data.city === 'string' || data.city instanceof String)) {
      throw new Error('Expected the field `city` to be a primitive type in the JSON string but got ' + data.city)
    }
    // ensure the json data is a string
    if (data.province && !(typeof data.province === 'string' || data.province instanceof String)) {
      throw new Error('Expected the field `province` to be a primitive type in the JSON string but got ' + data.province)
    }

    return true
  }
}

/**
 * City postal code
 * @member {String} postal_code
 */
City.prototype.postal_code = undefined

/**
 * City name
 * @member {String} city
 */
City.prototype.city = undefined

/**
 * City province
 * @member {String} province
 */
City.prototype.province = undefined

export default City
