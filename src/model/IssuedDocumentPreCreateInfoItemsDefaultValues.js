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

import VatType from './VatType'

/**
 * The IssuedDocumentPreCreateInfoItemsDefaultValues model module.
 * @module model/IssuedDocumentPreCreateInfoItemsDefaultValues
 * @version 2.0.19
 */
class IssuedDocumentPreCreateInfoItemsDefaultValues {
  /**
     * Constructs a new <code>IssuedDocumentPreCreateInfoItemsDefaultValues</code>.
     * Default values for the document items.
     * @alias module:model/IssuedDocumentPreCreateInfoItemsDefaultValues
     */
  constructor () {
    IssuedDocumentPreCreateInfoItemsDefaultValues.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>IssuedDocumentPreCreateInfoItemsDefaultValues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuedDocumentPreCreateInfoItemsDefaultValues} obj Optional instance to populate.
     * @return {module:model/IssuedDocumentPreCreateInfoItemsDefaultValues} The populated <code>IssuedDocumentPreCreateInfoItemsDefaultValues</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new IssuedDocumentPreCreateInfoItemsDefaultValues()

      if (data.hasOwnProperty('vat')) {
        obj.vat = VatType.constructFromObject(data.vat)
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>IssuedDocumentPreCreateInfoItemsDefaultValues</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IssuedDocumentPreCreateInfoItemsDefaultValues</code>.
     */
  static validateJSON (data) {
    // validate the optional field `vat`
    if (data.vat) { // data not null
      VatType.validateJSON(data.vat)
    }

    return true
  }
}

/**
 * @member {module:model/VatType} vat
 */
IssuedDocumentPreCreateInfoItemsDefaultValues.prototype.vat = undefined

export default IssuedDocumentPreCreateInfoItemsDefaultValues
