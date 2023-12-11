/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.31
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'

/**
 * The ArchiveDocument model module.
 * @module model/ArchiveDocument
 * @version 2.0.24
 */
class ArchiveDocument {
  /**
     * Constructs a new <code>ArchiveDocument</code>.
     * @alias module:model/ArchiveDocument
     */
  constructor () {
    ArchiveDocument.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>ArchiveDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArchiveDocument} obj Optional instance to populate.
     * @return {module:model/ArchiveDocument} The populated <code>ArchiveDocument</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new ArchiveDocument()

      if (data.hasOwnProperty('id')) {
        obj.id = ApiClient.convertToType(data.id, 'Number')
      }
      if (data.hasOwnProperty('date')) {
        obj.date = ApiClient.convertToType(data.date, 'Date')
      }
      if (data.hasOwnProperty('description')) {
        obj.description = ApiClient.convertToType(data.description, 'String')
      }
      if (data.hasOwnProperty('attachment_url')) {
        obj.attachment_url = ApiClient.convertToType(data.attachment_url, 'String')
      }
      if (data.hasOwnProperty('category')) {
        obj.category = ApiClient.convertToType(data.category, 'String')
      }
      if (data.hasOwnProperty('attachment_token')) {
        obj.attachment_token = ApiClient.convertToType(data.attachment_token, 'String')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>ArchiveDocument</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArchiveDocument</code>.
     */
  static validateJSON (data) {
    // ensure the json data is a string
    if (data.description && !(typeof data.description === 'string' || data.description instanceof String)) {
      throw new Error('Expected the field `description` to be a primitive type in the JSON string but got ' + data.description)
    }
    // ensure the json data is a string
    if (data.attachment_url && !(typeof data.attachment_url === 'string' || data.attachment_url instanceof String)) {
      throw new Error('Expected the field `attachment_url` to be a primitive type in the JSON string but got ' + data.attachment_url)
    }
    // ensure the json data is a string
    if (data.category && !(typeof data.category === 'string' || data.category instanceof String)) {
      throw new Error('Expected the field `category` to be a primitive type in the JSON string but got ' + data.category)
    }
    // ensure the json data is a string
    if (data.attachment_token && !(typeof data.attachment_token === 'string' || data.attachment_token instanceof String)) {
      throw new Error('Expected the field `attachment_token` to be a primitive type in the JSON string but got ' + data.attachment_token)
    }

    return true
  }
}

/**
 * Archive document id
 * @member {Number} id
 */
ArchiveDocument.prototype.id = undefined

/**
 * Archive document date
 * @member {Date} date
 */
ArchiveDocument.prototype.date = undefined

/**
 * Archive Document description
 * @member {String} description
 */
ArchiveDocument.prototype.description = undefined

/**
 * [Temporary] [Read Only] Archive Document url of the attached file
 * @member {String} attachment_url
 */
ArchiveDocument.prototype.attachment_url = undefined

/**
 * Archive document category
 * @member {String} category
 */
ArchiveDocument.prototype.category = undefined

/**
 * [Write Only]  [Required] Archive document attachment token returned by POST /archive/attachment
 * @member {String} attachment_token
 */
ArchiveDocument.prototype.attachment_token = undefined

export default ArchiveDocument
