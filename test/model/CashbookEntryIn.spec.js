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
    instance = new @FattureincloudFattureincloudJsSdk.CashbookEntryIn();
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

  describe('CashbookEntryIn', function() {
    it('should create an instance of CashbookEntryIn', function() {
      // uncomment below and update the code to test CashbookEntryIn
      //var instane = new @FattureincloudFattureincloudJsSdk.CashbookEntryIn();
      //expect(instance).to.be.a(@FattureincloudFattureincloudJsSdk.CashbookEntryIn);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new @FattureincloudFattureincloudJsSdk.CashbookEntryIn();
      //expect(instance).to.be();
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instance = new @FattureincloudFattureincloudJsSdk.CashbookEntryIn();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new @FattureincloudFattureincloudJsSdk.CashbookEntryIn();
      //expect(instance).to.be();
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instance = new @FattureincloudFattureincloudJsSdk.CashbookEntryIn();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new @FattureincloudFattureincloudJsSdk.CashbookEntryIn();
      //expect(instance).to.be();
    });

    it('should have the property entityName (base name: "entity_name")', function() {
      // uncomment below and update the code to test the property entityName
      //var instance = new @FattureincloudFattureincloudJsSdk.CashbookEntryIn();
      //expect(instance).to.be();
    });

    it('should have the property document (base name: "document")', function() {
      // uncomment below and update the code to test the property document
      //var instance = new @FattureincloudFattureincloudJsSdk.CashbookEntryIn();
      //expect(instance).to.be();
    });

    it('should have the property amountIn (base name: "amount_in")', function() {
      // uncomment below and update the code to test the property amountIn
      //var instance = new @FattureincloudFattureincloudJsSdk.CashbookEntryIn();
      //expect(instance).to.be();
    });

    it('should have the property paymentAccountIn (base name: "payment_account_in")', function() {
      // uncomment below and update the code to test the property paymentAccountIn
      //var instance = new @FattureincloudFattureincloudJsSdk.CashbookEntryIn();
      //expect(instance).to.be();
    });

  });

}));
