/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.22
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
    instance = new fattureInCloudSdk.Email()
    instance.id = 1
    instance.status = 'sent'
    instance.sent_date = new Date(2022, 7, 17, 13, 53, 12)
    instance.errors_count = 0
    instance.error_log = ''
    instance.from_email = 'test@mail.it'
    instance.from_name = 'Test mail'
    instance.to_email = 'mail@test.it'
    instance.to_name = 'Mario'
    instance.subject = 'Test'
    instance.content = 'Test send email'
    instance.copy_to = ''
    instance.recipient_status = 'unknown'
    instance.recipient_date = new Date(2022, 7, 17, 13, 53, 12)
    instance.kind = 'Fatture'
    instance.attachments = []
  })

  // const getProperty = function (object, getter, property) {
  //   // Use getter method if present; otherwise, get the property directly.
  //   if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
  // }

  // const setProperty = function (object, setter, property, value) {
  //   // Use setter method if present; otherwise, set the property directly.
  //   if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
  // }

  describe('Email', function () {
    it('should create an instance of Email', function () {
      expect(instance).to.be.a(fattureInCloudSdk.Email)
    })

    it('should have the property id (base name: "id")', function () {
      expect(typeof instance.id).to.be('number')
    })

    it('should have the property status (base name: "status")', function () {
      expect(typeof instance.status).to.be('string')
    })

    it('should have the property sentDate (base name: "sent_date")', function () {
      expect(typeof instance.sent_date).to.be('object')
    })

    it('should have the property errorsCount (base name: "errors_count")', function () {
      expect(typeof instance.errors_count).to.be('number')
    })

    it('should have the property errorLog (base name: "error_log")', function () {
      expect(typeof instance.error_log).to.be('string')
    })

    it('should have the property fromEmail (base name: "from_email")', function () {
      expect(typeof instance.from_email).to.be('string')
    })

    it('should have the property fromName (base name: "from_name")', function () {
      expect(typeof instance.from_name).to.be('string')
    })

    it('should have the property toEmail (base name: "to_email")', function () {
      expect(typeof instance.to_email).to.be('string')
    })

    it('should have the property toName (base name: "to_name")', function () {
      expect(typeof instance.to_name).to.be('string')
    })

    it('should have the property subject (base name: "subject")', function () {
      expect(typeof instance.subject).to.be('string')
    })

    it('should have the property content (base name: "content")', function () {
      expect(typeof instance.content).to.be('string')
    })

    it('should have the property copyTo (base name: "copy_to")', function () {
      expect(typeof instance.copy_to).to.be('string')
    })

    it('should have the property recipientStatus (base name: "recipient_status")', function () {
      expect(typeof instance.recipient_status).to.be('string')
    })

    it('should have the property recipientDate (base name: "recipient_date")', function () {
      expect(typeof instance.recipient_date).to.be('object')
    })

    it('should have the property kind (base name: "kind")', function () {
      expect(typeof instance.kind).to.be('string')
    })

    it('should have the property attachments (base name: "attachments")', function () {
      expect(typeof instance.attachments).to.be('object')
    })
  })
}))
