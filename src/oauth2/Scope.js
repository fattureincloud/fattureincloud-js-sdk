/**
 * The Scope oauth module.
 * @module oauth/Scope
 */
export default class Scope {
  /**
     * Read permission to the Clients registry
     * @member {String} ENTITY_CLIENTS_READ
     */
  static ENTITY_CLIENTS_READ = 'entity.clients:r'

  /**
     * Write permission to the Clients registry
     * @member {String} ENTITY_CLIENTS_ALL
     */
  static ENTITY_CLIENTS_ALL = 'entity.clients:a'

  /**
     * Read permission to the Suppliers registry
     * @member {String} ENTITY_SUPPLIERS_READ
     */
  static ENTITY_SUPPLIERS_READ = 'entity.suppliers:r'

  /**
     * Write permission to the Suppliers registry
     * @member {String} ENTITY_SUPPLIERS_ALL
     */
  static ENTITY_SUPPLIERS_ALL = 'entity.suppliers:a'

  /**
     * Read permission to the Products
     * @member {String} PRODUCTS_READ
     */
  static PRODUCTS_READ = 'products:r'

  /**
     * Write permission to the Products
     * @member {String} PRODUCTS_ALL
     */
  static PRODUCTS_ALL = 'products:a'

  /**
     * Read permission to the issued Invoices
     * @member {String} ISSUED_DOCUMENTS_INVOICES_READ
     */
  static ISSUED_DOCUMENTS_INVOICES_READ = 'issued_documents.invoices:r'

  /**
     * Read permission to the issued Credit Notes
     * @member {String} ISSUED_DOCUMENTS_CREDIT_NOTES_READ
     */
  static ISSUED_DOCUMENTS_CREDIT_NOTES_READ = 'issued_documents.credit_notes:r'

  /**
     * Read permission to the issued Receipts
     * @member {String} ISSUED_DOCUMENTS_RECEIPTS_READ
     */
  static ISSUED_DOCUMENTS_RECEIPTS_READ = 'issued_documents.receipts:r'

  /**
     * Read permission to the issued Orders
     * @member {String} ISSUED_DOCUMENTS_ORDERS_READ
     */
  static ISSUED_DOCUMENTS_ORDERS_READ = 'issued_documents.orders:r'

  /**
     * Read permission to the issued Quotes
     * @member {String} ISSUED_DOCUMENTS_QUOTES_READ
     */
  static ISSUED_DOCUMENTS_QUOTES_READ = 'issued_documents.quotes:r'

  /**
     * Read permission to the issued Proformas
     * @member {String} ISSUED_DOCUMENTS_PROFORMAS_READ
     */
  static ISSUED_DOCUMENTS_PROFORMAS_READ = 'issued_documents.proformas:r'

  /**
     * Read permission to the issued Delivery Notes
     * @member {String} ISSUED_DOCUMENTS_DELIVERY_NOTES_READ
     */
  static ISSUED_DOCUMENTS_DELIVERY_NOTES_READ = 'issued_documents.delivery_notes:r'

  /**
     * Write permission to the issued Invoices
     * @member {String} ISSUED_DOCUMENTS_INVOICES_ALL
     */
  static ISSUED_DOCUMENTS_INVOICES_ALL = 'issued_documents.invoices:a'

  /**
     * Write permission to the issued Credit Notes
     * @member {String} ISSUED_DOCUMENTS_CREDIT_NOTES_ALL
     */
  static ISSUED_DOCUMENTS_CREDIT_NOTES_ALL = 'issued_documents.credit_notes:a'

  /**
     * Write permission to the issued issued Receipts
     * @member {String} ISSUED_DOCUMENTS_RECEIPTS_ALL
     */
  static ISSUED_DOCUMENTS_RECEIPTS_ALL = 'issued_documents.receipts:a'

  /**
     * Write permission to the issued Orders
     * @member {String} ISSUED_DOCUMENTS_ORDERS_ALL
     */
  static ISSUED_DOCUMENTS_ORDERS_ALL = 'issued_documents.orders:a'

  /**
     * Write permission to the issued Quotes
     * @member {String} ISSUED_DOCUMENTS_QUOTES_ALL
     */
  static ISSUED_DOCUMENTS_QUOTES_ALL = 'issued_documents.quotes:a'

  /**
     * Write permission to the issued Proformas
     * @member {String} ISSUED_DOCUMENTS_PROFORMAS_ALL
     */
  static ISSUED_DOCUMENTS_PROFORMAS_ALL = 'issued_documents.proformas:a'

  /**
     * Write permission to the issued Delivery Notes
     * @member {String} ISSUED_DOCUMENTS_DELIVERY_NOTES_ALL
     */
  static ISSUED_DOCUMENTS_DELIVERY_NOTES_ALL = 'issued_documents.delivery_notes:a'

  /**
     * Read permission to the Received Documents
     * @member {String} RECEIVED_DOCUMENTS_READ
     */
  static RECEIVED_DOCUMENTS_READ = 'received_documents:r'

  /**
     * Write permission to the Received Documents
     * @member {String} RECEIVED_DOCUMENTS_ALL
     */
  static RECEIVED_DOCUMENTS_ALL = 'received_documents:a'

  /**
     * Read permission to the Stock movements
     * @member {String} STOCK_READ
     */
  static STOCK_READ = 'stock:r'

  /**
     * Write permission to the Stock movements
     * @member {String} STOCK_ALL
     */
  static STOCK_ALL = 'stock:a'

  /**
     * Read permission to the Receipts
     * @member {String} RECEIPTS_READ
     */
  static RECEIPTS_READ = 'receipts:r'

  /**
     * Write permission to the Receipts
     * @member {String} RECEIPTS_ALL
     */
  static RECEIPTS_ALL = 'receipts:a'

  /**
     * Read permission to the Taxes
     * @member {String} TAXES_READ
     */
  static TAXES_READ = 'taxes:r'

  /**
     * Write permission to the Taxes
     * @member {String} TAXES_ALL
     */
  static TAXES_ALL = 'taxes:a'

  /**
     * Read permission to the Archive Documents
     * @member {String} ARCHIVE_READ
     */
  static ARCHIVE_READ = 'archive:r'

  /**
     * Read permission to the Archive Documents
     * @member {String} ARCHIVE_ALL
     */
  static ARCHIVE_ALL = 'archive:a'

  /**
     * Read permission to the Cashbook
     * @member {String} CASHBOOK_READ
     */
  static CASHBOOK_READ = 'cashbook:r'

  /**
     * Write permission to the Cashbook
     * @member {String} CASHBOOK_ALL
     */
  static CASHBOOK_ALL = 'cashbook:a'

  /**
     * Read permission to the Settings
     * @member {String} SETTINGS_READ
     */
  static SETTINGS_READ = 'settings:r'

  /**
     * Write permission to the Settings
     * @member {String} SETTINGS_ALL
     */
  static SETTINGS_ALL = 'settings:a'

  /**
     * Read permission to the company Situation
     * @member {String} SITUATION_READ
     */
  static SITUATION_READ = 'situation:r'
}
