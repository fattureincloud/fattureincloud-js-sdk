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
    instance = new FattureInCloudApiV2ApiReference.CreateReceivedDocumentRequest();
    instance.pending_id = 5;
    instance.data = {
        id : 12345,
        type : "expense",
        description : "Soggiorno di lavoro",
        amortization : 1,
        rc_center : "",
        invoice_number : "",
        is_marked : false,
        is_detailed : false,
        e_invoice : false,
        entity : {
          id : 111,
          name : "Hotel Rubino Palace"
        },
        date : "2021-08-15",
        next_due_date : "2021-08-15",
        currency : {
          id : "EUR",
          exchange_rate : "1.00000",
          symbol : "€"
        },
        amount_net : 592,
        amount_vat : 0,
        amount_gross : 592,
        amount_withholding_tax : 0,
        amount_other_withholding_tax : 0,
        tax_deductibility : 50,
        vat_deductibility : 100,
        payments_list : [
          {
            amount : 592,
            due_date : "2021-08-15",
            paid_date : "2021-08-15",
            id : 777,
            payment_terms : {
              days : 0,
              type : "standard"
            },
            status : "paid",
            payment_account : {
              id : 222,
              name : "Contanti",
              virtual : false
            }
          }
        ],
        attachment_url : "spesa_ger5i783t45hu6ti.pdf"
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

  describe('CreateReceivedDocumentRequest', function() {
    it('should create an instance of CreateReceivedDocumentRequest', function() {
      expect(instance).to.be.a(FattureInCloudApiV2ApiReference.CreateReceivedDocumentRequest);
    });

    it('should have the property pendingId (base name: "pending_id")', function() {
      expect(typeof instance.pending_id).to.be('number');
    });

    it('should have the property data (base name: "data")', function() {
      expect(typeof instance.data).to.be('object');
    });

  });

}));
