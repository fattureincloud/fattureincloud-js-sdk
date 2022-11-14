/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.21
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

/**
* Enum class ReceivedDocumentType.
* @enum {}
* @readonly
*/
export default class ReceivedDocumentType {
  /**
         * value: "expense"
         * @const
         */
  'expense' = 'expense'

  /**
         * value: "passive_credit_note"
         * @const
         */
  'passive_credit_note' = 'passive_credit_note'

  /**
         * value: "passive_delivery_note"
         * @const
         */
  'passive_delivery_note' = 'passive_delivery_note'

  /**
    * Returns a <code>ReceivedDocumentType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ReceivedDocumentType} The enum <code>ReceivedDocumentType</code> value.
    */
  static constructFromObject (object) {
    return object
  }
}
