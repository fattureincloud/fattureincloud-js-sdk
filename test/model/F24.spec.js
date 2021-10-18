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
    factory(root.expect, root.@FattureincloudFattureincloudJsSdk);
  }
}(this, function(expect, @FattureincloudFattureincloudJsSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new @FattureincloudFattureincloudJsSdk.F24();
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

  describe('F24', function() {
    it('should create an instance of F24', function() {
      // uncomment below and update the code to test F24
      //var instane = new @FattureincloudFattureincloudJsSdk.F24();
      //expect(instance).to.be.a(@FattureincloudFattureincloudJsSdk.F24);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new @FattureincloudFattureincloudJsSdk.F24();
      //expect(instance).to.be();
    });

    it('should have the property dueDate (base name: "due_date")', function() {
      // uncomment below and update the code to test the property dueDate
      //var instance = new @FattureincloudFattureincloudJsSdk.F24();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new @FattureincloudFattureincloudJsSdk.F24();
      //expect(instance).to.be();
    });

    it('should have the property paymentAccount (base name: "payment_account")', function() {
      // uncomment below and update the code to test the property paymentAccount
      //var instance = new @FattureincloudFattureincloudJsSdk.F24();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new @FattureincloudFattureincloudJsSdk.F24();
      //expect(instance).to.be();
    });

    it('should have the property attachmentUrl (base name: "attachment_url")', function() {
      // uncomment below and update the code to test the property attachmentUrl
      //var instance = new @FattureincloudFattureincloudJsSdk.F24();
      //expect(instance).to.be();
    });

    it('should have the property attachmentToken (base name: "attachment_token")', function() {
      // uncomment below and update the code to test the property attachmentToken
      //var instance = new @FattureincloudFattureincloudJsSdk.F24();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new @FattureincloudFattureincloudJsSdk.F24();
      //expect(instance).to.be();
    });

  });

}));
