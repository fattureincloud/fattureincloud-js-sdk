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
import CompanyType from './CompanyType'
import ControlledCompany from './ControlledCompany'

/**
 * The Company model module.
 * @module model/Company
 * @version 2.0.18
 */
class Company {
  /**
     * Constructs a new <code>Company</code>.
     *
     * @alias module:model/Company
     */
  constructor () {
    Company.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>Company</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Company} obj Optional instance to populate.
     * @return {module:model/Company} The populated <code>Company</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new Company()

      if (data.hasOwnProperty('id')) {
        obj.id = ApiClient.convertToType(data.id, 'Number')
      }
      if (data.hasOwnProperty('name')) {
        obj.name = ApiClient.convertToType(data.name, 'String')
      }
      if (data.hasOwnProperty('type')) {
        obj.type = CompanyType.constructFromObject(data.type)
      }
      if (data.hasOwnProperty('access_token')) {
        obj.access_token = ApiClient.convertToType(data.access_token, 'String')
      }
      if (data.hasOwnProperty('controlled_companies')) {
        obj.controlled_companies = ApiClient.convertToType(data.controlled_companies, [ControlledCompany])
      }
      if (data.hasOwnProperty('connection_id')) {
        obj.connection_id = ApiClient.convertToType(data.connection_id, 'Number')
      }
      if (data.hasOwnProperty('tax_code')) {
        obj.tax_code = ApiClient.convertToType(data.tax_code, 'String')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>Company</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Company</code>.
     */
  static validateJSON (data) {
    // ensure the json data is a string
    if (data.name && !(typeof data.name === 'string' || data.name instanceof String)) {
      throw new Error('Expected the field `name` to be a primitive type in the JSON string but got ' + data.name)
    }
    // ensure the json data is a string
    if (data.access_token && !(typeof data.access_token === 'string' || data.access_token instanceof String)) {
      throw new Error('Expected the field `access_token` to be a primitive type in the JSON string but got ' + data.access_token)
    }
    if (data.controlled_companies) { // data not null
      // ensure the json data is an array
      if (!Array.isArray(data.controlled_companies)) {
        throw new Error('Expected the field `controlled_companies` to be an array in the JSON data but got ' + data.controlled_companies)
      }
      // validate the optional field `controlled_companies` (array)
      for (const item of data.controlled_companies) {
        ControlledCompany.validateJsonObject(item)
      }
    }
    // ensure the json data is a string
    if (data.tax_code && !(typeof data.tax_code === 'string' || data.tax_code instanceof String)) {
      throw new Error('Expected the field `tax_code` to be a primitive type in the JSON string but got ' + data.tax_code)
    }

    return true
  }
}

/**
 * Company unique identifier.
 * @member {Number} id
 */
Company.prototype.id = undefined

/**
 * Company name.
 * @member {String} name
 */
Company.prototype.name = undefined

/**
 * @member {module:model/CompanyType} type
 */
Company.prototype.type = undefined

/**
 * CompanyAuthentication token for this company. [Only if type=company]
 * @member {String} access_token
 */
Company.prototype.access_token = undefined

/**
 * List of controlled companies. [Only if type=accountant]
 * @member {Array.<module:model/ControlledCompany>} controlled_companies
 */
Company.prototype.controlled_companies = undefined

/**
 * Company connection id.
 * @member {Number} connection_id
 */
Company.prototype.connection_id = undefined

/**
 * Tax code.
 * @member {String} tax_code
 */
Company.prototype.tax_code = undefined

export default Company
