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
    instance = new fattureInCloudSdk.CreateIssuedDocumentResponse()
    instance.data = {
      id: 12345,
      type: 'invoice',
      year: 2021,
      numeration: 'inv23',
      subject: '',
      visible_subject: '',
      rc_center: '',
      stamp_duty: 0,
      use_gross_prices: false,
      e_invoice: false,
      delivery_note: false,
      accompanying_invoice: false,
      amount_net: 68.18,
      amount_vat: 6.82,
      amount_gross: 75,
      amount_due_discount: 0,
      amount_rivalsa: 0,
      amount_cassa: 0,
      amount_withholding_tax: 0,
      amount_other_withholding_tax: 0,
      h_margins: 15,
      v_margins: 16,
      show_payment_method: false,
      show_payments: true,
      show_totals: 'all',
      show_paypal_button: true,
      show_notification_button: false,
      is_marked: false,
      entity: {
        id: 54321,
        name: 'Mary Red S.r.L.',
        vat_number: 'IT05432181211',
        tax_code: 'IT05432181211',
        address_street: 'Corso impero, 66',
        address_postal_code: '20900',
        address_city: 'Milano',
        address_province: 'MI',
        address_extra: '',
        country: 'Italia',
        certified_email: 'mary@pec.red.com',
        ei_code: 'ABCXCR1'
      },
      date: '2021-08-20',
      number: 1,
      currency: {
        id: 'EUR',
        exchange_rate: '1.00000',
        symbol: '€'
      },
      language: {
        code: 'it',
        name: 'Italiano'
      },
      notes: '',
      rivalsa: 0,
      cassa: 0,
      withholding_tax: 0,
      withholding_tax_taxable: 100,
      other_withholding_tax: 0,
      payment_method: {
        id: 4,
        name: 'Credit card'
      },
      use_split_payment: false,
      items_list: [
        {
          product_id: 5432,
          code: 'SG3',
          name: 'Soggiorno',
          measure: '',
          net_price: 68.18182,
          category: '',
          id: 277876033,
          gross_price: 75,
          apply_withholding_taxes: true,
          discount: 0,
          discount_highlight: false,
          in_dn: false,
          qty: 1,
          vat: {
            id: 3,
            value: 10,
            description: ''
          },
          stock: false,
          description: '',
          not_taxable: false
        }
      ],
      payments_list: [
        {
          amount: 75,
          due_date: '2020-08-23',
          paid_date: null,
          id: 69078013,
          payment_terms: {
            days: 0,
            type: 'standard'
          },
          status: 'not_paid',
          payment_account: null
        }
      ],
      attachment_url: 'kdijrnf893hnwkfk45f50f.pdf',
      next_due_date: '2020-08-23',
      template: {
        id: 2821,
        name: 'Light Smoke'
      },
      url: 'y12h45rn9yf2mse0p43t7ec90vr.pdf',
      show_tspay_button: false
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

  describe('CreateIssuedDocumentResponse', function () {
    it('should create an instance of CreateIssuedDocumentResponse', function () {
      expect(instance).to.be.a(fattureInCloudSdk.CreateIssuedDocumentResponse)
    })

    it('should have the property data (base name: "data")', function () {
      expect(typeof instance.data).to.be('object')
    })
  })
}))
