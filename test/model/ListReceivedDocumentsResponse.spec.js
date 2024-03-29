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
    instance = new fattureInCloudSdk.ListReceivedDocumentsResponse()
    instance.current_page = 2
    instance.first_page_url = 'page=1'
    instance.from = 1
    instance.last_page = 3
    instance.last_page_url = 'page=3'
    instance.next_page_url = 'page=3'
    instance.path = '/archive'
    instance.per_page = 50
    instance.prev_page_url = 'page=1'
    instance.to = 3
    instance.total = 155
    instance.data = [
      {
        id: 12345,
        type: 'expense',
        description: 'Soggiorno di lavoro',
        amortization: 1,
        rc_center: '',
        invoice_number: '',
        is_marked: false,
        is_detailed: false,
        e_invoice: false,
        created_at: '2021-08-15',
        updated_at: '2021-08-15',
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
        items_list: null,
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
            status: 'paid',
            payment_account: {
              id: 222,
              name: 'Contanti',
              virtual: false
            }
          }
        ],
        attachment_url: 'spesa_ger5i783t45hu6ti.pdf',
        attachment_preview_url: null,
        extra_data: null
      },
      {
        id: 12346,
        type: 'expense',
        description: 'Assicurazione RCA',
        iamortization: 1,
        rc_center: '',
        invoice_number: '',
        is_marked: false,
        is_detailed: false,
        e_invoice: false,
        created_at: '2021-08-09',
        updated_at: '2021-08-09',
        entity: {
          id: 89,
          name: 'Indesa Assicurazioni S.P.A.'
        },
        date: '2021-08-08',
        next_due_date: '2021-08-08',
        currency: {
          id: 'EUR',
          exchange_rate: '1.00000',
          symbol: '€'
        },
        amount_net: 645.69,
        amount_vat: 0,
        amount_gross: 645.69,
        amount_withholding_tax: 0,
        amount_other_withholding_tax: 0,
        tax_deductibility: 50,
        vat_deductibility: 100,
        items_list: null,
        payments_list: [
          {
            amount: 645.69,
            due_date: '2021-08-08',
            paid_date: '2021-08-08',
            id: 999,
            payment_terms: {
              days: 0,
              type: 'standard'
            },
            status: 'paid',
            payment_account: {
              id: 333,
              name: 'Carta conto',
              virtual: false
            }
          }
        ],
        attachment_url: 'spesa_gjsd567e5hu6ti.pdf',
        attachment_preview_url: null,
        extra_data: null
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

  describe('ListReceivedDocumentsResponse', function () {
    it('should create an instance of ListReceivedDocumentsResponse', function () {
      expect(instance).to.be.a(fattureInCloudSdk.ListReceivedDocumentsResponse)
    })

    it('should have the property currentPage (base name: "current_page")', function () {
      expect(typeof instance.current_page).to.be('number')
    })

    it('should have the property firstPageUrl (base name: "first_page_url")', function () {
      expect(typeof instance.first_page_url).to.be('string')
    })

    it('should have the property from (base name: "from")', function () {
      expect(typeof instance.from).to.be('number')
    })

    it('should have the property lastPage (base name: "last_page")', function () {
      expect(typeof instance.last_page).to.be('number')
    })

    it('should have the property lastPageUrl (base name: "last_page_url")', function () {
      expect(typeof instance.last_page_url).to.be('string')
    })

    it('should have the property nextPageUrl (base name: "next_page_url")', function () {
      expect(typeof instance.next_page_url).to.be('string')
    })

    it('should have the property path (base name: "path")', function () {
      expect(typeof instance.path).to.be('string')
    })

    it('should have the property perPage (base name: "per_page")', function () {
      expect(typeof instance.per_page).to.be('number')
    })

    it('should have the property prevPageUrl (base name: "prev_page_url")', function () {
      expect(typeof instance.prev_page_url).to.be('string')
    })

    it('should have the property to (base name: "to")', function () {
      expect(typeof instance.to).to.be('number')
    })

    it('should have the property total (base name: "total")', function () {
      expect(typeof instance.total).to.be('number')
    })

    it('should have the property data (base name: "data")', function () {
      expect(typeof instance.data).to.be('object')
    })
  })
}))
