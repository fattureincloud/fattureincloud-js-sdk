/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.15
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import VatType from './VatType';

/**
 * The Product model module.
 * @module model/Product
 * @version 2.0.12
 */
class Product {
    /**
     * Constructs a new <code>Product</code>.
     * @alias module:model/Product
     */
    constructor() { 
        
        Product.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Product} obj Optional instance to populate.
     * @return {module:model/Product} The populated <code>Product</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Product();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('net_price')) {
                obj['net_price'] = ApiClient.convertToType(data['net_price'], 'Number');
            }
            if (data.hasOwnProperty('gross_price')) {
                obj['gross_price'] = ApiClient.convertToType(data['gross_price'], 'Number');
            }
            if (data.hasOwnProperty('use_gross_price')) {
                obj['use_gross_price'] = ApiClient.convertToType(data['use_gross_price'], 'Boolean');
            }
            if (data.hasOwnProperty('default_vat')) {
                obj['default_vat'] = VatType.constructFromObject(data['default_vat']);
            }
            if (data.hasOwnProperty('net_cost')) {
                obj['net_cost'] = ApiClient.convertToType(data['net_cost'], 'Number');
            }
            if (data.hasOwnProperty('measure')) {
                obj['measure'] = ApiClient.convertToType(data['measure'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('in_stock')) {
                obj['in_stock'] = ApiClient.convertToType(data['in_stock'], 'Boolean');
            }
            if (data.hasOwnProperty('stock_initial')) {
                obj['stock_initial'] = ApiClient.convertToType(data['stock_initial'], 'Number');
            }
            if (data.hasOwnProperty('stock_current')) {
                obj['stock_current'] = ApiClient.convertToType(data['stock_current'], 'Number');
            }
            if (data.hasOwnProperty('average_cost')) {
                obj['average_cost'] = ApiClient.convertToType(data['average_cost'], 'Number');
            }
            if (data.hasOwnProperty('average_price')) {
                obj['average_price'] = ApiClient.convertToType(data['average_price'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique identifier.
 * @member {Number} id
 */
Product.prototype['id'] = undefined;

/**
 * Product name.
 * @member {String} name
 */
Product.prototype['name'] = undefined;

/**
 * Product code.
 * @member {String} code
 */
Product.prototype['code'] = undefined;

/**
 * Net sale price (used if use_gross_price is false, otherwise it's competed automatically).
 * @member {Number} net_price
 */
Product.prototype['net_price'] = undefined;

/**
 * Gross sale price (used if use_gross_price is false, otherwise it's competed automatically).
 * @member {Number} gross_price
 */
Product.prototype['gross_price'] = undefined;

/**
 * Determine which price to use for calculations.
 * @member {Boolean} use_gross_price
 */
Product.prototype['use_gross_price'] = undefined;

/**
 * @member {module:model/VatType} default_vat
 */
Product.prototype['default_vat'] = undefined;

/**
 * Net cost of the product (used for received documents).
 * @member {Number} net_cost
 */
Product.prototype['net_cost'] = undefined;

/**
 * Unit of measure.
 * @member {String} measure
 */
Product.prototype['measure'] = undefined;

/**
 * Product description.
 * @member {String} description
 */
Product.prototype['description'] = undefined;

/**
 * Product category.
 * @member {String} category
 */
Product.prototype['category'] = undefined;

/**
 * Extra notes.
 * @member {String} notes
 */
Product.prototype['notes'] = undefined;

/**
 * Determine if the product is in stock.
 * @member {Boolean} in_stock
 */
Product.prototype['in_stock'] = undefined;

/**
 * Product initial stock.
 * @member {Number} stock_initial
 */
Product.prototype['stock_initial'] = undefined;

/**
 * [Read Only] Product current stock.
 * @member {Number} stock_current
 */
Product.prototype['stock_current'] = undefined;

/**
 * Product average cost.
 * @member {Number} average_cost
 */
Product.prototype['average_cost'] = undefined;

/**
 * Product average price.
 * @member {Number} average_price
 */
Product.prototype['average_price'] = undefined;

/**
 * @member {String} created_at
 */
Product.prototype['created_at'] = undefined;

/**
 * @member {String} updated_at
 */
Product.prototype['updated_at'] = undefined;






export default Product;

