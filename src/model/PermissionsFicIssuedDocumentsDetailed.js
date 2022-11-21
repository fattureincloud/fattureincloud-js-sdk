/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.22
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import PermissionLevel from './PermissionLevel'

/**
 * The PermissionsFicIssuedDocumentsDetailed model module.
 * @module model/PermissionsFicIssuedDocumentsDetailed
 * @version 2.0.17
 */
class PermissionsFicIssuedDocumentsDetailed {
  /**
     * Constructs a new <code>PermissionsFicIssuedDocumentsDetailed</code>.
     * @alias module:model/PermissionsFicIssuedDocumentsDetailed
     */
  constructor () {
    PermissionsFicIssuedDocumentsDetailed.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>PermissionsFicIssuedDocumentsDetailed</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermissionsFicIssuedDocumentsDetailed} obj Optional instance to populate.
     * @return {module:model/PermissionsFicIssuedDocumentsDetailed} The populated <code>PermissionsFicIssuedDocumentsDetailed</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new PermissionsFicIssuedDocumentsDetailed()

      if (data.hasOwnProperty('quotes')) {
        obj.quotes = PermissionLevel.constructFromObject(data.quotes)
      }
      if (data.hasOwnProperty('proformas')) {
        obj.proformas = PermissionLevel.constructFromObject(data.proformas)
      }
      if (data.hasOwnProperty('invoices')) {
        obj.invoices = PermissionLevel.constructFromObject(data.invoices)
      }
      if (data.hasOwnProperty('receipts')) {
        obj.receipts = PermissionLevel.constructFromObject(data.receipts)
      }
      if (data.hasOwnProperty('delivery_notes')) {
        obj.delivery_notes = PermissionLevel.constructFromObject(data.delivery_notes)
      }
      if (data.hasOwnProperty('credit_notes')) {
        obj.credit_notes = PermissionLevel.constructFromObject(data.credit_notes)
      }
      if (data.hasOwnProperty('orders')) {
        obj.orders = PermissionLevel.constructFromObject(data.orders)
      }
      if (data.hasOwnProperty('work_reports')) {
        obj.work_reports = PermissionLevel.constructFromObject(data.work_reports)
      }
      if (data.hasOwnProperty('supplier_orders')) {
        obj.supplier_orders = PermissionLevel.constructFromObject(data.supplier_orders)
      }
      if (data.hasOwnProperty('self_invoices')) {
        obj.self_invoices = PermissionLevel.constructFromObject(data.self_invoices)
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>PermissionsFicIssuedDocumentsDetailed</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PermissionsFicIssuedDocumentsDetailed</code>.
     */
  static validateJSON (data) {
    return true
  }
}

/**
 * @member {module:model/PermissionLevel} quotes
 */
PermissionsFicIssuedDocumentsDetailed.prototype.quotes = undefined

/**
 * @member {module:model/PermissionLevel} proformas
 */
PermissionsFicIssuedDocumentsDetailed.prototype.proformas = undefined

/**
 * @member {module:model/PermissionLevel} invoices
 */
PermissionsFicIssuedDocumentsDetailed.prototype.invoices = undefined

/**
 * @member {module:model/PermissionLevel} receipts
 */
PermissionsFicIssuedDocumentsDetailed.prototype.receipts = undefined

/**
 * @member {module:model/PermissionLevel} delivery_notes
 */
PermissionsFicIssuedDocumentsDetailed.prototype.delivery_notes = undefined

/**
 * @member {module:model/PermissionLevel} credit_notes
 */
PermissionsFicIssuedDocumentsDetailed.prototype.credit_notes = undefined

/**
 * @member {module:model/PermissionLevel} orders
 */
PermissionsFicIssuedDocumentsDetailed.prototype.orders = undefined

/**
 * @member {module:model/PermissionLevel} work_reports
 */
PermissionsFicIssuedDocumentsDetailed.prototype.work_reports = undefined

/**
 * @member {module:model/PermissionLevel} supplier_orders
 */
PermissionsFicIssuedDocumentsDetailed.prototype.supplier_orders = undefined

/**
 * @member {module:model/PermissionLevel} self_invoices
 */
PermissionsFicIssuedDocumentsDetailed.prototype.self_invoices = undefined

export default PermissionsFicIssuedDocumentsDetailed
