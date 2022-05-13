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
    instance = new fattureInCloudSdk.ModifyClientRequest()
    instance.data = {
      code: 'AE86',
      name: 'Avv. Maria Rossi',
      type: 'person',
      first_name: 'Maria',
      last_name: 'Rossi',
      contact_person: '',
      vat_number: 'IT12345640962',
      tax_code: 'BLTGNI5ABCDA794E',
      address_street: 'Via Roma, 1',
      address_postal_code: '20900',
      address_city: 'Milano',
      address_province: 'MI',
      address_extra: '',
      country: 'Italia',
      email: 'maria.rossi@example.com',
      certified_email: 'maria.rossi@pec.example.com',
      phone: '1234567890',
      fax: '',
      notes: '',
      default_payment_terms: 1,
      default_payment_terms_type: 'standard',
      bank_name: 'Indesa',
      bank_iban: 'IT40P123456781000000123456',
      bank_swift_code: 'AK86PCT',
      shipping_address: 'Corso Magellano 4',
      e_invoice: true,
      ei_code: '111111',
      default_vat: {
        id: 54321,
        value: 45,
        description: '',
        is_disabled: false
      }
    }
  })

  // const getProperty = function (object, getter, property) {
  //   // Use getter method if present; otherwise, get the property directly.
  //   if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
  // }

  // const setProperty = function (object, setter, property, value) {
  //   // Use setter method if present; otherwise, set the property directly.
  //   if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
  // }

  describe('ModifyClientRequest', function () {
    it('should create an instance of ModifyClientRequest', function () {
      expect(instance).to.be.a(fattureInCloudSdk.ModifyClientRequest)
    })

    it('should have the property data (base name: "data")', function () {
      expect(typeof instance.data).to.be('object')
    })
  })
}))
