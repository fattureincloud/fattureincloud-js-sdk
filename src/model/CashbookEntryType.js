/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.1.0
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

/**
* Enum class CashbookEntryType.
* @enum {}
* @readonly
*/
export default class CashbookEntryType {
  /**
         * value: "in"
         * @const
         */
  'in' = 'in'

  /**
         * value: "out"
         * @const
         */
  'out' = 'out'

  /**
    * Returns a <code>CashbookEntryType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CashbookEntryType} The enum <code>CashbookEntryType</code> value.
    */
  static constructFromObject (object) {
    return object
  }
}
