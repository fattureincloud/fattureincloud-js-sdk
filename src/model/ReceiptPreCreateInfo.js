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

import ApiClient from '../ApiClient'
import PaymentAccount from './PaymentAccount'
import VatType from './VatType'

/**
 * The ReceiptPreCreateInfo model module.
 * @module model/ReceiptPreCreateInfo
 * @version 2.0.17
 */
class ReceiptPreCreateInfo {
  /**
     * Constructs a new <code>ReceiptPreCreateInfo</code>.
     *
     * @alias module:model/ReceiptPreCreateInfo
     */
  constructor () {
    ReceiptPreCreateInfo.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>ReceiptPreCreateInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReceiptPreCreateInfo} obj Optional instance to populate.
     * @return {module:model/ReceiptPreCreateInfo} The populated <code>ReceiptPreCreateInfo</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new ReceiptPreCreateInfo()

      if (data.hasOwnProperty('numerations')) {
        obj.numerations = ApiClient.convertToType(data.numerations, { String: Object })
      }
      if (data.hasOwnProperty('numerations_list')) {
        obj.numerations_list = ApiClient.convertToType(data.numerations_list, ['String'])
      }
      if (data.hasOwnProperty('rc_centers_list')) {
        obj.rc_centers_list = ApiClient.convertToType(data.rc_centers_list, ['String'])
      }
      if (data.hasOwnProperty('payment_accounts_list')) {
        obj.payment_accounts_list = ApiClient.convertToType(data.payment_accounts_list, [PaymentAccount])
      }
      if (data.hasOwnProperty('categories_list')) {
        obj.categories_list = ApiClient.convertToType(data.categories_list, ['String'])
      }
      if (data.hasOwnProperty('vat_types_list')) {
        obj.vat_types_list = ApiClient.convertToType(data.vat_types_list, [VatType])
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>ReceiptPreCreateInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReceiptPreCreateInfo</code>.
     */
  static validateJSON (data) {
    // ensure the json data is an array
    if (!Array.isArray(data.numerations_list)) {
      throw new Error('Expected the field `numerations_list` to be an array in the JSON data but got ' + data.numerations_list)
    }
    // ensure the json data is an array
    if (!Array.isArray(data.rc_centers_list)) {
      throw new Error('Expected the field `rc_centers_list` to be an array in the JSON data but got ' + data.rc_centers_list)
    }
    if (data.payment_accounts_list) { // data not null
      // ensure the json data is an array
      if (!Array.isArray(data.payment_accounts_list)) {
        throw new Error('Expected the field `payment_accounts_list` to be an array in the JSON data but got ' + data.payment_accounts_list)
      }
      // validate the optional field `payment_accounts_list` (array)
      for (const item of data.payment_accounts_list) {
        PaymentAccount.validateJsonObject(item)
      }
    }
    // ensure the json data is an array
    if (!Array.isArray(data.categories_list)) {
      throw new Error('Expected the field `categories_list` to be an array in the JSON data but got ' + data.categories_list)
    }
    if (data.vat_types_list) { // data not null
      // ensure the json data is an array
      if (!Array.isArray(data.vat_types_list)) {
        throw new Error('Expected the field `vat_types_list` to be an array in the JSON data but got ' + data.vat_types_list)
      }
      // validate the optional field `vat_types_list` (array)
      for (const item of data.vat_types_list) {
        VatType.validateJsonObject(item)
      }
    }

    return true
  }
}

/**
 * @member {Object.<String, Object.<String, Number>>} numerations
 */
ReceiptPreCreateInfo.prototype.numerations = undefined

/**
 * List of series used in the past.
 * @member {Array.<String>} numerations_list
 */
ReceiptPreCreateInfo.prototype.numerations_list = undefined

/**
 * List of revenue centers used in the past.
 * @member {Array.<String>} rc_centers_list
 */
ReceiptPreCreateInfo.prototype.rc_centers_list = undefined

/**
 * User payment accounts list.
 * @member {Array.<module:model/PaymentAccount>} payment_accounts_list
 */
ReceiptPreCreateInfo.prototype.payment_accounts_list = undefined

/**
 * List of categories used in the past.
 * @member {Array.<String>} categories_list
 */
ReceiptPreCreateInfo.prototype.categories_list = undefined

/**
 * List of user vat types with the default 22%, 10%, 4% and 0% vats.
 * @member {Array.<module:model/VatType>} vat_types_list
 */
ReceiptPreCreateInfo.prototype.vat_types_list = undefined

export default ReceiptPreCreateInfo
