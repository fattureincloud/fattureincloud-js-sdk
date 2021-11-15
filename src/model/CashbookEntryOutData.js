/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.3
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
 * The CashbookEntryOutData model module.
 * @module model/CashbookEntryOutData
 * @version 2.0.3
 */
class CashbookEntryOutData {
    /**
     * Constructs a new <code>CashbookEntryOutData</code>.
     * @alias module:model/CashbookEntryOutData
     */
    constructor() { 
        
        CashbookEntryOutData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CashbookEntryOutData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CashbookEntryOutData} obj Optional instance to populate.
     * @return {module:model/CashbookEntryOutData} The populated <code>CashbookEntryOutData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CashbookEntryOutData();

            if (data.hasOwnProperty('amount_out')) {
                obj['amount_out'] = ApiClient.convertToType(data['amount_out'], 'Number');
            }
            if (data.hasOwnProperty('payment_account_out')) {
                obj['payment_account_out'] = PaymentAccount.constructFromObject(data['payment_account_out']);
            }
        }
        return obj;
    }


}

/**
 * Total amount out.
 * @member {Number} amount_out
 */
CashbookEntryOutData.prototype['amount_out'] = undefined;

/**
 * @member {module:model/PaymentAccount} payment_account_out
 */
CashbookEntryOutData.prototype['payment_account_out'] = undefined;






export default CashbookEntryOutData;

