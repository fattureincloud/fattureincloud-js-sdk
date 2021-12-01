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
* Enum class CashbookEntryKind.
* @enum {}
* @readonly
*/
export default class CashbookEntryKind {
    
        /**
         * value: "cashbook"
         * @const
         */
        "cashbook" = "cashbook";

    
        /**
         * value: "issued_document"
         * @const
         */
        "issued_document" = "issued_document";

    
        /**
         * value: "received_document"
         * @const
         */
        "received_document" = "received_document";

    
        /**
         * value: "tax"
         * @const
         */
        "tax" = "tax";

    
        /**
         * value: "receipt"
         * @const
         */
        "receipt" = "receipt";

    

    /**
    * Returns a <code>CashbookEntryKind</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CashbookEntryKind} The enum <code>CashbookEntryKind</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
