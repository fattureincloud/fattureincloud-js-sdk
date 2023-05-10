/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.28
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import IssuedDocument from './IssuedDocument'

/**
 * The GetNewIssuedDocumentTotalsRequest model module.
 * @module model/GetNewIssuedDocumentTotalsRequest
 * @version 2.0.21
 */
class GetNewIssuedDocumentTotalsRequest {
  /**
     * Constructs a new <code>GetNewIssuedDocumentTotalsRequest</code>.
     * @alias module:model/GetNewIssuedDocumentTotalsRequest
     */
  constructor () {
    GetNewIssuedDocumentTotalsRequest.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>GetNewIssuedDocumentTotalsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetNewIssuedDocumentTotalsRequest} obj Optional instance to populate.
     * @return {module:model/GetNewIssuedDocumentTotalsRequest} The populated <code>GetNewIssuedDocumentTotalsRequest</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new GetNewIssuedDocumentTotalsRequest()

      if (data.hasOwnProperty('data')) {
        obj.data = IssuedDocument.constructFromObject(data.data)
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>GetNewIssuedDocumentTotalsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetNewIssuedDocumentTotalsRequest</code>.
     */
  static validateJSON (data) {
    // validate the optional field `data`
    if (data.data) { // data not null
      IssuedDocument.validateJSON(data.data)
    }

    return true
  }
}

/**
 * @member {module:model/IssuedDocument} data
 */
GetNewIssuedDocumentTotalsRequest.prototype.data = undefined

export default GetNewIssuedDocumentTotalsRequest
