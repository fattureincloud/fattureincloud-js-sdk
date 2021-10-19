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
    factory(root.expect, root.fattureInCloudSdk);
  }
}(this, function(expect, fattureInCloudSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new fattureInCloudSdk.CompanyInfoPlanInfoFunctions();
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

  describe('CompanyInfoPlanInfoFunctions', function() {
    it('should create an instance of CompanyInfoPlanInfoFunctions', function() {
      // uncomment below and update the code to test CompanyInfoPlanInfoFunctions
      //var instane = new fattureInCloudSdk.CompanyInfoPlanInfoFunctions();
      //expect(instance).to.be.a(fattureInCloudSdk.CompanyInfoPlanInfoFunctions);
    });

    it('should have the property archive (base name: "archive")', function() {
      // uncomment below and update the code to test the property archive
      //var instance = new fattureInCloudSdk.CompanyInfoPlanInfoFunctions();
      //expect(instance).to.be();
    });

    it('should have the property cerved (base name: "cerved")', function() {
      // uncomment below and update the code to test the property cerved
      //var instance = new fattureInCloudSdk.CompanyInfoPlanInfoFunctions();
      //expect(instance).to.be();
    });

    it('should have the property documentAttachments (base name: "document_attachments")', function() {
      // uncomment below and update the code to test the property documentAttachments
      //var instance = new fattureInCloudSdk.CompanyInfoPlanInfoFunctions();
      //expect(instance).to.be();
    });

    it('should have the property eInvoice (base name: "e_invoice")', function() {
      // uncomment below and update the code to test the property eInvoice
      //var instance = new fattureInCloudSdk.CompanyInfoPlanInfoFunctions();
      //expect(instance).to.be();
    });

    it('should have the property genius (base name: "genius")', function() {
      // uncomment below and update the code to test the property genius
      //var instance = new fattureInCloudSdk.CompanyInfoPlanInfoFunctions();
      //expect(instance).to.be();
    });

    it('should have the property mailTracking (base name: "mail_tracking")', function() {
      // uncomment below and update the code to test the property mailTracking
      //var instance = new fattureInCloudSdk.CompanyInfoPlanInfoFunctions();
      //expect(instance).to.be();
    });

    it('should have the property paymentNotifications (base name: "payment_notifications")', function() {
      // uncomment below and update the code to test the property paymentNotifications
      //var instance = new fattureInCloudSdk.CompanyInfoPlanInfoFunctions();
      //expect(instance).to.be();
    });

    it('should have the property paypal (base name: "paypal")', function() {
      // uncomment below and update the code to test the property paypal
      //var instance = new fattureInCloudSdk.CompanyInfoPlanInfoFunctions();
      //expect(instance).to.be();
    });

    it('should have the property receipts (base name: "receipts")', function() {
      // uncomment below and update the code to test the property receipts
      //var instance = new fattureInCloudSdk.CompanyInfoPlanInfoFunctions();
      //expect(instance).to.be();
    });

    it('should have the property recurring (base name: "recurring")', function() {
      // uncomment below and update the code to test the property recurring
      //var instance = new fattureInCloudSdk.CompanyInfoPlanInfoFunctions();
      //expect(instance).to.be();
    });

    it('should have the property smtp (base name: "smtp")', function() {
      // uncomment below and update the code to test the property smtp
      //var instance = new fattureInCloudSdk.CompanyInfoPlanInfoFunctions();
      //expect(instance).to.be();
    });

    it('should have the property sofort (base name: "sofort")', function() {
      // uncomment below and update the code to test the property sofort
      //var instance = new fattureInCloudSdk.CompanyInfoPlanInfoFunctions();
      //expect(instance).to.be();
    });

    it('should have the property stock (base name: "stock")', function() {
      // uncomment below and update the code to test the property stock
      //var instance = new fattureInCloudSdk.CompanyInfoPlanInfoFunctions();
      //expect(instance).to.be();
    });

    it('should have the property subaccounts (base name: "subaccounts")', function() {
      // uncomment below and update the code to test the property subaccounts
      //var instance = new fattureInCloudSdk.CompanyInfoPlanInfoFunctions();
      //expect(instance).to.be();
    });

    it('should have the property tesseraSanitaria (base name: "tessera_sanitaria")', function() {
      // uncomment below and update the code to test the property tesseraSanitaria
      //var instance = new fattureInCloudSdk.CompanyInfoPlanInfoFunctions();
      //expect(instance).to.be();
    });

    it('should have the property tsDigital (base name: "ts_digital")', function() {
      // uncomment below and update the code to test the property tsDigital
      //var instance = new fattureInCloudSdk.CompanyInfoPlanInfoFunctions();
      //expect(instance).to.be();
    });

    it('should have the property tsInvoiceTrading (base name: "ts_invoice_trading")', function() {
      // uncomment below and update the code to test the property tsInvoiceTrading
      //var instance = new fattureInCloudSdk.CompanyInfoPlanInfoFunctions();
      //expect(instance).to.be();
    });

    it('should have the property tsPay (base name: "ts_pay")', function() {
      // uncomment below and update the code to test the property tsPay
      //var instance = new fattureInCloudSdk.CompanyInfoPlanInfoFunctions();
      //expect(instance).to.be();
    });

  });

}));