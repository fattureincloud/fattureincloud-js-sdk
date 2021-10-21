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
    instance = new fattureInCloudSdk.CashbookEntryIn();
    instance.id = 12345;
    instance.date = "2021-08-24";
    instance.description = "Fattura n. 201/2021";
    instance.entity_name = "Rossi S.r.l.";
    instance.kind = "issued_document";
    instance.type = "in";
    instance.amount_in = 100;
    instance.payment_account_in = {
                    id : 333
                },
    instance.document = {
                    id : 12345,
                    type : "issued_document",
                    path : "/doc1.pdf"
                }
    
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
      expect(instance).to.be.a(fattureInCloudSdk.CashbookEntryIn);
    });

    it('should have the property id (base name: "id")', function() {
      expect(typeof instance.id).to.be('number');
    });

    it('should have the property date (base name: "date")', function() {
      expect(typeof instance.date).to.be('string');
    });

    it('should have the property description (base name: "description")', function() {
      expect(typeof instance.description).to.be('string');
    });

    it('should have the property kind (base name: "kind")', function() {
      expect(typeof instance.kind).to.be('string');
    });

    it('should have the property type (base name: "type")', function() {
      expect(typeof instance.type).to.be('string');
    });

    it('should have the property entityName (base name: "entity_name")', function() {
      expect(typeof instance.entity_name).to.be('string');
    });

    it('should have the property document (base name: "document")', function() {
      expect(typeof instance.document).to.be('object');
    });

    it('should have the property amountIn (base name: "amount_in")', function() {
      expect(typeof instance.amount_in).to.be('number');
    });

    it('should have the property paymentAccountIn (base name: "payment_account_in")', function() {
      expect(typeof instance.payment_account_in).to.be('object');
    });

  });

}));
