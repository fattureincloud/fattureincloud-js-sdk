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
* Enum class PermissionLevel.
* @enum {}
* @readonly
*/
export default class PermissionLevel {
    
        /**
         * value: "none"
         * @const
         */
        "none" = "none";

    
        /**
         * value: "read"
         * @const
         */
        "read" = "read";

    
        /**
         * value: "write"
         * @const
         */
        "write" = "write";

    
        /**
         * value: "detailed"
         * @const
         */
        "detailed" = "detailed";

    

    /**
    * Returns a <code>PermissionLevel</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:FattureInCloud/model/PermissionLevel} The enum <code>PermissionLevel</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

