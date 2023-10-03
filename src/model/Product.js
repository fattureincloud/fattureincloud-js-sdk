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
 * The Product model module.
 * @module model/Product
 * @version 2.0.23
 */
class Product {
  /**
     * Constructs a new <code>Product</code>.
     * @alias module:model/Product
     */
  constructor () {
    Product.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Product} obj Optional instance to populate.
     * @return {module:model/Product} The populated <code>Product</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new Product()

      if (data.hasOwnProperty('id')) {
        obj.id = ApiClient.convertToType(data.id, 'Number')
      }
      if (data.hasOwnProperty('name')) {
        obj.name = ApiClient.convertToType(data.name, 'String')
      }
      if (data.hasOwnProperty('code')) {
        obj.code = ApiClient.convertToType(data.code, 'String')
      }
      if (data.hasOwnProperty('net_price')) {
        obj.net_price = ApiClient.convertToType(data.net_price, 'Number')
      }
      if (data.hasOwnProperty('gross_price')) {
        obj.gross_price = ApiClient.convertToType(data.gross_price, 'Number')
      }
      if (data.hasOwnProperty('use_gross_price')) {
        obj.use_gross_price = ApiClient.convertToType(data.use_gross_price, 'Boolean')
      }
      if (data.hasOwnProperty('default_vat')) {
        obj.default_vat = VatType.constructFromObject(data.default_vat)
      }
      if (data.hasOwnProperty('net_cost')) {
        obj.net_cost = ApiClient.convertToType(data.net_cost, 'Number')
      }
      if (data.hasOwnProperty('measure')) {
        obj.measure = ApiClient.convertToType(data.measure, 'String')
      }
      if (data.hasOwnProperty('description')) {
        obj.description = ApiClient.convertToType(data.description, 'String')
      }
      if (data.hasOwnProperty('category')) {
        obj.category = ApiClient.convertToType(data.category, 'String')
      }
      if (data.hasOwnProperty('notes')) {
        obj.notes = ApiClient.convertToType(data.notes, 'String')
      }
      if (data.hasOwnProperty('in_stock')) {
        obj.in_stock = ApiClient.convertToType(data.in_stock, 'Boolean')
      }
      if (data.hasOwnProperty('stock_initial')) {
        obj.stock_initial = ApiClient.convertToType(data.stock_initial, 'Number')
      }
      if (data.hasOwnProperty('stock_current')) {
        obj.stock_current = ApiClient.convertToType(data.stock_current, 'Number')
      }
      if (data.hasOwnProperty('average_cost')) {
        obj.average_cost = ApiClient.convertToType(data.average_cost, 'Number')
      }
      if (data.hasOwnProperty('average_price')) {
        obj.average_price = ApiClient.convertToType(data.average_price, 'Number')
      }
      if (data.hasOwnProperty('created_at')) {
        obj.created_at = ApiClient.convertToType(data.created_at, 'String')
      }
      if (data.hasOwnProperty('updated_at')) {
        obj.updated_at = ApiClient.convertToType(data.updated_at, 'String')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>Product</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Product</code>.
     */
  static validateJSON (data) {
    // ensure the json data is a string
    if (data.name && !(typeof data.name === 'string' || data.name instanceof String)) {
      throw new Error('Expected the field `name` to be a primitive type in the JSON string but got ' + data.name)
    }
    // ensure the json data is a string
    if (data.code && !(typeof data.code === 'string' || data.code instanceof String)) {
      throw new Error('Expected the field `code` to be a primitive type in the JSON string but got ' + data.code)
    }
    // validate the optional field `default_vat`
    if (data.default_vat) { // data not null
      VatType.validateJSON(data.default_vat)
    }
    // ensure the json data is a string
    if (data.measure && !(typeof data.measure === 'string' || data.measure instanceof String)) {
      throw new Error('Expected the field `measure` to be a primitive type in the JSON string but got ' + data.measure)
    }
    // ensure the json data is a string
    if (data.description && !(typeof data.description === 'string' || data.description instanceof String)) {
      throw new Error('Expected the field `description` to be a primitive type in the JSON string but got ' + data.description)
    }
    // ensure the json data is a string
    if (data.category && !(typeof data.category === 'string' || data.category instanceof String)) {
      throw new Error('Expected the field `category` to be a primitive type in the JSON string but got ' + data.category)
    }
    // ensure the json data is a string
    if (data.notes && !(typeof data.notes === 'string' || data.notes instanceof String)) {
      throw new Error('Expected the field `notes` to be a primitive type in the JSON string but got ' + data.notes)
    }
    // ensure the json data is a string
    if (data.created_at && !(typeof data.created_at === 'string' || data.created_at instanceof String)) {
      throw new Error('Expected the field `created_at` to be a primitive type in the JSON string but got ' + data.created_at)
    }
    // ensure the json data is a string
    if (data.updated_at && !(typeof data.updated_at === 'string' || data.updated_at instanceof String)) {
      throw new Error('Expected the field `updated_at` to be a primitive type in the JSON string but got ' + data.updated_at)
    }

    return true
  }
}

/**
 * Product id
 * @member {Number} id
 */
Product.prototype.id = undefined

/**
 * Product name
 * @member {String} name
 */
Product.prototype.name = undefined

/**
 * Product code
 * @member {String} code
 */
Product.prototype.code = undefined

/**
 * Product net price
 * @member {Number} net_price
 */
Product.prototype.net_price = undefined

/**
 * Product gross price
 * @member {Number} gross_price
 */
Product.prototype.gross_price = undefined

/**
 * Product uses gross prices
 * @member {Boolean} use_gross_price
 */
Product.prototype.use_gross_price = undefined

/**
 * @member {module:model/VatType} default_vat
 */
Product.prototype.default_vat = undefined

/**
 * Product net cost
 * @member {Number} net_cost
 */
Product.prototype.net_cost = undefined

/**
 * Product measure
 * @member {String} measure
 */
Product.prototype.measure = undefined

/**
 * Product description
 * @member {String} description
 */
Product.prototype.description = undefined

/**
 * Product category
 * @member {String} category
 */
Product.prototype.category = undefined

/**
 * Product extra notes
 * @member {String} notes
 */
Product.prototype.notes = undefined

/**
 * Product has stock
 * @member {Boolean} in_stock
 */
Product.prototype.in_stock = undefined

/**
 * Product initial stock
 * @member {Number} stock_initial
 */
Product.prototype.stock_initial = undefined

/**
 * [Read Only] Product current stock
 * @member {Number} stock_current
 */
Product.prototype.stock_current = undefined

/**
 * Product average cost
 * @member {Number} average_cost
 */
Product.prototype.average_cost = undefined

/**
 * Product average price
 * @member {Number} average_price
 */
Product.prototype.average_price = undefined

/**
 * Product creation date
 * @member {String} created_at
 */
Product.prototype.created_at = undefined

/**
 * Product last update date
 * @member {String} updated_at
 */
Product.prototype.updated_at = undefined

export default Product
