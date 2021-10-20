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

import CreateArchiveDocumentResponse from '../../src/model/CreateArchiveDocumentResponse';
import CreateArchiveDocumentRequest from '../../src/model/CreateArchiveDocumentRequest';
import GetArchiveDocumentResponse from '../../src/model/GetArchiveDocumentResponse';
import ListArchiveDocumentsResponse from '../../src/model/ListArchiveDocumentsResponse';
import ModifyArchiveDocumentRequest from '../../src/model/ModifyArchiveDocumentRequest';
import ModifyArchiveDocumentResponse from '../../src/model/ModifyArchiveDocumentResponse';
import UploadArchiveAttachmentResponse from '../../src/model/UploadArchiveAttachmentResponse';

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

  var instance = new FattureInCloudApiV2ApiReference.ArchiveApi();

  var createArchiveDocumentResponseObj = {"data":{"id":12345,"date":"2021-08-20","category":"Altri documenti","description":"spesa 2","attachment_url":"spesa2.pdf"}};
  var createArchiveDocumentStub = sandbox.stub(instance, "createArchiveDocument").returns(createArchiveDocumentResponseObj);

  var deleteArchiveDocumentResponseObj = {};
  sandbox.stub(instance, "deleteArchiveDocument").returns(deleteArchiveDocumentResponseObj);

  var getArchiveDocumentResponseObj = {"data":{"id":12345,"date":"2021-08-20","category":"Altri documenti","description":"spesa 2","attachment_url":"spesa2.pdf"}};
  sandbox.stub(instance, "getArchiveDocument").returns(getArchiveDocumentResponseObj);

  var listArchiveDocumentsResponseObj = {"current_page":1,"data":[{"id":12345,"date":"2021-08-20","category":"Altri documenti","description":"spesa 2","attachment_url":"spesa2.pdf"},{"id":12346,"date":"2021-08-19","category":"Altri documenti","description":"spesa 1","attachment_url":"spesa1.pdf"}],"first_page_url":"page=1","from":1,"last_page":1,"last_page_url":"page=1","next_page_url":null,"path":"\/archive","per_page":50,"prev_page_url":null,"to":2,"total":2};
  sandbox.stub(instance, "listArchiveDocuments").returns(listArchiveDocumentsResponseObj);

  var modifyArchiveDocumentResponseObj = {"data":{"id":12345,"date":"2021-08-20","category":"Altri documenti","description":"spesa 2","attachment_url":"spesa2.pdf"}};
  var modifyArchiveDocumentStub = sandbox.stub(instance, "modifyArchiveDocument").returns(modifyArchiveDocumentResponseObj);

  var uploadArchiveDocumentAttachmentResponseObj = {"data":{"attachment_token":"YmMyNWYxYzIwMTU3N2Y4ZGE3ZjZiMzg5OWY0ODNkZDQveXl5LmRvYw"}};
  sandbox.stub(instance, "uploadArchiveDocumentAttachment").returns(uploadArchiveDocumentAttachmentResponseObj);

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

  describe('ArchiveApi', function() {
    describe('createArchiveDocument', function() {
      it('should call createArchiveDocument successfully', function(done) {
        var opts = { "createArchiveDocumentRequest":
          {"data":{"date":"2021-08-20","category":"Altri documenti","description":"spesa 1","attachment_token":"YjFrbmNlc3E0NmNuaW5ocXQ0b2p0c202NG1ncWx6ZmsvZmlsZW5hbWU"}}
        }
        var response = instance.createArchiveDocument(2, opts);
        var responseObj = Object.assign(new CreateArchiveDocumentResponse(), response);
        var expectedJson = JSON.stringify(createArchiveDocumentResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        expect(createArchiveDocumentStub.getCall(0).args[1]).to.equal(opts);
        done();
      });
    });
    describe('deleteArchiveDocument', function() {
      it('should call deleteArchiveDocument successfully', function(done) {
        expect(1).to.equal(1);
        done();
      });
    });
    describe('getArchiveDocument', function() {
      it('should call getArchiveDocument successfully', function(done) {
        var response = instance.getArchiveDocument();
        var responseObj = Object.assign(new GetArchiveDocumentResponse(), response);
        var expectedJson = JSON.stringify(getArchiveDocumentResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
    describe('listArchiveDocuments', function() {
      it('should call listArchiveDocuments successfully', function(done) {
        var response = instance.listArchiveDocuments();
        var responseObj = Object.assign(new ListArchiveDocumentsResponse(), response);
        var expectedJson = JSON.stringify(listArchiveDocumentsResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
    describe('modifyArchiveDocument', function() {
      it('should call modifyArchiveDocument successfully', function(done) {
        var opts = { "modifyArchiveDocumentRequest":
          {"data":{"description":"spesa lululu"}}
        };
        var response = instance.modifyArchiveDocument(2, 12345, opts);
        var responseObj = Object.assign(new ModifyArchiveDocumentResponse(), response);
        var expectedJson = JSON.stringify(modifyArchiveDocumentResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        expect(modifyArchiveDocumentStub.getCall(0).args[2]).to.equal(opts);
        done();
      });
    });
    describe('uploadArchiveDocumentAttachment', function() {
      it('should call uploadArchiveDocumentAttachment successfully', function(done) {
        var response = instance.uploadArchiveDocumentAttachment();
        var responseObj = Object.assign(new UploadArchiveAttachmentResponse(), response);
        var expectedJson = JSON.stringify(uploadArchiveDocumentAttachmentResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
  });

}));
