/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.25
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import FunctionStatus from './FunctionStatus'

/**
 * The CompanyInfoPlanInfoFunctionsStatus model module.
 * @module model/CompanyInfoPlanInfoFunctionsStatus
 * @version 2.0.19
 */
class CompanyInfoPlanInfoFunctionsStatus {
  /**
     * Constructs a new <code>CompanyInfoPlanInfoFunctionsStatus</code>.
     * @alias module:model/CompanyInfoPlanInfoFunctionsStatus
     */
  constructor () {
    CompanyInfoPlanInfoFunctionsStatus.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>CompanyInfoPlanInfoFunctionsStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyInfoPlanInfoFunctionsStatus} obj Optional instance to populate.
     * @return {module:model/CompanyInfoPlanInfoFunctionsStatus} The populated <code>CompanyInfoPlanInfoFunctionsStatus</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new CompanyInfoPlanInfoFunctionsStatus()

      if (data.hasOwnProperty('ts_digital')) {
        obj.ts_digital = FunctionStatus.constructFromObject(data.ts_digital)
      }
      if (data.hasOwnProperty('ts_pay')) {
        obj.ts_pay = FunctionStatus.constructFromObject(data.ts_pay)
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>CompanyInfoPlanInfoFunctionsStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CompanyInfoPlanInfoFunctionsStatus</code>.
     */
  static validateJSON (data) {
    // validate the optional field `ts_digital`
    if (data.ts_digital) { // data not null
      FunctionStatus.validateJSON(data.ts_digital)
    }
    // validate the optional field `ts_pay`
    if (data.ts_pay) { // data not null
      FunctionStatus.validateJSON(data.ts_pay)
    }

    return true
  }
}

/**
 * @member {module:model/FunctionStatus} ts_digital
 */
CompanyInfoPlanInfoFunctionsStatus.prototype.ts_digital = undefined

/**
 * @member {module:model/FunctionStatus} ts_pay
 */
CompanyInfoPlanInfoFunctionsStatus.prototype.ts_pay = undefined

export default CompanyInfoPlanInfoFunctionsStatus
