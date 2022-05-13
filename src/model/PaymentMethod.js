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
import PaymentAccount from './PaymentAccount'
import PaymentMethodDetails from './PaymentMethodDetails'
import PaymentMethodType from './PaymentMethodType'

/**
 * The PaymentMethod model module.
 * @module model/PaymentMethod
 * @version 5.0.0
 */
class PaymentMethod {
  /**
     * Constructs a new <code>PaymentMethod</code>.
     * @alias module:model/PaymentMethod
     */
  constructor () {
    PaymentMethod.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>PaymentMethod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentMethod} obj Optional instance to populate.
     * @return {module:model/PaymentMethod} The populated <code>PaymentMethod</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new PaymentMethod()

      if (data.hasOwnProperty('id')) {
        obj.id = ApiClient.convertToType(data.id, 'Number')
      }
      if (data.hasOwnProperty('name')) {
        obj.name = ApiClient.convertToType(data.name, 'String')
      }
      if (data.hasOwnProperty('type')) {
        obj.type = PaymentMethodType.constructFromObject(data.type)
      }
      if (data.hasOwnProperty('is_default')) {
        obj.is_default = ApiClient.convertToType(data.is_default, 'Boolean')
      }
      if (data.hasOwnProperty('default_payment_account')) {
        obj.default_payment_account = PaymentAccount.constructFromObject(data.default_payment_account)
      }
      if (data.hasOwnProperty('details')) {
        obj.details = ApiClient.convertToType(data.details, [PaymentMethodDetails])
      }
      if (data.hasOwnProperty('bank_iban')) {
        obj.bank_iban = ApiClient.convertToType(data.bank_iban, 'String')
      }
      if (data.hasOwnProperty('bank_name')) {
        obj.bank_name = ApiClient.convertToType(data.bank_name, 'String')
      }
      if (data.hasOwnProperty('bank_beneficiary')) {
        obj.bank_beneficiary = ApiClient.convertToType(data.bank_beneficiary, 'String')
      }
      if (data.hasOwnProperty('ei_payment_method')) {
        obj.ei_payment_method = ApiClient.convertToType(data.ei_payment_method, 'String')
      }
    }
    return obj
  }
}

/**
 * Unique identifier
 * @member {Number} id
 */
PaymentMethod.prototype.id = undefined

/**
 * Name of the payment method
 * @member {String} name
 */
PaymentMethod.prototype.name = undefined

/**
 * @member {module:model/PaymentMethodType} type
 */
PaymentMethod.prototype.type = undefined

/**
 * Determines if this is the default payment method.
 * @member {Boolean} is_default
 */
PaymentMethod.prototype.is_default = undefined

/**
 * @member {module:model/PaymentAccount} default_payment_account
 */
PaymentMethod.prototype.default_payment_account = undefined

/**
 * Method details rows
 * @member {Array.<module:model/PaymentMethodDetails>} details
 */
PaymentMethod.prototype.details = undefined

/**
 * Bank iban
 * @member {String} bank_iban
 */
PaymentMethod.prototype.bank_iban = undefined

/**
 * Bank name
 * @member {String} bank_name
 */
PaymentMethod.prototype.bank_name = undefined

/**
 * Bank beneficiary
 * @member {String} bank_beneficiary
 */
PaymentMethod.prototype.bank_beneficiary = undefined

/**
 * E-invoice payment method
 * @member {String} ei_payment_method
 */
PaymentMethod.prototype.ei_payment_method = undefined

export default PaymentMethod
