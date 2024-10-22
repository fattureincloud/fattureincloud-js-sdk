/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.1.2
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
  })

  const getProperty = function (object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
  }

  const setProperty = function (object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
  }

  describe('TaxProfile', function () {
    it('should create an instance of TaxProfile', function () {
      // uncomment below and update the code to test TaxProfile
      // var instance = new fattureInCloudSdk.TaxProfile();
      // expect(instance).to.be.a(fattureInCloudSdk.TaxProfile);
    })

    it('should have the property companyType (base name: "company_type")', function () {
      // uncomment below and update the code to test the property companyType
      // var instance = new fattureInCloudSdk.TaxProfile();
      // expect(instance).to.be();
    })

    it('should have the property companySubtype (base name: "company_subtype")', function () {
      // uncomment below and update the code to test the property companySubtype
      // var instance = new fattureInCloudSdk.TaxProfile();
      // expect(instance).to.be();
    })

    it('should have the property profession (base name: "profession")', function () {
      // uncomment below and update the code to test the property profession
      // var instance = new fattureInCloudSdk.TaxProfile();
      // expect(instance).to.be();
    })

    it('should have the property regime (base name: "regime")', function () {
      // uncomment below and update the code to test the property regime
      // var instance = new fattureInCloudSdk.TaxProfile();
      // expect(instance).to.be();
    })

    it('should have the property rivalsaName (base name: "rivalsa_name")', function () {
      // uncomment below and update the code to test the property rivalsaName
      // var instance = new fattureInCloudSdk.TaxProfile();
      // expect(instance).to.be();
    })

    it('should have the property defaultRivalsa (base name: "default_rivalsa")', function () {
      // uncomment below and update the code to test the property defaultRivalsa
      // var instance = new fattureInCloudSdk.TaxProfile();
      // expect(instance).to.be();
    })

    it('should have the property cassaName (base name: "cassa_name")', function () {
      // uncomment below and update the code to test the property cassaName
      // var instance = new fattureInCloudSdk.TaxProfile();
      // expect(instance).to.be();
    })

    it('should have the property defaultCassa (base name: "default_cassa")', function () {
      // uncomment below and update the code to test the property defaultCassa
      // var instance = new fattureInCloudSdk.TaxProfile();
      // expect(instance).to.be();
    })

    it('should have the property defaultCassaTaxable (base name: "default_cassa_taxable")', function () {
      // uncomment below and update the code to test the property defaultCassaTaxable
      // var instance = new fattureInCloudSdk.TaxProfile();
      // expect(instance).to.be();
    })

    it('should have the property cassa2Name (base name: "cassa2_name")', function () {
      // uncomment below and update the code to test the property cassa2Name
      // var instance = new fattureInCloudSdk.TaxProfile();
      // expect(instance).to.be();
    })

    it('should have the property defaultCassa2 (base name: "default_cassa2")', function () {
      // uncomment below and update the code to test the property defaultCassa2
      // var instance = new fattureInCloudSdk.TaxProfile();
      // expect(instance).to.be();
    })

    it('should have the property defaultCassa2Taxable (base name: "default_cassa2_taxable")', function () {
      // uncomment below and update the code to test the property defaultCassa2Taxable
      // var instance = new fattureInCloudSdk.TaxProfile();
      // expect(instance).to.be();
    })

    it('should have the property defaultWithholdingTax (base name: "default_withholding_tax")', function () {
      // uncomment below and update the code to test the property defaultWithholdingTax
      // var instance = new fattureInCloudSdk.TaxProfile();
      // expect(instance).to.be();
    })

    it('should have the property defaultWithholdingTaxTaxable (base name: "default_withholding_tax_taxable")', function () {
      // uncomment below and update the code to test the property defaultWithholdingTaxTaxable
      // var instance = new fattureInCloudSdk.TaxProfile();
      // expect(instance).to.be();
    })

    it('should have the property defaultOtherWithholdingTax (base name: "default_other_withholding_tax")', function () {
      // uncomment below and update the code to test the property defaultOtherWithholdingTax
      // var instance = new fattureInCloudSdk.TaxProfile();
      // expect(instance).to.be();
    })

    it('should have the property enasarco (base name: "enasarco")', function () {
      // uncomment below and update the code to test the property enasarco
      // var instance = new fattureInCloudSdk.TaxProfile();
      // expect(instance).to.be();
    })

    it('should have the property enasarcoType (base name: "enasarco_type")', function () {
      // uncomment below and update the code to test the property enasarcoType
      // var instance = new fattureInCloudSdk.TaxProfile();
      // expect(instance).to.be();
    })

    it('should have the property contributionsPercentage (base name: "contributions_percentage")', function () {
      // uncomment below and update the code to test the property contributionsPercentage
      // var instance = new fattureInCloudSdk.TaxProfile();
      // expect(instance).to.be();
    })

    it('should have the property profitCoefficient (base name: "profit_coefficient")', function () {
      // uncomment below and update the code to test the property profitCoefficient
      // var instance = new fattureInCloudSdk.TaxProfile();
      // expect(instance).to.be();
    })

    it('should have the property med (base name: "med")', function () {
      // uncomment below and update the code to test the property med
      // var instance = new fattureInCloudSdk.TaxProfile();
      // expect(instance).to.be();
    })

    it('should have the property defaultVat (base name: "default_vat")', function () {
      // uncomment below and update the code to test the property defaultVat
      // var instance = new fattureInCloudSdk.TaxProfile();
      // expect(instance).to.be();
    })
  })
}))