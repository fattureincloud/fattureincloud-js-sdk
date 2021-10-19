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
    instance = new fattureInCloudSdk.Product();
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

  describe('Product', function() {
    it('should create an instance of Product', function() {
      // uncomment below and update the code to test Product
      //var instane = new fattureInCloudSdk.Product();
      //expect(instance).to.be.a(fattureInCloudSdk.Product);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new fattureInCloudSdk.Product();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new fattureInCloudSdk.Product();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new fattureInCloudSdk.Product();
      //expect(instance).to.be();
    });

    it('should have the property netPrice (base name: "net_price")', function() {
      // uncomment below and update the code to test the property netPrice
      //var instance = new fattureInCloudSdk.Product();
      //expect(instance).to.be();
    });

    it('should have the property grossPrice (base name: "gross_price")', function() {
      // uncomment below and update the code to test the property grossPrice
      //var instance = new fattureInCloudSdk.Product();
      //expect(instance).to.be();
    });

    it('should have the property useGrossPrice (base name: "use_gross_price")', function() {
      // uncomment below and update the code to test the property useGrossPrice
      //var instance = new fattureInCloudSdk.Product();
      //expect(instance).to.be();
    });

    it('should have the property defaultVat (base name: "default_vat")', function() {
      // uncomment below and update the code to test the property defaultVat
      //var instance = new fattureInCloudSdk.Product();
      //expect(instance).to.be();
    });

    it('should have the property netCost (base name: "net_cost")', function() {
      // uncomment below and update the code to test the property netCost
      //var instance = new fattureInCloudSdk.Product();
      //expect(instance).to.be();
    });

    it('should have the property measure (base name: "measure")', function() {
      // uncomment below and update the code to test the property measure
      //var instance = new fattureInCloudSdk.Product();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new fattureInCloudSdk.Product();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instance = new fattureInCloudSdk.Product();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new fattureInCloudSdk.Product();
      //expect(instance).to.be();
    });

    it('should have the property inStock (base name: "in_stock")', function() {
      // uncomment below and update the code to test the property inStock
      //var instance = new fattureInCloudSdk.Product();
      //expect(instance).to.be();
    });

    it('should have the property stockInitial (base name: "stock_initial")', function() {
      // uncomment below and update the code to test the property stockInitial
      //var instance = new fattureInCloudSdk.Product();
      //expect(instance).to.be();
    });

    it('should have the property stockCurrent (base name: "stock_current")', function() {
      // uncomment below and update the code to test the property stockCurrent
      //var instance = new fattureInCloudSdk.Product();
      //expect(instance).to.be();
    });

    it('should have the property averageCost (base name: "average_cost")', function() {
      // uncomment below and update the code to test the property averageCost
      //var instance = new fattureInCloudSdk.Product();
      //expect(instance).to.be();
    });

    it('should have the property averagePrice (base name: "average_price")', function() {
      // uncomment below and update the code to test the property averagePrice
      //var instance = new fattureInCloudSdk.Product();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new fattureInCloudSdk.Product();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new fattureInCloudSdk.Product();
      //expect(instance).to.be();
    });

  });

}));
