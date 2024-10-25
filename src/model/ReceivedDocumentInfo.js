/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.1.2
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import Currency from './Currency'
import PaymentAccount from './PaymentAccount'
import ReceivedDocumentInfoDefaultValues from './ReceivedDocumentInfoDefaultValues'
import ReceivedDocumentInfoItemsDefaultValues from './ReceivedDocumentInfoItemsDefaultValues'
import VatType from './VatType'

/**
 * The ReceivedDocumentInfo model module.
 * @module model/ReceivedDocumentInfo
 * @version 2.1.1
 */
class ReceivedDocumentInfo {
  /**
     * Constructs a new <code>ReceivedDocumentInfo</code>.
     * @alias module:model/ReceivedDocumentInfo
     */
  constructor () {
    ReceivedDocumentInfo.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>ReceivedDocumentInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReceivedDocumentInfo} obj Optional instance to populate.
     * @return {module:model/ReceivedDocumentInfo} The populated <code>ReceivedDocumentInfo</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new ReceivedDocumentInfo()

      if (data.hasOwnProperty('default_values')) {
        obj.default_values = ReceivedDocumentInfoDefaultValues.constructFromObject(data.default_values)
      }
      if (data.hasOwnProperty('items_default_values')) {
        obj.items_default_values = ReceivedDocumentInfoItemsDefaultValues.constructFromObject(data.items_default_values)
      }
      if (data.hasOwnProperty('countries_list')) {
        obj.countries_list = ApiClient.convertToType(data.countries_list, ['String'])
      }
      if (data.hasOwnProperty('currencies_list')) {
        obj.currencies_list = ApiClient.convertToType(data.currencies_list, [Currency])
      }
      if (data.hasOwnProperty('categories_list')) {
        obj.categories_list = ApiClient.convertToType(data.categories_list, ['String'])
      }
      if (data.hasOwnProperty('payment_accounts_list')) {
        obj.payment_accounts_list = ApiClient.convertToType(data.payment_accounts_list, [PaymentAccount])
      }
      if (data.hasOwnProperty('vat_types_list')) {
        obj.vat_types_list = ApiClient.convertToType(data.vat_types_list, [VatType])
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>ReceivedDocumentInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReceivedDocumentInfo</code>.
     */
  static validateJSON (data) {
    // validate the optional field `default_values`
    if (data.default_values) { // data not null
      ReceivedDocumentInfoDefaultValues.validateJSON(data.default_values)
    }
    // validate the optional field `items_default_values`
    if (data.items_default_values) { // data not null
      ReceivedDocumentInfoItemsDefaultValues.validateJSON(data.items_default_values)
    }
    // ensure the json data is an array
    if (!Array.isArray(data.countries_list)) {
      throw new Error('Expected the field `countries_list` to be an array in the JSON data but got ' + data.countries_list)
    }
    if (data.currencies_list) { // data not null
      // ensure the json data is an array
      if (!Array.isArray(data.currencies_list)) {
        throw new Error('Expected the field `currencies_list` to be an array in the JSON data but got ' + data.currencies_list)
      }
      // validate the optional field `currencies_list` (array)
      for (const item of data.currencies_list) {
        Currency.validateJSON(item)
      }
    }
    // ensure the json data is an array
    if (!Array.isArray(data.categories_list)) {
      throw new Error('Expected the field `categories_list` to be an array in the JSON data but got ' + data.categories_list)
    }
    if (data.payment_accounts_list) { // data not null
      // ensure the json data is an array
      if (!Array.isArray(data.payment_accounts_list)) {
        throw new Error('Expected the field `payment_accounts_list` to be an array in the JSON data but got ' + data.payment_accounts_list)
      }
      // validate the optional field `payment_accounts_list` (array)
      for (const item of data.payment_accounts_list) {
        PaymentAccount.validateJSON(item)
      }
    }
    if (data.vat_types_list) { // data not null
      // ensure the json data is an array
      if (!Array.isArray(data.vat_types_list)) {
        throw new Error('Expected the field `vat_types_list` to be an array in the JSON data but got ' + data.vat_types_list)
      }
      // validate the optional field `vat_types_list` (array)
      for (const item of data.vat_types_list) {
        VatType.validateJSON(item)
      }
    }

    return true
  }
}

/**
 * @member {module:model/ReceivedDocumentInfoDefaultValues} default_values
 */
ReceivedDocumentInfo.prototype.default_values = undefined

/**
 * @member {module:model/ReceivedDocumentInfoItemsDefaultValues} items_default_values
 */
ReceivedDocumentInfo.prototype.items_default_values = undefined

/**
 * Countries list
 * @member {Array.<String>} countries_list
 */
ReceivedDocumentInfo.prototype.countries_list = undefined

/**
 * Currencies list
 * @member {Array.<module:model/Currency>} currencies_list
 */
ReceivedDocumentInfo.prototype.currencies_list = undefined

/**
 * Categories list
 * @member {Array.<String>} categories_list
 */
ReceivedDocumentInfo.prototype.categories_list = undefined

/**
 * Payments accounts list
 * @member {Array.<module:model/PaymentAccount>} payment_accounts_list
 */
ReceivedDocumentInfo.prototype.payment_accounts_list = undefined

/**
 * Vat types list
 * @member {Array.<module:model/VatType>} vat_types_list
 */
ReceivedDocumentInfo.prototype.vat_types_list = undefined

export default ReceivedDocumentInfo
