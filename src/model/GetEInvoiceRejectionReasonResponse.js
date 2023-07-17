/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.29
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import EInvoiceRejectionReason from './EInvoiceRejectionReason'

/**
 * The GetEInvoiceRejectionReasonResponse model module.
 * @module model/GetEInvoiceRejectionReasonResponse
 * @version 2.0.22
 */
class GetEInvoiceRejectionReasonResponse {
  /**
     * Constructs a new <code>GetEInvoiceRejectionReasonResponse</code>.
     * @alias module:model/GetEInvoiceRejectionReasonResponse
     */
  constructor () {
    GetEInvoiceRejectionReasonResponse.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>GetEInvoiceRejectionReasonResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEInvoiceRejectionReasonResponse} obj Optional instance to populate.
     * @return {module:model/GetEInvoiceRejectionReasonResponse} The populated <code>GetEInvoiceRejectionReasonResponse</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new GetEInvoiceRejectionReasonResponse()

      if (data.hasOwnProperty('data')) {
        obj.data = EInvoiceRejectionReason.constructFromObject(data.data)
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>GetEInvoiceRejectionReasonResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetEInvoiceRejectionReasonResponse</code>.
     */
  static validateJSON (data) {
    // validate the optional field `data`
    if (data.data) { // data not null
      EInvoiceRejectionReason.validateJSON(data.data)
    }

    return true
  }
}

/**
 * @member {module:model/EInvoiceRejectionReason} data
 */
GetEInvoiceRejectionReasonResponse.prototype.data = undefined

export default GetEInvoiceRejectionReasonResponse
