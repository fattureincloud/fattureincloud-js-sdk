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
import F24 from './F24';

/**
 * The ModifyF24Request model module.
 * @module model/ModifyF24Request
 * @version 2.0.1
 */
class ModifyF24Request {
    /**
     * Constructs a new <code>ModifyF24Request</code>.
     * The modified F24
     * @alias module:model/ModifyF24Request
     */
    constructor() { 
        
        ModifyF24Request.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModifyF24Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyF24Request} obj Optional instance to populate.
     * @return {module:model/ModifyF24Request} The populated <code>ModifyF24Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModifyF24Request();

            if (data.hasOwnProperty('data')) {
                obj['data'] = F24.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/F24} data
 */
ModifyF24Request.prototype['data'] = undefined;






export default ModifyF24Request;

