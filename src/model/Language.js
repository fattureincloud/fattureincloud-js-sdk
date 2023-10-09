/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.30
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'

/**
 * The Language model module.
 * @module model/Language
 * @version 2.0.23
 */
class Language {
  /**
     * Constructs a new <code>Language</code>.
     * @alias module:model/Language
     */
  constructor () {
    Language.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>Language</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Language} obj Optional instance to populate.
     * @return {module:model/Language} The populated <code>Language</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new Language()

      if (data.hasOwnProperty('code')) {
        obj.code = ApiClient.convertToType(data.code, 'String')
      }
      if (data.hasOwnProperty('name')) {
        obj.name = ApiClient.convertToType(data.name, 'String')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>Language</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Language</code>.
     */
  static validateJSON (data) {
    // ensure the json data is a string
    if (data.code && !(typeof data.code === 'string' || data.code instanceof String)) {
      throw new Error('Expected the field `code` to be a primitive type in the JSON string but got ' + data.code)
    }
    // ensure the json data is a string
    if (data.name && !(typeof data.name === 'string' || data.name instanceof String)) {
      throw new Error('Expected the field `name` to be a primitive type in the JSON string but got ' + data.name)
    }

    return true
  }
}

/**
 * Language code
 * @member {String} code
 */
Language.prototype.code = undefined

/**
 * Language extended name
 * @member {String} name
 */
Language.prototype.name = undefined

export default Language
