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

import ApiClient from '../ApiClient'

/**
 * The ReceivedDocumentPaymentsListItemPaymentTerms model module.
 * @module model/ReceivedDocumentPaymentsListItemPaymentTerms
 * @version 2.0.18
 */
class ReceivedDocumentPaymentsListItemPaymentTerms {
  /**
     * Constructs a new <code>ReceivedDocumentPaymentsListItemPaymentTerms</code>.
     * @alias module:model/ReceivedDocumentPaymentsListItemPaymentTerms
     */
  constructor () {
    ReceivedDocumentPaymentsListItemPaymentTerms.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>ReceivedDocumentPaymentsListItemPaymentTerms</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReceivedDocumentPaymentsListItemPaymentTerms} obj Optional instance to populate.
     * @return {module:model/ReceivedDocumentPaymentsListItemPaymentTerms} The populated <code>ReceivedDocumentPaymentsListItemPaymentTerms</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new ReceivedDocumentPaymentsListItemPaymentTerms()

      if (data.hasOwnProperty('days')) {
        obj.days = ApiClient.convertToType(data.days, 'Number')
      }
      if (data.hasOwnProperty('type')) {
        obj.type = ApiClient.convertToType(data.type, 'String')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>ReceivedDocumentPaymentsListItemPaymentTerms</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReceivedDocumentPaymentsListItemPaymentTerms</code>.
     */
  static validateJSON (data) {
    // ensure the json data is a string
    if (data.type && !(typeof data.type === 'string' || data.type instanceof String)) {
      throw new Error('Expected the field `type` to be a primitive type in the JSON string but got ' + data.type)
    }

    return true
  }
}

/**
 * Number of days.
 * @member {Number} days
 */
ReceivedDocumentPaymentsListItemPaymentTerms.prototype.days = undefined

/**
 * @member {String} type
 */
ReceivedDocumentPaymentsListItemPaymentTerms.prototype.type = undefined

export default ReceivedDocumentPaymentsListItemPaymentTerms
