/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.1.2
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

/**
* Enum class EventType.
* @enum {}
* @readonly
*/
export default class EventType {
  /**
         * value: "it.fattureincloud.webhooks.issued_documents.invoices.create"
         * @const
         */
  'issued_documents.invoices.create' = 'it.fattureincloud.webhooks.issued_documents.invoices.create'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.invoices.update"
         * @const
         */
  'issued_documents.invoices.update' = 'it.fattureincloud.webhooks.issued_documents.invoices.update'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.invoices.delete"
         * @const
         */
  'issued_documents.invoices.delete' = 'it.fattureincloud.webhooks.issued_documents.invoices.delete'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.quotes.create"
         * @const
         */
  'issued_documents.quotes.create' = 'it.fattureincloud.webhooks.issued_documents.quotes.create'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.quotes.update"
         * @const
         */
  'issued_documents.quotes.update' = 'it.fattureincloud.webhooks.issued_documents.quotes.update'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.quotes.delete"
         * @const
         */
  'issued_documents.quotes.delete' = 'it.fattureincloud.webhooks.issued_documents.quotes.delete'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.proformas.create"
         * @const
         */
  'issued_documents.proformas.create' = 'it.fattureincloud.webhooks.issued_documents.proformas.create'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.proformas.update"
         * @const
         */
  'issued_documents.proformas.update' = 'it.fattureincloud.webhooks.issued_documents.proformas.update'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.proformas.delete"
         * @const
         */
  'issued_documents.proformas.delete' = 'it.fattureincloud.webhooks.issued_documents.proformas.delete'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.receipts.create"
         * @const
         */
  'issued_documents.receipts.create' = 'it.fattureincloud.webhooks.issued_documents.receipts.create'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.receipts.update"
         * @const
         */
  'issued_documents.receipts.update' = 'it.fattureincloud.webhooks.issued_documents.receipts.update'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.receipts.delete"
         * @const
         */
  'issued_documents.receipts.delete' = 'it.fattureincloud.webhooks.issued_documents.receipts.delete'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.delivery_notes.create"
         * @const
         */
  'issued_documents.delivery_notes.create' = 'it.fattureincloud.webhooks.issued_documents.delivery_notes.create'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.delivery_notes.update"
         * @const
         */
  'issued_documents.delivery_notes.update' = 'it.fattureincloud.webhooks.issued_documents.delivery_notes.update'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.delivery_notes.delete"
         * @const
         */
  'issued_documents.delivery_notes.delete' = 'it.fattureincloud.webhooks.issued_documents.delivery_notes.delete'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.credit_notes.create"
         * @const
         */
  'issued_documents.credit_notes.create' = 'it.fattureincloud.webhooks.issued_documents.credit_notes.create'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.credit_notes.update"
         * @const
         */
  'issued_documents.credit_notes.update' = 'it.fattureincloud.webhooks.issued_documents.credit_notes.update'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.credit_notes.delete"
         * @const
         */
  'issued_documents.credit_notes.delete' = 'it.fattureincloud.webhooks.issued_documents.credit_notes.delete'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.orders.create"
         * @const
         */
  'issued_documents.orders.create' = 'it.fattureincloud.webhooks.issued_documents.orders.create'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.orders.update"
         * @const
         */
  'issued_documents.orders.update' = 'it.fattureincloud.webhooks.issued_documents.orders.update'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.orders.delete"
         * @const
         */
  'issued_documents.orders.delete' = 'it.fattureincloud.webhooks.issued_documents.orders.delete'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.work_reports.create"
         * @const
         */
  'issued_documents.work_reports.create' = 'it.fattureincloud.webhooks.issued_documents.work_reports.create'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.work_reports.update"
         * @const
         */
  'issued_documents.work_reports.update' = 'it.fattureincloud.webhooks.issued_documents.work_reports.update'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.work_reports.delete"
         * @const
         */
  'issued_documents.work_reports.delete' = 'it.fattureincloud.webhooks.issued_documents.work_reports.delete'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.supplier_orders.create"
         * @const
         */
  'issued_documents.supplier_orders.create' = 'it.fattureincloud.webhooks.issued_documents.supplier_orders.create'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.supplier_orders.update"
         * @const
         */
  'issued_documents.supplier_orders.update' = 'it.fattureincloud.webhooks.issued_documents.supplier_orders.update'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.supplier_orders.delete"
         * @const
         */
  'issued_documents.supplier_orders.delete' = 'it.fattureincloud.webhooks.issued_documents.supplier_orders.delete'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.self_invoices.create"
         * @const
         */
  'issued_documents.self_invoices.create' = 'it.fattureincloud.webhooks.issued_documents.self_invoices.create'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.self_invoices.update"
         * @const
         */
  'issued_documents.self_invoices.update' = 'it.fattureincloud.webhooks.issued_documents.self_invoices.update'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.self_invoices.delete"
         * @const
         */
  'issued_documents.self_invoices.delete' = 'it.fattureincloud.webhooks.issued_documents.self_invoices.delete'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.all.create"
         * @const
         */
  'issued_documents.all.create' = 'it.fattureincloud.webhooks.issued_documents.all.create'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.all.update"
         * @const
         */
  'issued_documents.all.update' = 'it.fattureincloud.webhooks.issued_documents.all.update'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.all.delete"
         * @const
         */
  'issued_documents.all.delete' = 'it.fattureincloud.webhooks.issued_documents.all.delete'

  /**
         * value: "it.fattureincloud.webhooks.received_documents.create"
         * @const
         */
  'received_documents.create' = 'it.fattureincloud.webhooks.received_documents.create'

  /**
         * value: "it.fattureincloud.webhooks.received_documents.update"
         * @const
         */
  'received_documents.update' = 'it.fattureincloud.webhooks.received_documents.update'

  /**
         * value: "it.fattureincloud.webhooks.received_documents.delete"
         * @const
         */
  'received_documents.delete' = 'it.fattureincloud.webhooks.received_documents.delete'

  /**
         * value: "it.fattureincloud.webhooks.receipts.create"
         * @const
         */
  'receipts.create' = 'it.fattureincloud.webhooks.receipts.create'

  /**
         * value: "it.fattureincloud.webhooks.receipts.update"
         * @const
         */
  'receipts.update' = 'it.fattureincloud.webhooks.receipts.update'

  /**
         * value: "it.fattureincloud.webhooks.receipts.delete"
         * @const
         */
  'receipts.delete' = 'it.fattureincloud.webhooks.receipts.delete'

  /**
         * value: "it.fattureincloud.webhooks.taxes.create"
         * @const
         */
  'taxes.create' = 'it.fattureincloud.webhooks.taxes.create'

  /**
         * value: "it.fattureincloud.webhooks.taxes.update"
         * @const
         */
  'taxes.update' = 'it.fattureincloud.webhooks.taxes.update'

  /**
         * value: "it.fattureincloud.webhooks.taxes.delete"
         * @const
         */
  'taxes.delete' = 'it.fattureincloud.webhooks.taxes.delete'

  /**
         * value: "it.fattureincloud.webhooks.archive_documents.create"
         * @const
         */
  'archive_documents.create' = 'it.fattureincloud.webhooks.archive_documents.create'

  /**
         * value: "it.fattureincloud.webhooks.archive_documents.update"
         * @const
         */
  'archive_documents.update' = 'it.fattureincloud.webhooks.archive_documents.update'

  /**
         * value: "it.fattureincloud.webhooks.archive_documents.delete"
         * @const
         */
  'archive_documents.delete' = 'it.fattureincloud.webhooks.archive_documents.delete'

  /**
         * value: "it.fattureincloud.webhooks.cashbook.create"
         * @const
         */
  'cashbook.create' = 'it.fattureincloud.webhooks.cashbook.create'

  /**
         * value: "it.fattureincloud.webhooks.cashbook.update"
         * @const
         */
  'cashbook.update' = 'it.fattureincloud.webhooks.cashbook.update'

  /**
         * value: "it.fattureincloud.webhooks.cashbook.delete"
         * @const
         */
  'cashbook.delete' = 'it.fattureincloud.webhooks.cashbook.delete'

  /**
         * value: "it.fattureincloud.webhooks.products.create"
         * @const
         */
  'products.create' = 'it.fattureincloud.webhooks.products.create'

  /**
         * value: "it.fattureincloud.webhooks.products.update"
         * @const
         */
  'products.update' = 'it.fattureincloud.webhooks.products.update'

  /**
         * value: "it.fattureincloud.webhooks.products.delete"
         * @const
         */
  'products.delete' = 'it.fattureincloud.webhooks.products.delete'

  /**
         * value: "it.fattureincloud.webhooks.products.stock_update"
         * @const
         */
  'products.stock_update' = 'it.fattureincloud.webhooks.products.stock_update'

  /**
         * value: "it.fattureincloud.webhooks.entities.clients.create"
         * @const
         */
  'entities.clients.create' = 'it.fattureincloud.webhooks.entities.clients.create'

  /**
         * value: "it.fattureincloud.webhooks.entities.clients.update"
         * @const
         */
  'entities.clients.update' = 'it.fattureincloud.webhooks.entities.clients.update'

  /**
         * value: "it.fattureincloud.webhooks.entities.clients.delete"
         * @const
         */
  'entities.clients.delete' = 'it.fattureincloud.webhooks.entities.clients.delete'

  /**
         * value: "it.fattureincloud.webhooks.entities.suppliers.create"
         * @const
         */
  'entities.suppliers.create' = 'it.fattureincloud.webhooks.entities.suppliers.create'

  /**
         * value: "it.fattureincloud.webhooks.entities.suppliers.update"
         * @const
         */
  'entities.suppliers.update' = 'it.fattureincloud.webhooks.entities.suppliers.update'

  /**
         * value: "it.fattureincloud.webhooks.entities.suppliers.delete"
         * @const
         */
  'entities.suppliers.delete' = 'it.fattureincloud.webhooks.entities.suppliers.delete'

  /**
         * value: "it.fattureincloud.webhooks.entities.all.create"
         * @const
         */
  'entities.all.create' = 'it.fattureincloud.webhooks.entities.all.create'

  /**
         * value: "it.fattureincloud.webhooks.entities.all.update"
         * @const
         */
  'entities.all.update' = 'it.fattureincloud.webhooks.entities.all.update'

  /**
         * value: "it.fattureincloud.webhooks.entities.all.delete"
         * @const
         */
  'entities.all.delete' = 'it.fattureincloud.webhooks.entities.all.delete'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.e_invoices.status_update"
         * @const
         */
  'issued_documents.e_invoices.status_update' = 'it.fattureincloud.webhooks.issued_documents.e_invoices.status_update'

  /**
         * value: "it.fattureincloud.webhooks.received_documents.e_invoices.receive"
         * @const
         */
  'received_documents.e_invoices.receive' = 'it.fattureincloud.webhooks.received_documents.e_invoices.receive'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.invoices.email_sent"
         * @const
         */
  'issued_documents.invoices.email_sent' = 'it.fattureincloud.webhooks.issued_documents.invoices.email_sent'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.quotes.email_sent"
         * @const
         */
  'issued_documents.quotes.email_sent' = 'it.fattureincloud.webhooks.issued_documents.quotes.email_sent'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.proformas.email_sent"
         * @const
         */
  'issued_documents.proformas.email_sent' = 'it.fattureincloud.webhooks.issued_documents.proformas.email_sent'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.receipts.email_sent"
         * @const
         */
  'issued_documents.receipts.email_sent' = 'it.fattureincloud.webhooks.issued_documents.receipts.email_sent'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.delivery_notes.email_sent"
         * @const
         */
  'issued_documents.delivery_notes.email_sent' = 'it.fattureincloud.webhooks.issued_documents.delivery_notes.email_sent'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.credit_notes.email_sent"
         * @const
         */
  'issued_documents.credit_notes.email_sent' = 'it.fattureincloud.webhooks.issued_documents.credit_notes.email_sent'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.orders.email_sent"
         * @const
         */
  'issued_documents.orders.email_sent' = 'it.fattureincloud.webhooks.issued_documents.orders.email_sent'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.work_reports.email_sent"
         * @const
         */
  'issued_documents.work_reports.email_sent' = 'it.fattureincloud.webhooks.issued_documents.work_reports.email_sent'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.supplier_orders.email_sent"
         * @const
         */
  'issued_documents.supplier_orders.email_sent' = 'it.fattureincloud.webhooks.issued_documents.supplier_orders.email_sent'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.self_invoices.email_sent"
         * @const
         */
  'issued_documents.self_invoices.email_sent' = 'it.fattureincloud.webhooks.issued_documents.self_invoices.email_sent'

  /**
         * value: "it.fattureincloud.webhooks.issued_documents.all.email_sent"
         * @const
         */
  'issued_documents.all.email_sent' = 'it.fattureincloud.webhooks.issued_documents.all.email_sent'

  /**
    * Returns a <code>EventType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EventType} The enum <code>EventType</code> value.
    */
  static constructFromObject (object) {
    return object
  }
}
