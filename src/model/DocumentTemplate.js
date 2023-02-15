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
 * The DocumentTemplate model module.
 * @module model/DocumentTemplate
 * @version 2.0.19
 */
class DocumentTemplate {
  /**
     * Constructs a new <code>DocumentTemplate</code>.
     * @alias module:model/DocumentTemplate
     */
  constructor () {
    DocumentTemplate.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>DocumentTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentTemplate} obj Optional instance to populate.
     * @return {module:model/DocumentTemplate} The populated <code>DocumentTemplate</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new DocumentTemplate()

      if (data.hasOwnProperty('id')) {
        obj.id = ApiClient.convertToType(data.id, 'Number')
      }
      if (data.hasOwnProperty('name')) {
        obj.name = ApiClient.convertToType(data.name, 'String')
      }
      if (data.hasOwnProperty('type')) {
        obj.type = ApiClient.convertToType(data.type, 'String')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>DocumentTemplate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DocumentTemplate</code>.
     */
  static validateJSON (data) {
    // ensure the json data is a string
    if (data.name && !(typeof data.name === 'string' || data.name instanceof String)) {
      throw new Error('Expected the field `name` to be a primitive type in the JSON string but got ' + data.name)
    }
    // ensure the json data is a string
    if (data.type && !(typeof data.type === 'string' || data.type instanceof String)) {
      throw new Error('Expected the field `type` to be a primitive type in the JSON string but got ' + data.type)
    }

    return true
  }
}

/**
 * Unique identifier.
 * @member {Number} id
 */
DocumentTemplate.prototype.id = undefined

/**
 * Template name.
 * @member {String} name
 */
DocumentTemplate.prototype.name = undefined

/**
 * Template type.
 * @member {String} type
 */
DocumentTemplate.prototype.type = undefined

export default DocumentTemplate
