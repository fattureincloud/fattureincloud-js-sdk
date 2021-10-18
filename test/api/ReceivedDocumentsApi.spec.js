/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.  For more information, please visit https://www.fattureincloud.it.
 *
 * The version of the OpenAPI document: 2.0.1
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
    factory(root.expect, root.@FattureincloudFattureincloudJsSdk);
  }
}(this, function(expect, @FattureincloudFattureincloudJsSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new @FattureincloudFattureincloudJsSdk.ReceivedDocumentsApi();
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

  describe('ReceivedDocumentsApi', function() {
    describe('createReceivedDocument', function() {
      it('should call createReceivedDocument successfully', function(done) {
        //uncomment below and update the code to test createReceivedDocument
        //instance.createReceivedDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteReceivedDocument', function() {
      it('should call deleteReceivedDocument successfully', function(done) {
        //uncomment below and update the code to test deleteReceivedDocument
        //instance.deleteReceivedDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteReceivedDocumentAttachment', function() {
      it('should call deleteReceivedDocumentAttachment successfully', function(done) {
        //uncomment below and update the code to test deleteReceivedDocumentAttachment
        //instance.deleteReceivedDocumentAttachment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getExistingReceivedDocumentTotals', function() {
      it('should call getExistingReceivedDocumentTotals successfully', function(done) {
        //uncomment below and update the code to test getExistingReceivedDocumentTotals
        //instance.getExistingReceivedDocumentTotals(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNewReceivedDocumentTotals', function() {
      it('should call getNewReceivedDocumentTotals successfully', function(done) {
        //uncomment below and update the code to test getNewReceivedDocumentTotals
        //instance.getNewReceivedDocumentTotals(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getReceivedDocument', function() {
      it('should call getReceivedDocument successfully', function(done) {
        //uncomment below and update the code to test getReceivedDocument
        //instance.getReceivedDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getReceivedDocumentPreCreateInfo', function() {
      it('should call getReceivedDocumentPreCreateInfo successfully', function(done) {
        //uncomment below and update the code to test getReceivedDocumentPreCreateInfo
        //instance.getReceivedDocumentPreCreateInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listReceivedDocuments', function() {
      it('should call listReceivedDocuments successfully', function(done) {
        //uncomment below and update the code to test listReceivedDocuments
        //instance.listReceivedDocuments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyReceivedDocument', function() {
      it('should call modifyReceivedDocument successfully', function(done) {
        //uncomment below and update the code to test modifyReceivedDocument
        //instance.modifyReceivedDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadReceivedDocumentAttachment', function() {
      it('should call uploadReceivedDocumentAttachment successfully', function(done) {
        //uncomment below and update the code to test uploadReceivedDocumentAttachment
        //instance.uploadReceivedDocumentAttachment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
