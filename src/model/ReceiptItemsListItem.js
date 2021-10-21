/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol. For more information, please visit https://www.fattureincloud.it.
 *
 * The version of the OpenAPI document: 2.0.2
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
 * The ReceiptItemsListItem model module.
 * @module model/ReceiptItemsListItem
 * @version 2.0.1
 */
class ReceiptItemsListItem {
    /**
     * Constructs a new <code>ReceiptItemsListItem</code>.
     * @alias module:model/ReceiptItemsListItem
     */
    constructor() { 
        
        ReceiptItemsListItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReceiptItemsListItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReceiptItemsListItem} obj Optional instance to populate.
     * @return {module:model/ReceiptItemsListItem} The populated <code>ReceiptItemsListItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReceiptItemsListItem();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('amount_net')) {
                obj['amount_net'] = ApiClient.convertToType(data['amount_net'], 'Number');
            }
            if (data.hasOwnProperty('amount_gross')) {
                obj['amount_gross'] = ApiClient.convertToType(data['amount_gross'], 'Number');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('vat')) {
                obj['vat'] = VatType.constructFromObject(data['vat']);
            }
        }
        return obj;
    }


}

/**
 * Item unique identifier.
 * @member {Number} id
 */
ReceiptItemsListItem.prototype['id'] = undefined;

/**
 * Item total net amount.
 * @member {Number} amount_net
 */
ReceiptItemsListItem.prototype['amount_net'] = undefined;

/**
 * Item total gross amount.
 * @member {Number} amount_gross
 */
ReceiptItemsListItem.prototype['amount_gross'] = undefined;

/**
 * Item category.
 * @member {String} category
 */
ReceiptItemsListItem.prototype['category'] = undefined;

/**
 * @member {module:model/VatType} vat
 */
ReceiptItemsListItem.prototype['vat'] = undefined;






export default ReceiptItemsListItem;

