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

 import CreateCashbookEntryRequest from '../../src/model/CreateCashbookEntryRequest';
 import CreateCashbookEntryResponse from '../../src/model/CreateCashbookEntryResponse';
 import GetCashbookEntryResponse from '../../src/model/GetCashbookEntryResponse';
 import ListCashbookEntriesResponse from '../../src/model/ListCashbookEntriesResponse';
 import ModifyCashbookEntryRequest from '../../src/model/ModifyCashbookEntryRequest';
 import ModifyCashbookEntryResponse from '../../src/model/ModifyCashbookEntryResponse';

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

  var sandbox = require("sinon").createSandbox();

  var instance = new FattureInCloudApiV2ApiReference.CashbookApi();

  var createCashbookEntryResponseObj = {"data":{"date":"2021-08-24","amount_out":122,"payment_account_out":{"id":333},"description":"Fattura n. 201\/2021","entity_name":"Rossi S.r.l.","kind":"issued_document","document":{"id":54321},"type":"out"}};
  var createCashbookEntryStub = sandbox.stub(instance, "createCashbookEntry").returns(createCashbookEntryResponseObj);

  var deleteCashbookEntryResponseObj = {};
  sandbox.stub(instance, "deleteCashbookEntry").returns(deleteCashbookEntryResponseObj);

  var getCashbookEntryResponseObj = {"data":{"date":"2021-08-24","amount_out":122,"payment_account_out":{"id":333},"description":"Fattura n. 201\/2021","entity_name":"Rossi S.r.l.","kind":"issued_document","document":{"id":54321},"type":"out"}};
  sandbox.stub(instance, "getCashbookEntry").returns(getCashbookEntryResponseObj);

  var modifyCashbookEntryResponseObj = {"data":{"date":"2021-08-24","amount_out":122,"payment_account_out":{"id":333},"description":"Fattura n. 201\/2021","entity_name":"Rossi S.r.l.","kind":"issued_document","document":{"id":54321},"type":"out"}};
  sandbox.stub(instance, "modifyCashbookEntry").returns(modifyCashbookEntryResponseObj);

  var listCashbookEntriesResponseObj = {"data":[{"date":"2021-08-24","amount_in":122,"payment_account_in":{"id":333},"description":"Fattura n. 201\/2021","entity_name":"Rossi S.r.l.","kind":"issued_document","document":{"id":54321},"type":"in"},{"date":"2021-08-29","amount_out":211,"payment_account_out":{"id":444},"description":"Fattura n. 202\/2021","entity_name":"Red S.r.l.","kind":"issued_document","document":{"id":12345},"type":"out"}]};
  sandbox.stub(instance, "listCashbookEntries").returns(listCashbookEntriesResponseObj);

  beforeEach(function() {
    
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

  describe('CashbookApi', function() {
    describe('createCashbookEntry', function() {
      it('should call createCashbookEntry successfully', function(done) {
        var opts = { "createCashbookEntryRequest":
          {"data":{"date":"2021-08-24","amount_in":122,"payment_account_in":{"id":21},"description":"Fattura n. 201\/2021","entity_name":"Rossi S.r.l.","kind":"issued_document","document":{"id":54321},"type":"in"}}
        };
        var response = instance.createCashbookEntry(2, opts);
        var responseObj = Object.assign(new CreateCashbookEntryResponse(), response);
        var expectedJson = JSON.stringify(createCashbookEntryResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        expect(createCashbookEntryStub.getCall(0).args[1]).to.equal(opts);
        done();
      });
    });
    describe('deleteCashbookEntry', function() {
      it('should call deleteCashbookEntry successfully', function(done) {
        expect(1).to.equal(1);
        done();
      });
    });
    describe('getCashbookEntry', function() {
      it('should call getCashbookEntry successfully', function(done) {
        var response = instance.getCashbookEntry();
        var responseObj = Object.assign(new GetCashbookEntryResponse(), response);
        var expectedJson = JSON.stringify(getCashbookEntryResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
    describe('listCashbookEntries', function() {
      it('should call listCashbookEntries successfully', function(done) {
        var response = instance.listCashbookEntries();
        var responseObj = Object.assign(new ListCashbookEntriesResponse(), response);
        var expectedJson = JSON.stringify(listCashbookEntriesResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
    describe('modifyCashbookEntry', function() {
      it('should call modifyCashbookEntry successfully', function(done) {
        var response = instance.modifyCashbookEntry();
        var responseObj = Object.assign(new ModifyCashbookEntryResponse(), response);
        var expectedJson = JSON.stringify(modifyCashbookEntryResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
  });

}));
