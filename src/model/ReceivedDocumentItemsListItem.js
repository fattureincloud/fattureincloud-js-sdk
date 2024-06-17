/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.1.0
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
 * The ReceivedDocumentItemsListItem model module.
 * @module model/ReceivedDocumentItemsListItem
 * @version 2.1.0
 */
class ReceivedDocumentItemsListItem {
  /**
     * Constructs a new <code>ReceivedDocumentItemsListItem</code>.
     * @alias module:model/ReceivedDocumentItemsListItem
     */
  constructor () {
    ReceivedDocumentItemsListItem.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>ReceivedDocumentItemsListItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReceivedDocumentItemsListItem} obj Optional instance to populate.
     * @return {module:model/ReceivedDocumentItemsListItem} The populated <code>ReceivedDocumentItemsListItem</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new ReceivedDocumentItemsListItem()

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
      if (data.hasOwnProperty('measure')) {
        obj.measure = ApiClient.convertToType(data.measure, 'String')
      }
      if (data.hasOwnProperty('net_price')) {
        obj.net_price = ApiClient.convertToType(data.net_price, 'Number')
      }
      if (data.hasOwnProperty('category')) {
        obj.category = ApiClient.convertToType(data.category, 'String')
      }
      if (data.hasOwnProperty('qty')) {
        obj.qty = ApiClient.convertToType(data.qty, 'Number')
      }
      if (data.hasOwnProperty('vat')) {
        obj.vat = VatType.constructFromObject(data.vat)
      }
      if (data.hasOwnProperty('stock')) {
        obj.stock = ApiClient.convertToType(data.stock, 'Number')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>ReceivedDocumentItemsListItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReceivedDocumentItemsListItem</code>.
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
    if (data.measure && !(typeof data.measure === 'string' || data.measure instanceof String)) {
      throw new Error('Expected the field `measure` to be a primitive type in the JSON string but got ' + data.measure)
    }
    // ensure the json data is a string
    if (data.category && !(typeof data.category === 'string' || data.category instanceof String)) {
      throw new Error('Expected the field `category` to be a primitive type in the JSON string but got ' + data.category)
    }
    // validate the optional field `vat`
    if (data.vat) { // data not null
      VatType.validateJSON(data.vat)
    }

    return true
  }
}

/**
 * Received document item id
 * @member {Number} id
 */
ReceivedDocumentItemsListItem.prototype.id = undefined

/**
 * Received document product id
 * @member {Number} product_id
 */
ReceivedDocumentItemsListItem.prototype.product_id = undefined

/**
 * Received document item product code
 * @member {String} code
 */
ReceivedDocumentItemsListItem.prototype.code = undefined

/**
 * Received document item product name
 * @member {String} name
 */
ReceivedDocumentItemsListItem.prototype.name = undefined

/**
 * Received document item measure
 * @member {String} measure
 */
ReceivedDocumentItemsListItem.prototype.measure = undefined

/**
 * Received document item product net price
 * @member {Number} net_price
 */
ReceivedDocumentItemsListItem.prototype.net_price = undefined

/**
 * Received document item product category
 * @member {String} category
 */
ReceivedDocumentItemsListItem.prototype.category = undefined

/**
 * Received document item quantity
 * @member {Number} qty
 */
ReceivedDocumentItemsListItem.prototype.qty = undefined

/**
 * @member {module:model/VatType} vat
 */
ReceivedDocumentItemsListItem.prototype.vat = undefined

/**
 * Received document item product number of items in stock
 * @member {Number} stock
 */
ReceivedDocumentItemsListItem.prototype.stock = undefined

export default ReceivedDocumentItemsListItem
