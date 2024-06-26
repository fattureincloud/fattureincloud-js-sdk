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
    instance = new fattureInCloudSdk.Company()
    instance.id = 12345
    instance.name = 'Studio Commercialista'
    instance.tax_code = 'ABCSFN94T17A794K'
    instance.vat_number = 'IT12345640962'
    instance.type = 'accountant'
    instance.access_token = '4ff5f0fe5abcd1d7157fa13ca72ab62b6183db0667a576a0e19164801c18c4f7362a848fa32dbb8c3a3f94c34f3df95'
    instance.connection_id = 94566
    instance.access_token = 'ergaegwergq53wh65je5j'
    instance.fic_license_expire = '2024-10-10'
    instance.fic_plan = 'standard'
    instance.controlled_companies = [
      {
        id: 12246,
        name: 'Studio Commercialista',
        tax_code: 'ABCSFN94T17A794K',
        type: 'company',
        access_token: '4ff5f0fe5abcdf1d7157fa13ca72ab62b6183db0667a576a0e19164801c18c4f7362a848fa32dbb8c3a3f94c34f3df95',
        connection_id: 94566,
        controlled_companies: [],
        fic: true,
        dic: true,
        fic_plan: 'premium_plus',
        fic_license_expire: '2021-12-31',
        permissions: {
          fic_situation: 'write',
          fic_clients: 'write',
          fic_suppliers: 'write',
          fic_products: 'write',
          fic_issued_documents: 'write',
          fic_received_documents: 'write',
          fic_receipts: 'write',
          fic_calendar: 'write',
          fic_archive: 'write',
          fic_taxes: 'write',
          fic_stock: 'write',
          fic_cashbook: 'write',
          fic_settings: 'write',
          fic_emails: 'write',
          dic_employees: 'write',
          dic_timesheet: 'write',
          dic_settings: 'write'
        }
      },
      {
        id: 12347,
        name: 'Mario Rossi SRL',
        tax_code: '57398280214',
        type: 'company',
        access_token: '86690c98be13592e78b763c52fab2ba0c22faa118708ca5273da2b4dcdc7ad1234517107266d463fd9ae424a78c16cde',
        connection_id: 94566,
        controlled_companies: [],
        fic: true,
        dic: false,
        fic_plan: 'trial',
        fic_license_expire: '2021-12-31',
        permissions: {
          fic_situation: 'write',
          fic_clients: 'write',
          fic_suppliers: 'write',
          fic_products: 'write',
          fic_issued_documents: 'write',
          fic_received_documents: 'write',
          fic_receipts: 'write',
          fic_calendar: 'write',
          fic_archive: 'write',
          fic_taxes: 'write',
          fic_stock: 'write',
          fic_cashbook: 'write',
          fic_settings: 'write',
          fic_emails: 'write',
          dic_employees: 'none',
          dic_timesheet: 'none',
          dic_settings: 'none'
        }
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

  describe('Company', function () {
    it('should create an instance of Company', function () {
      expect(instance).to.be.a(fattureInCloudSdk.Company)
    })

    it('should have the property id (base name: "id")', function () {
      expect(typeof instance.id).to.be('number')
    })

    it('should have the property name (base name: "name")', function () {
      expect(typeof instance.name).to.be('string')
    })

    it('should have the property type (base name: "type")', function () {
      expect(typeof instance.type).to.be('string')
    })

    it('should have the property accessToken (base name: "access_token")', function () {
      expect(typeof instance.access_token).to.be('string')
    })

    it('should have the property controlledCompanies (base name: "controlled_companies")', function () {
      expect(typeof instance.controlled_companies).to.be('object')
    })

    it('should have the property connectionId (base name: "connection_id")', function () {
      expect(typeof instance.connection_id).to.be('number')
    })

    it('should have the property taxCode (base name: "tax_code")', function () {
      expect(typeof instance.tax_code).to.be('string')
    })
    it('should have the property vatNumber (base name: "vat_number")', function () {
      expect(typeof instance.vat_number).to.be('string')
    })

    it('should have the property fic_license_expire (base name: "fic_license_expire")', function () {
      expect(typeof instance.fic_license_expire).to.be('string')
    })

    it('should have the property fic_plan (base name: "fic_plan")', function () {
      expect(typeof instance.fic_plan).to.be('string')
    })
  })
}))
