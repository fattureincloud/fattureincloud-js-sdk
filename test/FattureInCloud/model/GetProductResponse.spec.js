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
    instance = new fattureInCloudSdk.GetProductResponse();
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

  describe('GetProductResponse', function() {
    it('should create an instance of GetProductResponse', function() {
      // uncomment below and update the code to test GetProductResponse
      //var instane = new fattureInCloudSdk.GetProductResponse();
      //expect(instance).to.be.a(fattureInCloudSdk.GetProductResponse);
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new fattureInCloudSdk.GetProductResponse();
      //expect(instance).to.be();
    });

  });

}));
