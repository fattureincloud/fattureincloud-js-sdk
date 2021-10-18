/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.  For more information, please visit https://www.fattureincloud.it.
 *
 * The version of the OpenAPI document: 2.0.1
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import PaymentAccount from './PaymentAccount';
import ReceivedDocumentPaymentTerms from './ReceivedDocumentPaymentTerms';

/**
 * The ReceivedDocumentPaymentsList model module.
 * @module model/ReceivedDocumentPaymentsList
 * @version 2.0.1
 */
class ReceivedDocumentPaymentsList {
    /**
     * Constructs a new <code>ReceivedDocumentPaymentsList</code>.
     * @alias module:model/ReceivedDocumentPaymentsList
     */
    constructor() { 
        
        ReceivedDocumentPaymentsList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReceivedDocumentPaymentsList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReceivedDocumentPaymentsList} obj Optional instance to populate.
     * @return {module:model/ReceivedDocumentPaymentsList} The populated <code>ReceivedDocumentPaymentsList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReceivedDocumentPaymentsList();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('due_date')) {
                obj['due_date'] = ApiClient.convertToType(data['due_date'], 'String');
            }
            if (data.hasOwnProperty('paid_date')) {
                obj['paid_date'] = ApiClient.convertToType(data['paid_date'], 'String');
            }
            if (data.hasOwnProperty('payment_terms')) {
                obj['payment_terms'] = ReceivedDocumentPaymentTerms.constructFromObject(data['payment_terms']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('payment_account')) {
                obj['payment_account'] = PaymentAccount.constructFromObject(data['payment_account']);
            }
        }
        return obj;
    }


}

/**
 * Unique identifier.
 * @member {Number} id
 */
ReceivedDocumentPaymentsList.prototype['id'] = undefined;

/**
 * Amount of items.
 * @member {Number} amount
 */
ReceivedDocumentPaymentsList.prototype['amount'] = undefined;

/**
 * Due date
 * @member {String} due_date
 */
ReceivedDocumentPaymentsList.prototype['due_date'] = undefined;

/**
 * Paid date
 * @member {String} paid_date
 */
ReceivedDocumentPaymentsList.prototype['paid_date'] = undefined;

/**
 * @member {module:model/ReceivedDocumentPaymentTerms} payment_terms
 */
ReceivedDocumentPaymentsList.prototype['payment_terms'] = undefined;

/**
 * Payment status.
 * @member {String} status
 */
ReceivedDocumentPaymentsList.prototype['status'] = undefined;

/**
 * @member {module:model/PaymentAccount} payment_account
 */
ReceivedDocumentPaymentsList.prototype['payment_account'] = undefined;






export default ReceivedDocumentPaymentsList;

