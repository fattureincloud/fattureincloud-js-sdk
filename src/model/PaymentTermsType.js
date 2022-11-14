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
* Enum class PaymentTermsType.
* @enum {}
* @readonly
*/
export default class PaymentTermsType {
  /**
         * value: "standard"
         * @const
         */
  'standard' = 'standard'

  /**
         * value: "end_of_month"
         * @const
         */
  'end_of_month' = 'end_of_month'

  /**
    * Returns a <code>PaymentTermsType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/PaymentTermsType} The enum <code>PaymentTermsType</code> value.
    */
  static constructFromObject (object) {
    return object
  }
}
