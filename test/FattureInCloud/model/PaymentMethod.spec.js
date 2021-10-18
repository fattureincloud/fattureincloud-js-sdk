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
    instance = new fattureInCloudSdk.PaymentMethod();
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

  describe('PaymentMethod', function() {
    it('should create an instance of PaymentMethod', function() {
      // uncomment below and update the code to test PaymentMethod
      //var instane = new fattureInCloudSdk.PaymentMethod();
      //expect(instance).to.be.a(fattureInCloudSdk.PaymentMethod);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new fattureInCloudSdk.PaymentMethod();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new fattureInCloudSdk.PaymentMethod();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new fattureInCloudSdk.PaymentMethod();
      //expect(instance).to.be();
    });

    it('should have the property isDefault (base name: "is_default")', function() {
      // uncomment below and update the code to test the property isDefault
      //var instance = new fattureInCloudSdk.PaymentMethod();
      //expect(instance).to.be();
    });

    it('should have the property defaultPaymentAccount (base name: "default_payment_account")', function() {
      // uncomment below and update the code to test the property defaultPaymentAccount
      //var instance = new fattureInCloudSdk.PaymentMethod();
      //expect(instance).to.be();
    });

    it('should have the property details (base name: "details")', function() {
      // uncomment below and update the code to test the property details
      //var instance = new fattureInCloudSdk.PaymentMethod();
      //expect(instance).to.be();
    });

    it('should have the property bankIban (base name: "bank_iban")', function() {
      // uncomment below and update the code to test the property bankIban
      //var instance = new fattureInCloudSdk.PaymentMethod();
      //expect(instance).to.be();
    });

    it('should have the property bankName (base name: "bank_name")', function() {
      // uncomment below and update the code to test the property bankName
      //var instance = new fattureInCloudSdk.PaymentMethod();
      //expect(instance).to.be();
    });

    it('should have the property bankBeneficiary (base name: "bank_beneficiary")', function() {
      // uncomment below and update the code to test the property bankBeneficiary
      //var instance = new fattureInCloudSdk.PaymentMethod();
      //expect(instance).to.be();
    });

    it('should have the property eiPaymentMethod (base name: "ei_payment_method")', function() {
      // uncomment below and update the code to test the property eiPaymentMethod
      //var instance = new fattureInCloudSdk.PaymentMethod();
      //expect(instance).to.be();
    });

  });

}));
