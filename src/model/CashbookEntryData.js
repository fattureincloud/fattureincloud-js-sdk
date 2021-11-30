/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.5
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CashbookEntryDataDocument from './CashbookEntryDataDocument';
import CashbookEntryKind from './CashbookEntryKind';
import CashbookEntryType from './CashbookEntryType';

/**
 * The CashbookEntryData model module.
 * @module model/CashbookEntryData
 * @version 2.0.3
 */
class CashbookEntryData {
    /**
     * Constructs a new <code>CashbookEntryData</code>.
     * @alias module:model/CashbookEntryData
     * @param id {String} Cashbook unique identifier.
     * @param date {Date} Cashbook date.
     * @param description {String} Cashbook description.
     * @param kind {module:model/CashbookEntryKind} 
     * @param type {module:model/CashbookEntryType} 
     */
    constructor(id, date, description, kind, type) { 
        
        CashbookEntryData.initialize(this, id, date, description, kind, type);
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
     * Constructs a <code>CashbookEntryData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CashbookEntryData} obj Optional instance to populate.
     * @return {module:model/CashbookEntryData} The populated <code>CashbookEntryData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CashbookEntryData();

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
        }
        return obj;
    }


}

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






export default CashbookEntryData;

