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
    instance = new fattureInCloudSdk.ListVatTypesResponse()
    instance.data = [
      {
        id: 0,
        value: 22,
        description: 'Non imponibile art. 123',
        notes: "IVA non imponibile ai sensi dell'articolo 123, comma 2",
        e_invoice: 'string',
        ei_type: 2,
        ei_description: 'string',
        editable: true
      },
      {
        id: 1010,
        value: 0,
        description: 'NON IMPONIBILE IVA EX ART. 8 COMMA 1 LETT.A',
        notes: '',
        e_invoice: false,
        ei_type: 0,
        ei_description: null,
        is_disabled: false,
        editable: true
      }
    ]
  })

  // const getProperty = function (object, getter, property) {
  //   // Use getter method if present; otherwise, get the property directly.
  //   if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
  // }

  // const setProperty = function (object, setter, property, value) {
  //   // Use setter method if present; otherwise, set the property directly.
  //   if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
  // }

  describe('ListVatTypesResponse', function () {
    it('should create an instance of ListVatTypesResponse', function () {
      expect(instance).to.be.a(fattureInCloudSdk.ListVatTypesResponse)
    })

    it('should have the property data (base name: "data")', function () {
      expect(typeof instance.data).to.be('object')
    })
  })
}))
