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
 * The ReceivedDocumentItemsListItem model module.
 * @module model/ReceivedDocumentItemsListItem
 * @version 2.0.15
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
}

/**
 * Unique identifier.
 * @member {Number} id
 */
ReceivedDocumentItemsListItem.prototype.id = undefined

/**
 * Unique identifier of the product
 * @member {Number} product_id
 */
ReceivedDocumentItemsListItem.prototype.product_id = undefined

/**
 * Product code.
 * @member {String} code
 */
ReceivedDocumentItemsListItem.prototype.code = undefined

/**
 * Product name.
 * @member {String} name
 */
ReceivedDocumentItemsListItem.prototype.name = undefined

/**
 * Product measure.
 * @member {String} measure
 */
ReceivedDocumentItemsListItem.prototype.measure = undefined

/**
 * Product net price.
 * @member {Number} net_price
 */
ReceivedDocumentItemsListItem.prototype.net_price = undefined

/**
 * Product category.
 * @member {String} category
 */
ReceivedDocumentItemsListItem.prototype.category = undefined

/**
 * Product quantity.
 * @member {Number} qty
 */
ReceivedDocumentItemsListItem.prototype.qty = undefined

/**
 * @member {module:model/VatType} vat
 */
ReceivedDocumentItemsListItem.prototype.vat = undefined

/**
 * Number of items in stock
 * @member {Number} stock
 */
ReceivedDocumentItemsListItem.prototype.stock = undefined

export default ReceivedDocumentItemsListItem
