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
    instance = new fattureInCloudSdk.CreateSupplierResponse()
    instance.data = {
      id: 12345,
      code: 'AE86',
      name: 'Mario Rossi S.R.L.',
      type: 'company',
      first_name: 'Mario',
      last_name: 'Rossi',
      contact_person: '',
      vat_number: '111222333',
      tax_code: '111122233',
      address_street: 'Corso Magellano, 46',
      address_postal_code: '20146',
      address_city: 'Milano',
      address_province: 'MI',
      address_extra: '',
      country: 'Italia',
      email: 'mario.rossi@example.com',
      certified_email: 'mario.rossi@pec.example.com',
      phone: '1234567890',
      fax: '123456789',
      notes: ''
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

  describe('CreateSupplierResponse', function () {
    it('should create an instance of CreateSupplierResponse', function () {
      expect(instance).to.be.a(fattureInCloudSdk.CreateSupplierResponse)
    })

    it('should have the property data (base name: "data")', function () {
      expect(typeof instance.data).to.be('object')
    })
  })
}))
