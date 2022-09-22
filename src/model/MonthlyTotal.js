/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.20
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'

/**
 * The MonthlyTotal model module.
 * @module model/MonthlyTotal
 * @version 2.0.16
 */
class MonthlyTotal {
  /**
     * Constructs a new <code>MonthlyTotal</code>.
     *
     * @alias module:model/MonthlyTotal
     */
  constructor () {
    MonthlyTotal.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>MonthlyTotal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MonthlyTotal} obj Optional instance to populate.
     * @return {module:model/MonthlyTotal} The populated <code>MonthlyTotal</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new MonthlyTotal()

      if (data.hasOwnProperty('net')) {
        obj.net = ApiClient.convertToType(data.net, 'Number')
      }
      if (data.hasOwnProperty('gross')) {
        obj.gross = ApiClient.convertToType(data.gross, 'Number')
      }
      if (data.hasOwnProperty('count')) {
        obj.count = ApiClient.convertToType(data.count, 'Number')
      }
    }
    return obj
  }
}

/**
 * Monthly total net amount.
 * @member {Number} net
 */
MonthlyTotal.prototype.net = undefined

/**
 * Monthly total gross amount.
 * @member {Number} gross
 */
MonthlyTotal.prototype.gross = undefined

/**
 * Monthly total receipt number.
 * @member {Number} count
 */
MonthlyTotal.prototype.count = undefined

export default MonthlyTotal
