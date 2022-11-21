/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.22
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import CompanyInfoAccessInfo from './CompanyInfoAccessInfo'
import CompanyInfoPlanInfo from './CompanyInfoPlanInfo'
import CompanyType from './CompanyType'

/**
 * The CompanyInfo model module.
 * @module model/CompanyInfo
 * @version 2.0.17
 */
class CompanyInfo {
  /**
     * Constructs a new <code>CompanyInfo</code>.
     *
     * @alias module:model/CompanyInfo
     */
  constructor () {
    CompanyInfo.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>CompanyInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyInfo} obj Optional instance to populate.
     * @return {module:model/CompanyInfo} The populated <code>CompanyInfo</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new CompanyInfo()

      if (data.hasOwnProperty('id')) {
        obj.id = ApiClient.convertToType(data.id, 'Number')
      }
      if (data.hasOwnProperty('name')) {
        obj.name = ApiClient.convertToType(data.name, 'String')
      }
      if (data.hasOwnProperty('email')) {
        obj.email = ApiClient.convertToType(data.email, 'String')
      }
      if (data.hasOwnProperty('type')) {
        obj.type = CompanyType.constructFromObject(data.type)
      }
      if (data.hasOwnProperty('access_info')) {
        obj.access_info = CompanyInfoAccessInfo.constructFromObject(data.access_info)
      }
      if (data.hasOwnProperty('plan_info')) {
        obj.plan_info = CompanyInfoPlanInfo.constructFromObject(data.plan_info)
      }
      if (data.hasOwnProperty('accountant_id')) {
        obj.accountant_id = ApiClient.convertToType(data.accountant_id, 'Number')
      }
      if (data.hasOwnProperty('is_accountant')) {
        obj.is_accountant = ApiClient.convertToType(data.is_accountant, 'Boolean')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>CompanyInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CompanyInfo</code>.
     */
  static validateJSON (data) {
    // ensure the json data is a string
    if (data.name && !(typeof data.name === 'string' || data.name instanceof String)) {
      throw new Error('Expected the field `name` to be a primitive type in the JSON string but got ' + data.name)
    }
    // ensure the json data is a string
    if (data.email && !(typeof data.email === 'string' || data.email instanceof String)) {
      throw new Error('Expected the field `email` to be a primitive type in the JSON string but got ' + data.email)
    }
    // validate the optional field `access_info`
    if (data.access_info) { // data not null
      CompanyInfoAccessInfo.validateJSON(data.access_info)
    }
    // validate the optional field `plan_info`
    if (data.plan_info) { // data not null
      CompanyInfoPlanInfo.validateJSON(data.plan_info)
    }

    return true
  }
}

/**
 * Company unique identifier.
 * @member {Number} id
 */
CompanyInfo.prototype.id = undefined

/**
 * Company name.
 * @member {String} name
 */
CompanyInfo.prototype.name = undefined

/**
 * Company email.
 * @member {String} email
 */
CompanyInfo.prototype.email = undefined

/**
 * @member {module:model/CompanyType} type
 */
CompanyInfo.prototype.type = undefined

/**
 * @member {module:model/CompanyInfoAccessInfo} access_info
 */
CompanyInfo.prototype.access_info = undefined

/**
 * @member {module:model/CompanyInfoPlanInfo} plan_info
 */
CompanyInfo.prototype.plan_info = undefined

/**
 * Accountant unique identifier.
 * @member {Number} accountant_id
 */
CompanyInfo.prototype.accountant_id = undefined

/**
 * Determine if the logged account is an accountant.
 * @member {Boolean} is_accountant
 */
CompanyInfo.prototype.is_accountant = undefined

export default CompanyInfo
