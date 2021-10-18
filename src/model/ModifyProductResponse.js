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
import Product from './Product';

/**
 * The ModifyProductResponse model module.
 * @module model/ModifyProductResponse
 * @version 2.0.1
 */
class ModifyProductResponse {
    /**
     * Constructs a new <code>ModifyProductResponse</code>.
     * @alias module:model/ModifyProductResponse
     */
    constructor() { 
        
        ModifyProductResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModifyProductResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyProductResponse} obj Optional instance to populate.
     * @return {module:model/ModifyProductResponse} The populated <code>ModifyProductResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModifyProductResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = Product.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Product} data
 */
ModifyProductResponse.prototype['data'] = undefined;






export default ModifyProductResponse;
