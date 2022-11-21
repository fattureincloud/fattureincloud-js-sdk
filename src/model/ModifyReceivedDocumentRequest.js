/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.22
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ReceivedDocument from './ReceivedDocument'

/**
 * The ModifyReceivedDocumentRequest model module.
 * @module model/ModifyReceivedDocumentRequest
 * @version 2.0.17
 */
class ModifyReceivedDocumentRequest {
  /**
     * Constructs a new <code>ModifyReceivedDocumentRequest</code>.
     *
     * @alias module:model/ModifyReceivedDocumentRequest
     */
  constructor () {
    ModifyReceivedDocumentRequest.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>ModifyReceivedDocumentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyReceivedDocumentRequest} obj Optional instance to populate.
     * @return {module:model/ModifyReceivedDocumentRequest} The populated <code>ModifyReceivedDocumentRequest</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new ModifyReceivedDocumentRequest()

      if (data.hasOwnProperty('data')) {
        obj.data = ReceivedDocument.constructFromObject(data.data)
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>ModifyReceivedDocumentRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModifyReceivedDocumentRequest</code>.
     */
  static validateJSON (data) {
    // validate the optional field `data`
    if (data.data) { // data not null
      ReceivedDocument.validateJSON(data.data)
    }

    return true
  }
}

/**
 * @member {module:model/ReceivedDocument} data
 */
ModifyReceivedDocumentRequest.prototype.data = undefined

export default ModifyReceivedDocumentRequest
