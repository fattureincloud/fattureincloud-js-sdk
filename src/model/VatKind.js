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
* Enum class VatKind.
* @enum {}
* @readonly
*/
export default class VatKind {
    
        /**
         * value: "null"
         * @const
         */
        "null" = "null";

    
        /**
         * value: "I"
         * @const
         */
        "I" = "I";

    
        /**
         * value: "D"
         * @const
         */
        "D" = "D";

    
        /**
         * value: "S"
         * @const
         */
        "S" = "S";

    

    /**
    * Returns a <code>VatKind</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/VatKind} The enum <code>VatKind</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

