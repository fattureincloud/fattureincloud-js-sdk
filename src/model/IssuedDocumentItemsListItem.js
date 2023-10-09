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
import VatType from './VatType'

/**
 * The IssuedDocumentItemsListItem model module.
 * @module model/IssuedDocumentItemsListItem
 * @version 2.0.23
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
      if (data.hasOwnProperty('in_dn')) {
        obj.in_dn = ApiClient.convertToType(data.in_dn, 'Boolean')
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

  /**
     * Validates the JSON data with respect to <code>IssuedDocumentItemsListItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IssuedDocumentItemsListItem</code>.
     */
  static validateJSON (data) {
    // ensure the json data is a string
    if (data.code && !(typeof data.code === 'string' || data.code instanceof String)) {
      throw new Error('Expected the field `code` to be a primitive type in the JSON string but got ' + data.code)
    }
    // ensure the json data is a string
    if (data.name && !(typeof data.name === 'string' || data.name instanceof String)) {
      throw new Error('Expected the field `name` to be a primitive type in the JSON string but got ' + data.name)
    }
    // ensure the json data is a string
    if (data.category && !(typeof data.category === 'string' || data.category instanceof String)) {
      throw new Error('Expected the field `category` to be a primitive type in the JSON string but got ' + data.category)
    }
    // ensure the json data is a string
    if (data.description && !(typeof data.description === 'string' || data.description instanceof String)) {
      throw new Error('Expected the field `description` to be a primitive type in the JSON string but got ' + data.description)
    }
    // ensure the json data is a string
    if (data.measure && !(typeof data.measure === 'string' || data.measure instanceof String)) {
      throw new Error('Expected the field `measure` to be a primitive type in the JSON string but got ' + data.measure)
    }
    // validate the optional field `vat`
    if (data.vat) { // data not null
      VatType.validateJSON(data.vat)
    }

    return true
  }
}

/**
 * Issued document item id
 * @member {Number} id
 */
IssuedDocumentItemsListItem.prototype.id = undefined

/**
 * Issued document item product id
 * @member {Number} product_id
 */
IssuedDocumentItemsListItem.prototype.product_id = undefined

/**
 * Issued document item product code
 * @member {String} code
 */
IssuedDocumentItemsListItem.prototype.code = undefined

/**
 * Issued document item product name
 * @member {String} name
 */
IssuedDocumentItemsListItem.prototype.name = undefined

/**
 * Issued document item product category
 * @member {String} category
 */
IssuedDocumentItemsListItem.prototype.category = undefined

/**
 * Issued document product description
 * @member {String} description
 */
IssuedDocumentItemsListItem.prototype.description = undefined

/**
 * Issued document item quantity
 * @member {Number} qty
 */
IssuedDocumentItemsListItem.prototype.qty = undefined

/**
 * Issued document item measure
 * @member {String} measure
 */
IssuedDocumentItemsListItem.prototype.measure = undefined

/**
 * Issued document item net price
 * @member {Number} net_price
 */
IssuedDocumentItemsListItem.prototype.net_price = undefined

/**
 * Issued document item gross price
 * @member {Number} gross_price
 */
IssuedDocumentItemsListItem.prototype.gross_price = undefined

/**
 * @member {module:model/VatType} vat
 */
IssuedDocumentItemsListItem.prototype.vat = undefined

/**
 * Issued document item is not taxable
 * @member {Boolean} not_taxable
 */
IssuedDocumentItemsListItem.prototype.not_taxable = undefined

/**
 * Issued document item apply withholding taxes, rivalsa and cassa
 * @member {Boolean} apply_withholding_taxes
 */
IssuedDocumentItemsListItem.prototype.apply_withholding_taxes = undefined

/**
 * Issued document item discount percentual value
 * @member {Number} discount
 */
IssuedDocumentItemsListItem.prototype.discount = undefined

/**
 * Issued document item highlight discount
 * @member {Boolean} discount_highlight
 */
IssuedDocumentItemsListItem.prototype.discount_highlight = undefined

/**
 * Issued document item add in delivery note
 * @member {Boolean} in_dn
 */
IssuedDocumentItemsListItem.prototype.in_dn = undefined

/**
 * Issued document item move stock
 * @member {Boolean} stock
 */
IssuedDocumentItemsListItem.prototype.stock = undefined

/**
 * Issued document advanced raw attributes for e-invoices
 * @member {Object} ei_raw
 */
IssuedDocumentItemsListItem.prototype.ei_raw = undefined

export default IssuedDocumentItemsListItem
