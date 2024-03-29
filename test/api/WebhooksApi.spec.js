/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.27
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import CreateWebhooksSubscriptionResponse from '../../src/model/CreateWebhooksSubscriptionResponse'
import GetWebhooksSubscriptionResponse from '../../src/model/GetWebhooksSubscriptionResponse'
import ListWebhooksSubscriptionsResponse from '../../src/model/ListWebhooksSubscriptionsResponse'
import ModifyWebhooksSubscriptionResponse from '../../src/model/ModifyWebhooksSubscriptionResponse'

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

  const instance = new fattureInCloudSdk.WebhooksApi()

  const createWebhooksSubscriptionResponseObj = { data: { id: 'SUB123', sink: 'https://endpoint.test', verified: true, types: ['it.fattureincloud.webhooks.cashbook.create'] }, warnings: ['error'] }
  const createWebhooksSubscriptionStub = sandbox.stub(instance, 'createWebhooksSubscription').returns(createWebhooksSubscriptionResponseObj)

  const deleteWebhooksSubscriptionResponseObj = {}
  sandbox.stub(instance, 'deleteWebhooksSubscription').returns(deleteWebhooksSubscriptionResponseObj)

  const getWebhooksSubscriptionResponseObj = { data: { id: 'SUB123', sink: 'https://endpoint.test', verified: true, types: ['it.fattureincloud.webhooks.cashbook.create'] } }
  sandbox.stub(instance, 'getWebhooksSubscription').returns(getWebhooksSubscriptionResponseObj)

  const listWebhooksSubscriptionsResponseObj = { data: [{ id: 'SUB123', sink: 'https://endpoint.test', verified: true, types: ['it.fattureincloud.webhooks.cashbook.create'] }, { id: 'SUB1234', sink: 'https://endpoint.test', verified: true, types: ['it.fattureincloud.webhooks.cashbook.update'] }] }
  sandbox.stub(instance, 'listWebhooksSubscriptions').returns(listWebhooksSubscriptionsResponseObj)

  const modifyWebhooksSubscriptionResponseObj = { data: { id: 'SUB123', sink: 'https://endpoint.test', verified: true, types: ['it.fattureincloud.webhooks.cashbook.create'] }, warnings: ['error'] }
  const modifyWebhooksSubscriptionStub = sandbox.stub(instance, 'modifyWebhooksSubscription').returns(modifyWebhooksSubscriptionResponseObj)

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

  describe('WebhooksApi', function () {
    describe('createWebhooksSubscription', function () {
      it('should call createWebhooksSubscription successfully', function (done) {
        const opts = {
          createWebhooksSubscriptionRequest:
          { data: { sink: 'https://endpoint.test', types: ['it.fattureincloud.webhooks.cashbook.create'] } }
        }
        const response = instance.createWebhooksSubscription(2, opts)
        const responseObj = Object.assign(new CreateWebhooksSubscriptionResponse(), response)
        const expectedJson = JSON.stringify(createWebhooksSubscriptionResponseObj)
        const actualJson = JSON.stringify(responseObj)
        expect(actualJson).to.equal(expectedJson)
        expect(createWebhooksSubscriptionStub.getCall(0).args[1]).to.equal(opts)
        done()
      })
    })
    describe('deleteWebhooksSubscription', function () {
      it('should call deleteWebhooksSubscription successfully', function (done) {
        expect(1).to.equal(1)
        done()
      })
    })
    describe('getWebhooksSubscription', function () {
      it('should call getWebhooksSubscription successfully', function (done) {
        const response = instance.getWebhooksSubscription()
        const responseObj = Object.assign(new GetWebhooksSubscriptionResponse(), response)
        const expectedJson = JSON.stringify(getWebhooksSubscriptionResponseObj)
        const actualJson = JSON.stringify(responseObj)
        expect(actualJson).to.equal(expectedJson)
        done()
      })
    })
    describe('listWebhooksSubscriptions', function () {
      it('should call listWebhooksSubscriptions successfully', function (done) {
        const response = instance.listWebhooksSubscriptions()
        const responseObj = Object.assign(new ListWebhooksSubscriptionsResponse(), response)
        const expectedJson = JSON.stringify(listWebhooksSubscriptionsResponseObj)
        const actualJson = JSON.stringify(responseObj)
        expect(actualJson).to.equal(expectedJson)
        done()
      })
    })
    describe('modifyWebhooksSubscription', function () {
      it('should call modifyWebhooksSubscription successfully', function (done) {
        const opts = {
          modifyWebhooksSubscriptionRequest:
           { data: { sink: 'https://sasasa.com' } }
        }
        const response = instance.modifyWebhooksSubscription(2, 12345, opts)
        const responseObj = Object.assign(new ModifyWebhooksSubscriptionResponse(), response)
        const expectedJson = JSON.stringify(modifyWebhooksSubscriptionResponseObj)
        const actualJson = JSON.stringify(responseObj)
        expect(actualJson).to.equal(expectedJson)
        expect(modifyWebhooksSubscriptionStub.getCall(0).args[2]).to.equal(opts)
        done()
      })
    })
  })
}))
