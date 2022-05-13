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
    instance = new fattureInCloudSdk.User()
    instance.id = 12345
    instance.name = 'Mario Rossi'
    instance.first_name = 'Mario'
    instance.last_name = 'Rossi'
    instance.email = 'mario.rossi@example.com'
    instance.hash = '5add29e1234532a1bf2ed7b612043029'
    instance.picture = 'picture.jpg'
  })

  // const getProperty = function (object, getter, property) {
  //   // Use getter method if present; otherwise, get the property directly.
  //   if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
  // }

  // const setProperty = function (object, setter, property, value) {
  //   // Use setter method if present; otherwise, set the property directly.
  //   if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
  // }

  describe('User', function () {
    it('should create an instance of User', function () {
      expect(instance).to.be.a(fattureInCloudSdk.User)
    })

    it('should have the property id (base name: "id")', function () {
      expect(typeof instance.id).to.be('number')
    })

    it('should have the property name (base name: "name")', function () {
      expect(typeof instance.name).to.be('string')
    })

    it('should have the property firstName (base name: "first_name")', function () {
      expect(typeof instance.first_name).to.be('string')
    })

    it('should have the property lastName (base name: "last_name")', function () {
      expect(typeof instance.last_name).to.be('string')
    })

    it('should have the property email (base name: "email")', function () {
      expect(typeof instance.email).to.be('string')
    })

    it('should have the property hash (base name: "hash")', function () {
      expect(typeof instance.hash).to.be('string')
    })

    it('should have the property picture (base name: "picture")', function () {
      expect(typeof instance.picture).to.be('string')
    })
  })
}))
