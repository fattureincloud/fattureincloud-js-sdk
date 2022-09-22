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
import PaymentAccountType from './PaymentAccountType'

/**
 * The PaymentAccount model module.
 * @module model/PaymentAccount
 * @version 2.0.16
 */
class PaymentAccount {
  /**
     * Constructs a new <code>PaymentAccount</code>.
     *
     * @alias module:model/PaymentAccount
     */
  constructor () {
    PaymentAccount.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>PaymentAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentAccount} obj Optional instance to populate.
     * @return {module:model/PaymentAccount} The populated <code>PaymentAccount</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new PaymentAccount()

      if (data.hasOwnProperty('id')) {
        obj.id = ApiClient.convertToType(data.id, 'Number')
      }
      if (data.hasOwnProperty('name')) {
        obj.name = ApiClient.convertToType(data.name, 'String')
      }
      if (data.hasOwnProperty('type')) {
        obj.type = PaymentAccountType.constructFromObject(data.type)
      }
      if (data.hasOwnProperty('iban')) {
        obj.iban = ApiClient.convertToType(data.iban, 'String')
      }
      if (data.hasOwnProperty('sia')) {
        obj.sia = ApiClient.convertToType(data.sia, 'String')
      }
      if (data.hasOwnProperty('cuc')) {
        obj.cuc = ApiClient.convertToType(data.cuc, 'String')
      }
      if (data.hasOwnProperty('virtual')) {
        obj.virtual = ApiClient.convertToType(data.virtual, 'Boolean')
      }
    }
    return obj
  }
}

/**
 * Unique identifier
 * @member {Number} id
 */
PaymentAccount.prototype.id = undefined

/**
 * Payment account name.
 * @member {String} name
 */
PaymentAccount.prototype.name = undefined

/**
 * @member {module:model/PaymentAccountType} type
 */
PaymentAccount.prototype.type = undefined

/**
 * Payment account iban.
 * @member {String} iban
 */
PaymentAccount.prototype.iban = undefined

/**
 * Payment account sia.
 * @member {String} sia
 */
PaymentAccount.prototype.sia = undefined

/**
 * Payment account cuc.
 * @member {String} cuc
 */
PaymentAccount.prototype.cuc = undefined

/**
 * Determine if the payment method is virtual.
 * @member {Boolean} virtual
 */
PaymentAccount.prototype.virtual = undefined

export default PaymentAccount
