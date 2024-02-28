/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.32
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'

/**
 * The CompanyPlanUsage model module.
 * @module model/CompanyPlanUsage
 * @version 2.0.25
 */
class CompanyPlanUsage {
  /**
     * Constructs a new <code>CompanyPlanUsage</code>.
     * @alias module:model/CompanyPlanUsage
     */
  constructor () {
    CompanyPlanUsage.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>CompanyPlanUsage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyPlanUsage} obj Optional instance to populate.
     * @return {module:model/CompanyPlanUsage} The populated <code>CompanyPlanUsage</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new CompanyPlanUsage()

      if (data.hasOwnProperty('limit')) {
        obj.limit = ApiClient.convertToType(data.limit, 'Number')
      }
      if (data.hasOwnProperty('usage')) {
        obj.usage = ApiClient.convertToType(data.usage, 'Number')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>CompanyPlanUsage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CompanyPlanUsage</code>.
     */
  static validateJSON (data) {
    return true
  }
}

/**
 * Plan limit
 * @member {Number} limit
 */
CompanyPlanUsage.prototype.limit = undefined

/**
 * Plan usage
 * @member {Number} usage
 */
CompanyPlanUsage.prototype.usage = undefined

export default CompanyPlanUsage
