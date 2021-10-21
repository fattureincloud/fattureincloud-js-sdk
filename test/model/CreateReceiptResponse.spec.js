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
    instance = new fattureInCloudSdk.CreateReceiptResponse();
    instance.data = {
      id : 12346,
      date : "2021-08-19",
      number : 6,
      numeration : "REC006",
      amount_net : 8.2,
      amount_vat : 1.8,
      amount_gross : 10,
      use_gross_prices : true,
      type : "sales_receipt",
      description : "cassa 1",
      rc_center : "",
      created_at : "2021-08-19",
      updated_at : "2021-08-19",
      payment_account : {
        id : 555,
        name : "contanti"
      },
      items_list : [
        {
          id : 888,
          amount_net : 8.2,
          amount_vat : 1.8,
          amount_gross : 10,
          category : "altro",
          vat : {
            id : 0,
            value : 22,
            description : "iva"
          }
        }
      ]
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

  describe('CreateReceiptResponse', function() {
    it('should create an instance of CreateReceiptResponse', function() {
      expect(instance).to.be.a(fattureInCloudSdk.CreateReceiptResponse);
    });

    it('should have the property data (base name: "data")', function() {
      expect(typeof instance.data).to.be('object');
    });

  });

}));
