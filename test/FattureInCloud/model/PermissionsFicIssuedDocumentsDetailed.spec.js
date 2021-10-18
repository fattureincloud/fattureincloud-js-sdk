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
    define(['expect.js', process.cwd()+'/src/FattureInCloud/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/FattureInCloud/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.fattureInCloudSdk);
  }
}(this, function(expect, fattureInCloudSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new fattureInCloudSdk.PermissionsFicIssuedDocumentsDetailed();
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

  describe('PermissionsFicIssuedDocumentsDetailed', function() {
    it('should create an instance of PermissionsFicIssuedDocumentsDetailed', function() {
      // uncomment below and update the code to test PermissionsFicIssuedDocumentsDetailed
      //var instane = new fattureInCloudSdk.PermissionsFicIssuedDocumentsDetailed();
      //expect(instance).to.be.a(fattureInCloudSdk.PermissionsFicIssuedDocumentsDetailed);
    });

    it('should have the property quotes (base name: "quotes")', function() {
      // uncomment below and update the code to test the property quotes
      //var instance = new fattureInCloudSdk.PermissionsFicIssuedDocumentsDetailed();
      //expect(instance).to.be();
    });

    it('should have the property proformas (base name: "proformas")', function() {
      // uncomment below and update the code to test the property proformas
      //var instance = new fattureInCloudSdk.PermissionsFicIssuedDocumentsDetailed();
      //expect(instance).to.be();
    });

    it('should have the property invoices (base name: "invoices")', function() {
      // uncomment below and update the code to test the property invoices
      //var instance = new fattureInCloudSdk.PermissionsFicIssuedDocumentsDetailed();
      //expect(instance).to.be();
    });

    it('should have the property receipts (base name: "receipts")', function() {
      // uncomment below and update the code to test the property receipts
      //var instance = new fattureInCloudSdk.PermissionsFicIssuedDocumentsDetailed();
      //expect(instance).to.be();
    });

    it('should have the property deliveryNotes (base name: "delivery_notes")', function() {
      // uncomment below and update the code to test the property deliveryNotes
      //var instance = new fattureInCloudSdk.PermissionsFicIssuedDocumentsDetailed();
      //expect(instance).to.be();
    });

    it('should have the property creditNotes (base name: "credit_notes")', function() {
      // uncomment below and update the code to test the property creditNotes
      //var instance = new fattureInCloudSdk.PermissionsFicIssuedDocumentsDetailed();
      //expect(instance).to.be();
    });

    it('should have the property orders (base name: "orders")', function() {
      // uncomment below and update the code to test the property orders
      //var instance = new fattureInCloudSdk.PermissionsFicIssuedDocumentsDetailed();
      //expect(instance).to.be();
    });

    it('should have the property workReports (base name: "work_reports")', function() {
      // uncomment below and update the code to test the property workReports
      //var instance = new fattureInCloudSdk.PermissionsFicIssuedDocumentsDetailed();
      //expect(instance).to.be();
    });

    it('should have the property supplierOrders (base name: "supplier_orders")', function() {
      // uncomment below and update the code to test the property supplierOrders
      //var instance = new fattureInCloudSdk.PermissionsFicIssuedDocumentsDetailed();
      //expect(instance).to.be();
    });

    it('should have the property selfInvoices (base name: "self_invoices")', function() {
      // uncomment below and update the code to test the property selfInvoices
      //var instance = new fattureInCloudSdk.PermissionsFicIssuedDocumentsDetailed();
      //expect(instance).to.be();
    });

  });

}));
