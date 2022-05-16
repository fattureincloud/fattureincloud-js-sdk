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

import ApiClient from '../ApiClient'

/**
 * The City model module.
 * @module model/City
 * @version 2.0.13
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
}

/**
 * City postal code.
 * @member {String} postal_code
 */
City.prototype.postal_code = undefined

/**
 * City name.
 * @member {String} city
 */
City.prototype.city = undefined

/**
 * Province.
 * @member {String} province
 */
City.prototype.province = undefined

export default City
