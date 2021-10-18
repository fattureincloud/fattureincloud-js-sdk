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
    instance = new fattureInCloudSdk.ArchiveDocument();
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

  describe('ArchiveDocument', function() {
    it('should create an instance of ArchiveDocument', function() {
      // uncomment below and update the code to test ArchiveDocument
      //var instane = new fattureInCloudSdk.ArchiveDocument();
      //expect(instance).to.be.a(fattureInCloudSdk.ArchiveDocument);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new fattureInCloudSdk.ArchiveDocument();
      //expect(instance).to.be();
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instance = new fattureInCloudSdk.ArchiveDocument();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new fattureInCloudSdk.ArchiveDocument();
      //expect(instance).to.be();
    });

    it('should have the property attachmentUrl (base name: "attachment_url")', function() {
      // uncomment below and update the code to test the property attachmentUrl
      //var instance = new fattureInCloudSdk.ArchiveDocument();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instance = new fattureInCloudSdk.ArchiveDocument();
      //expect(instance).to.be();
    });

    it('should have the property attachmentToken (base name: "attachment_token")', function() {
      // uncomment below and update the code to test the property attachmentToken
      //var instance = new fattureInCloudSdk.ArchiveDocument();
      //expect(instance).to.be();
    });

  });

}));
