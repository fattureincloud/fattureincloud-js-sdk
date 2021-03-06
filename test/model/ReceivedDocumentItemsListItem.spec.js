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
    instance = new fattureInCloudSdk.ReceivedDocumentItemsListItem()
    instance.id = 12345
    instance.product_id = 54321
    instance.code = 'pdr01'
    instance.measure = 'very big'
    instance.name = 'prod uan'
    instance.net_price = 100
    instance.category = 'other'
    instance.qty = 1
    instance.stock = 99
    instance.vat = {
      id: 1020,
      value: 0,
      description: 'PA Non imp art. 2',
      is_disabled: false
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

  describe('ReceivedDocumentItemsList', function () {
    it('should create an instance of ReceivedDocumentItemsListItem', function () {
      expect(instance).to.be.a(fattureInCloudSdk.ReceivedDocumentItemsListItem)
    })

    it('should have the property id (base name: "id")', function () {
      expect(typeof instance.id).to.be('number')
    })

    it('should have the property productId (base name: "product_id")', function () {
      expect(typeof instance.product_id).to.be('number')
    })

    it('should have the property code (base name: "code")', function () {
      expect(typeof instance.code).to.be('string')
    })

    it('should have the property name (base name: "name")', function () {
      expect(typeof instance.name).to.be('string')
    })

    it('should have the property measure (base name: "measure")', function () {
      expect(typeof instance.measure).to.be('string')
    })

    it('should have the property netPrice (base name: "net_price")', function () {
      expect(typeof instance.net_price).to.be('number')
    })

    it('should have the property category (base name: "category")', function () {
      expect(typeof instance.category).to.be('string')
    })

    it('should have the property qty (base name: "qty")', function () {
      expect(typeof instance.qty).to.be('number')
    })

    it('should have the property vat (base name: "vat")', function () {
      expect(typeof instance.vat).to.be('object')
    })

    it('should have the property stock (base name: "stock")', function () {
      expect(typeof instance.stock).to.be('number')
    })
  })
}))
