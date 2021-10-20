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
    instance = new FattureInCloudApiV2ApiReference.IssuedDocumentItemsList();
    instance.product_id = 12345;
    instance.code = "cod3";
    instance.name = "prod 1";
    instance.description = "product number uan";
    instance.qty = 44;
    instance.measure = "very big";
    instance.net_price = 10;
    instance.gross_price = 12.2;
    instance.not_taxable = false;
    instance.apply_withholding_taxes = true;
    instance.discount = 0;
    instance.discount_highlight = true;
    instance.in_ddt = false;
    instance.stock = 89;
    instance.vat = {
                    id : 21
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

  describe('IssuedDocumentItemsList', function() {
    it('should create an instance of IssuedDocumentItemsList', function() {
      expect(instance).to.be.a(FattureInCloudApiV2ApiReference.IssuedDocumentItemsList);
    });

    it('should have the property productId (base name: "product_id")', function() {
      expect(typeof instance.product_id).to.be('number');
    });

    it('should have the property code (base name: "code")', function() {
      expect(typeof instance.code).to.be('string');
    });

    it('should have the property name (base name: "name")', function() {
      expect(typeof instance.name).to.be('string');
    });

    it('should have the property description (base name: "description")', function() {
      expect(typeof instance.description).to.be('string');
    });

    it('should have the property qty (base name: "qty")', function() {
      expect(typeof instance.qty).to.be('number');
    });

    it('should have the property measure (base name: "measure")', function() {
      expect(typeof instance.measure).to.be('string');
    });

    it('should have the property netPrice (base name: "net_price")', function() {
      expect(typeof instance.net_price).to.be('number');
    });

    it('should have the property grossPrice (base name: "gross_price")', function() {
      expect(typeof instance.gross_price).to.be('number');
    });

    it('should have the property vat (base name: "vat")', function() {
      expect(typeof instance.vat).to.be('object');
    });

    it('should have the property notTaxable (base name: "not_taxable")', function() {
      expect(typeof instance.not_taxable).to.be('boolean');
    });

    it('should have the property applyWithholdingTaxes (base name: "apply_withholding_taxes")', function() {
      expect(typeof instance.apply_withholding_taxes).to.be('boolean');
    });

    it('should have the property discount (base name: "discount")', function() {
      expect(typeof instance.discount).to.be('number');
    });

    it('should have the property discountHighlight (base name: "discount_highlight")', function() {
      expect(typeof instance.discount_highlight).to.be('boolean');
    });

    it('should have the property inDdt (base name: "in_ddt")', function() {
      expect(typeof instance.in_ddt).to.be('boolean');
    });

    it('should have the property stock (base name: "stock")', function() {
      expect(typeof instance.stock).to.be('number');
    });

    it('should have the property eiRaw (base name: "ei_raw")', function() {
      expect(typeof instance.ei_raw).to.be('object');
    });

  });

}));
