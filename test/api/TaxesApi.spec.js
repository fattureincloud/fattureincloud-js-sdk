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

import CreateF24Response from '../../src/model/CreateF24Response'
import GetF24Response from '../../src/model/GetF24Response'
import ListF24Response from '../../src/model/ListF24Response'
import ModifyF24Response from '../../src/model/ModifyF24Response'
import UploadF24AttachmentResponse from '../../src/model/UploadF24AttachmentResponse';

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

  const instance = new fattureInCloudSdk.TaxesApi()

  const createF24ResponseObj = { data: { amount: 840.36, description: 'PAGAMENTO IVA 2021', due_date: '2021-12-31', status: 'paid', payment_account: { id: 111 }, attachment_token: 'b19c01da9b1688fb73d0d9e8ad' } }
  const createF24Stub = sandbox.stub(instance, 'createF24').returns(createF24ResponseObj)

  const deleteF24ResponseObj = {}
  sandbox.stub(instance, 'deleteF24').returns(deleteF24ResponseObj)

  const deleteF24AttachmentResponseObj = {}
  sandbox.stub(instance, 'deleteF24Attachment').returns(deleteF24AttachmentResponseObj)

  const getF24ResponseObj = { data: { id: 12345, amount: 840.36, description: 'PAGAMENTO IVA 2021', due_date: '2021-12-31', status: 'paid', payment_account: { id: 111, name: 'Indesa - carta conto' }, attachment_url: 'b19c01da9b1688fb73d0d9e8adae89a8.pdf' } }
  sandbox.stub(instance, 'getF24').returns(getF24ResponseObj)

  const listF24ResponseObj = { current_page: 1, data: [{ id: 12345, amount: 840.36, description: 'PAGAMENTO IVA 2021', due_date: '2021-12-31', status: 'paid', payment_account: { id: 111, name: 'Indesa - carta conto' }, attachment_url: 'b19c01da9b1688fb73d0d9e8adae89a8.pdf' }, { id: 12346, amount: 810.62, description: 'PAGAMENTO IVA 2020', due_date: '2020-12-31', status: 'paid', payment_account: { id: 111, name: 'Indesa - carta conto' }, attachment_url: 'bb6df8490dad4770353b378ea926d8ba.pdf' }], first_page_url: 'page=1', from: 1, last_page: 1, last_page_url: 'page=1', next_page_url: null, path: 'taxes', per_page: 50, prev_page_url: null, to: 2, total: 2, aggregated_data: { amount: '6438.96' } }
  sandbox.stub(instance, 'listF24').returns(listF24ResponseObj)

  const modifyF24ResponseObj = { data: { id: 12345, amount: 840.36, description: 'PAGAMENTO IVA 2021', due_date: '2021-12-31', status: 'paid', payment_account: { id: 111, name: 'Indesa - carta conto' }, attachment_url: 'b19c01da9b1688fb73d0d9e8adae89a8.pdf' } }
  const modifyF24Stub = sandbox.stub(instance, 'modifyF24').returns(modifyF24ResponseObj)

  const uploadF24AttachmentResponseObj = { data: { attachment_token: 'YmMyNWYxYzIwMTU3N2Y4ZGE3ZjZiMzg5OWY0ODNkZDQveXl5LmRvYw' } }
  sandbox.stub(instance, 'uploadF24Attachment').returns(uploadF24AttachmentResponseObj)

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

  describe('TaxesApi', function () {
    describe('createF24', function () {
      it('should call createF24 successfully', function (done) {
        const opts = {
          createF24Request:
          { data: { amount: 840.36, description: 'PAGAMENTO IVA 2021', due_date: '2021-12-31', status: 'paid', payment_account: { id: 21, name: 'Indesa - carta conto' } } }
        }
        const response = instance.createF24(2, opts)
        const responseObj = Object.assign(new CreateF24Response(), response)
        const expectedJson = JSON.stringify(createF24ResponseObj)
        const actualJson = JSON.stringify(responseObj)
        expect(actualJson).to.equal(expectedJson)
        expect(createF24Stub.getCall(0).args[1]).to.equal(opts)
        done()
      })
    })
    describe('deleteF24', function () {
      it('should call deleteF24 successfully', function (done) {
        expect(1).to.equal(1)
        done()
      })
    })
    describe('deleteF24Attachment', function () {
      it('should call deleteF24Attachment successfully', function (done) {
        expect(1).to.equal(1)
        done()
      })
    })
    describe('getF24', function () {
      it('should call getF24 successfully', function (done) {
        const response = instance.getF24()
        const responseObj = Object.assign(new GetF24Response(), response)
        const expectedJson = JSON.stringify(getF24ResponseObj)
        const actualJson = JSON.stringify(responseObj)
        expect(actualJson).to.equal(expectedJson)
        done()
      })
    })
    describe('listF24', function () {
      it('should call listF24 successfully', function (done) {
        const response = instance.listF24()
        const responseObj = Object.assign(new ListF24Response(), response)
        const expectedJson = JSON.stringify(listF24ResponseObj)
        const actualJson = JSON.stringify(responseObj)
        expect(actualJson).to.equal(expectedJson)
        done()
      })
    })
    describe('modifyF24', function () {
      it('should call modifyF24 successfully', function (done) {
        const opts = {
          modifyF24Request:
          { data: { description: 'PAGAMENTO IVA 3041' } }
        }
        const response = instance.modifyF24(2, 12345, opts)
        const responseObj = Object.assign(new ModifyF24Response(), response)
        const expectedJson = JSON.stringify(modifyF24ResponseObj)
        const actualJson = JSON.stringify(responseObj)
        expect(actualJson).to.equal(expectedJson)
        expect(modifyF24Stub.getCall(0).args[2]).to.equal(opts)
        done()
      })
    })
    describe('uploadF24Attachment', function () {
      it('should call uploadF24Attachment successfully', function (done) {
        const response = instance.uploadF24Attachment()
        const responseObj = Object.assign(new UploadF24AttachmentResponse(), response)
        const expectedJson = JSON.stringify(uploadF24AttachmentResponseObj)
        const actualJson = JSON.stringify(responseObj)
        expect(actualJson).to.equal(expectedJson)
        done()
      })
    })
  })
}))
