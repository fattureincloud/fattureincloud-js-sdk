/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.1.3
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
    instance = new fattureInCloudSdk.TaxProfile()
    instance.company_type = 'individual'
    instance.company_subtype = 'artigiani'
    instance.profession = 'test',
    instance.regime = 'forfettario_5'
    instance.rivalsa_name = ''
    instance.default_rivalsa = 0
    instance.cassa_name = ''
    instance.default_cassa = 0
    instance.default_cassa_taxable = 100
    instance.cassa2_name = ''
    instance.default_cassa2 = 0
    instance.default_cassa2_taxable = 0
    instance.default_withholding_tax = 0
    instance.default_withholding_tax_taxable = 100
    instance.default_other_withholding_tax = 0
    instance.enasarco = false
    instance.enasarco_type = 'test'
    instance.contributions_percentage = 0
    instance.profit_coefficient = 0
    instance.med = false
    instance.default_vat = {
      id: 66,
      value: 0,
      description: "Contribuenti forfettari",
      notes: "Operazione non soggetta a IVA ai sensi dell'art. 1, commi 54-89, Legge n. 190\/2014 e succ. modifiche\/integrazioni",
      e_invoice: true,
      ei_type: 2.2,
      ei_description: "Non soggetta art. 1\/54-89 L. 190\/2014 e succ. modifiche\/integrazioni",
      editable: false,
      is_disabled: false,
      default: true
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

  describe('TaxProfile', function () {
    it('should create an instance of TaxProfile', function () {
      expect(instance).to.be.a(fattureInCloudSdk.TaxProfile)
    })

    it('should have the property companyType (base name: "company_type")', function () {
      expect(typeof instance.company_type).to.be('string')
    })

    it('should have the property companySubtype (base name: "company_subtype")', function () {
      expect(typeof instance.company_subtype).to.be('string')
    })

    it('should have the property profession (base name: "profession")', function () {
      expect(typeof instance.profession).to.be('string')
    })

    it('should have the property regime (base name: "regime")', function () {
      expect(typeof instance.regime).to.be('string')
    })

    it('should have the property rivalsaName (base name: "rivalsa_name")', function () {
      expect(typeof instance.rivalsa_name).to.be('string')
    })

    it('should have the property defaultRivalsa (base name: "default_rivalsa")', function () {
    })

    it('should have the property cassaName (base name: "cassa_name")', function () {
      expect(typeof instance.cassa_name).to.be('string')
    })

    it('should have the property defaultCassa (base name: "default_cassa")', function () {
      expect(typeof instance.default_cassa).to.be('number')
    })

    it('should have the property defaultCassaTaxable (base name: "default_cassa_taxable")', function () {
      expect(typeof instance.default_cassa_taxable).to.be('number')
    })

    it('should have the property cassa2Name (base name: "cassa2_name")', function () {
      expect(typeof instance.cassa2_name).to.be('string')
    })

    it('should have the property defaultCassa2 (base name: "default_cassa2")', function () {
      expect(typeof instance.default_cassa2).to.be('number')
    })

    it('should have the property defaultCassa2Taxable (base name: "default_cassa2_taxable")', function () {
      expect(typeof instance.default_cassa2_taxable).to.be('number')
    })

    it('should have the property defaultWithholdingTax (base name: "default_withholding_tax")', function () {
      expect(typeof instance.default_withholding_tax).to.be('number')
    })

    it('should have the property defaultWithholdingTaxTaxable (base name: "default_withholding_tax_taxable")', function () {
      expect(typeof instance.default_withholding_tax_taxable).to.be('number')
    })

    it('should have the property defaultOtherWithholdingTax (base name: "default_other_withholding_tax")', function () {
      expect(typeof instance.default_other_withholding_tax).to.be('number')
    })

    it('should have the property enasarco (base name: "enasarco")', function () {
      expect(typeof instance.enasarco).to.be('boolean')
    })

    it('should have the property enasarcoType (base name: "enasarco_type")', function () {
      expect(typeof instance.enasarco_type).to.be('string')
    })

    it('should have the property contributionsPercentage (base name: "contributions_percentage")', function () {
      expect(typeof instance.contributions_percentage).to.be('number')
    })

    it('should have the property profitCoefficient (base name: "profit_coefficient")', function () {
      expect(typeof instance.profit_coefficient).to.be('number')
    })

    it('should have the property med (base name: "med")', function () {
      expect(typeof instance.med).to.be('boolean')
    })

    it('should have the property defaultVat (base name: "default_vat")', function () {
      expect(typeof instance.default_vat).to.be('object')
    })
  })
}))
