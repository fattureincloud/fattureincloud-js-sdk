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
    instance = new @FattureincloudFattureincloudJsSdk.IssuedDocumentItemsList();
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

  describe('IssuedDocumentItemsList', function() {
    it('should create an instance of IssuedDocumentItemsList', function() {
      // uncomment below and update the code to test IssuedDocumentItemsList
      //var instane = new @FattureincloudFattureincloudJsSdk.IssuedDocumentItemsList();
      //expect(instance).to.be.a(@FattureincloudFattureincloudJsSdk.IssuedDocumentItemsList);
    });

    it('should have the property productId (base name: "product_id")', function() {
      // uncomment below and update the code to test the property productId
      //var instance = new @FattureincloudFattureincloudJsSdk.IssuedDocumentItemsList();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new @FattureincloudFattureincloudJsSdk.IssuedDocumentItemsList();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new @FattureincloudFattureincloudJsSdk.IssuedDocumentItemsList();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new @FattureincloudFattureincloudJsSdk.IssuedDocumentItemsList();
      //expect(instance).to.be();
    });

    it('should have the property qty (base name: "qty")', function() {
      // uncomment below and update the code to test the property qty
      //var instance = new @FattureincloudFattureincloudJsSdk.IssuedDocumentItemsList();
      //expect(instance).to.be();
    });

    it('should have the property measure (base name: "measure")', function() {
      // uncomment below and update the code to test the property measure
      //var instance = new @FattureincloudFattureincloudJsSdk.IssuedDocumentItemsList();
      //expect(instance).to.be();
    });

    it('should have the property netPrice (base name: "net_price")', function() {
      // uncomment below and update the code to test the property netPrice
      //var instance = new @FattureincloudFattureincloudJsSdk.IssuedDocumentItemsList();
      //expect(instance).to.be();
    });

    it('should have the property grossPrice (base name: "gross_price")', function() {
      // uncomment below and update the code to test the property grossPrice
      //var instance = new @FattureincloudFattureincloudJsSdk.IssuedDocumentItemsList();
      //expect(instance).to.be();
    });

    it('should have the property vat (base name: "vat")', function() {
      // uncomment below and update the code to test the property vat
      //var instance = new @FattureincloudFattureincloudJsSdk.IssuedDocumentItemsList();
      //expect(instance).to.be();
    });

    it('should have the property notTaxable (base name: "not_taxable")', function() {
      // uncomment below and update the code to test the property notTaxable
      //var instance = new @FattureincloudFattureincloudJsSdk.IssuedDocumentItemsList();
      //expect(instance).to.be();
    });

    it('should have the property applyWithholdingTaxes (base name: "apply_withholding_taxes")', function() {
      // uncomment below and update the code to test the property applyWithholdingTaxes
      //var instance = new @FattureincloudFattureincloudJsSdk.IssuedDocumentItemsList();
      //expect(instance).to.be();
    });

    it('should have the property discount (base name: "discount")', function() {
      // uncomment below and update the code to test the property discount
      //var instance = new @FattureincloudFattureincloudJsSdk.IssuedDocumentItemsList();
      //expect(instance).to.be();
    });

    it('should have the property discountHighlight (base name: "discount_highlight")', function() {
      // uncomment below and update the code to test the property discountHighlight
      //var instance = new @FattureincloudFattureincloudJsSdk.IssuedDocumentItemsList();
      //expect(instance).to.be();
    });

    it('should have the property inDdt (base name: "in_ddt")', function() {
      // uncomment below and update the code to test the property inDdt
      //var instance = new @FattureincloudFattureincloudJsSdk.IssuedDocumentItemsList();
      //expect(instance).to.be();
    });

    it('should have the property stock (base name: "stock")', function() {
      // uncomment below and update the code to test the property stock
      //var instance = new @FattureincloudFattureincloudJsSdk.IssuedDocumentItemsList();
      //expect(instance).to.be();
    });

    it('should have the property eiRaw (base name: "ei_raw")', function() {
      // uncomment below and update the code to test the property eiRaw
      //var instance = new @FattureincloudFattureincloudJsSdk.IssuedDocumentItemsList();
      //expect(instance).to.be();
    });

  });

}));
