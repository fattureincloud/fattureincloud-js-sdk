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
    instance = new fattureInCloudSdk.GetNewReceivedDocumentTotalsRequest()
    instance.data = {
      id: 12345,
      type: 'expense',
      description: 'Soggiorno di lavoro',
      category: 'cat',
      amortization: 1,
      rc_center: 'rcc',
      invoice_number: 'inv12345',
      is_marked: false,
      is_detailed: false,
      e_invoice: false,
      entity: {
        id: 111,
        name: 'Hotel Rubino Palace'
      },
      date: '2021-08-15',
      next_due_date: '2021-08-15',
      currency: {
        id: 'EUR',
        exchange_rate: '1.00000',
        symbol: '€'
      },
      amount_net: 592,
      amount_vat: 0,
      amount_gross: 592,
      amount_withholding_tax: 0,
      amount_other_withholding_tax: 0,
      tax_deductibility: 50,
      vat_deductibility: 100,
      attachment_url: 'spesa_ger5i783t45hu6ti.pdf',
      attachment_preview_url: '/preview.pdf',
      payments_list: [
        {
          amount: 592,
          due_date: '2021-08-15',
          paid_date: '2021-08-15',
          id: 777,
          payment_terms: {
            days: 0,
            type: 'standard'
          },
          status: 'paid'
        }
      ]
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

  describe('GetNewReceivedDocumentTotalsRequest', function () {
    it('should create an instance of GetNewReceivedDocumentTotalsRequest', function () {
      expect(instance).to.be.a(fattureInCloudSdk.GetNewReceivedDocumentTotalsRequest)
    })

    it('should have the property data (base name: "data")', function () {
      expect(typeof instance.data).to.be('object')
    })
  })
}))
