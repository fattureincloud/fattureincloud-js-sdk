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

/**
 * The CompanyInfoPlanInfoFunctions model module.
 * @module model/CompanyInfoPlanInfoFunctions
 * @version 2.1.1
 */
class CompanyInfoPlanInfoFunctions {
  /**
     * Constructs a new <code>CompanyInfoPlanInfoFunctions</code>.
     * Access to functions for this company.
     * @alias module:model/CompanyInfoPlanInfoFunctions
     */
  constructor () {
    CompanyInfoPlanInfoFunctions.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>CompanyInfoPlanInfoFunctions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyInfoPlanInfoFunctions} obj Optional instance to populate.
     * @return {module:model/CompanyInfoPlanInfoFunctions} The populated <code>CompanyInfoPlanInfoFunctions</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new CompanyInfoPlanInfoFunctions()

      if (data.hasOwnProperty('archive')) {
        obj.archive = ApiClient.convertToType(data.archive, 'Boolean')
      }
      if (data.hasOwnProperty('cerved')) {
        obj.cerved = ApiClient.convertToType(data.cerved, 'Boolean')
      }
      if (data.hasOwnProperty('document_attachments')) {
        obj.document_attachments = ApiClient.convertToType(data.document_attachments, 'Boolean')
      }
      if (data.hasOwnProperty('e_invoice')) {
        obj.e_invoice = ApiClient.convertToType(data.e_invoice, 'Boolean')
      }
      if (data.hasOwnProperty('genius')) {
        obj.genius = ApiClient.convertToType(data.genius, 'Boolean')
      }
      if (data.hasOwnProperty('mail_tracking')) {
        obj.mail_tracking = ApiClient.convertToType(data.mail_tracking, 'Boolean')
      }
      if (data.hasOwnProperty('payment_notifications')) {
        obj.payment_notifications = ApiClient.convertToType(data.payment_notifications, 'Boolean')
      }
      if (data.hasOwnProperty('paypal')) {
        obj.paypal = ApiClient.convertToType(data.paypal, 'Boolean')
      }
      if (data.hasOwnProperty('receipts')) {
        obj.receipts = ApiClient.convertToType(data.receipts, 'Boolean')
      }
      if (data.hasOwnProperty('recurring')) {
        obj.recurring = ApiClient.convertToType(data.recurring, 'Boolean')
      }
      if (data.hasOwnProperty('smtp')) {
        obj.smtp = ApiClient.convertToType(data.smtp, 'Boolean')
      }
      if (data.hasOwnProperty('sofort')) {
        obj.sofort = ApiClient.convertToType(data.sofort, 'Boolean')
      }
      if (data.hasOwnProperty('stock')) {
        obj.stock = ApiClient.convertToType(data.stock, 'Boolean')
      }
      if (data.hasOwnProperty('subaccounts')) {
        obj.subaccounts = ApiClient.convertToType(data.subaccounts, 'Boolean')
      }
      if (data.hasOwnProperty('tessera_sanitaria')) {
        obj.tessera_sanitaria = ApiClient.convertToType(data.tessera_sanitaria, 'Boolean')
      }
      if (data.hasOwnProperty('ts_digital')) {
        obj.ts_digital = ApiClient.convertToType(data.ts_digital, 'Boolean')
      }
      if (data.hasOwnProperty('ts_invoice_trading')) {
        obj.ts_invoice_trading = ApiClient.convertToType(data.ts_invoice_trading, 'Boolean')
      }
      if (data.hasOwnProperty('ts_pay')) {
        obj.ts_pay = ApiClient.convertToType(data.ts_pay, 'Boolean')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>CompanyInfoPlanInfoFunctions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CompanyInfoPlanInfoFunctions</code>.
     */
  static validateJSON (data) {
    return true
  }
}

/**
 * @member {Boolean} archive
 */
CompanyInfoPlanInfoFunctions.prototype.archive = undefined

/**
 * @member {Boolean} cerved
 */
CompanyInfoPlanInfoFunctions.prototype.cerved = undefined

/**
 * @member {Boolean} document_attachments
 */
CompanyInfoPlanInfoFunctions.prototype.document_attachments = undefined

/**
 * @member {Boolean} e_invoice
 */
CompanyInfoPlanInfoFunctions.prototype.e_invoice = undefined

/**
 * @member {Boolean} genius
 */
CompanyInfoPlanInfoFunctions.prototype.genius = undefined

/**
 * @member {Boolean} mail_tracking
 */
CompanyInfoPlanInfoFunctions.prototype.mail_tracking = undefined

/**
 * @member {Boolean} payment_notifications
 */
CompanyInfoPlanInfoFunctions.prototype.payment_notifications = undefined

/**
 * @member {Boolean} paypal
 */
CompanyInfoPlanInfoFunctions.prototype.paypal = undefined

/**
 * @member {Boolean} receipts
 */
CompanyInfoPlanInfoFunctions.prototype.receipts = undefined

/**
 * @member {Boolean} recurring
 */
CompanyInfoPlanInfoFunctions.prototype.recurring = undefined

/**
 * @member {Boolean} smtp
 */
CompanyInfoPlanInfoFunctions.prototype.smtp = undefined

/**
 * @member {Boolean} sofort
 */
CompanyInfoPlanInfoFunctions.prototype.sofort = undefined

/**
 * @member {Boolean} stock
 */
CompanyInfoPlanInfoFunctions.prototype.stock = undefined

/**
 * @member {Boolean} subaccounts
 */
CompanyInfoPlanInfoFunctions.prototype.subaccounts = undefined

/**
 * @member {Boolean} tessera_sanitaria
 */
CompanyInfoPlanInfoFunctions.prototype.tessera_sanitaria = undefined

/**
 * @member {Boolean} ts_digital
 */
CompanyInfoPlanInfoFunctions.prototype.ts_digital = undefined

/**
 * @member {Boolean} ts_invoice_trading
 */
CompanyInfoPlanInfoFunctions.prototype.ts_invoice_trading = undefined

/**
 * @member {Boolean} ts_pay
 */
CompanyInfoPlanInfoFunctions.prototype.ts_pay = undefined

export default CompanyInfoPlanInfoFunctions
