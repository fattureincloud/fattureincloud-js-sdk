/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.  For more information, please visit https://www.fattureincloud.it.
 *
 * The version of the OpenAPI document: 2.0.1
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.@FattureincloudFattureincloudJsSdk);
  }
}(this, function(expect, @FattureincloudFattureincloudJsSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new @FattureincloudFattureincloudJsSdk.Permissions();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Permissions', function() {
    it('should create an instance of Permissions', function() {
      // uncomment below and update the code to test Permissions
      //var instane = new @FattureincloudFattureincloudJsSdk.Permissions();
      //expect(instance).to.be.a(@FattureincloudFattureincloudJsSdk.Permissions);
    });

    it('should have the property ficSituation (base name: "fic_situation")', function() {
      // uncomment below and update the code to test the property ficSituation
      //var instance = new @FattureincloudFattureincloudJsSdk.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property ficClients (base name: "fic_clients")', function() {
      // uncomment below and update the code to test the property ficClients
      //var instance = new @FattureincloudFattureincloudJsSdk.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property ficSuppliers (base name: "fic_suppliers")', function() {
      // uncomment below and update the code to test the property ficSuppliers
      //var instance = new @FattureincloudFattureincloudJsSdk.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property ficProducts (base name: "fic_products")', function() {
      // uncomment below and update the code to test the property ficProducts
      //var instance = new @FattureincloudFattureincloudJsSdk.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property ficIssuedDocuments (base name: "fic_issued_documents")', function() {
      // uncomment below and update the code to test the property ficIssuedDocuments
      //var instance = new @FattureincloudFattureincloudJsSdk.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property ficReceivedDocuments (base name: "fic_received_documents")', function() {
      // uncomment below and update the code to test the property ficReceivedDocuments
      //var instance = new @FattureincloudFattureincloudJsSdk.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property ficReceipts (base name: "fic_receipts")', function() {
      // uncomment below and update the code to test the property ficReceipts
      //var instance = new @FattureincloudFattureincloudJsSdk.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property ficCalendar (base name: "fic_calendar")', function() {
      // uncomment below and update the code to test the property ficCalendar
      //var instance = new @FattureincloudFattureincloudJsSdk.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property ficArchive (base name: "fic_archive")', function() {
      // uncomment below and update the code to test the property ficArchive
      //var instance = new @FattureincloudFattureincloudJsSdk.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property ficTaxes (base name: "fic_taxes")', function() {
      // uncomment below and update the code to test the property ficTaxes
      //var instance = new @FattureincloudFattureincloudJsSdk.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property ficStock (base name: "fic_stock")', function() {
      // uncomment below and update the code to test the property ficStock
      //var instance = new @FattureincloudFattureincloudJsSdk.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property ficCashbook (base name: "fic_cashbook")', function() {
      // uncomment below and update the code to test the property ficCashbook
      //var instance = new @FattureincloudFattureincloudJsSdk.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property ficSettings (base name: "fic_settings")', function() {
      // uncomment below and update the code to test the property ficSettings
      //var instance = new @FattureincloudFattureincloudJsSdk.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property ficEmails (base name: "fic_emails")', function() {
      // uncomment below and update the code to test the property ficEmails
      //var instance = new @FattureincloudFattureincloudJsSdk.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property ficExport (base name: "fic_export")', function() {
      // uncomment below and update the code to test the property ficExport
      //var instance = new @FattureincloudFattureincloudJsSdk.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property ficImportBankstatements (base name: "fic_import_bankstatements")', function() {
      // uncomment below and update the code to test the property ficImportBankstatements
      //var instance = new @FattureincloudFattureincloudJsSdk.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property ficImportClientsSuppliers (base name: "fic_import_clients_suppliers")', function() {
      // uncomment below and update the code to test the property ficImportClientsSuppliers
      //var instance = new @FattureincloudFattureincloudJsSdk.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property ficImportIssuedDocuments (base name: "fic_import_issued_documents")', function() {
      // uncomment below and update the code to test the property ficImportIssuedDocuments
      //var instance = new @FattureincloudFattureincloudJsSdk.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property ficImportProducts (base name: "fic_import_products")', function() {
      // uncomment below and update the code to test the property ficImportProducts
      //var instance = new @FattureincloudFattureincloudJsSdk.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property ficRecurring (base name: "fic_recurring")', function() {
      // uncomment below and update the code to test the property ficRecurring
      //var instance = new @FattureincloudFattureincloudJsSdk.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property ficRiba (base name: "fic_riba")', function() {
      // uncomment below and update the code to test the property ficRiba
      //var instance = new @FattureincloudFattureincloudJsSdk.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property dicEmployees (base name: "dic_employees")', function() {
      // uncomment below and update the code to test the property dicEmployees
      //var instance = new @FattureincloudFattureincloudJsSdk.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property dicSettings (base name: "dic_settings")', function() {
      // uncomment below and update the code to test the property dicSettings
      //var instance = new @FattureincloudFattureincloudJsSdk.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property dicTimesheet (base name: "dic_timesheet")', function() {
      // uncomment below and update the code to test the property dicTimesheet
      //var instance = new @FattureincloudFattureincloudJsSdk.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property ficIssuedDocumentsDetailed (base name: "fic_issued_documents_detailed")', function() {
      // uncomment below and update the code to test the property ficIssuedDocumentsDetailed
      //var instance = new @FattureincloudFattureincloudJsSdk.Permissions();
      //expect(instance).to.be();
    });

  });

}));
