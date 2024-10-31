/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.1.3
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import VatItem from './VatItem'

/**
 * The IssuedDocumentTotals model module.
 * @module model/IssuedDocumentTotals
 * @version 2.1.1
 */
class IssuedDocumentTotals {
  /**
     * Constructs a new <code>IssuedDocumentTotals</code>.
     * @alias module:model/IssuedDocumentTotals
     */
  constructor () {
    IssuedDocumentTotals.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>IssuedDocumentTotals</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuedDocumentTotals} obj Optional instance to populate.
     * @return {module:model/IssuedDocumentTotals} The populated <code>IssuedDocumentTotals</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new IssuedDocumentTotals()

      if (data.hasOwnProperty('amount_net')) {
        obj.amount_net = ApiClient.convertToType(data.amount_net, 'Number')
      }
      if (data.hasOwnProperty('amount_rivalsa')) {
        obj.amount_rivalsa = ApiClient.convertToType(data.amount_rivalsa, 'Number')
      }
      if (data.hasOwnProperty('amount_net_with_rivalsa')) {
        obj.amount_net_with_rivalsa = ApiClient.convertToType(data.amount_net_with_rivalsa, 'Number')
      }
      if (data.hasOwnProperty('amount_cassa')) {
        obj.amount_cassa = ApiClient.convertToType(data.amount_cassa, 'Number')
      }
      if (data.hasOwnProperty('taxable_amount')) {
        obj.taxable_amount = ApiClient.convertToType(data.taxable_amount, 'Number')
      }
      if (data.hasOwnProperty('not_taxable_amount')) {
        obj.not_taxable_amount = ApiClient.convertToType(data.not_taxable_amount, 'Number')
      }
      if (data.hasOwnProperty('amount_vat')) {
        obj.amount_vat = ApiClient.convertToType(data.amount_vat, 'Number')
      }
      if (data.hasOwnProperty('amount_gross')) {
        obj.amount_gross = ApiClient.convertToType(data.amount_gross, 'Number')
      }
      if (data.hasOwnProperty('taxable_amount_withholding_tax')) {
        obj.taxable_amount_withholding_tax = ApiClient.convertToType(data.taxable_amount_withholding_tax, 'Number')
      }
      if (data.hasOwnProperty('amount_withholding_tax')) {
        obj.amount_withholding_tax = ApiClient.convertToType(data.amount_withholding_tax, 'Number')
      }
      if (data.hasOwnProperty('taxable_amount_other_withholding_tax')) {
        obj.taxable_amount_other_withholding_tax = ApiClient.convertToType(data.taxable_amount_other_withholding_tax, 'Number')
      }
      if (data.hasOwnProperty('amount_other_withholding_tax')) {
        obj.amount_other_withholding_tax = ApiClient.convertToType(data.amount_other_withholding_tax, 'Number')
      }
      if (data.hasOwnProperty('stamp_duty')) {
        obj.stamp_duty = ApiClient.convertToType(data.stamp_duty, 'Number')
      }
      if (data.hasOwnProperty('amount_due')) {
        obj.amount_due = ApiClient.convertToType(data.amount_due, 'Number')
      }
      if (data.hasOwnProperty('is_enasarco_maximal_exceeded')) {
        obj.is_enasarco_maximal_exceeded = ApiClient.convertToType(data.is_enasarco_maximal_exceeded, 'Boolean')
      }
      if (data.hasOwnProperty('payments_sum')) {
        obj.payments_sum = ApiClient.convertToType(data.payments_sum, 'Number')
      }
      if (data.hasOwnProperty('vat_list')) {
        obj.vat_list = ApiClient.convertToType(data.vat_list, { String: VatItem })
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>IssuedDocumentTotals</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IssuedDocumentTotals</code>.
     */
  static validateJSON (data) {
    return true
  }
}

/**
 * Issued document total net amount
 * @member {Number} amount_net
 */
IssuedDocumentTotals.prototype.amount_net = undefined

/**
 * Issued document rivalsa amount
 * @member {Number} amount_rivalsa
 */
IssuedDocumentTotals.prototype.amount_rivalsa = undefined

/**
 * Issued document net amount with rivalsa
 * @member {Number} amount_net_with_rivalsa
 */
IssuedDocumentTotals.prototype.amount_net_with_rivalsa = undefined

/**
 * Issued document cassa amount
 * @member {Number} amount_cassa
 */
IssuedDocumentTotals.prototype.amount_cassa = undefined

/**
 * Issued document taxable amount
 * @member {Number} taxable_amount
 */
IssuedDocumentTotals.prototype.taxable_amount = undefined

/**
 * Issued document not taxable amount
 * @member {Number} not_taxable_amount
 */
IssuedDocumentTotals.prototype.not_taxable_amount = undefined

/**
 * Issued document total vat amount
 * @member {Number} amount_vat
 */
IssuedDocumentTotals.prototype.amount_vat = undefined

/**
 * Issued document total gross amount
 * @member {Number} amount_gross
 */
IssuedDocumentTotals.prototype.amount_gross = undefined

/**
 * Issued document Taxable withholding tax amount
 * @member {Number} taxable_amount_withholding_tax
 */
IssuedDocumentTotals.prototype.taxable_amount_withholding_tax = undefined

/**
 * Issued document withholding tax amount
 * @member {Number} amount_withholding_tax
 */
IssuedDocumentTotals.prototype.amount_withholding_tax = undefined

/**
 * Issued document other withholding tax taxable amount
 * @member {Number} taxable_amount_other_withholding_tax
 */
IssuedDocumentTotals.prototype.taxable_amount_other_withholding_tax = undefined

/**
 * Issued document other withholding tax amount
 * @member {Number} amount_other_withholding_tax
 */
IssuedDocumentTotals.prototype.amount_other_withholding_tax = undefined

/**
 * Issued document stamp duty value [0 if not present].
 * @member {Number} stamp_duty
 */
IssuedDocumentTotals.prototype.stamp_duty = undefined

/**
 * Issued document total amount due
 * @member {Number} amount_due
 */
IssuedDocumentTotals.prototype.amount_due = undefined

/**
 * Is enasarco maximal excedeed
 * @member {Boolean} is_enasarco_maximal_exceeded
 */
IssuedDocumentTotals.prototype.is_enasarco_maximal_exceeded = undefined

/**
 * Issued document payments sum
 * @member {Number} payments_sum
 */
IssuedDocumentTotals.prototype.payments_sum = undefined

/**
 * @member {Object.<String, module:model/VatItem>} vat_list
 */
IssuedDocumentTotals.prototype.vat_list = undefined

export default IssuedDocumentTotals
