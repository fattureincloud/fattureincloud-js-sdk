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
    instance = new fattureInCloudSdk.CreateF24Response();
    instance.data = {
      id : 12345,
      amount : 840.36,
      description : "PAGAMENTO IVA 2021",
      due_date : "2021-12-31",
      status : "paid",
      payment_account : {
        id : 111,
        name : "Indesa - carta conto"
      },
      attachment_url : "b19c01da9b1688fb73d0d9e8adae89a8.pdf"
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

  describe('CreateF24Response', function() {
    it('should create an instance of CreateF24Response', function() {
      expect(instance).to.be.a(fattureInCloudSdk.CreateF24Response);
    });

    it('should have the property data (base name: "data")', function() {
      expect(typeof instance.data).to.be('object');
    });

  });

}));
