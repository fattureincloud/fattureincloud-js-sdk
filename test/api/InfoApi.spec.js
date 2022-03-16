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

 import ListArchiveCategoriesResponse from '../../src/model/ListArchiveCategoriesResponse';
 import ListCitiesResponse from '../../src/model/ListCitiesResponse';
 import ListCostCentersResponse from '../../src/model/ListCostCentersResponse';
 import ListCountriesResponse from '../../src/model/ListCountriesResponse';
 import ListDetailedCountriesResponse from '../../src/model/ListDetailedCountriesResponse';
 import ListCurrenciesResponse from '../../src/model/ListCurrenciesResponse';
 import ListDeliveryNotesDefaultCausalsResponse from '../../src/model/ListDeliveryNotesDefaultCausalsResponse';
 import ListLanguagesResponse from '../../src/model/ListLanguagesResponse';
 import ListPaymentAccountsResponse from '../../src/model/ListPaymentAccountsResponse';
 import ListPaymentMethodsResponse from '../../src/model/ListPaymentMethodsResponse';
 import ListProductCategoriesResponse from '../../src/model/ListProductCategoriesResponse';
 import ListReceivedDocumentCategoriesResponse from '../../src/model/ListReceivedDocumentCategoriesResponse';
 import ListRevenueCentersResponse from '../../src/model/ListRevenueCentersResponse';
 import ListTemplatesResponse from '../../src/model/ListTemplatesResponse';
 import ListUnitsOfMeasureResponse from '../../src/model/ListUnitsOfMeasureResponse';
 import ListVatTypesResponse from '../../src/model/ListVatTypesResponse';

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

  var instance = new fattureInCloudSdk.InfoApi();

  var listArchiveCategoriesResponseObj = {"data":["Altri documenti","Conferme d\'ordine","Contratti","Dichiarazioni dei redditi","Documenti per detrazioni","Estratti conto bancari","Estratti conto carte di credito"]};
  sandbox.stub(instance, "listArchiveCategories").returns(listArchiveCategoriesResponseObj);

  var listCitiesResponseObj = {"data":[{"postal_code":"89867","city":"Zungri","province":"VV"},{"postal_code":"83020","city":"Aiello del Sabato","province":"AV"},{"postal_code":"83011","city":"Altavilla Irpina","province":"AV"}]};
  sandbox.stub(instance, "listCities").returns(listCitiesResponseObj);

  var listCostCentersResponseObj = {"data":["Negozio Bergamo","Negozio Milano"]};
  sandbox.stub(instance, "listCostCenters").returns(listCostCentersResponseObj);

  var listCountriesResponseObj = {"data":["Italia","Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","..."]};
  sandbox.stub(instance, "listCountries").returns(listCountriesResponseObj);

  var listDetailedCountriesResponseObj = {"data": [{"name": "Italia", "settings_name": "Italia", "iso": "IT", "fiscal_iso": "IT", "uic": "086"}, {"name": "Albania", "settings_name": "Albania", "iso": "AL", "fiscal_iso": "AL", "uic": "087"}]}
  sandbox.stub(instance, "listDetailedCountries").returns(listDetailedCountriesResponseObj);

  var listCurrenciesResponseObj = {"data":[{"id":"AED","symbol":"AED","html_symbol":"AED","exchange_rate":"4.09500"},{"id":"EUR","symbol":"\u20ac","html_symbol":"€","exchange_rate":"1.00000"}]};
  sandbox.stub(instance, "listCurrencies").returns(listCurrenciesResponseObj);

  var listDeliveryNotesDefaultCausalsResponseObj = {"data":["Vendita","Conto visione","Conto deposito","Conto vendita","Tentata vendita","Prestito d\'uso","Conto lavorazione","Omaggio","Riparazione","Reso per accredito","Reso per sostituzione"]};
  sandbox.stub(instance, "listDeliveryNotesDefaultCausals").returns(listDeliveryNotesDefaultCausalsResponseObj);

  var listLanguagesResponseObj = {"data":[{"code":"it","name":"Italiano"},{"code":"en","name":"Inglese"}]};
  sandbox.stub(instance, "listLanguages").returns(listLanguagesResponseObj);

  var listPaymentAccountsResponseObj = {"data":[{"id":21,"name":"Indesa - Carta conto","type":"standard","iban":null,"sia":null,"virtual":false},{"id":109,"name":"Indesa","type":"bank","iban":"IT17A1234563200000003498936","sia":"IN234","virtual":false}]};
  sandbox.stub(instance, "listPaymentAccounts").returns(listPaymentAccountsResponseObj);
  
  var listPaymentMethodsResponseObj = {"data":[{"id":12345,"name":"Carta di credito","is_default":false,"default_payment_account":null},{"id":12346,"name":"Bonifico bancario","is_default":true,"default_payment_account":null}]};
  sandbox.stub(instance, "listPaymentMethods").returns(listPaymentMethodsResponseObj);
  
  var listProductCategoriesResponseObj = {"data":["Alimentari","Arredamento"]};
  sandbox.stub(instance, "listProductCategories").returns(listProductCategoriesResponseObj);

  var listReceivedDocumentCategoriesResponseObj = {"data":["Telefono e internet","Assicurazioni e quote","Auto ed altri veicoli","Computer e accessori","Server e hosting"]};
  sandbox.stub(instance, "listReceivedDocumentCategories").returns(listReceivedDocumentCategoriesResponseObj);

  var listRevenueCentersResponseObj = {"data":["Negozio Bergamo","Negozio Milano"]};
  sandbox.stub(instance, "listRevenueCenters").returns(listRevenueCentersResponseObj);

  var listTemplatesResponseObj = {"data":[{"id":10,"name":"New Standard S1"},{"id":106,"name":"Minimalist"}]};
  sandbox.stub(instance, "listTemplates").returns(listTemplatesResponseObj);

  var listUnitsOfMeasureResponseObj = {"data":["pezzi","kg","litri","ore","giorni","km","mesi"]};
  sandbox.stub(instance, "listUnitsOfMeasure").returns(listUnitsOfMeasureResponseObj);

  var listVatTypesResponseObj = {"data":[{"id":0,"value":22,"description":"Non imponibile art. 123","notes":"IVA non imponibile ai sensi dell\'articolo 123, comma 2","e_invoice":"string","ei_type":2,"ei_description":"string","editable":true},{"id":1010,"value":0,"description":"NON IMPONIBILE IVA EX ART. 8 COMMA 1 LETT.A","notes":"","e_invoice":false,"ei_type":0,"ei_description":null,"is_disabled":false,"editable":true}]};
  sandbox.stub(instance, "listVatTypes").returns(listVatTypesResponseObj);
  
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

  describe('InfoApi', function() {
    describe('listArchiveCategories', function() {
      it('should call listArchiveCategories successfully', function(done) {
        var response = instance.listArchiveCategories();
        var responseObj = Object.assign(new ListArchiveCategoriesResponse(), response);
        var expectedJson = JSON.stringify(listArchiveCategoriesResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
    describe('listCities', function() {
      it('should call listCities successfully', function(done) {
        var response = instance.listCities();
        var responseObj = Object.assign(new ListCitiesResponse(), response);
        var expectedJson = JSON.stringify(listCitiesResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
    describe('listCostCenters', function() {
      it('should call listCostCenters successfully', function(done) {
        var response = instance.listCostCenters();
        var responseObj = Object.assign(new ListCostCentersResponse(), response);
        var expectedJson = JSON.stringify(listCostCentersResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
    describe('listCountries', function() {
      it('should call listCountries successfully', function(done) {
        var response = instance.listCountries();
        var responseObj = Object.assign(new ListCountriesResponse(), response);
        var expectedJson = JSON.stringify(listCountriesResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
    describe('listDetailedCountries', function() {
      it('should call listDetailedCountries successfully', function(done) {
        var response = instance.listDetailedCountries();
        var responseObj = Object.assign(new ListDetailedCountriesResponse(), response);
        var expectedJson = JSON.stringify(listDetailedCountriesResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
    describe('listCurrencies', function() {
      it('should call listCurrencies successfully', function(done) {
        var response = instance.listCurrencies();
        var responseObj = Object.assign(new ListCurrenciesResponse(), response);
        var expectedJson = JSON.stringify(listCurrenciesResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
    describe('listDeliveryNotesDefaultCausals', function() {
      it('should call listDeliveryNotesDefaultCausals successfully', function(done) {
        var response = instance.listDeliveryNotesDefaultCausals();
        var responseObj = Object.assign(new ListDeliveryNotesDefaultCausalsResponse(), response);
        var expectedJson = JSON.stringify(listDeliveryNotesDefaultCausalsResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
    describe('listLanguages', function() {
      it('should call listLanguages successfully', function(done) {
        var response = instance.listLanguages();
        var responseObj = Object.assign(new ListLanguagesResponse(), response);
        var expectedJson = JSON.stringify(listLanguagesResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
    describe('listPaymentAccounts', function() {
      it('should call listPaymentAccounts successfully', function(done) {
        var response = instance.listPaymentAccounts();
        var responseObj = Object.assign(new ListPaymentAccountsResponse(), response);
        var expectedJson = JSON.stringify(listPaymentAccountsResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
    describe('listPaymentMethods', function() {
      it('should call listPaymentMethods successfully', function(done) {
        var response = instance.listPaymentMethods();
        var responseObj = Object.assign(new ListPaymentMethodsResponse(), response);
        var expectedJson = JSON.stringify(listPaymentMethodsResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
    describe('listProductCategories', function() {
      it('should call listProductCategories successfully', function(done) {
        var response = instance.listProductCategories();
        var responseObj = Object.assign(new ListProductCategoriesResponse(), response);
        var expectedJson = JSON.stringify(listProductCategoriesResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
    describe('listReceivedDocumentCategories', function() {
      it('should call listReceivedDocumentCategories successfully', function(done) {
        var response = instance.listReceivedDocumentCategories();
        var responseObj = Object.assign(new ListReceivedDocumentCategoriesResponse(), response);
        var expectedJson = JSON.stringify(listReceivedDocumentCategoriesResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
    describe('listRevenueCenters', function() {
      it('should call listRevenueCenters successfully', function(done) {
        var response = instance.listRevenueCenters();
        var responseObj = Object.assign(new ListRevenueCentersResponse(), response);
        var expectedJson = JSON.stringify(listRevenueCentersResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
    describe('listTemplates', function() {
      it('should call listTemplates successfully', function(done) {
        var response = instance.listTemplates();
        var responseObj = Object.assign(new ListTemplatesResponse(), response);
        var expectedJson = JSON.stringify(listTemplatesResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
    describe('listUnitsOfMeasure', function() {
      it('should call listUnitsOfMeasure successfully', function(done) {
        var response = instance.listUnitsOfMeasure();
        var responseObj = Object.assign(new ListUnitsOfMeasureResponse(), response);
        var expectedJson = JSON.stringify(listUnitsOfMeasureResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
    describe('listVatTypes', function() {
      it('should call listVatTypes successfully', function(done) {
        var response = instance.listVatTypes();
        var responseObj = Object.assign(new ListVatTypesResponse(), response);
        var expectedJson = JSON.stringify(listVatTypesResponseObj);
        var actualJson = JSON.stringify(responseObj);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
  });

}));
