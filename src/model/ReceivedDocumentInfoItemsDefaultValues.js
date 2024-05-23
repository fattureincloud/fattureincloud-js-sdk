/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.33
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'

/**
 * The ReceivedDocumentInfoItemsDefaultValues model module.
 * @module model/ReceivedDocumentInfoItemsDefaultValues
 * @version 2.0.26
 */
class ReceivedDocumentInfoItemsDefaultValues {
  /**
     * Constructs a new <code>ReceivedDocumentInfoItemsDefaultValues</code>.
     * Received document items default values
     * @alias module:model/ReceivedDocumentInfoItemsDefaultValues
     */
  constructor () {
    ReceivedDocumentInfoItemsDefaultValues.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>ReceivedDocumentInfoItemsDefaultValues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReceivedDocumentInfoItemsDefaultValues} obj Optional instance to populate.
     * @return {module:model/ReceivedDocumentInfoItemsDefaultValues} The populated <code>ReceivedDocumentInfoItemsDefaultValues</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new ReceivedDocumentInfoItemsDefaultValues()

      if (data.hasOwnProperty('vat')) {
        obj.vat = ApiClient.convertToType(data.vat, 'Number')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>ReceivedDocumentInfoItemsDefaultValues</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReceivedDocumentInfoItemsDefaultValues</code>.
     */
  static validateJSON (data) {
    return true
  }
}

/**
 * Vat default value
 * @member {Number} vat
 */
ReceivedDocumentInfoItemsDefaultValues.prototype.vat = undefined

export default ReceivedDocumentInfoItemsDefaultValues
