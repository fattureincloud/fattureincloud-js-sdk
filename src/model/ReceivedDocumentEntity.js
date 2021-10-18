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

/**
 * The ReceivedDocumentEntity model module.
 * @module model/ReceivedDocumentEntity
 * @version 2.0.1
 */
class ReceivedDocumentEntity {
    /**
     * Constructs a new <code>ReceivedDocumentEntity</code>.
     * @alias module:model/ReceivedDocumentEntity
     */
    constructor() { 
        
        ReceivedDocumentEntity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReceivedDocumentEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReceivedDocumentEntity} obj Optional instance to populate.
     * @return {module:model/ReceivedDocumentEntity} The populated <code>ReceivedDocumentEntity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReceivedDocumentEntity();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Entity unique identifier.
 * @member {Number} id
 */
ReceivedDocumentEntity.prototype['id'] = undefined;

/**
 * Entity name.
 * @member {String} name
 */
ReceivedDocumentEntity.prototype['name'] = undefined;






export default ReceivedDocumentEntity;

