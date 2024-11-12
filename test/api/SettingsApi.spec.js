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

import CreatePaymentAccountResponse from '../../src/model/CreatePaymentAccountResponse'
import CreatePaymentMethodResponse from '../../src/model/CreatePaymentMethodResponse'
import GetPaymentAccountResponse from '../../src//model/GetPaymentAccountResponse'
import GetPaymentMethodResponse from '../../src/model/GetPaymentMethodResponse'
import ModifyPaymentAccountResponse from '../../src/model/ModifyPaymentAccountResponse'
import ModifyPaymentMethodResponse from '../../src/model/ModifyPaymentMethodResponse';
import GetTaxProfileResponse from '../../src/model/GetTaxProfileResponse'
import GetVatTypeResponse from '../../src/model/GetVatTypeResponse'

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

  const sandbox = require('sinon').createSandbox()

  const instance = new fattureInCloudSdk.SettingsApi()

  const createPaymentAccountResponseObj = { data: { id: 12345, name: 'Indesa', type: 'bank', iban: 'IT17Q0051343200000003497636', sia: 'T1234', virtual: false } }
  const createPaymentAccountStub = sandbox.stub(instance, 'createPaymentAccount').returns(createPaymentAccountResponseObj)

  const createPaymentMethodResponseObj = { data: { id: 386683, name: 'Bonifico bancario', is_default: true, type: 'standard', details: [{ title: 'Banca', description: 'Sao Paulo' }], default_payment_account: { id: 12345, name: 'conto banca SP' } } }
  const createPaymentMethodStub = sandbox.stub(instance, 'createPaymentMethod').returns(createPaymentMethodResponseObj)

  const deletePaymentAccountResponseObj = {}
  sandbox.stub(instance, 'deletePaymentAccount').returns(deletePaymentAccountResponseObj)

  const deletePaymentMethodResponseObj = {}
  sandbox.stub(instance, 'deletePaymentMethod').returns(deletePaymentMethodResponseObj)

  const getPaymentAccountResponseObj = { data: { id: 12345, name: 'Indesa', type: 'bank', iban: 'IT17Q0051343200000003497636', sia: 'T1234', virtual: false } }
  sandbox.stub(instance, 'getPaymentAccount').returns(getPaymentAccountResponseObj)

  const getPaymentMethodResponseObj = { data: { id: 386683, name: 'Bonifico bancario', is_default: true, type: 'standard', details: [{ title: 'Banca', description: 'Sao Paulo' }], default_payment_account: { id: 12345, name: 'conto banca SP' } } }
  sandbox.stub(instance, 'getPaymentMethod').returns(getPaymentMethodResponseObj)

  const modifyPaymentAccountResponseObj = { data: { id: 12345, name: 'Indesa', type: 'bank', iban: 'IT17Q0051343200000003497636', sia: 'T1234', virtual: false } }
  const modifyPaymentAccountStub = sandbox.stub(instance, 'modifyPaymentAccount').returns(modifyPaymentAccountResponseObj)

  const modifyPaymentMethodResponseObj = { data: { id: 386683, name: 'Bonifico bancario', is_default: true, type: 'standard', details: [{ title: 'Banca', description: 'Sao Paulo' }], default_payment_account: { id: 12345, name: 'conto banca SP' } } }
  const modifyPaymentMethodStub = sandbox.stub(instance, 'modifyPaymentMethod').returns(modifyPaymentMethodResponseObj)

  const getTaxProfile = { data: {company_type: "individual",company_subtype: "artigiani",profession: null,regime: "forfettario_5",rivalsa_name: "",default_rivalsa: 0,cassa_name: "",default_cassa: 0,default_cassa_taxable: 100,cassa2_name: "",default_cassa2: 0,default_cassa2_taxable: 0,default_withholding_tax: 0,default_withholding_tax_taxable: 100, default_other_withholding_tax: 0,enasarco: false,enasarco_type: null, contributions_percentage: 0,med: false,default_vat: {id: 66,value: 0,description: "Contribuenti forfettari",notes: "Operazione non soggetta a IVA ai sensi dell'art. 1, commi 54-89, Legge n. 190\/2014 e succ. modifiche\/integrazioni",e_invoice: true,ei_type: 2.2,ei_description: "Non soggetta art. 1\/54-89 L. 190\/2014 e succ. modifiche\/integrazioni",editable: false,is_disabled: false,default: true}} }
  sandbox.stub(instance, 'getTaxProfile').returns(getTaxProfile)

  const getVatType = { data: {id: 0,value: 22,description: "Non imponibile art. 123",notes: "IVA non imponibile ai sensi dell'articolo 123, comma 2",e_invoice: true,ei_type: 2,ei_description: "string",editable: true,is_disabled: true}}
  sandbox.stub(instance, 'getVatType').returns(getVatType)

  const deleteVatType = {}
  sandbox.stub(instance, 'deleteVatType').returns(deleteVatType)


  beforeEach(function () {

  })

  // const getProperty = function (object, getter, property) {
  //   // Use getter method if present; otherwise, get the property directly.
  //   if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
  // }

  // const setProperty = function (object, setter, property, value) {
  //   // Use setter method if present; otherwise, set the property directly.
  //   if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
  // }

  describe('SettingsApi', function () {
    describe('createPaymentAccount', function () {
      it('should call createPaymentAccount successfully', function (done) {
        const opts = {
          createPaymentAccountRequest:
        { data: { name: 'Indesa', type: 'bank', iban: 'IT17Q0051343200000003497636', sia: 'T1234', virtual: false } }
        }
        const response = instance.createPaymentAccount(2, opts)
        const responseObj = Object.assign(new CreatePaymentAccountResponse(), response)
        const expectedJson = JSON.stringify(createPaymentAccountResponseObj)
        const actualJson = JSON.stringify(responseObj)
        expect(actualJson).to.equal(expectedJson)
        expect(createPaymentAccountStub.getCall(0).args[1]).to.equal(opts)
        done()
      })
    })
    describe('createPaymentMethod', function () {
      it('should call createPaymentMethod successfully', function (done) {
        const opts = {
          createPaymentMethodRequest:
          { data: { name: 'Bonifico bancario', is_default: true, type: 'standard', details: [{ title: 'Banca', description: 'Sao Paulo' }], default_payment_account: { id: 12345, name: 'conto banca SP' } } }
        }
        const response = instance.createPaymentMethod(2, opts)
        const responseObj = Object.assign(new CreatePaymentMethodResponse(), response)
        const expectedJson = JSON.stringify(createPaymentMethodResponseObj)
        const actualJson = JSON.stringify(responseObj)
        expect(actualJson).to.equal(expectedJson)
        expect(createPaymentMethodStub.getCall(0).args[1]).to.equal(opts)
        done()
      })
    })
    describe('deletePaymentAccount', function () {
      it('should call deletePaymentAccount successfully', function (done) {
        expect(1).to.equal(1)
        done()
      })
    })
    describe('deletePaymentMethod', function () {
      it('should call deletePaymentMethod successfully', function (done) {
        expect(1).to.equal(1)
        done()
      })
    })
    describe('getPaymentAccount', function () {
      it('should call getPaymentAccount successfully', function (done) {
        const response = instance.getPaymentAccount()
        const responseObj = Object.assign(new GetPaymentAccountResponse(), response)
        const expectedJson = JSON.stringify(getPaymentAccountResponseObj)
        const actualJson = JSON.stringify(responseObj)
        expect(actualJson).to.equal(expectedJson)
        done()
      })
    })
    describe('getPaymentMethod', function () {
      it('should call getPaymentMethod successfully', function (done) {
        const response = instance.getPaymentMethod()
        const responseObj = Object.assign(new GetPaymentMethodResponse(), response)
        const expectedJson = JSON.stringify(getPaymentMethodResponseObj)
        const actualJson = JSON.stringify(responseObj)
        expect(actualJson).to.equal(expectedJson)
        done()
      })
    })
    describe('modifyPaymentAccount', function () {
      it('should call modifyPaymentAccount successfully', function (done) {
        const opts = {
          modifyPaymentAccountRequest:
          { data: { name: 'Indessa' } }
        }
        const response = instance.modifyPaymentAccount(2, 12345, opts)
        const responseObj = Object.assign(new ModifyPaymentAccountResponse(), response)
        const expectedJson = JSON.stringify(modifyPaymentAccountResponseObj)
        const actualJson = JSON.stringify(responseObj)
        expect(actualJson).to.equal(expectedJson)
        expect(modifyPaymentAccountStub.getCall(0).args[2]).to.equal(opts)
        done()
      })
    })
    describe('modifyPaymentMethod', function () {
      it('should call modifyPaymentMethod successfully', function (done) {
        const opts = {
          modifyPaymentMethodRequest:
          { data: { name: 'Bonifico bancariolo' } }
        }
        const response = instance.modifyPaymentMethod(2, 12345, opts)
        const responseObj = Object.assign(new ModifyPaymentMethodResponse(), response)
        const expectedJson = JSON.stringify(modifyPaymentMethodResponseObj)
        const actualJson = JSON.stringify(responseObj)
        expect(actualJson).to.equal(expectedJson)
        expect(modifyPaymentMethodStub.getCall(0).args[2]).to.equal(opts)
        done()
      })
    })
    describe('getTaxProfile', function () {
      it('should call getTaxProfile successfully', function (done) {
        const response = instance.getTaxProfile()
        const responseObj = Object.assign(new GetTaxProfileResponse(), response)
        const expectedJson = JSON.stringify(getTaxProfile)
        const actualJson = JSON.stringify(responseObj)
        expect(actualJson).to.equal(expectedJson)
        done()
      })
    })
    describe('getVatType', function () {
      it('should call getVatType successfully', function (done) {
        const response = instance.getVatType()
        const responseObj = Object.assign(new GetVatTypeResponse(), response)
        const expectedJson = JSON.stringify(getVatType)
        const actualJson = JSON.stringify(responseObj)
        expect(actualJson).to.equal(expectedJson)
        done()
      })
    })
    describe('deletePaymentMethod', function () {
      it('should call deletePaymentMethod successfully', function (done) {
        expect(1).to.equal(1)
        done()
      })
    })
  })
}))
