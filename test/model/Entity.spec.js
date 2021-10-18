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
    instance = new fattureInCloudSdk.Entity();
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

  describe('Entity', function() {
    it('should create an instance of Entity', function() {
      // uncomment below and update the code to test Entity
      //var instane = new fattureInCloudSdk.Entity();
      //expect(instance).to.be.a(fattureInCloudSdk.Entity);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "first_name")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "last_name")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property contactPerson (base name: "contact_person")', function() {
      // uncomment below and update the code to test the property contactPerson
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property vatNumber (base name: "vat_number")', function() {
      // uncomment below and update the code to test the property vatNumber
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property taxCode (base name: "tax_code")', function() {
      // uncomment below and update the code to test the property taxCode
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property addressStreet (base name: "address_street")', function() {
      // uncomment below and update the code to test the property addressStreet
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property addressPostalCode (base name: "address_postal_code")', function() {
      // uncomment below and update the code to test the property addressPostalCode
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property addressCity (base name: "address_city")', function() {
      // uncomment below and update the code to test the property addressCity
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property addressProvince (base name: "address_province")', function() {
      // uncomment below and update the code to test the property addressProvince
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property addressExtra (base name: "address_extra")', function() {
      // uncomment below and update the code to test the property addressExtra
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property certifiedEmail (base name: "certified_email")', function() {
      // uncomment below and update the code to test the property certifiedEmail
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property fax (base name: "fax")', function() {
      // uncomment below and update the code to test the property fax
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property defaultVat (base name: "default_vat")', function() {
      // uncomment below and update the code to test the property defaultVat
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property defaultPaymentTerms (base name: "default_payment_terms")', function() {
      // uncomment below and update the code to test the property defaultPaymentTerms
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property defaultPaymentTermsType (base name: "default_payment_terms_type")', function() {
      // uncomment below and update the code to test the property defaultPaymentTermsType
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property defaultPaymentMethod (base name: "default_payment_method")', function() {
      // uncomment below and update the code to test the property defaultPaymentMethod
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property bankName (base name: "bank_name")', function() {
      // uncomment below and update the code to test the property bankName
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property bankIban (base name: "bank_iban")', function() {
      // uncomment below and update the code to test the property bankIban
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property bankSwiftCode (base name: "bank_swift_code")', function() {
      // uncomment below and update the code to test the property bankSwiftCode
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property shippingAddress (base name: "shipping_address")', function() {
      // uncomment below and update the code to test the property shippingAddress
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property eInvoice (base name: "e_invoice")', function() {
      // uncomment below and update the code to test the property eInvoice
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property eiCode (base name: "ei_code")', function() {
      // uncomment below and update the code to test the property eiCode
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new fattureInCloudSdk.Entity();
      //expect(instance).to.be();
    });

  });

}));