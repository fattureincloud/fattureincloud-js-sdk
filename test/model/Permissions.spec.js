/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol. For more information, please visit https://www.fattureincloud.it.
 *
 * The version of the OpenAPI document: 2.0.2
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd() + '/src/index'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd() + '/src/index'))
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.fattureInCloudSdk)
  }
}(this, function (expect, fattureInCloudSdk) {
  'use strict'

  let instance

  beforeEach(function () {
    instance = new fattureInCloudSdk.Permissions()
    instance.fic_situation = 'write'
    instance.fic_clients = 'write'
    instance.fic_suppliers = 'write'
    instance.fic_products = 'write'
    instance.fic_issued_documents = 'write'
    instance.fic_received_documents = 'write'
    instance.fic_receipts = 'write'
    instance.fic_calendar = 'write'
    instance.fic_archive = 'write'
    instance.fic_taxes = 'write'
    instance.fic_stock = 'write'
    instance.fic_cashbook = 'write'
    instance.fic_settings = 'write'
    instance.fic_emails = 'write'
    instance.dic_employees = 'write'
    instance.dic_timesheet = 'write'
    instance.dic_settings = 'write'
    instance.fic_export = 'write'
    instance.fic_import_bankstatements = 'write'
    instance.fic_import_clients_suppliers = 'write'
    instance.fic_import_issued_documents = 'write'
    instance.fic_import_products = 'write'
    instance.fic_recurring = 'write'
    instance.fic_riba = 'write'
    instance.fic_issued_documents_detailed = {
      quotes: 'write',
      proformas: 'write',
      invoices: 'write',
      receipts: 'write',
      delivery_notes: 'write',
      credit_notes: 'write',
      orders: 'write',
      work_reports: 'write',
      supplier_orders: 'write',
      self_invoices: 'write'
    }
  })

  // const getProperty = function (object, getter, property) {
  //   // Use getter method if present; otherwise, get the property directly.
  //   if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
  // }

  // const setProperty = function (object, setter, property, value) {
  //   // Use setter method if present; otherwise, set the property directly.
  //   if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
  // }

  describe('Permissions', function () {
    it('should create an instance of Permissions', function () {
      expect(instance).to.be.a(fattureInCloudSdk.Permissions)
    })

    it('should have the property ficSituation (base name: "fic_situation")', function () {
      expect(typeof instance.fic_situation).to.be('string')
    })

    it('should have the property ficClients (base name: "fic_clients")', function () {
      expect(typeof instance.fic_clients).to.be('string')
    })

    it('should have the property ficSuppliers (base name: "fic_suppliers")', function () {
      expect(typeof instance.fic_suppliers).to.be('string')
    })

    it('should have the property ficProducts (base name: "fic_products")', function () {
      expect(typeof instance.fic_products).to.be('string')
    })

    it('should have the property ficIssuedDocuments (base name: "fic_issued_documents")', function () {
      expect(typeof instance.fic_issued_documents).to.be('string')
    })

    it('should have the property ficReceivedDocuments (base name: "fic_received_documents")', function () {
      expect(typeof instance.fic_received_documents).to.be('string')
    })

    it('should have the property ficReceipts (base name: "fic_receipts")', function () {
      expect(typeof instance.fic_receipts).to.be('string')
    })

    it('should have the property ficCalendar (base name: "fic_calendar")', function () {
      expect(typeof instance.fic_calendar).to.be('string')
    })

    it('should have the property ficArchive (base name: "fic_archive")', function () {
      expect(typeof instance.fic_archive).to.be('string')
    })

    it('should have the property ficTaxes (base name: "fic_taxes")', function () {
      expect(typeof instance.fic_taxes).to.be('string')
    })

    it('should have the property ficStock (base name: "fic_stock")', function () {
      expect(typeof instance.fic_stock).to.be('string')
    })

    it('should have the property ficCashbook (base name: "fic_cashbook")', function () {
      expect(typeof instance.fic_cashbook).to.be('string')
    })

    it('should have the property ficSettings (base name: "fic_settings")', function () {
      expect(typeof instance.fic_settings).to.be('string')
    })

    it('should have the property ficEmails (base name: "fic_emails")', function () {
      expect(typeof instance.fic_emails).to.be('string')
    })

    it('should have the property ficExport (base name: "fic_export")', function () {
      expect(typeof instance.fic_export).to.be('string')
    })

    it('should have the property ficImportBankstatements (base name: "fic_import_bankstatements")', function () {
      expect(typeof instance.fic_import_bankstatements).to.be('string')
    })

    it('should have the property ficImportClientsSuppliers (base name: "fic_import_clients_suppliers")', function () {
      expect(typeof instance.fic_import_clients_suppliers).to.be('string')
    })

    it('should have the property ficImportIssuedDocuments (base name: "fic_import_issued_documents")', function () {
      expect(typeof instance.fic_import_issued_documents).to.be('string')
    })

    it('should have the property ficImportProducts (base name: "fic_import_products")', function () {
      expect(typeof instance.fic_import_products).to.be('string')
    })

    it('should have the property ficRecurring (base name: "fic_recurring")', function () {
      expect(typeof instance.fic_recurring).to.be('string')
    })

    it('should have the property ficRiba (base name: "fic_riba")', function () {
      expect(typeof instance.fic_riba).to.be('string')
    })

    it('should have the property dicEmployees (base name: "dic_employees")', function () {
      expect(typeof instance.dic_employees).to.be('string')
    })

    it('should have the property dicSettings (base name: "dic_settings")', function () {
      expect(typeof instance.dic_settings).to.be('string')
    })

    it('should have the property dicTimesheet (base name: "dic_timesheet")', function () {
      expect(typeof instance.dic_timesheet).to.be('string')
    })

    it('should have the property ficIssuedDocumentsDetailed (base name: "fic_issued_documents_detailed")', function () {
      expect(typeof instance.fic_issued_documents_detailed).to.be('object')
    })
  })
}))
