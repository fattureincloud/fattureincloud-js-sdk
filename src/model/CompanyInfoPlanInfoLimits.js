/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.19
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'

/**
 * The CompanyInfoPlanInfoLimits model module.
 * @module model/CompanyInfoPlanInfoLimits
 * @version 2.0.15
 */
class CompanyInfoPlanInfoLimits {
  /**
     * Constructs a new <code>CompanyInfoPlanInfoLimits</code>.
     * Limits for this company.
     * @alias module:model/CompanyInfoPlanInfoLimits
     */
  constructor () {
    CompanyInfoPlanInfoLimits.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>CompanyInfoPlanInfoLimits</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyInfoPlanInfoLimits} obj Optional instance to populate.
     * @return {module:model/CompanyInfoPlanInfoLimits} The populated <code>CompanyInfoPlanInfoLimits</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new CompanyInfoPlanInfoLimits()

      if (data.hasOwnProperty('clients')) {
        obj.clients = ApiClient.convertToType(data.clients, 'Number')
      }
      if (data.hasOwnProperty('suppliers')) {
        obj.suppliers = ApiClient.convertToType(data.suppliers, 'Number')
      }
      if (data.hasOwnProperty('products')) {
        obj.products = ApiClient.convertToType(data.products, 'Number')
      }
      if (data.hasOwnProperty('documents')) {
        obj.documents = ApiClient.convertToType(data.documents, 'Number')
      }
    }
    return obj
  }
}

/**
 * @member {Number} clients
 */
CompanyInfoPlanInfoLimits.prototype.clients = undefined

/**
 * @member {Number} suppliers
 */
CompanyInfoPlanInfoLimits.prototype.suppliers = undefined

/**
 * @member {Number} products
 */
CompanyInfoPlanInfoLimits.prototype.products = undefined

/**
 * @member {Number} documents
 */
CompanyInfoPlanInfoLimits.prototype.documents = undefined

export default CompanyInfoPlanInfoLimits
