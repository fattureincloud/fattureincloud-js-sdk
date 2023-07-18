/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.29
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

/**
* Enum class EmailRecipientStatus.
* @enum {}
* @readonly
*/
export default class EmailRecipientStatus {
  /**
         * value: "unknown"
         * @const
         */
  'unknown' = 'unknown'

  /**
         * value: "document_opened"
         * @const
         */
  'document_opened' = 'document_opened'

  /**
         * value: "email_opened"
         * @const
         */
  'email_opened' = 'email_opened'

  /**
    * Returns a <code>EmailRecipientStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EmailRecipientStatus} The enum <code>EmailRecipientStatus</code> value.
    */
  static constructFromObject (object) {
    return object
  }
}
