/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.21
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import CompanyInfoPlanInfoFunctions from './CompanyInfoPlanInfoFunctions'
import CompanyInfoPlanInfoFunctionsStatus from './CompanyInfoPlanInfoFunctionsStatus'
import CompanyInfoPlanInfoLimits from './CompanyInfoPlanInfoLimits'

/**
 * The CompanyInfoPlanInfo model module.
 * @module model/CompanyInfoPlanInfo
 * @version 2.0.17
 */
class CompanyInfoPlanInfo {
  /**
     * Constructs a new <code>CompanyInfoPlanInfo</code>.
     * @alias module:model/CompanyInfoPlanInfo
     */
  constructor () {
    CompanyInfoPlanInfo.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>CompanyInfoPlanInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyInfoPlanInfo} obj Optional instance to populate.
     * @return {module:model/CompanyInfoPlanInfo} The populated <code>CompanyInfoPlanInfo</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new CompanyInfoPlanInfo()

      if (data.hasOwnProperty('limits')) {
        obj.limits = CompanyInfoPlanInfoLimits.constructFromObject(data.limits)
      }
      if (data.hasOwnProperty('functions')) {
        obj.functions = CompanyInfoPlanInfoFunctions.constructFromObject(data.functions)
      }
      if (data.hasOwnProperty('functions_status')) {
        obj.functions_status = CompanyInfoPlanInfoFunctionsStatus.constructFromObject(data.functions_status)
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>CompanyInfoPlanInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CompanyInfoPlanInfo</code>.
     */
  static validateJSON (data) {
    // validate the optional field `limits`
    if (data.limits) { // data not null
      CompanyInfoPlanInfoLimits.validateJSON(data.limits)
    }
    // validate the optional field `functions`
    if (data.functions) { // data not null
      CompanyInfoPlanInfoFunctions.validateJSON(data.functions)
    }
    // validate the optional field `functions_status`
    if (data.functions_status) { // data not null
      CompanyInfoPlanInfoFunctionsStatus.validateJSON(data.functions_status)
    }

    return true
  }
}

/**
 * @member {module:model/CompanyInfoPlanInfoLimits} limits
 */
CompanyInfoPlanInfo.prototype.limits = undefined

/**
 * @member {module:model/CompanyInfoPlanInfoFunctions} functions
 */
CompanyInfoPlanInfo.prototype.functions = undefined

/**
 * @member {module:model/CompanyInfoPlanInfoFunctionsStatus} functions_status
 */
CompanyInfoPlanInfo.prototype.functions_status = undefined

export default CompanyInfoPlanInfo
