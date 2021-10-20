/**
 * Fatture in Cloud API v2 - API Reference
 * ## Request informations In every request description you will be able to find some additional informations about context, permissions and supported functionality:  | Parameter | Description | |-----------|-------------| | 👥 Context | Indicate the subject of the request. Can be `company`, `user` or `accountant`.  | | 🔒 Required scope | If present, indicates the required scope to fulfill the request. | | 🔍 Filtering | If present, indicates which fields support the filtering feature. | | ↕️ Sorting | If present, indicates which fields support the sorting feature. | | 📄 Paginated results | If present, indicate that the results are paginated. | | 🎩 Customized responses supported | If present, indicate that you can use `field` or `fieldset` to customize the response body. |  For example the request `GET /entities/{entityRole}` have tis informations: \\ 👥 Company context \\ 🔒 Required scope: `entity.clients:r` or `entity.suppliers:r` (depending on `entityRole`) \\ 🔍 Filtering: `id`, `name` \\ ↕️ Sorting: `id`, `name` \\ 📄 Paginated results \\ 🎩 Customized responses supported  Keep in mind that if you are making **company realted requests**, you will need to specify the company id in the requests: ``` GET /c/{company_id}/issued_documents ```
 *
 * The version of the OpenAPI document: v2.0.0
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FattureInCloudApiV2ApiReference);
  }
}(this, function(expect, FattureInCloudApiV2ApiReference) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FattureInCloudApiV2ApiReference.IssuedDocumentPaymentsList();
    instance.due_date = "2021-12-10";
    instance.amount = 333;
    instance.status = "paid";
    instance.paid_date = "2021-12-11";
    instance.payment_account = {
                    id : 21,
                    name : "Indesa - Carta conto",
                    type : "standard",
                    virtual : false
                },
    instance.ei_raw = {
                    prop : true
                }    
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('IssuedDocumentPaymentsList', function() {
    it('should create an instance of IssuedDocumentPaymentsList', function() {
      expect(instance).to.be.a(FattureInCloudApiV2ApiReference.IssuedDocumentPaymentsList);
    });

    it('should have the property dueDate (base name: "due_date")', function() {
      expect(typeof instance.due_date).to.be('string');
    });

    it('should have the property amount (base name: "amount")', function() {
      expect(typeof instance.amount).to.be('number');
    });

    it('should have the property status (base name: "status")', function() {
      expect(typeof instance.status).to.be('string');
    });

    it('should have the property paymentAccount (base name: "payment_account")', function() {
      expect(typeof instance.payment_account).to.be('object');
    });

    it('should have the property paidDate (base name: "paid_date")', function() {
      expect(typeof instance.paid_date).to.be('string');
    });

    it('should have the property eiRaw (base name: "ei_raw")', function() {
      expect(typeof instance.ei_raw).to.be('object');
    });

  });

}));
