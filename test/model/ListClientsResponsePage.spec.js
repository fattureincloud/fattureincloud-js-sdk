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
    instance = new FattureInCloudApiV2ApiReference.ListClientsResponsePage();
    instance.data = [
      {
        id : 16451,
        code : "AE86",
        name : "Avv. Maria Rossi",
        type : "person",
        first_name : "Maria",
        last_name : "Rossi",
        contact_person : "",
        vat_number : "IT12345640962",
        tax_code : "BLTGNI5ABCDA794E",
        address_street : "Via Roma, 1",
        address_postal_code : "20900",
        address_city : "Milano",
        address_province : "MI",
        address_extra : "",
        country : "Italia",
        email : "maria.rossi@example.com",
        certified_email : "maria.rossi@pec.example.com",
        phone : "1234567890",
        fax : "",
        notes : "",
        created_at : "2021-04-29",
        updated_at : "2021-04-29",
        default_payment_terms : 1,
        default_payment_terms_type : "standard",
        bank_name : "Indesa",
        bank_iban : "IT40P123456781000000123456",
        bank_swift_code : "AK86PCT",
        shipping_address : "Corso Magellano 4",
        e_invoice : true,
        ei_code : "111111",
        default_vat : {
          id : 54321,
          value : 45,
          description : "",
          is_disabled : false
        },
        default_payment_method : {
          id : 386092,
          name : "Credit card"
        }
      },
      {
        id : 25330696,
        code : "PD00",
        name : "Mario Rossi",
        type : "person",
        first_name : "Mario",
        last_name : "Rossi",
        contact_person : "",
        vat_number : "IT1234567890",
        tax_code : "ABCDEF12G34H567I",
        address_street : "Via largo augusto 123",
        address_postal_code : "21012",
        address_city : "Bergamo",
        address_province : "BG",
        address_extra : "",
        country : "Italia",
        email : "info@mariorossi.it",
        certified_email : "info@pec.mariorossi.it",
        phone : "012345678",
        fax : "012345678",
        notes : "",
        created_at : "2021-04-29",
        default_payment_terms : 0,
        default_payment_terms_type : "standard",
        bank_name : "Monte dei Pascoli",
        bank_iban : "IT00P123456781000000123456",
        bank_swift_code : "APL86PCT",
        shipping_address : "Via Miilano 4",
        e_invoice : false,
        ei_code : "7654321",
        default_vat : {
          id : 66,
          value : 22,
          description : "",
          is_disabled : false
        },
        default_payment_method : null
      }
    ]
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

  describe('ListClientsResponsePage', function() {
    it('should create an instance of ListClientsResponsePage', function() {
      expect(instance).to.be.a(FattureInCloudApiV2ApiReference.ListClientsResponsePage);
    });

    it('should have the property data (base name: "data")', function() {
      expect(typeof instance.data).to.be('object');
    });

  });

}));
