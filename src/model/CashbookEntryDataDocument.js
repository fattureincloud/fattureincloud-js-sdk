/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.7
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CashbookEntryDataDocument model module.
 * @module model/CashbookEntryDataDocument
 * @version 2.0.5
 */
class CashbookEntryDataDocument {
    /**
     * Constructs a new <code>CashbookEntryDataDocument</code>.
     * @alias module:model/CashbookEntryDataDocument
     */
    constructor() { 
        
        CashbookEntryDataDocument.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CashbookEntryDataDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CashbookEntryDataDocument} obj Optional instance to populate.
     * @return {module:model/CashbookEntryDataDocument} The populated <code>CashbookEntryDataDocument</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CashbookEntryDataDocument();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Document unique identifier.
 * @member {Number} id
 */
CashbookEntryDataDocument.prototype['id'] = undefined;

/**
 * Document type.
 * @member {String} type
 */
CashbookEntryDataDocument.prototype['type'] = undefined;

/**
 * Document path.
 * @member {String} path
 */
CashbookEntryDataDocument.prototype['path'] = undefined;






export default CashbookEntryDataDocument;

