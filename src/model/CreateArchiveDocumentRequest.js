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

import ArchiveDocument from './ArchiveDocument'

/**
 * The CreateArchiveDocumentRequest model module.
 * @module model/CreateArchiveDocumentRequest
 * @version 2.0.24
 */
class CreateArchiveDocumentRequest {
  /**
     * Constructs a new <code>CreateArchiveDocumentRequest</code>.
     *
     * @alias module:model/CreateArchiveDocumentRequest
     */
  constructor () {
    CreateArchiveDocumentRequest.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>CreateArchiveDocumentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateArchiveDocumentRequest} obj Optional instance to populate.
     * @return {module:model/CreateArchiveDocumentRequest} The populated <code>CreateArchiveDocumentRequest</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new CreateArchiveDocumentRequest()

      if (data.hasOwnProperty('data')) {
        obj.data = ArchiveDocument.constructFromObject(data.data)
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>CreateArchiveDocumentRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateArchiveDocumentRequest</code>.
     */
  static validateJSON (data) {
    // validate the optional field `data`
    if (data.data) { // data not null
      ArchiveDocument.validateJSON(data.data)
    }

    return true
  }
}

/**
 * @member {module:model/ArchiveDocument} data
 */
CreateArchiveDocumentRequest.prototype.data = undefined

export default CreateArchiveDocumentRequest
