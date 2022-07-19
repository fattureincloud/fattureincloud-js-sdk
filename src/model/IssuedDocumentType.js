/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.19
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

/**
* Enum class IssuedDocumentType.
* @enum {}
* @readonly
*/
export default class IssuedDocumentType {
  /**
         * value: "invoice"
         * @const
         */
  'invoice' = 'invoice'

  /**
         * value: "quote"
         * @const
         */
  'quote' = 'quote'

  /**
         * value: "proforma"
         * @const
         */
  'proforma' = 'proforma'

  /**
         * value: "receipt"
         * @const
         */
  'receipt' = 'receipt'

  /**
         * value: "delivery_note"
         * @const
         */
  'delivery_note' = 'delivery_note'

  /**
         * value: "credit_note"
         * @const
         */
  'credit_note' = 'credit_note'

  /**
         * value: "order"
         * @const
         */
  'order' = 'order'

  /**
         * value: "work_report"
         * @const
         */
  'work_report' = 'work_report'

  /**
         * value: "supplier_order"
         * @const
         */
  'supplier_order' = 'supplier_order'

  /**
         * value: "self_own_invoice"
         * @const
         */
  'self_own_invoice' = 'self_own_invoice'

  /**
         * value: "self_supplier_invoice"
         * @const
         */
  'self_supplier_invoice' = 'self_supplier_invoice'

  /**
    * Returns a <code>IssuedDocumentType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/IssuedDocumentType} The enum <code>IssuedDocumentType</code> value.
    */
  static constructFromObject (object) {
    return object
  }
}
