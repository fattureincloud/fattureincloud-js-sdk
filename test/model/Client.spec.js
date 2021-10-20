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
    instance = new FattureInCloudApiV2ApiReference.Client();
    instance.id = 16451;
    instance.code = "AE86";
    instance.name = "Avv. Maria Rossi";
    instance.type = "person";
    instance.first_name = "Maria";
    instance.last_name = "Rossi";
    instance.contact_person = "";
    instance.vat_number = "IT12345640962";
    instance.tax_code = "BLTGNI5ABCDA794E";
    instance.address_street = "Via Roma 1";
    instance.address_postal_code = "20900";
    instance.address_city = "Milano";
    instance.address_province = "MI";
    instance.address_extra = "";
    instance.country = "Italia";
    instance.email = "maria.rossi@example.com";
    instance.certified_email = "maria.rossi@pec.example.com";
    instance.phone = "1234567890";
    instance.fax = "";
    instance.notes = "";
    instance.created_at = "2021-04-29";
    instance.updated_at = "2021-04-29";
    instance.default_payment_terms = 1;
    instance.default_payment_terms_type = "standard";
    instance.bank_name = "Indesa";
    instance.bank_iban = "IT40P123456781000000123456";
    instance.bank_swift_code = "AK86PCT";
    instance.shipping_address = "Corso Magellano 4";
    instance.e_invoice = true;
    instance.ei_code = "111111";
    instance.default_vat = {
                    id : 54321,
                    value : 45,
                    description : "",
                    is_disabled : false
                },
    instance.default_payment_method = {
                    id : 386092,
                    name : "Credit card"
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

  describe('Client', function() {
    it('should create an instance of Client', function() {
      expect(instance).to.be.a(FattureInCloudApiV2ApiReference.Client);
    });

    it('should have the property id (base name: "id")', function() {
      expect(typeof instance.id).to.be('number');
    });

    it('should have the property code (base name: "code")', function() {
      expect(typeof instance.code).to.be('string');
    });

    it('should have the property name (base name: "name")', function() {
      expect(typeof instance.name).to.be('string');
    });

    it('should have the property type (base name: "type")', function() {
      expect(typeof instance.type).to.be('string');
    });

    it('should have the property firstName (base name: "first_name")', function() {
      expect(typeof instance.first_name).to.be('string');
    });

    it('should have the property lastName (base name: "last_name")', function() {
      expect(typeof instance.last_name).to.be('string');
    });

    it('should have the property contactPerson (base name: "contact_person")', function() {
      expect(typeof instance.contact_person).to.be('string');
    });

    it('should have the property vatNumber (base name: "vat_number")', function() {
      expect(typeof instance.vat_number).to.be('string');
    });

    it('should have the property taxCode (base name: "tax_code")', function() {
      expect(typeof instance.tax_code).to.be('string');
    });

    it('should have the property addressStreet (base name: "address_street")', function() {
      expect(typeof instance.address_street).to.be('string');
    });

    it('should have the property addressPostalCode (base name: "address_postal_code")', function() {
      expect(typeof instance.address_postal_code).to.be('string');
    });

    it('should have the property addressCity (base name: "address_city")', function() {
      expect(typeof instance.address_city).to.be('string');
    });

    it('should have the property addressProvince (base name: "address_province")', function() {
      expect(typeof instance.address_province).to.be('string');
    });

    it('should have the property addressExtra (base name: "address_extra")', function() {
      expect(typeof instance.address_extra).to.be('string');
    });

    it('should have the property country (base name: "country")', function() {
      expect(typeof instance.country).to.be('string');
    });

    it('should have the property email (base name: "email")', function() {
      expect(typeof instance.email).to.be('string');
    });

    it('should have the property certifiedEmail (base name: "certified_email")', function() {
      expect(typeof instance.certified_email).to.be('string');
    });

    it('should have the property phone (base name: "phone")', function() {
      expect(typeof instance.phone).to.be('string');
    });

    it('should have the property fax (base name: "fax")', function() {
      expect(typeof instance.fax).to.be('string');
    });

    it('should have the property notes (base name: "notes")', function() {
      expect(typeof instance.notes).to.be('string');
    });

    it('should have the property defaultVat (base name: "default_vat")', function() {
      expect(typeof instance.default_vat).to.be('object');
    });

    it('should have the property defaultPaymentTerms (base name: "default_payment_terms")', function() {
      expect(typeof instance.default_payment_terms).to.be('number');
    });

    it('should have the property defaultPaymentTermsType (base name: "default_payment_terms_type")', function() {
      expect(typeof instance.default_payment_terms_type).to.be('string');
    });

    it('should have the property defaultPaymentMethod (base name: "default_payment_method")', function() {
      expect(typeof instance.default_payment_method).to.be('object');
    });

    it('should have the property bankName (base name: "bank_name")', function() {
      expect(typeof instance.bank_name).to.be('string');
    });

    it('should have the property bankIban (base name: "bank_iban")', function() {
      expect(typeof instance.bank_iban).to.be('string');
    });

    it('should have the property bankSwiftCode (base name: "bank_swift_code")', function() {
      expect(typeof instance.bank_swift_code).to.be('string');
    });

    it('should have the property shippingAddress (base name: "shipping_address")', function() {
      expect(typeof instance.shipping_address).to.be('string');
    });

    it('should have the property eInvoice (base name: "e_invoice")', function() {
      expect(typeof instance.e_invoice).to.be('boolean');
    });

    it('should have the property eiCode (base name: "ei_code")', function() {
      expect(typeof instance.ei_code).to.be('string');
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      expect(typeof instance.created_at).to.be('string');
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      expect(typeof instance.updated_at).to.be('string');
    });

  });

}));
