/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.8
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import PaymentAccount from './PaymentAccount';
import VatType from './VatType';

/**
 * The ReceiptPreCreateInfo model module.
 * @module model/ReceiptPreCreateInfo
 * @version 2.0.6
 */
class ReceiptPreCreateInfo {
    /**
     * Constructs a new <code>ReceiptPreCreateInfo</code>.
     * 
     * @alias module:model/ReceiptPreCreateInfo
     * @param numerations {Object} Next number by year, receipt type and numeration name.
     * @param numerationsList {Array.<String>} List of series used in the past.
     * @param rcCentersList {Array.<String>} List of revenue centers used in the past.
     * @param paymentAccountsList {Array.<module:model/PaymentAccount>} User payment accounts list.
     * @param categoriesList {Array.<String>} List of categories used in the past.
     * @param vatTypesList {Array.<module:model/VatType>} List of user vat types with the default 22%, 10%, 4% and 0% vats.
     */
    constructor(numerations, numerationsList, rcCentersList, paymentAccountsList, categoriesList, vatTypesList) { 
        
        ReceiptPreCreateInfo.initialize(this, numerations, numerationsList, rcCentersList, paymentAccountsList, categoriesList, vatTypesList);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, numerations, numerationsList, rcCentersList, paymentAccountsList, categoriesList, vatTypesList) { 
        obj['numerations'] = numerations;
        obj['numerations_list'] = numerationsList;
        obj['rc_centers_list'] = rcCentersList;
        obj['payment_accounts_list'] = paymentAccountsList;
        obj['categories_list'] = categoriesList;
        obj['vat_types_list'] = vatTypesList;
    }

    /**
     * Constructs a <code>ReceiptPreCreateInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReceiptPreCreateInfo} obj Optional instance to populate.
     * @return {module:model/ReceiptPreCreateInfo} The populated <code>ReceiptPreCreateInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReceiptPreCreateInfo();

            if (data.hasOwnProperty('numerations')) {
                obj['numerations'] = ApiClient.convertToType(data['numerations'], Object);
            }
            if (data.hasOwnProperty('numerations_list')) {
                obj['numerations_list'] = ApiClient.convertToType(data['numerations_list'], ['String']);
            }
            if (data.hasOwnProperty('rc_centers_list')) {
                obj['rc_centers_list'] = ApiClient.convertToType(data['rc_centers_list'], ['String']);
            }
            if (data.hasOwnProperty('payment_accounts_list')) {
                obj['payment_accounts_list'] = ApiClient.convertToType(data['payment_accounts_list'], [PaymentAccount]);
            }
            if (data.hasOwnProperty('categories_list')) {
                obj['categories_list'] = ApiClient.convertToType(data['categories_list'], ['String']);
            }
            if (data.hasOwnProperty('vat_types_list')) {
                obj['vat_types_list'] = ApiClient.convertToType(data['vat_types_list'], [VatType]);
            }
        }
        return obj;
    }


}

/**
 * Next number by year, receipt type and numeration name.
 * @member {Object} numerations
 */
ReceiptPreCreateInfo.prototype['numerations'] = undefined;

/**
 * List of series used in the past.
 * @member {Array.<String>} numerations_list
 */
ReceiptPreCreateInfo.prototype['numerations_list'] = undefined;

/**
 * List of revenue centers used in the past.
 * @member {Array.<String>} rc_centers_list
 */
ReceiptPreCreateInfo.prototype['rc_centers_list'] = undefined;

/**
 * User payment accounts list.
 * @member {Array.<module:model/PaymentAccount>} payment_accounts_list
 */
ReceiptPreCreateInfo.prototype['payment_accounts_list'] = undefined;

/**
 * List of categories used in the past.
 * @member {Array.<String>} categories_list
 */
ReceiptPreCreateInfo.prototype['categories_list'] = undefined;

/**
 * List of user vat types with the default 22%, 10%, 4% and 0% vats.
 * @member {Array.<module:model/VatType>} vat_types_list
 */
ReceiptPreCreateInfo.prototype['vat_types_list'] = undefined;






export default ReceiptPreCreateInfo;

