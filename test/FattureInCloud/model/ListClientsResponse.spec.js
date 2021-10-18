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
    instance = new fattureInCloudSdk.ListClientsResponse();
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

  describe('ListClientsResponse', function() {
    it('should create an instance of ListClientsResponse', function() {
      // uncomment below and update the code to test ListClientsResponse
      //var instane = new fattureInCloudSdk.ListClientsResponse();
      //expect(instance).to.be.a(fattureInCloudSdk.ListClientsResponse);
    });

    it('should have the property currentPage (base name: "current_page")', function() {
      // uncomment below and update the code to test the property currentPage
      //var instance = new fattureInCloudSdk.ListClientsResponse();
      //expect(instance).to.be();
    });

    it('should have the property firstPageUrl (base name: "first_page_url")', function() {
      // uncomment below and update the code to test the property firstPageUrl
      //var instance = new fattureInCloudSdk.ListClientsResponse();
      //expect(instance).to.be();
    });

    it('should have the property from (base name: "from")', function() {
      // uncomment below and update the code to test the property from
      //var instance = new fattureInCloudSdk.ListClientsResponse();
      //expect(instance).to.be();
    });

    it('should have the property lastPage (base name: "last_page")', function() {
      // uncomment below and update the code to test the property lastPage
      //var instance = new fattureInCloudSdk.ListClientsResponse();
      //expect(instance).to.be();
    });

    it('should have the property lastPageUrl (base name: "last_page_url")', function() {
      // uncomment below and update the code to test the property lastPageUrl
      //var instance = new fattureInCloudSdk.ListClientsResponse();
      //expect(instance).to.be();
    });

    it('should have the property nextPageUrl (base name: "next_page_url")', function() {
      // uncomment below and update the code to test the property nextPageUrl
      //var instance = new fattureInCloudSdk.ListClientsResponse();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instance = new fattureInCloudSdk.ListClientsResponse();
      //expect(instance).to.be();
    });

    it('should have the property perPage (base name: "per_page")', function() {
      // uncomment below and update the code to test the property perPage
      //var instance = new fattureInCloudSdk.ListClientsResponse();
      //expect(instance).to.be();
    });

    it('should have the property prevPageUrl (base name: "prev_page_url")', function() {
      // uncomment below and update the code to test the property prevPageUrl
      //var instance = new fattureInCloudSdk.ListClientsResponse();
      //expect(instance).to.be();
    });

    it('should have the property to (base name: "to")', function() {
      // uncomment below and update the code to test the property to
      //var instance = new fattureInCloudSdk.ListClientsResponse();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instance = new fattureInCloudSdk.ListClientsResponse();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new fattureInCloudSdk.ListClientsResponse();
      //expect(instance).to.be();
    });

  });

}));
