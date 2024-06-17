/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.1.0
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import IssuedDocumentTotals from './IssuedDocumentTotals'

/**
 * The GetExistingIssuedDocumentTotalsResponse model module.
 * @module model/GetExistingIssuedDocumentTotalsResponse
 * @version 2.1.0
 */
class GetExistingIssuedDocumentTotalsResponse {
  /**
     * Constructs a new <code>GetExistingIssuedDocumentTotalsResponse</code>.
     *
     * @alias module:model/GetExistingIssuedDocumentTotalsResponse
     */
  constructor () {
    GetExistingIssuedDocumentTotalsResponse.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>GetExistingIssuedDocumentTotalsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetExistingIssuedDocumentTotalsResponse} obj Optional instance to populate.
     * @return {module:model/GetExistingIssuedDocumentTotalsResponse} The populated <code>GetExistingIssuedDocumentTotalsResponse</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new GetExistingIssuedDocumentTotalsResponse()

      if (data.hasOwnProperty('data')) {
        obj.data = IssuedDocumentTotals.constructFromObject(data.data)
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>GetExistingIssuedDocumentTotalsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetExistingIssuedDocumentTotalsResponse</code>.
     */
  static validateJSON (data) {
    // validate the optional field `data`
    if (data.data) { // data not null
      IssuedDocumentTotals.validateJSON(data.data)
    }

    return true
  }
}

/**
 * @member {module:model/IssuedDocumentTotals} data
 */
GetExistingIssuedDocumentTotalsResponse.prototype.data = undefined

export default GetExistingIssuedDocumentTotalsResponse
