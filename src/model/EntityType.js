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
/**
* Enum class EntityType.
* @enum {}
* @readonly
*/
export default class EntityType {
    
        /**
         * value: "company"
         * @const
         */
        "company" = "company";

    
        /**
         * value: "person"
         * @const
         */
        "person" = "person";

    
        /**
         * value: "pa"
         * @const
         */
        "pa" = "pa";

    
        /**
         * value: "condo"
         * @const
         */
        "condo" = "condo";

    

    /**
    * Returns a <code>EntityType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EntityType} The enum <code>EntityType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

