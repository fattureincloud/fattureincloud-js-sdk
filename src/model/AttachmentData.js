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
 * The AttachmentData model module.
 * @module model/AttachmentData
 * @version 2.0.19
 */
class AttachmentData {
  /**
     * Constructs a new <code>AttachmentData</code>.
     * @alias module:model/AttachmentData
     */
  constructor () {
    AttachmentData.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>AttachmentData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachmentData} obj Optional instance to populate.
     * @return {module:model/AttachmentData} The populated <code>AttachmentData</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new AttachmentData()

      if (data.hasOwnProperty('attachment_token')) {
        obj.attachment_token = ApiClient.convertToType(data.attachment_token, 'String')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>AttachmentData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AttachmentData</code>.
     */
  static validateJSON (data) {
    // ensure the json data is a string
    if (data.attachment_token && !(typeof data.attachment_token === 'string' || data.attachment_token instanceof String)) {
      throw new Error('Expected the field `attachment_token` to be a primitive type in the JSON string but got ' + data.attachment_token)
    }

    return true
  }
}

/**
 * Uploaded attachment token.
 * @member {String} attachment_token
 */
AttachmentData.prototype.attachment_token = undefined

export default AttachmentData
