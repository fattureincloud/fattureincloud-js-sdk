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

/**
 * The EntityOptions model module.
 * @module model/EntityOptions
 * @version 2.0.4
 */
class EntityOptions {
    /**
     * Constructs a new <code>EntityOptions</code>.
     * @alias module:model/EntityOptions
     */
    constructor() { 
        
        EntityOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntityOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntityOptions} obj Optional instance to populate.
     * @return {module:model/EntityOptions} The populated <code>EntityOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntityOptions();

            if (data.hasOwnProperty('entity_search_fields')) {
                obj['entity_search_fields'] = ApiClient.convertToType(data['entity_search_fields'], 'String');
            }
            if (data.hasOwnProperty('entity_autocomplete')) {
                obj['entity_autocomplete'] = ApiClient.convertToType(data['entity_autocomplete'], 'Boolean');
            }
            if (data.hasOwnProperty('entity_create')) {
                obj['entity_create'] = ApiClient.convertToType(data['entity_create'], 'Boolean');
            }
            if (data.hasOwnProperty('entity_update')) {
                obj['entity_update'] = ApiClient.convertToType(data['entity_update'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} entity_search_fields
 */
EntityOptions.prototype['entity_search_fields'] = undefined;

/**
 * @member {Boolean} entity_autocomplete
 */
EntityOptions.prototype['entity_autocomplete'] = undefined;

/**
 * @member {Boolean} entity_create
 */
EntityOptions.prototype['entity_create'] = undefined;

/**
 * @member {String} entity_update
 */
EntityOptions.prototype['entity_update'] = undefined;






export default EntityOptions;

