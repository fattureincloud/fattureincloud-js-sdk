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
    instance = new fattureInCloudSdk.ReceivedDocumentTotals()
    instance.amount_net = 592
    instance.amount_vat = 20
    instance.amount_gross = 612
    instance.amount_withholding_tax = 0
    instance.amount_other_withholding_tax = 0
    instance.amount_due = 612
    instance.payments_sum = 592
  })

  // const getProperty = function (object, getter, property) {
  //   // Use getter method if present; otherwise, get the property directly.
  //   if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
  // }

  // const setProperty = function (object, setter, property, value) {
  //   // Use setter method if present; otherwise, set the property directly.
  //   if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
  // }

  describe('ReceivedDocumentTotals', function () {
    it('should create an instance of ReceivedDocumentTotals', function () {
      expect(instance).to.be.a(fattureInCloudSdk.ReceivedDocumentTotals)
    })

    it('should have the property amountNet (base name: "amount_net")', function () {
      expect(typeof instance.amount_net).to.be('number')
    })

    it('should have the property amountVat (base name: "amount_vat")', function () {
      expect(typeof instance.amount_vat).to.be('number')
    })

    it('should have the property amountGross (base name: "amount_gross")', function () {
      expect(typeof instance.amount_gross).to.be('number')
    })

    it('should have the property amountWithholdingTax (base name: "amount_withholding_tax")', function () {
      expect(typeof instance.amount_withholding_tax).to.be('number')
    })

    it('should have the property amountOtherWithholdingTax (base name: "amount_other_withholding_tax")', function () {
      expect(typeof instance.amount_other_withholding_tax).to.be('number')
    })

    it('should have the property amountDue (base name: "amount_due")', function () {
      expect(typeof instance.amount_due).to.be('number')
    })

    it('should have the property paymentsSum (base name: "payments_sum")', function () {
      expect(typeof instance.payments_sum).to.be('number')
    })
  })
}))
