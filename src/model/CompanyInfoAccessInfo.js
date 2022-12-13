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
import Permissions from './Permissions'
import UserCompanyRole from './UserCompanyRole'

/**
 * The CompanyInfoAccessInfo model module.
 * @module model/CompanyInfoAccessInfo
 * @version 2.0.18
 */
class CompanyInfoAccessInfo {
  /**
     * Constructs a new <code>CompanyInfoAccessInfo</code>.
     * @alias module:model/CompanyInfoAccessInfo
     */
  constructor () {
    CompanyInfoAccessInfo.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>CompanyInfoAccessInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyInfoAccessInfo} obj Optional instance to populate.
     * @return {module:model/CompanyInfoAccessInfo} The populated <code>CompanyInfoAccessInfo</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new CompanyInfoAccessInfo()

      if (data.hasOwnProperty('role')) {
        obj.role = UserCompanyRole.constructFromObject(data.role)
      }
      if (data.hasOwnProperty('permissions')) {
        obj.permissions = Permissions.constructFromObject(data.permissions)
      }
      if (data.hasOwnProperty('through_accountant')) {
        obj.through_accountant = ApiClient.convertToType(data.through_accountant, 'Boolean')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>CompanyInfoAccessInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CompanyInfoAccessInfo</code>.
     */
  static validateJSON (data) {
    // validate the optional field `permissions`
    if (data.permissions) { // data not null
      Permissions.validateJSON(data.permissions)
    }

    return true
  }
}

/**
 * @member {module:model/UserCompanyRole} role
 */
CompanyInfoAccessInfo.prototype.role = undefined

/**
 * @member {module:model/Permissions} permissions
 */
CompanyInfoAccessInfo.prototype.permissions = undefined

/**
 * @member {Boolean} through_accountant
 */
CompanyInfoAccessInfo.prototype.through_accountant = undefined

export default CompanyInfoAccessInfo
