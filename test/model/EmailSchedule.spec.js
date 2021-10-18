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
    instance = new fattureInCloudSdk.EmailSchedule();
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

  describe('EmailSchedule', function() {
    it('should create an instance of EmailSchedule', function() {
      // uncomment below and update the code to test EmailSchedule
      //var instane = new fattureInCloudSdk.EmailSchedule();
      //expect(instance).to.be.a(fattureInCloudSdk.EmailSchedule);
    });

    it('should have the property senderId (base name: "sender_id")', function() {
      // uncomment below and update the code to test the property senderId
      //var instance = new fattureInCloudSdk.EmailSchedule();
      //expect(instance).to.be();
    });

    it('should have the property senderEmail (base name: "sender_email")', function() {
      // uncomment below and update the code to test the property senderEmail
      //var instance = new fattureInCloudSdk.EmailSchedule();
      //expect(instance).to.be();
    });

    it('should have the property recipientEmail (base name: "recipient_email")', function() {
      // uncomment below and update the code to test the property recipientEmail
      //var instance = new fattureInCloudSdk.EmailSchedule();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instance = new fattureInCloudSdk.EmailSchedule();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instance = new fattureInCloudSdk.EmailSchedule();
      //expect(instance).to.be();
    });

    it('should have the property include (base name: "include")', function() {
      // uncomment below and update the code to test the property include
      //var instance = new fattureInCloudSdk.EmailSchedule();
      //expect(instance).to.be();
    });

    it('should have the property attachPdf (base name: "attach_pdf")', function() {
      // uncomment below and update the code to test the property attachPdf
      //var instance = new fattureInCloudSdk.EmailSchedule();
      //expect(instance).to.be();
    });

    it('should have the property sendCopy (base name: "send_copy")', function() {
      // uncomment below and update the code to test the property sendCopy
      //var instance = new fattureInCloudSdk.EmailSchedule();
      //expect(instance).to.be();
    });

  });

}));