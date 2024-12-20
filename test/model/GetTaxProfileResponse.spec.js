/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.1.3
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
  'use strict'

  let instance

  beforeEach(function() {
    instance = new fattureInCloudSdk.GetTaxProfileResponse();
    instance.data = {
      company_type: "individual",
      company_subtype: "artigiani",
      profession: null,
      regime: "forfettario_5",
      rivalsa_name: "",
      default_rivalsa: 0,
      cassa_name: "",
      default_cassa: 0,
      default_cassa_taxable: 100,
      cassa2_name: "",
      default_cassa2: 0,
      default_cassa2_taxable: 0,
      default_withholding_tax: 0,
      default_withholding_tax_taxable: 100,
      default_other_withholding_tax: 0,
      enasarco: false,
      enasarco_type: null,
      contributions_percentage: 0,
      med: false,
      default_vat: {
        id: 66,
        value: 0,
        description: "Contribuenti forfettari",
        notes: "Operazione non soggetta a IVA ai sensi dell'art. 1, commi 54-89, Legge n. 190\/2014 e succ. modifiche\/integrazioni",
        e_invoice: true,
        ei_type: 2.2,
        ei_description: "Non soggetta art. 1\/54-89 L. 190\/2014 e succ. modifiche\/integrazioni",
        editable: false,
        is_disabled: false,
        default: true
      }
    }
  })

  // var getProperty = function(object, getter, property) {
  //   // Use getter method if present; otherwise, get the property directly.
  //   if (typeof object[getter] === 'function')
  //     return object[getter]();
  //   else
  //     return object[property];
  // }

  // var setProperty = function(object, setter, property, value) {
  //   // Use setter method if present; otherwise, set the property directly.
  //   if (typeof object[setter] === 'function')
  //     object[setter](value);
  //   else
  //     object[property] = value;
  // }

  describe('GetTaxProfileResponse', function() {
    it('should create an instance of GetTaxProfileResponse', function() {
      expect(instance).to.be.a(fattureInCloudSdk.GetTaxProfileResponse)
    })

    it('should have the property data (base name: "data")', function() {
      expect(typeof instance.data).to.be('object')
    })

  });

}));
