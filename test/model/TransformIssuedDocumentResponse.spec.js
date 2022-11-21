/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.22
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd() + '/src/index'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd() + '/src/index'))
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.fattureInCloudSdk)
  }
}(this, function (expect, fattureInCloudSdk) {
  'use strict'

  let instance

  beforeEach(function () {
    instance = new fattureInCloudSdk.TransformIssuedDocumentResponse()
    instance.data = new fattureInCloudSdk.IssuedDocument()
    instance.data.type = new fattureInCloudSdk.IssuedDocumentType().invoice
    instance.options = new fattureInCloudSdk.IssuedDocumentOptions()
    instance.options.create_from = ["12345", "54321"]
    instance.options.transform = true
  })

  // const getProperty = function (object, getter, property) {
  //   // Use getter method if present; otherwise, get the property directly.
  //   if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
  // }

  // const setProperty = function (object, setter, property, value) {
  //   // Use setter method if present; otherwise, set the property directly.
  //   if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
  // }

  describe('TransformIssuedDocumentResponse', function () {
    it('should create an instance of TransformIssuedDocumentResponse', function () {
      expect(instance).to.be.a(fattureInCloudSdk.TransformIssuedDocumentResponse);
    })

    it('should have the property data (base name: "data")', function () {
      expect(typeof instance.data).to.be('object');
    })

    it('should have the property options (base name: "options")', function () {
      expect(typeof instance.options).to.be('object');
    })
  })
}))
