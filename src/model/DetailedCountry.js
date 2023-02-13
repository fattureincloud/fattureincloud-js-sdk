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

/**
 * The DetailedCountry model module.
 * @module model/DetailedCountry
 * @version 2.0.19
 */
class DetailedCountry {
  /**
     * Constructs a new <code>DetailedCountry</code>.
     * @alias module:model/DetailedCountry
     */
  constructor () {
    DetailedCountry.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>DetailedCountry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DetailedCountry} obj Optional instance to populate.
     * @return {module:model/DetailedCountry} The populated <code>DetailedCountry</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new DetailedCountry()

      if (data.hasOwnProperty('name')) {
        obj.name = ApiClient.convertToType(data.name, 'String')
      }
      if (data.hasOwnProperty('settings_name')) {
        obj.settings_name = ApiClient.convertToType(data.settings_name, 'String')
      }
      if (data.hasOwnProperty('iso')) {
        obj.iso = ApiClient.convertToType(data.iso, 'String')
      }
      if (data.hasOwnProperty('fiscal_iso')) {
        obj.fiscal_iso = ApiClient.convertToType(data.fiscal_iso, 'String')
      }
      if (data.hasOwnProperty('uic')) {
        obj.uic = ApiClient.convertToType(data.uic, 'String')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>DetailedCountry</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DetailedCountry</code>.
     */
  static validateJSON (data) {
    // ensure the json data is a string
    if (data.name && !(typeof data.name === 'string' || data.name instanceof String)) {
      throw new Error('Expected the field `name` to be a primitive type in the JSON string but got ' + data.name)
    }
    // ensure the json data is a string
    if (data.settings_name && !(typeof data.settings_name === 'string' || data.settings_name instanceof String)) {
      throw new Error('Expected the field `settings_name` to be a primitive type in the JSON string but got ' + data.settings_name)
    }
    // ensure the json data is a string
    if (data.iso && !(typeof data.iso === 'string' || data.iso instanceof String)) {
      throw new Error('Expected the field `iso` to be a primitive type in the JSON string but got ' + data.iso)
    }
    // ensure the json data is a string
    if (data.fiscal_iso && !(typeof data.fiscal_iso === 'string' || data.fiscal_iso instanceof String)) {
      throw new Error('Expected the field `fiscal_iso` to be a primitive type in the JSON string but got ' + data.fiscal_iso)
    }
    // ensure the json data is a string
    if (data.uic && !(typeof data.uic === 'string' || data.uic instanceof String)) {
      throw new Error('Expected the field `uic` to be a primitive type in the JSON string but got ' + data.uic)
    }

    return true
  }
}

/**
 * Country name.
 * @member {String} name
 */
DetailedCountry.prototype.name = undefined

/**
 * @member {String} settings_name
 */
DetailedCountry.prototype.settings_name = undefined

/**
 * Country iso.
 * @member {String} iso
 */
DetailedCountry.prototype.iso = undefined

/**
 * @member {String} fiscal_iso
 */
DetailedCountry.prototype.fiscal_iso = undefined

/**
 * Country uic.
 * @member {String} uic
 */
DetailedCountry.prototype.uic = undefined

export default DetailedCountry
