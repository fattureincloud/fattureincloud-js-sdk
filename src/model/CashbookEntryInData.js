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
import PaymentAccount from './PaymentAccount';

/**
 * The CashbookEntryInData model module.
 * @module model/CashbookEntryInData
 * @version 2.0.1
 */
class CashbookEntryInData {
    /**
     * Constructs a new <code>CashbookEntryInData</code>.
     * @alias module:model/CashbookEntryInData
     */
    constructor() { 
        
        CashbookEntryInData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CashbookEntryInData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CashbookEntryInData} obj Optional instance to populate.
     * @return {module:model/CashbookEntryInData} The populated <code>CashbookEntryInData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CashbookEntryInData();

            if (data.hasOwnProperty('amount_in')) {
                obj['amount_in'] = ApiClient.convertToType(data['amount_in'], 'Number');
            }
            if (data.hasOwnProperty('payment_account_in')) {
                obj['payment_account_in'] = PaymentAccount.constructFromObject(data['payment_account_in']);
            }
        }
        return obj;
    }


}

/**
 * Total amount in.
 * @member {Number} amount_in
 */
CashbookEntryInData.prototype['amount_in'] = undefined;

/**
 * @member {module:model/PaymentAccount} payment_account_in
 */
CashbookEntryInData.prototype['payment_account_in'] = undefined;






export default CashbookEntryInData;

