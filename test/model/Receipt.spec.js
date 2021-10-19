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
    instance = new fattureInCloudSdk.Receipt();
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

  describe('Receipt', function() {
    it('should create an instance of Receipt', function() {
      // uncomment below and update the code to test Receipt
      //var instane = new fattureInCloudSdk.Receipt();
      //expect(instance).to.be.a(fattureInCloudSdk.Receipt);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new fattureInCloudSdk.Receipt();
      //expect(instance).to.be();
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instance = new fattureInCloudSdk.Receipt();
      //expect(instance).to.be();
    });

    it('should have the property number (base name: "number")', function() {
      // uncomment below and update the code to test the property number
      //var instance = new fattureInCloudSdk.Receipt();
      //expect(instance).to.be();
    });

    it('should have the property numeration (base name: "numeration")', function() {
      // uncomment below and update the code to test the property numeration
      //var instance = new fattureInCloudSdk.Receipt();
      //expect(instance).to.be();
    });

    it('should have the property amountNet (base name: "amount_net")', function() {
      // uncomment below and update the code to test the property amountNet
      //var instance = new fattureInCloudSdk.Receipt();
      //expect(instance).to.be();
    });

    it('should have the property amountVat (base name: "amount_vat")', function() {
      // uncomment below and update the code to test the property amountVat
      //var instance = new fattureInCloudSdk.Receipt();
      //expect(instance).to.be();
    });

    it('should have the property amountGross (base name: "amount_gross")', function() {
      // uncomment below and update the code to test the property amountGross
      //var instance = new fattureInCloudSdk.Receipt();
      //expect(instance).to.be();
    });

    it('should have the property useGrossPrices (base name: "use_gross_prices")', function() {
      // uncomment below and update the code to test the property useGrossPrices
      //var instance = new fattureInCloudSdk.Receipt();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new fattureInCloudSdk.Receipt();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new fattureInCloudSdk.Receipt();
      //expect(instance).to.be();
    });

    it('should have the property rcCenter (base name: "rc_center")', function() {
      // uncomment below and update the code to test the property rcCenter
      //var instance = new fattureInCloudSdk.Receipt();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new fattureInCloudSdk.Receipt();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new fattureInCloudSdk.Receipt();
      //expect(instance).to.be();
    });

    it('should have the property paymentAccount (base name: "payment_account")', function() {
      // uncomment below and update the code to test the property paymentAccount
      //var instance = new fattureInCloudSdk.Receipt();
      //expect(instance).to.be();
    });

    it('should have the property itemsList (base name: "items_list")', function() {
      // uncomment below and update the code to test the property itemsList
      //var instance = new fattureInCloudSdk.Receipt();
      //expect(instance).to.be();
    });

  });

}));
