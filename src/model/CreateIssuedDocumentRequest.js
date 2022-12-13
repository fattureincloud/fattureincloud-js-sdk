/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.24
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import IssuedDocument from './IssuedDocument'
import IssuedDocumentOptions from './IssuedDocumentOptions'

/**
 * The CreateIssuedDocumentRequest model module.
 * @module model/CreateIssuedDocumentRequest
 * @version 2.0.18
 */
class CreateIssuedDocumentRequest {
  /**
     * Constructs a new <code>CreateIssuedDocumentRequest</code>.
     * @alias module:model/CreateIssuedDocumentRequest
     */
  constructor () {
    CreateIssuedDocumentRequest.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>CreateIssuedDocumentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateIssuedDocumentRequest} obj Optional instance to populate.
     * @return {module:model/CreateIssuedDocumentRequest} The populated <code>CreateIssuedDocumentRequest</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new CreateIssuedDocumentRequest()

      if (data.hasOwnProperty('data')) {
        obj.data = IssuedDocument.constructFromObject(data.data)
      }
      if (data.hasOwnProperty('options')) {
        obj.options = IssuedDocumentOptions.constructFromObject(data.options)
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>CreateIssuedDocumentRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateIssuedDocumentRequest</code>.
     */
  static validateJSON (data) {
    // validate the optional field `data`
    if (data.data) { // data not null
      IssuedDocument.validateJSON(data.data)
    }
    // validate the optional field `options`
    if (data.options) { // data not null
      IssuedDocumentOptions.validateJSON(data.options)
    }

    return true
  }
}

/**
 * @member {module:model/IssuedDocument} data
 */
CreateIssuedDocumentRequest.prototype.data = undefined

/**
 * @member {module:model/IssuedDocumentOptions} options
 */
CreateIssuedDocumentRequest.prototype.options = undefined

export default CreateIssuedDocumentRequest
