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

import CreateCashbookEntryResponse from '../../src/model/CreateCashbookEntryResponse'
import GetCashbookEntryResponse from '../../src/model/GetCashbookEntryResponse'
import ListCashbookEntriesResponse from '../../src/model/ListCashbookEntriesResponse'
import ModifyCashbookEntryResponse from '../../src/model/ModifyCashbookEntryResponse';

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

  const instance = new fattureInCloudSdk.CashbookApi()

  const createCashbookEntryResponseObj = { data: { date: '2021-08-24', amount_out: 122, payment_account_out: { id: 333 }, description: 'Fattura n. 201/2021', entity_name: 'Rossi S.r.l.', kind: 'issued_document', document: { id: 54321 }, type: 'out' } }
  const createCashbookEntryStub = sandbox.stub(instance, 'createCashbookEntry').returns(createCashbookEntryResponseObj)

  const deleteCashbookEntryResponseObj = {}
  sandbox.stub(instance, 'deleteCashbookEntry').returns(deleteCashbookEntryResponseObj)

  const getCashbookEntryResponseObj = { data: { date: '2021-08-24', amount_out: 122, payment_account_out: { id: 333 }, description: 'Fattura n. 201/2021', entity_name: 'Rossi S.r.l.', kind: 'issued_document', document: { id: 54321 }, type: 'out' } }
  sandbox.stub(instance, 'getCashbookEntry').returns(getCashbookEntryResponseObj)

  const modifyCashbookEntryResponseObj = { data: { date: '2021-08-24', amount_out: 122, payment_account_out: { id: 333 }, description: 'Fattura n. 201/2021', entity_name: 'Rossi S.r.l.', kind: 'issued_document', document: { id: 54321 }, type: 'out' } }
  sandbox.stub(instance, 'modifyCashbookEntry').returns(modifyCashbookEntryResponseObj)

  const listCashbookEntriesResponseObj = { data: [{ date: '2021-08-24', amount_in: 122, payment_account_in: { id: 333 }, description: 'Fattura n. 201/2021', entity_name: 'Rossi S.r.l.', kind: 'issued_document', document: { id: 54321 }, type: 'in' }, { date: '2021-08-29', amount_out: 211, payment_account_out: { id: 444 }, description: 'Fattura n. 202/2021', entity_name: 'Red S.r.l.', kind: 'issued_document', document: { id: 12345 }, type: 'out' }] }
  sandbox.stub(instance, 'listCashbookEntries').returns(listCashbookEntriesResponseObj)

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

  describe('CashbookApi', function () {
    describe('createCashbookEntry', function () {
      it('should call createCashbookEntry successfully', function (done) {
        const opts = {
          createCashbookEntryRequest:
          { data: { date: '2021-08-24', amount_in: 122, payment_account_in: { id: 21 }, description: 'Fattura n. 201/2021', entity_name: 'Rossi S.r.l.', kind: 'issued_document', document: { id: 54321 }, type: 'in' } }
        }
        const response = instance.createCashbookEntry(2, opts)
        const responseObj = Object.assign(new CreateCashbookEntryResponse(), response)
        const expectedJson = JSON.stringify(createCashbookEntryResponseObj)
        const actualJson = JSON.stringify(responseObj)
        expect(actualJson).to.equal(expectedJson)
        expect(createCashbookEntryStub.getCall(0).args[1]).to.equal(opts)
        done()
      })
    })
    describe('deleteCashbookEntry', function () {
      it('should call deleteCashbookEntry successfully', function (done) {
        expect(1).to.equal(1)
        done()
      })
    })
    describe('getCashbookEntry', function () {
      it('should call getCashbookEntry successfully', function (done) {
        const response = instance.getCashbookEntry()
        const responseObj = Object.assign(new GetCashbookEntryResponse(), response)
        const expectedJson = JSON.stringify(getCashbookEntryResponseObj)
        const actualJson = JSON.stringify(responseObj)
        expect(actualJson).to.equal(expectedJson)
        done()
      })
    })
    describe('listCashbookEntries', function () {
      it('should call listCashbookEntries successfully', function (done) {
        const response = instance.listCashbookEntries()
        const responseObj = Object.assign(new ListCashbookEntriesResponse(), response)
        const expectedJson = JSON.stringify(listCashbookEntriesResponseObj)
        const actualJson = JSON.stringify(responseObj)
        expect(actualJson).to.equal(expectedJson)
        done()
      })
    })
    describe('modifyCashbookEntry', function () {
      it('should call modifyCashbookEntry successfully', function (done) {
        const response = instance.modifyCashbookEntry()
        const responseObj = Object.assign(new ModifyCashbookEntryResponse(), response)
        const expectedJson = JSON.stringify(modifyCashbookEntryResponseObj)
        const actualJson = JSON.stringify(responseObj)
        expect(actualJson).to.equal(expectedJson)
        done()
      })
    })
  })
}))
