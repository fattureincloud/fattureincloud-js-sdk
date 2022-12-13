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

import CashbookEntry from './CashbookEntry'

/**
 * The ModifyCashbookEntryRequest model module.
 * @module model/ModifyCashbookEntryRequest
 * @version 2.0.18
 */
class ModifyCashbookEntryRequest {
  /**
     * Constructs a new <code>ModifyCashbookEntryRequest</code>.
     *
     * @alias module:model/ModifyCashbookEntryRequest
     */
  constructor () {
    ModifyCashbookEntryRequest.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>ModifyCashbookEntryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyCashbookEntryRequest} obj Optional instance to populate.
     * @return {module:model/ModifyCashbookEntryRequest} The populated <code>ModifyCashbookEntryRequest</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new ModifyCashbookEntryRequest()

      if (data.hasOwnProperty('data')) {
        obj.data = CashbookEntry.constructFromObject(data.data)
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>ModifyCashbookEntryRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModifyCashbookEntryRequest</code>.
     */
  static validateJSON (data) {
    // validate the optional field `data`
    if (data.data) { // data not null
      CashbookEntry.validateJSON(data.data)
    }

    return true
  }
}

/**
 * @member {module:model/CashbookEntry} data
 */
ModifyCashbookEntryRequest.prototype.data = undefined

export default ModifyCashbookEntryRequest
