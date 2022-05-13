/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.16
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import Company from './Company'

/**
 * The ListUserCompaniesResponseData model module.
 * @module model/ListUserCompaniesResponseData
 * @version 5.0.0
 */
class ListUserCompaniesResponseData {
  /**
     * Constructs a new <code>ListUserCompaniesResponseData</code>.
     * @alias module:model/ListUserCompaniesResponseData
     */
  constructor () {
    ListUserCompaniesResponseData.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>ListUserCompaniesResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUserCompaniesResponseData} obj Optional instance to populate.
     * @return {module:model/ListUserCompaniesResponseData} The populated <code>ListUserCompaniesResponseData</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new ListUserCompaniesResponseData()

      if (data.hasOwnProperty('companies')) {
        obj.companies = ApiClient.convertToType(data.companies, [Company])
      }
    }
    return obj
  }
}

/**
 * @member {Array.<module:model/Company>} companies
 */
ListUserCompaniesResponseData.prototype.companies = undefined

export default ListUserCompaniesResponseData
