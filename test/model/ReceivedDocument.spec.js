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
    instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
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

  describe('ReceivedDocument', function() {
    it('should create an instance of ReceivedDocument', function() {
      // uncomment below and update the code to test ReceivedDocument
      //var instane = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be.a(@FattureincloudFattureincloudJsSdk.ReceivedDocument);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be();
    });

    it('should have the property entity (base name: "entity")', function() {
      // uncomment below and update the code to test the property entity
      //var instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be();
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be();
    });

    it('should have the property amountNet (base name: "amount_net")', function() {
      // uncomment below and update the code to test the property amountNet
      //var instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be();
    });

    it('should have the property amountVat (base name: "amount_vat")', function() {
      // uncomment below and update the code to test the property amountVat
      //var instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be();
    });

    it('should have the property amountWithholdingTax (base name: "amount_withholding_tax")', function() {
      // uncomment below and update the code to test the property amountWithholdingTax
      //var instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be();
    });

    it('should have the property amountOtherWithholdingTax (base name: "amount_other_withholding_tax")', function() {
      // uncomment below and update the code to test the property amountOtherWithholdingTax
      //var instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be();
    });

    it('should have the property amountGross (base name: "amount_gross")', function() {
      // uncomment below and update the code to test the property amountGross
      //var instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be();
    });

    it('should have the property amortization (base name: "amortization")', function() {
      // uncomment below and update the code to test the property amortization
      //var instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be();
    });

    it('should have the property rcCenter (base name: "rc_center")', function() {
      // uncomment below and update the code to test the property rcCenter
      //var instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be();
    });

    it('should have the property invoiceNumber (base name: "invoice_number")', function() {
      // uncomment below and update the code to test the property invoiceNumber
      //var instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be();
    });

    it('should have the property isMarked (base name: "is_marked")', function() {
      // uncomment below and update the code to test the property isMarked
      //var instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be();
    });

    it('should have the property isDetailed (base name: "is_detailed")', function() {
      // uncomment below and update the code to test the property isDetailed
      //var instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be();
    });

    it('should have the property eInvoice (base name: "e_invoice")', function() {
      // uncomment below and update the code to test the property eInvoice
      //var instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be();
    });

    it('should have the property nextDueDate (base name: "next_due_date")', function() {
      // uncomment below and update the code to test the property nextDueDate
      //var instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be();
    });

    it('should have the property taxDeductibility (base name: "tax_deductibility")', function() {
      // uncomment below and update the code to test the property taxDeductibility
      //var instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be();
    });

    it('should have the property vatDeductibility (base name: "vat_deductibility")', function() {
      // uncomment below and update the code to test the property vatDeductibility
      //var instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be();
    });

    it('should have the property itemsList (base name: "items_list")', function() {
      // uncomment below and update the code to test the property itemsList
      //var instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be();
    });

    it('should have the property paymentsList (base name: "payments_list")', function() {
      // uncomment below and update the code to test the property paymentsList
      //var instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be();
    });

    it('should have the property attachmentUrl (base name: "attachment_url")', function() {
      // uncomment below and update the code to test the property attachmentUrl
      //var instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be();
    });

    it('should have the property attachmentPreviewUrl (base name: "attachment_preview_url")', function() {
      // uncomment below and update the code to test the property attachmentPreviewUrl
      //var instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be();
    });

    it('should have the property attachmentToken (base name: "attachment_token")', function() {
      // uncomment below and update the code to test the property attachmentToken
      //var instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocument();
      //expect(instance).to.be();
    });

  });

}));
