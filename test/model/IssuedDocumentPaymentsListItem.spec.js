/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.10
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
    instance = new fattureInCloudSdk.IssuedDocumentPaymentsListItem()
    instance.due_date = '2021-12-10'
    instance.amount = 333
    instance.status = 'paid'
    instance.paid_date = '2021-12-11'
    instance.payment_account = {
      id: 21,
      name: 'Indesa - Carta conto',
      type: 'standard',
      virtual: false
    }
    instance.ei_raw = {
      prop: true
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

  describe('IssuedDocumentPaymentsList', function () {
    it('should create an instance of IssuedDocumentPaymentsListItem', function () {
      expect(instance).to.be.a(fattureInCloudSdk.IssuedDocumentPaymentsListItem)
    })

    it('should have the property dueDate (base name: "due_date")', function () {
      expect(typeof instance.due_date).to.be('string')
    })

    it('should have the property amount (base name: "amount")', function () {
      expect(typeof instance.amount).to.be('number')
    })

    it('should have the property status (base name: "status")', function () {
      expect(typeof instance.status).to.be('string')
    })

    it('should have the property paymentAccount (base name: "payment_account")', function () {
      expect(typeof instance.payment_account).to.be('object')
    })

    it('should have the property paidDate (base name: "paid_date")', function () {
      expect(typeof instance.paid_date).to.be('string')
    })

    it('should have the property eiRaw (base name: "ei_raw")', function () {
      expect(typeof instance.ei_raw).to.be('object')
    })
  })
}))
