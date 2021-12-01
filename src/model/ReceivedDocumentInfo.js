/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.6
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Currency from './Currency';
import PaymentAccount from './PaymentAccount';
import ReceivedDocumentInfoDefaultValues from './ReceivedDocumentInfoDefaultValues';
import ReceivedDocumentInfoItemsDefaultValues from './ReceivedDocumentInfoItemsDefaultValues';
import VatType from './VatType';

/**
 * The ReceivedDocumentInfo model module.
 * @module model/ReceivedDocumentInfo
 * @version 2.0.4
 */
class ReceivedDocumentInfo {
    /**
     * Constructs a new <code>ReceivedDocumentInfo</code>.
     * 
     * @alias module:model/ReceivedDocumentInfo
     */
    constructor() { 
        
        ReceivedDocumentInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReceivedDocumentInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReceivedDocumentInfo} obj Optional instance to populate.
     * @return {module:model/ReceivedDocumentInfo} The populated <code>ReceivedDocumentInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReceivedDocumentInfo();

            if (data.hasOwnProperty('default_values')) {
                obj['default_values'] = ReceivedDocumentInfoDefaultValues.constructFromObject(data['default_values']);
            }
            if (data.hasOwnProperty('items_default_values')) {
                obj['items_default_values'] = ReceivedDocumentInfoItemsDefaultValues.constructFromObject(data['items_default_values']);
            }
            if (data.hasOwnProperty('countries_list')) {
                obj['countries_list'] = ApiClient.convertToType(data['countries_list'], ['String']);
            }
            if (data.hasOwnProperty('currencies_list')) {
                obj['currencies_list'] = ApiClient.convertToType(data['currencies_list'], [Currency]);
            }
            if (data.hasOwnProperty('categories_list')) {
                obj['categories_list'] = ApiClient.convertToType(data['categories_list'], ['String']);
            }
            if (data.hasOwnProperty('payment_accounts_list')) {
                obj['payment_accounts_list'] = ApiClient.convertToType(data['payment_accounts_list'], [PaymentAccount]);
            }
            if (data.hasOwnProperty('vat_types_list')) {
                obj['vat_types_list'] = ApiClient.convertToType(data['vat_types_list'], [VatType]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ReceivedDocumentInfoDefaultValues} default_values
 */
ReceivedDocumentInfo.prototype['default_values'] = undefined;

/**
 * @member {module:model/ReceivedDocumentInfoItemsDefaultValues} items_default_values
 */
ReceivedDocumentInfo.prototype['items_default_values'] = undefined;

/**
 * @member {Array.<String>} countries_list
 */
ReceivedDocumentInfo.prototype['countries_list'] = undefined;

/**
 * @member {Array.<module:model/Currency>} currencies_list
 */
ReceivedDocumentInfo.prototype['currencies_list'] = undefined;

/**
 * @member {Array.<String>} categories_list
 */
ReceivedDocumentInfo.prototype['categories_list'] = undefined;

/**
 * @member {Array.<module:model/PaymentAccount>} payment_accounts_list
 */
ReceivedDocumentInfo.prototype['payment_accounts_list'] = undefined;

/**
 * @member {Array.<module:model/VatType>} vat_types_list
 */
ReceivedDocumentInfo.prototype['vat_types_list'] = undefined;






export default ReceivedDocumentInfo;

