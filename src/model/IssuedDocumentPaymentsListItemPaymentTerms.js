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
import PaymentTermsType from './PaymentTermsType'

/**
 * The IssuedDocumentPaymentsListItemPaymentTerms model module.
 * @module model/IssuedDocumentPaymentsListItemPaymentTerms
 * @version 2.0.26
 */
class IssuedDocumentPaymentsListItemPaymentTerms {
  /**
     * Constructs a new <code>IssuedDocumentPaymentsListItemPaymentTerms</code>.
     * @alias module:model/IssuedDocumentPaymentsListItemPaymentTerms
     */
  constructor () {
    IssuedDocumentPaymentsListItemPaymentTerms.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>IssuedDocumentPaymentsListItemPaymentTerms</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuedDocumentPaymentsListItemPaymentTerms} obj Optional instance to populate.
     * @return {module:model/IssuedDocumentPaymentsListItemPaymentTerms} The populated <code>IssuedDocumentPaymentsListItemPaymentTerms</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new IssuedDocumentPaymentsListItemPaymentTerms()

      if (data.hasOwnProperty('days')) {
        obj.days = ApiClient.convertToType(data.days, 'Number')
      }
      if (data.hasOwnProperty('type')) {
        obj.type = PaymentTermsType.constructFromObject(data.type)
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>IssuedDocumentPaymentsListItemPaymentTerms</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IssuedDocumentPaymentsListItemPaymentTerms</code>.
     */
  static validateJSON (data) {
    return true
  }
}

/**
 * Issued document payment number of days by which the payment must be made
 * @member {Number} days
 */
IssuedDocumentPaymentsListItemPaymentTerms.prototype.days = undefined

/**
 * @member {module:model/PaymentTermsType} type
 */
IssuedDocumentPaymentsListItemPaymentTerms.prototype.type = undefined

export default IssuedDocumentPaymentsListItemPaymentTerms
