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
import CashbookEntryDataDocument from './CashbookEntryDataDocument';
import CashbookEntryIn from './CashbookEntryIn';
import CashbookEntryOut from './CashbookEntryOut';
import PaymentAccount from './PaymentAccount';

/**
 * The CashbookEntry model module.
 * @module model/CashbookEntry
 * @version 2.0.1
 */
class CashbookEntry {
    /**
     * Constructs a new <code>CashbookEntry</code>.
     * @alias module:model/CashbookEntry
     * @implements module:model/CashbookEntryIn
     * @implements module:model/CashbookEntryOut
     * @param id {String} Cashbook unique identifier.
     * @param date {Date} Cashbook date.
     * @param description {String} Cashbook description.
     * @param kind {module:model/CashbookEntry.KindEnum} Cashbook kind.
     * @param type {module:model/CashbookEntry.TypeEnum} Cashbook type.
     */
    constructor(id, date, description, kind, type) { 
        CashbookEntryIn.initialize(this, id, date, description, kind, type);CashbookEntryOut.initialize(this, id, date, description, kind, type);
        CashbookEntry.initialize(this, id, date, description, kind, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, date, description, kind, type) { 
        obj['id'] = id;
        obj['date'] = date;
        obj['description'] = description;
        obj['kind'] = kind;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>CashbookEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CashbookEntry} obj Optional instance to populate.
     * @return {module:model/CashbookEntry} The populated <code>CashbookEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CashbookEntry();
            CashbookEntryIn.constructFromObject(data, obj);
            CashbookEntryOut.constructFromObject(data, obj);

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
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
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
 * Cashbook unique identifier.
 * @member {String} id
 */
CashbookEntry.prototype['id'] = undefined;

/**
 * Cashbook date.
 * @member {Date} date
 */
CashbookEntry.prototype['date'] = undefined;

/**
 * Cashbook description.
 * @member {String} description
 */
CashbookEntry.prototype['description'] = undefined;

/**
 * Cashbook kind.
 * @member {module:model/CashbookEntry.KindEnum} kind
 */
CashbookEntry.prototype['kind'] = undefined;

/**
 * Cashbook type.
 * @member {module:model/CashbookEntry.TypeEnum} type
 */
CashbookEntry.prototype['type'] = undefined;

/**
 * Entity name.
 * @member {String} entity_name
 */
CashbookEntry.prototype['entity_name'] = undefined;

/**
 * @member {module:model/CashbookEntryDataDocument} document
 */
CashbookEntry.prototype['document'] = undefined;

/**
 * Total amount in.
 * @member {Number} amount_in
 */
CashbookEntry.prototype['amount_in'] = undefined;

/**
 * @member {module:model/PaymentAccount} payment_account_in
 */
CashbookEntry.prototype['payment_account_in'] = undefined;

/**
 * Total amount out.
 * @member {Number} amount_out
 */
CashbookEntry.prototype['amount_out'] = undefined;

/**
 * @member {module:model/PaymentAccount} payment_account_out
 */
CashbookEntry.prototype['payment_account_out'] = undefined;


// Implement CashbookEntryIn interface:
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
 * Cashbook kind.
 * @member {module:model/CashbookEntryIn.KindEnum} kind
 */
CashbookEntryIn.prototype['kind'] = undefined;
/**
 * Cashbook type.
 * @member {module:model/CashbookEntryIn.TypeEnum} type
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
// Implement CashbookEntryOut interface:
/**
 * Cashbook unique identifier.
 * @member {String} id
 */
CashbookEntryOut.prototype['id'] = undefined;
/**
 * Cashbook date.
 * @member {Date} date
 */
CashbookEntryOut.prototype['date'] = undefined;
/**
 * Cashbook description.
 * @member {String} description
 */
CashbookEntryOut.prototype['description'] = undefined;
/**
 * Cashbook kind.
 * @member {module:model/CashbookEntryOut.KindEnum} kind
 */
CashbookEntryOut.prototype['kind'] = undefined;
/**
 * Cashbook type.
 * @member {module:model/CashbookEntryOut.TypeEnum} type
 */
CashbookEntryOut.prototype['type'] = undefined;
/**
 * Entity name.
 * @member {String} entity_name
 */
CashbookEntryOut.prototype['entity_name'] = undefined;
/**
 * @member {module:model/CashbookEntryDataDocument} document
 */
CashbookEntryOut.prototype['document'] = undefined;
/**
 * Total amount out.
 * @member {Number} amount_out
 */
CashbookEntryOut.prototype['amount_out'] = undefined;
/**
 * @member {module:model/PaymentAccount} payment_account_out
 */
CashbookEntryOut.prototype['payment_account_out'] = undefined;



/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
CashbookEntry['KindEnum'] = {

    /**
     * value: "cashbook"
     * @const
     */
    "cashbook": "cashbook",

    /**
     * value: "issued_document"
     * @const
     */
    "issued_document": "issued_document",

    /**
     * value: "received_document"
     * @const
     */
    "received_document": "received_document",

    /**
     * value: "tax"
     * @const
     */
    "tax": "tax",

    /**
     * value: "receipt"
     * @const
     */
    "receipt": "receipt"
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CashbookEntry['TypeEnum'] = {

    /**
     * value: "in"
     * @const
     */
    "in": "in",

    /**
     * value: "out"
     * @const
     */
    "out": "out"
};



export default CashbookEntry;

