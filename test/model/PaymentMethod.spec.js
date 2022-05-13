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
    instance = new fattureInCloudSdk.PaymentMethod()
    instance.id = 12346
    instance.name = 'Bonifico bancario'
    instance.type = 'standard'
    instance.is_default = true
    instance.details = [{
      title: 't1'
    }]
    instance.default_payment_account = {
      id: 21,
      name: 'n1'
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

  describe('PaymentMethod', function () {
    it('should create an instance of PaymentMethod', function () {
      expect(instance).to.be.a(fattureInCloudSdk.PaymentMethod)
    })

    it('should have the property id (base name: "id")', function () {
      expect(typeof instance.id).to.be('number')
    })

    it('should have the property name (base name: "name")', function () {
      expect(typeof instance.name).to.be('string')
    })

    it('should have the property type (base name: "type")', function () {
      expect(typeof instance.type).to.be('string')
    })

    it('should have the property isDefault (base name: "is_default")', function () {
      expect(typeof instance.is_default).to.be('boolean')
    })

    it('should have the property defaultPaymentAccount (base name: "default_payment_account")', function () {
      expect(typeof instance.default_payment_account).to.be('object')
    })

    it('should have the property details (base name: "details")', function () {
      expect(typeof instance.details).to.be('object')
    })
  })
}))
