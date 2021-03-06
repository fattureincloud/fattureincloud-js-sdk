/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.19
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import VatType from './VatType'

/**
 * The IssuedDocumentItemsListItem model module.
 * @module model/IssuedDocumentItemsListItem
 * @version 2.0.15
 */
class IssuedDocumentItemsListItem {
  /**
     * Constructs a new <code>IssuedDocumentItemsListItem</code>.
     * @alias module:model/IssuedDocumentItemsListItem
     */
  constructor () {
    IssuedDocumentItemsListItem.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>IssuedDocumentItemsListItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuedDocumentItemsListItem} obj Optional instance to populate.
     * @return {module:model/IssuedDocumentItemsListItem} The populated <code>IssuedDocumentItemsListItem</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new IssuedDocumentItemsListItem()

      if (data.hasOwnProperty('id')) {
        obj.id = ApiClient.convertToType(data.id, 'Number')
      }
      if (data.hasOwnProperty('product_id')) {
        obj.product_id = ApiClient.convertToType(data.product_id, 'Number')
      }
      if (data.hasOwnProperty('code')) {
        obj.code = ApiClient.convertToType(data.code, 'String')
      }
      if (data.hasOwnProperty('name')) {
        obj.name = ApiClient.convertToType(data.name, 'String')
      }
      if (data.hasOwnProperty('category')) {
        obj.category = ApiClient.convertToType(data.category, 'String')
      }
      if (data.hasOwnProperty('description')) {
        obj.description = ApiClient.convertToType(data.description, 'String')
      }
      if (data.hasOwnProperty('qty')) {
        obj.qty = ApiClient.convertToType(data.qty, 'Number')
      }
      if (data.hasOwnProperty('measure')) {
        obj.measure = ApiClient.convertToType(data.measure, 'String')
      }
      if (data.hasOwnProperty('net_price')) {
        obj.net_price = ApiClient.convertToType(data.net_price, 'Number')
      }
      if (data.hasOwnProperty('gross_price')) {
        obj.gross_price = ApiClient.convertToType(data.gross_price, 'Number')
      }
      if (data.hasOwnProperty('vat')) {
        obj.vat = VatType.constructFromObject(data.vat)
      }
      if (data.hasOwnProperty('not_taxable')) {
        obj.not_taxable = ApiClient.convertToType(data.not_taxable, 'Boolean')
      }
      if (data.hasOwnProperty('apply_withholding_taxes')) {
        obj.apply_withholding_taxes = ApiClient.convertToType(data.apply_withholding_taxes, 'Boolean')
      }
      if (data.hasOwnProperty('discount')) {
        obj.discount = ApiClient.convertToType(data.discount, 'Number')
      }
      if (data.hasOwnProperty('discount_highlight')) {
        obj.discount_highlight = ApiClient.convertToType(data.discount_highlight, 'Boolean')
      }
      if (data.hasOwnProperty('in_ddt')) {
        obj.in_ddt = ApiClient.convertToType(data.in_ddt, 'Boolean')
      }
      if (data.hasOwnProperty('stock')) {
        obj.stock = ApiClient.convertToType(data.stock, 'Boolean')
      }
      if (data.hasOwnProperty('ei_raw')) {
        obj.ei_raw = ApiClient.convertToType(data.ei_raw, Object)
      }
    }
    return obj
  }
}

/**
 * Unique identifier.
 * @member {Number} id
 */
IssuedDocumentItemsListItem.prototype.id = undefined

/**
 * Unique identifier of the product.
 * @member {Number} product_id
 */
IssuedDocumentItemsListItem.prototype.product_id = undefined

/**
 * Product code.
 * @member {String} code
 */
IssuedDocumentItemsListItem.prototype.code = undefined

/**
 * Product name.
 * @member {String} name
 */
IssuedDocumentItemsListItem.prototype.name = undefined

/**
 * Product category
 * @member {String} category
 */
IssuedDocumentItemsListItem.prototype.category = undefined

/**
 * Product description.
 * @member {String} description
 */
IssuedDocumentItemsListItem.prototype.description = undefined

/**
 * Items quantity,
 * @member {Number} qty
 */
IssuedDocumentItemsListItem.prototype.qty = undefined

/**
 * Item measure.
 * @member {String} measure
 */
IssuedDocumentItemsListItem.prototype.measure = undefined

/**
 * Net price.
 * @member {Number} net_price
 */
IssuedDocumentItemsListItem.prototype.net_price = undefined

/**
 * Gross price.
 * @member {Number} gross_price
 */
IssuedDocumentItemsListItem.prototype.gross_price = undefined

/**
 * @member {module:model/VatType} vat
 */
IssuedDocumentItemsListItem.prototype.vat = undefined

/**
 * @member {Boolean} not_taxable
 */
IssuedDocumentItemsListItem.prototype.not_taxable = undefined

/**
 * Apply withholding taxes, rivalsa and cassa.
 * @member {Boolean} apply_withholding_taxes
 */
IssuedDocumentItemsListItem.prototype.apply_withholding_taxes = undefined

/**
 * Discount percentual value.
 * @member {Number} discount
 */
IssuedDocumentItemsListItem.prototype.discount = undefined

/**
 * @member {Boolean} discount_highlight
 */
IssuedDocumentItemsListItem.prototype.discount_highlight = undefined

/**
 * @member {Boolean} in_ddt
 */
IssuedDocumentItemsListItem.prototype.in_ddt = undefined

/**
 * @member {Boolean} stock
 */
IssuedDocumentItemsListItem.prototype.stock = undefined

/**
 * Advanced raw attributes for e-invoices.
 * @member {Object} ei_raw
 */
IssuedDocumentItemsListItem.prototype.ei_raw = undefined

export default IssuedDocumentItemsListItem
