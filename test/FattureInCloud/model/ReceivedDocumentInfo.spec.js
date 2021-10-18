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
    instance = new fattureInCloudSdk.ReceivedDocumentInfo();
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

  describe('ReceivedDocumentInfo', function() {
    it('should create an instance of ReceivedDocumentInfo', function() {
      // uncomment below and update the code to test ReceivedDocumentInfo
      //var instane = new fattureInCloudSdk.ReceivedDocumentInfo();
      //expect(instance).to.be.a(fattureInCloudSdk.ReceivedDocumentInfo);
    });

    it('should have the property defaultValues (base name: "default_values")', function() {
      // uncomment below and update the code to test the property defaultValues
      //var instance = new fattureInCloudSdk.ReceivedDocumentInfo();
      //expect(instance).to.be();
    });

    it('should have the property itemsDefaultValues (base name: "items_default_values")', function() {
      // uncomment below and update the code to test the property itemsDefaultValues
      //var instance = new fattureInCloudSdk.ReceivedDocumentInfo();
      //expect(instance).to.be();
    });

    it('should have the property countriesList (base name: "countries_list")', function() {
      // uncomment below and update the code to test the property countriesList
      //var instance = new fattureInCloudSdk.ReceivedDocumentInfo();
      //expect(instance).to.be();
    });

    it('should have the property currenciesList (base name: "currencies_list")', function() {
      // uncomment below and update the code to test the property currenciesList
      //var instance = new fattureInCloudSdk.ReceivedDocumentInfo();
      //expect(instance).to.be();
    });

    it('should have the property categoriesList (base name: "categories_list")', function() {
      // uncomment below and update the code to test the property categoriesList
      //var instance = new fattureInCloudSdk.ReceivedDocumentInfo();
      //expect(instance).to.be();
    });

    it('should have the property paymentAccountsList (base name: "payment_accounts_list")', function() {
      // uncomment below and update the code to test the property paymentAccountsList
      //var instance = new fattureInCloudSdk.ReceivedDocumentInfo();
      //expect(instance).to.be();
    });

    it('should have the property vatTypesList (base name: "vat_types_list")', function() {
      // uncomment below and update the code to test the property vatTypesList
      //var instance = new fattureInCloudSdk.ReceivedDocumentInfo();
      //expect(instance).to.be();
    });

  });

}));
