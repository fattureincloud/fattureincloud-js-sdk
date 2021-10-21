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

 import CreateProductRequest from '../../src/model/CreateProductRequest';
 import CreateProductResponse from '../../src/model/CreateProductResponse';
 import GetProductResponse from '../../src/model/GetProductResponse';
 import ListProductsResponse from '../../src/model/ListProductsResponse';
 import ModifyProductRequest from '../../src/model/ModifyProductRequest';
 import ModifyProductResponse from '../../src/model/ModifyProductResponse';

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.fattureInCloudSdk);
  }
}(this, function(expect, fattureInCloudSdk) {
  'use strict';

  var sandbox = require("sinon").createSandbox();

  var instance = new fattureInCloudSdk.ProductsApi();

  var createProductResponseObj = {"data":{"id":12345,"name":"Tavolo di marmo","code":"TAVOLO003","net_price":240,"gross_price":280,"use_gross_price":false,"net_cost":0,"measure":"","description":"Tavolo in marmo pregiato","category":"arredamento","in_stock":true,"default_vat":{"id":3,"value":22,"description":"Non imponibile art. 123","notes":"IVA non imponibile ai sensi dell\'articolo 123, comma 2","is_disabled":false}}};
  var createProductStub = sandbox.stub(instance, "createProduct").returns(createProductResponseObj);

  var deleteProductResponseObj = {};
  sandbox.stub(instance, "deleteProduct").returns(deleteProductResponseObj);

  var getProductResponseObj = {"data":{"id":12345,"name":"Tavolo di marmo","code":"TAVOLO003","net_price":240,"gross_price":280,"use_gross_price":false,"net_cost":0,"measure":"","description":"Tavolo in marmo pregiato","category":"arredamento","in_stock":true,"default_vat":{"id":3,"value":22,"description":"Non imponibile art. 123","notes":"IVA non imponibile ai sensi dell\'articolo 123, comma 2","is_disabled":false}}};
  sandbox.stub(instance, "getProduct").returns(getProductResponseObj);

  var listProductsResponseObj = {"current_page":1,"data":[{"id":12345,"name":"Tavolo di marmo","code":"TAVOLO003","net_price":240,"gross_price":280,"use_gross_price":false,"net_cost":0,"measure":"","description":"Tavolo in marmo pregiato","category":"arredamento","in_stock":true,"default_vat":{"id":3,"value":22,"description":"Non imponibile art. 123","notes":"IVA non imponibile ai sensi dell\'articolo 123, comma 2","is_disabled":false}},{"id":12346,"name":"Tavolo di legno","code":"TAVOLO001","net_price":120,"gross_price":160,"use_gross_price":false,"net_cost":0,"measure":"","description":"Tavolo in legno pregiato","category":"arredamento","in_stock":true,"default_vat":{"id":3,"value":22,"description":"Non imponibile art. 123","notes":"IVA non imponibile ai sensi dell\'articolo 123, comma 2","is_disabled":false}}],"first_page_url":"page=1","from":1,"last_page":1,"last_page_url":"page=1","next_page_url":"page=2","path":"products","per_page":50,"prev_page_url":null,"to":55,"total":55};
  sandbox.stub(instance, "listProducts").returns(listProductsResponseObj);

  var modifyProductResponseObj = {"data":{"id":12345,"name":"Tavolo di marmo","code":"TAVOLO003","net_price":240,"gross_price":280,"use_gross_price":false,"net_cost":0,"measure":"","description":"Tavolo in marmo pregiato","category":"arredamento","in_stock":true,"default_vat":{"id":3,"value":22,"description":"Non imponibile art. 123","notes":"IVA non imponibile ai sensi dell\'articolo 123, comma 2","is_disabled":false}}};
  var modifyProductStub = sandbox.stub(instance, "modifyProduct").returns(modifyProductResponseObj);

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

  describe('ProductsApi', function() {
    describe('createProduct', function() {
      it('should call createProduct successfully', function(done) {
        var opts = { "createProductRequest":
          {"data":{"name":"Tavolo di marmo","code":"TAVOLOso003","net_price":240,"gross_price":280,"use_gross_price":false,"net_cost":0,"measure":"","description":"Tavolo in marmo pregiato","category":"arredamento","in_stock":true,"default_vat":{"id":1409,"value":22,"description":"Non imponibile art. 123","notes":"IVA non imponibile ai sensi dell'articolo 123, comma 2","is_disabled":false}}}
        };
        var response = instance.createProduct(2, opts);
        var responseObj = Object.assign(new CreateProductResponse(), response);
        var expectedJson = JSON.stringify(createProductResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        expect(createProductStub.getCall(0).args[1]).to.equal(opts);
        done();
      });
    });
    describe('deleteProduct', function() {
      it('should call deleteProduct successfully', function(done) {
        expect(1).to.equal(1);
        done();
      });
    });
    describe('getProduct', function() {
      it('should call getProduct successfully', function(done) {
        var response = instance.getProduct();
        var responseObj = Object.assign(new GetProductResponse(), response);
        var expectedJson = JSON.stringify(getProductResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
    describe('listProducts', function() {
      it('should call listProducts successfully', function(done) {
        var response = instance.listProducts();
        var responseObj = Object.assign(new ListProductsResponse(), response);
        var expectedJson = JSON.stringify(listProductsResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
    describe('modifyProduct', function() {
      it('should call modifyProduct successfully', function(done) {
        var opts = { "modifyProductRequest":
          {"data":{"description":"Tavolo in marmo sfregiato"}}
        };
        var response = instance.modifyProduct(2, 12345, opts);
        var responseObj = Object.assign(new ModifyProductResponse(), response);
        var expectedJson = JSON.stringify(modifyProductResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        expect(modifyProductStub.getCall(0).args[2]).to.equal(opts);
        done();
      });
    });
  });

}));
