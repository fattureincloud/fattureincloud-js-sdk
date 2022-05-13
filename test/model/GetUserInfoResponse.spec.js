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
    instance = new fattureInCloudSdk.GetUserInfoResponse()
    instance.data = {
      id: 12345,
      name: 'Mario Rossi',
      first_name: 'Mario',
      last_name: 'Rossi',
      email: 'mario.rossi@example.com',
      hash: '5add29e1234532a1bf2ed7b612043029',
      picture: 'picture.jpg'
    }
    instance.info = {
      need_marketing_consents_confirmation: false,
      need_password_change: false,
      need_terms_of_service_confirmation: false
    }
    instance.email_confirmation_state = {
      need_confirmation: false
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

  describe('GetUserInfoResponse', function () {
    it('should create an instance of GetUserInfoResponse', function () {
      expect(instance).to.be.a(fattureInCloudSdk.GetUserInfoResponse)
    })

    it('should have the property data (base name: "data")', function () {
      expect(typeof instance.data).to.be('object')
    })

    it('should have the property info (base name: "info")', function () {
      expect(typeof instance.info).to.be('object')
    })

    it('should have the property emailConfirmationState (base name: "email_confirmation_state")', function () {
      expect(typeof instance.email_confirmation_state).to.be('object')
    })
  })
}))
