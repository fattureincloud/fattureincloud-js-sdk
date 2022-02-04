/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.10
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CashbookEntryData from './CashbookEntryData';
import CashbookEntryDataDocument from './CashbookEntryDataDocument';
import CashbookEntryInData from './CashbookEntryInData';
import CashbookEntryKind from './CashbookEntryKind';
import CashbookEntryType from './CashbookEntryType';
import PaymentAccount from './PaymentAccount';

/**
 * The CashbookEntryIn model module.
 * @module model/CashbookEntryIn
 * @version 2.0.8
 */
class CashbookEntryIn {
    /**
     * Constructs a new <code>CashbookEntryIn</code>.
     * @alias module:model/CashbookEntryIn
     * @implements module:model/CashbookEntryData
     * @implements module:model/CashbookEntryInData
     * @param id {String} Cashbook unique identifier.
     * @param date {Date} Cashbook date.
     * @param description {String} Cashbook description.
     * @param kind {module:model/CashbookEntryKind} 
     */
    constructor(id, date, description, kind) { 
        CashbookEntryData.initialize(this, id, date, description, kind);CashbookEntryInData.initialize(this);
        CashbookEntryIn.initialize(this, id, date, description, kind);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, date, description, kind) { 
        obj['id'] = id;
        obj['date'] = date;
        obj['description'] = description;
        obj['kind'] = kind;
    }

    /**
     * Constructs a <code>CashbookEntryIn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CashbookEntryIn} obj Optional instance to populate.
     * @return {module:model/CashbookEntryIn} The populated <code>CashbookEntryIn</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CashbookEntryIn();
            CashbookEntryData.constructFromObject(data, obj);
            CashbookEntryInData.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = CashbookEntryKind.constructFromObject(data['kind']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = CashbookEntryType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('entity_name')) {
                obj['entity_name'] = ApiClient.convertToType(data['entity_name'], 'String');
            }
            if (data.hasOwnProperty('document')) {
                obj['document'] = CashbookEntryDataDocument.constructFromObject(data['document']);
            }
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
 * Cashbook unique identifier.
 * @member {String} id
 */
CashbookEntryIn.prototype['id'] = undefined;

/**
 * Cashbook date.
 * @member {Date} date
 */
CashbookEntryIn.prototype['date'] = undefined;

/**
 * Cashbook description.
 * @member {String} description
 */
CashbookEntryIn.prototype['description'] = undefined;

/**
 * @member {module:model/CashbookEntryKind} kind
 */
CashbookEntryIn.prototype['kind'] = undefined;

/**
 * @member {module:model/CashbookEntryType} type
 */
CashbookEntryIn.prototype['type'] = undefined;

/**
 * Entity name.
 * @member {String} entity_name
 */
CashbookEntryIn.prototype['entity_name'] = undefined;

/**
 * @member {module:model/CashbookEntryDataDocument} document
 */
CashbookEntryIn.prototype['document'] = undefined;

/**
 * Total amount in.
 * @member {Number} amount_in
 */
CashbookEntryIn.prototype['amount_in'] = undefined;

/**
 * @member {module:model/PaymentAccount} payment_account_in
 */
CashbookEntryIn.prototype['payment_account_in'] = undefined;


// Implement CashbookEntryData interface:
/**
 * Cashbook unique identifier.
 * @member {String} id
 */
CashbookEntryData.prototype['id'] = undefined;
/**
 * Cashbook date.
 * @member {Date} date
 */
CashbookEntryData.prototype['date'] = undefined;
/**
 * Cashbook description.
 * @member {String} description
 */
CashbookEntryData.prototype['description'] = undefined;
/**
 * @member {module:model/CashbookEntryKind} kind
 */
CashbookEntryData.prototype['kind'] = undefined;
/**
 * @member {module:model/CashbookEntryType} type
 */
CashbookEntryData.prototype['type'] = undefined;
/**
 * Entity name.
 * @member {String} entity_name
 */
CashbookEntryData.prototype['entity_name'] = undefined;
/**
 * @member {module:model/CashbookEntryDataDocument} document
 */
CashbookEntryData.prototype['document'] = undefined;
// Implement CashbookEntryInData interface:
/**
 * Total amount in.
 * @member {Number} amount_in
 */
CashbookEntryInData.prototype['amount_in'] = undefined;
/**
 * @member {module:model/PaymentAccount} payment_account_in
 */
CashbookEntryInData.prototype['payment_account_in'] = undefined;




export default CashbookEntryIn;

