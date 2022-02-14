/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.11
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import PaymentAccount from './PaymentAccount';
import ReceiptItemsListItem from './ReceiptItemsListItem';
import ReceiptType from './ReceiptType';

/**
 * The Receipt model module.
 * @module model/Receipt
 * @version 5.0.0
 */
class Receipt {
    /**
     * Constructs a new <code>Receipt</code>.
     * 
     * @alias module:model/Receipt
     */
    constructor() { 
        
        Receipt.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Receipt</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Receipt} obj Optional instance to populate.
     * @return {module:model/Receipt} The populated <code>Receipt</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Receipt();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('numeration')) {
                obj['numeration'] = ApiClient.convertToType(data['numeration'], 'String');
            }
            if (data.hasOwnProperty('amount_net')) {
                obj['amount_net'] = ApiClient.convertToType(data['amount_net'], 'Number');
            }
            if (data.hasOwnProperty('amount_vat')) {
                obj['amount_vat'] = ApiClient.convertToType(data['amount_vat'], 'Number');
            }
            if (data.hasOwnProperty('amount_gross')) {
                obj['amount_gross'] = ApiClient.convertToType(data['amount_gross'], 'Number');
            }
            if (data.hasOwnProperty('use_gross_prices')) {
                obj['use_gross_prices'] = ApiClient.convertToType(data['use_gross_prices'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ReceiptType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('rc_center')) {
                obj['rc_center'] = ApiClient.convertToType(data['rc_center'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('payment_account')) {
                obj['payment_account'] = PaymentAccount.constructFromObject(data['payment_account']);
            }
            if (data.hasOwnProperty('items_list')) {
                obj['items_list'] = ApiClient.convertToType(data['items_list'], [ReceiptItemsListItem]);
            }
        }
        return obj;
    }


}

/**
 * Receipt unique identifier.
 * @member {Number} id
 */
Receipt.prototype['id'] = undefined;

/**
 * Receipt date.
 * @member {Date} date
 */
Receipt.prototype['date'] = undefined;

/**
 * Receipt number.
 * @member {Number} number
 */
Receipt.prototype['number'] = undefined;

/**
 * If it's null or empty string use the default numeration.
 * @member {String} numeration
 */
Receipt.prototype['numeration'] = undefined;

/**
 * Total net amount.
 * @member {Number} amount_net
 */
Receipt.prototype['amount_net'] = undefined;

/**
 * Total vat amount.
 * @member {Number} amount_vat
 */
Receipt.prototype['amount_vat'] = undefined;

/**
 * Total gross amount.
 * @member {Number} amount_gross
 */
Receipt.prototype['amount_gross'] = undefined;

/**
 * @member {Boolean} use_gross_prices
 */
Receipt.prototype['use_gross_prices'] = undefined;

/**
 * @member {module:model/ReceiptType} type
 */
Receipt.prototype['type'] = undefined;

/**
 * Receipt description.
 * @member {String} description
 */
Receipt.prototype['description'] = undefined;

/**
 * Revenue center.
 * @member {String} rc_center
 */
Receipt.prototype['rc_center'] = undefined;

/**
 * @member {String} created_at
 */
Receipt.prototype['created_at'] = undefined;

/**
 * @member {String} updated_at
 */
Receipt.prototype['updated_at'] = undefined;

/**
 * @member {module:model/PaymentAccount} payment_account
 */
Receipt.prototype['payment_account'] = undefined;

/**
 * @member {Array.<module:model/ReceiptItemsListItem>} items_list
 */
Receipt.prototype['items_list'] = undefined;






export default Receipt;

