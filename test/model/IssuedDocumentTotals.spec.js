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
    factory(root.expect, root.fattureInCloudSdk);
  }
}(this, function(expect, fattureInCloudSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new fattureInCloudSdk.IssuedDocumentTotals();
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

  describe('IssuedDocumentTotals', function() {
    it('should create an instance of IssuedDocumentTotals', function() {
      // uncomment below and update the code to test IssuedDocumentTotals
      //var instane = new fattureInCloudSdk.IssuedDocumentTotals();
      //expect(instance).to.be.a(fattureInCloudSdk.IssuedDocumentTotals);
    });

    it('should have the property amountNet (base name: "amount_net")', function() {
      // uncomment below and update the code to test the property amountNet
      //var instance = new fattureInCloudSdk.IssuedDocumentTotals();
      //expect(instance).to.be();
    });

    it('should have the property amountRivalsa (base name: "amount_rivalsa")', function() {
      // uncomment below and update the code to test the property amountRivalsa
      //var instance = new fattureInCloudSdk.IssuedDocumentTotals();
      //expect(instance).to.be();
    });

    it('should have the property amountNetWithRivalsa (base name: "amount_net_with_rivalsa")', function() {
      // uncomment below and update the code to test the property amountNetWithRivalsa
      //var instance = new fattureInCloudSdk.IssuedDocumentTotals();
      //expect(instance).to.be();
    });

    it('should have the property amountCassa (base name: "amount_cassa")', function() {
      // uncomment below and update the code to test the property amountCassa
      //var instance = new fattureInCloudSdk.IssuedDocumentTotals();
      //expect(instance).to.be();
    });

    it('should have the property taxableAmount (base name: "taxable_amount")', function() {
      // uncomment below and update the code to test the property taxableAmount
      //var instance = new fattureInCloudSdk.IssuedDocumentTotals();
      //expect(instance).to.be();
    });

    it('should have the property notTaxableAmount (base name: "not_taxable_amount")', function() {
      // uncomment below and update the code to test the property notTaxableAmount
      //var instance = new fattureInCloudSdk.IssuedDocumentTotals();
      //expect(instance).to.be();
    });

    it('should have the property amountVat (base name: "amount_vat")', function() {
      // uncomment below and update the code to test the property amountVat
      //var instance = new fattureInCloudSdk.IssuedDocumentTotals();
      //expect(instance).to.be();
    });

    it('should have the property amountGross (base name: "amount_gross")', function() {
      // uncomment below and update the code to test the property amountGross
      //var instance = new fattureInCloudSdk.IssuedDocumentTotals();
      //expect(instance).to.be();
    });

    it('should have the property taxableAmountWithholdingTax (base name: "taxable_amount_withholding_tax")', function() {
      // uncomment below and update the code to test the property taxableAmountWithholdingTax
      //var instance = new fattureInCloudSdk.IssuedDocumentTotals();
      //expect(instance).to.be();
    });

    it('should have the property amountWithholdingTax (base name: "amount_withholding_tax")', function() {
      // uncomment below and update the code to test the property amountWithholdingTax
      //var instance = new fattureInCloudSdk.IssuedDocumentTotals();
      //expect(instance).to.be();
    });

    it('should have the property taxableAmountOtherWithholdingTax (base name: "taxable_amount_other_withholding_tax")', function() {
      // uncomment below and update the code to test the property taxableAmountOtherWithholdingTax
      //var instance = new fattureInCloudSdk.IssuedDocumentTotals();
      //expect(instance).to.be();
    });

    it('should have the property amountOtherWithholdingTax (base name: "amount_other_withholding_tax")', function() {
      // uncomment below and update the code to test the property amountOtherWithholdingTax
      //var instance = new fattureInCloudSdk.IssuedDocumentTotals();
      //expect(instance).to.be();
    });

    it('should have the property stampDuty (base name: "stamp_duty")', function() {
      // uncomment below and update the code to test the property stampDuty
      //var instance = new fattureInCloudSdk.IssuedDocumentTotals();
      //expect(instance).to.be();
    });

    it('should have the property amountDue (base name: "amount_due")', function() {
      // uncomment below and update the code to test the property amountDue
      //var instance = new fattureInCloudSdk.IssuedDocumentTotals();
      //expect(instance).to.be();
    });

    it('should have the property isEnasarcoMaximalExceeded (base name: "is_enasarco_maximal_exceeded")', function() {
      // uncomment below and update the code to test the property isEnasarcoMaximalExceeded
      //var instance = new fattureInCloudSdk.IssuedDocumentTotals();
      //expect(instance).to.be();
    });

    it('should have the property paymentsSum (base name: "payments_sum")', function() {
      // uncomment below and update the code to test the property paymentsSum
      //var instance = new fattureInCloudSdk.IssuedDocumentTotals();
      //expect(instance).to.be();
    });

    it('should have the property vatList (base name: "vat_list")', function() {
      // uncomment below and update the code to test the property vatList
      //var instance = new fattureInCloudSdk.IssuedDocumentTotals();
      //expect(instance).to.be();
    });

  });

}));
