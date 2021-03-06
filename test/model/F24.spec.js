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
    instance = new fattureInCloudSdk.F24()
    instance.id = 12345
    instance.amount = 840.36
    instance.description = 'PAGAMENTO IVA 2021'
    instance.due_date = '2021-12-31'
    instance.status = 'paid'
    instance.attachment_url = 'b19c01da9b1688fb73d0d9e8adae89a8.pdf'
    instance.payment_account = {
      id: 111,
      name: 'Indesa - carta conto'
    }
    instance.attachment_token = 'Adfqregwthwrt6whrtghsrgbsdthyeruerur6u6676e5879'
  })

  // const getProperty = function (object, getter, property) {
  //   // Use getter method if present; otherwise, get the property directly.
  //   if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
  // }

  // const setProperty = function (object, setter, property, value) {
  //   // Use setter method if present; otherwise, set the property directly.
  //   if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
  // }

  describe('F24', function () {
    it('should create an instance of F24', function () {
      expect(instance).to.be.a(fattureInCloudSdk.F24)
    })

    it('should have the property id (base name: "id")', function () {
      expect(typeof instance.id).to.be('number')
    })

    it('should have the property dueDate (base name: "due_date")', function () {
      expect(typeof instance.due_date).to.be('string')
    })

    it('should have the property status (base name: "status")', function () {
      expect(typeof instance.status).to.be('string')
    })

    it('should have the property paymentAccount (base name: "payment_account")', function () {
      expect(typeof instance.payment_account).to.be('object')
    })

    it('should have the property amount (base name: "amount")', function () {
      expect(typeof instance.amount).to.be('number')
    })

    it('should have the property attachmentUrl (base name: "attachment_url")', function () {
      expect(typeof instance.attachment_url).to.be('string')
    })

    it('should have the property attachmentToken (base name: "attachment_token")', function () {
      expect(typeof instance.attachment_token).to.be('string')
    })

    it('should have the property description (base name: "description")', function () {
      expect(typeof instance.description).to.be('string')
    })
  })
}))
