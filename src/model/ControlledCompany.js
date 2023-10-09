/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.30
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import CompanyType from './CompanyType'

/**
 * The ControlledCompany model module.
 * @module model/ControlledCompany
 * @version 2.0.23
 */
class ControlledCompany {
  /**
     * Constructs a new <code>ControlledCompany</code>.
     * @alias module:model/ControlledCompany
     */
  constructor () {
    ControlledCompany.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>ControlledCompany</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ControlledCompany} obj Optional instance to populate.
     * @return {module:model/ControlledCompany} The populated <code>ControlledCompany</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new ControlledCompany()

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
     * Validates the JSON data with respect to <code>ControlledCompany</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ControlledCompany</code>.
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
    // ensure the json data is a string
    if (data.tax_code && !(typeof data.tax_code === 'string' || data.tax_code instanceof String)) {
      throw new Error('Expected the field `tax_code` to be a primitive type in the JSON string but got ' + data.tax_code)
    }

    return true
  }
}

/**
 * Controlled company id
 * @member {Number} id
 */
ControlledCompany.prototype.id = undefined

/**
 * Controlled company id
 * @member {String} name
 */
ControlledCompany.prototype.name = undefined

/**
 * @member {module:model/CompanyType} type
 */
ControlledCompany.prototype.type = undefined

/**
 * Controlled company access token Only if type=company]
 * @member {String} access_token
 */
ControlledCompany.prototype.access_token = undefined

/**
 * Controlled company connection id
 * @member {Number} connection_id
 */
ControlledCompany.prototype.connection_id = undefined

/**
 * Controlled company tax code
 * @member {String} tax_code
 */
ControlledCompany.prototype.tax_code = undefined

export default ControlledCompany
