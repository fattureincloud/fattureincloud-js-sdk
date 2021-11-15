/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.3
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Client from './Client';
import PaymentMethod from './PaymentMethod';
import Supplier from './Supplier';
import VatType from './VatType';

/**
 * The Entity model module.
 * @module model/Entity
 * @version 2.0.3
 */
class Entity {
    /**
     * Constructs a new <code>Entity</code>.
     * @alias module:model/Entity
     * @implements module:model/Client
     * @implements module:model/Supplier
     * @param name {String} Supplier name.
     */
    constructor(name) { 
        Client.initialize(this, name);Supplier.initialize(this, name);
        Entity.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>Entity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Entity} obj Optional instance to populate.
     * @return {module:model/Entity} The populated <code>Entity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Entity();
            Client.constructFromObject(data, obj);
            Supplier.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('contact_person')) {
                obj['contact_person'] = ApiClient.convertToType(data['contact_person'], 'String');
            }
            if (data.hasOwnProperty('vat_number')) {
                obj['vat_number'] = ApiClient.convertToType(data['vat_number'], 'String');
            }
            if (data.hasOwnProperty('tax_code')) {
                obj['tax_code'] = ApiClient.convertToType(data['tax_code'], 'String');
            }
            if (data.hasOwnProperty('address_street')) {
                obj['address_street'] = ApiClient.convertToType(data['address_street'], 'String');
            }
            if (data.hasOwnProperty('address_postal_code')) {
                obj['address_postal_code'] = ApiClient.convertToType(data['address_postal_code'], 'String');
            }
            if (data.hasOwnProperty('address_city')) {
                obj['address_city'] = ApiClient.convertToType(data['address_city'], 'String');
            }
            if (data.hasOwnProperty('address_province')) {
                obj['address_province'] = ApiClient.convertToType(data['address_province'], 'String');
            }
            if (data.hasOwnProperty('address_extra')) {
                obj['address_extra'] = ApiClient.convertToType(data['address_extra'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('certified_email')) {
                obj['certified_email'] = ApiClient.convertToType(data['certified_email'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('fax')) {
                obj['fax'] = ApiClient.convertToType(data['fax'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('default_vat')) {
                obj['default_vat'] = VatType.constructFromObject(data['default_vat']);
            }
            if (data.hasOwnProperty('default_payment_terms')) {
                obj['default_payment_terms'] = ApiClient.convertToType(data['default_payment_terms'], 'Number');
            }
            if (data.hasOwnProperty('default_payment_terms_type')) {
                obj['default_payment_terms_type'] = ApiClient.convertToType(data['default_payment_terms_type'], 'String');
            }
            if (data.hasOwnProperty('default_payment_method')) {
                obj['default_payment_method'] = PaymentMethod.constructFromObject(data['default_payment_method']);
            }
            if (data.hasOwnProperty('bank_name')) {
                obj['bank_name'] = ApiClient.convertToType(data['bank_name'], 'String');
            }
            if (data.hasOwnProperty('bank_iban')) {
                obj['bank_iban'] = ApiClient.convertToType(data['bank_iban'], 'String');
            }
            if (data.hasOwnProperty('bank_swift_code')) {
                obj['bank_swift_code'] = ApiClient.convertToType(data['bank_swift_code'], 'String');
            }
            if (data.hasOwnProperty('shipping_address')) {
                obj['shipping_address'] = ApiClient.convertToType(data['shipping_address'], 'String');
            }
            if (data.hasOwnProperty('e_invoice')) {
                obj['e_invoice'] = ApiClient.convertToType(data['e_invoice'], 'Boolean');
            }
            if (data.hasOwnProperty('ei_code')) {
                obj['ei_code'] = ApiClient.convertToType(data['ei_code'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique identifier
 * @member {Number} id
 */
Entity.prototype['id'] = undefined;

/**
 * Supplier code.
 * @member {String} code
 */
Entity.prototype['code'] = undefined;

/**
 * Supplier name.
 * @member {String} name
 */
Entity.prototype['name'] = undefined;

/**
 * Supplier type.
 * @member {module:model/Entity.TypeEnum} type
 */
Entity.prototype['type'] = undefined;

/**
 * Supplier first name.
 * @member {String} first_name
 */
Entity.prototype['first_name'] = undefined;

/**
 * Supplier last name.
 * @member {String} last_name
 */
Entity.prototype['last_name'] = undefined;

/**
 * @member {String} contact_person
 */
Entity.prototype['contact_person'] = undefined;

/**
 * Supplier vat number.
 * @member {String} vat_number
 */
Entity.prototype['vat_number'] = undefined;

/**
 * Supplier tax code.
 * @member {String} tax_code
 */
Entity.prototype['tax_code'] = undefined;

/**
 * Supplier street address.
 * @member {String} address_street
 */
Entity.prototype['address_street'] = undefined;

/**
 * Supplier postal code.
 * @member {String} address_postal_code
 */
Entity.prototype['address_postal_code'] = undefined;

/**
 * Supplier city.
 * @member {String} address_city
 */
Entity.prototype['address_city'] = undefined;

/**
 * Supplier province.
 * @member {String} address_province
 */
Entity.prototype['address_province'] = undefined;

/**
 * Supplier address extra info.
 * @member {String} address_extra
 */
Entity.prototype['address_extra'] = undefined;

/**
 * Supplier country.
 * @member {String} country
 * @default 'Italia'
 */
Entity.prototype['country'] = 'Italia';

/**
 * Supplier email.
 * @member {String} email
 */
Entity.prototype['email'] = undefined;

/**
 * Supplier certified email.
 * @member {String} certified_email
 */
Entity.prototype['certified_email'] = undefined;

/**
 * Supplier phone.
 * @member {String} phone
 */
Entity.prototype['phone'] = undefined;

/**
 * Supplier fax.
 * @member {String} fax
 */
Entity.prototype['fax'] = undefined;

/**
 * Supplier extra notes.
 * @member {String} notes
 */
Entity.prototype['notes'] = undefined;

/**
 * @member {module:model/VatType} default_vat
 */
Entity.prototype['default_vat'] = undefined;

/**
 * @member {Number} default_payment_terms
 */
Entity.prototype['default_payment_terms'] = undefined;

/**
 * @member {module:model/Entity.DefaultPaymentTermsTypeEnum} default_payment_terms_type
 * @default 'standard'
 */
Entity.prototype['default_payment_terms_type'] = 'standard';

/**
 * @member {module:model/PaymentMethod} default_payment_method
 */
Entity.prototype['default_payment_method'] = undefined;

/**
 * Client bank name.
 * @member {String} bank_name
 */
Entity.prototype['bank_name'] = undefined;

/**
 * Client iban.
 * @member {String} bank_iban
 */
Entity.prototype['bank_iban'] = undefined;

/**
 * Client bank swift code.
 * @member {String} bank_swift_code
 */
Entity.prototype['bank_swift_code'] = undefined;

/**
 * Client shipping address.
 * @member {String} shipping_address
 */
Entity.prototype['shipping_address'] = undefined;

/**
 * Use e-invoices for this entity
 * @member {Boolean} e_invoice
 * @default false
 */
Entity.prototype['e_invoice'] = false;

/**
 * E-invoice code
 * @member {String} ei_code
 */
Entity.prototype['ei_code'] = undefined;

/**
 * @member {String} created_at
 */
Entity.prototype['created_at'] = undefined;

/**
 * @member {String} updated_at
 */
Entity.prototype['updated_at'] = undefined;


// Implement Client interface:
/**
 * Unique identifier
 * @member {Number} id
 */
Client.prototype['id'] = undefined;
/**
 * Client code.
 * @member {String} code
 */
Client.prototype['code'] = undefined;
/**
 * Client name
 * @member {String} name
 */
Client.prototype['name'] = undefined;
/**
 * Client type
 * @member {module:model/Client.TypeEnum} type
 */
Client.prototype['type'] = undefined;
/**
 * Client first name.
 * @member {String} first_name
 */
Client.prototype['first_name'] = undefined;
/**
 * Client last name.
 * @member {String} last_name
 */
Client.prototype['last_name'] = undefined;
/**
 * @member {String} contact_person
 */
Client.prototype['contact_person'] = undefined;
/**
 * Client vat number
 * @member {String} vat_number
 */
Client.prototype['vat_number'] = undefined;
/**
 * Client tax code.
 * @member {String} tax_code
 */
Client.prototype['tax_code'] = undefined;
/**
 * Client street address.
 * @member {String} address_street
 */
Client.prototype['address_street'] = undefined;
/**
 * Client postal code.
 * @member {String} address_postal_code
 */
Client.prototype['address_postal_code'] = undefined;
/**
 * Client city.
 * @member {String} address_city
 */
Client.prototype['address_city'] = undefined;
/**
 * Client province.
 * @member {String} address_province
 */
Client.prototype['address_province'] = undefined;
/**
 * Client address extra info.
 * @member {String} address_extra
 */
Client.prototype['address_extra'] = undefined;
/**
 * Client country
 * @member {String} country
 * @default 'Italia'
 */
Client.prototype['country'] = 'Italia';
/**
 * Client email.
 * @member {String} email
 */
Client.prototype['email'] = undefined;
/**
 * Client certified email.
 * @member {String} certified_email
 */
Client.prototype['certified_email'] = undefined;
/**
 * Client phone.
 * @member {String} phone
 */
Client.prototype['phone'] = undefined;
/**
 * Client fax.
 * @member {String} fax
 */
Client.prototype['fax'] = undefined;
/**
 * Extra notes.
 * @member {String} notes
 */
Client.prototype['notes'] = undefined;
/**
 * @member {module:model/VatType} default_vat
 */
Client.prototype['default_vat'] = undefined;
/**
 * @member {Number} default_payment_terms
 */
Client.prototype['default_payment_terms'] = undefined;
/**
 * @member {module:model/Client.DefaultPaymentTermsTypeEnum} default_payment_terms_type
 * @default 'standard'
 */
Client.prototype['default_payment_terms_type'] = 'standard';
/**
 * @member {module:model/PaymentMethod} default_payment_method
 */
Client.prototype['default_payment_method'] = undefined;
/**
 * Client bank name.
 * @member {String} bank_name
 */
Client.prototype['bank_name'] = undefined;
/**
 * Client iban.
 * @member {String} bank_iban
 */
Client.prototype['bank_iban'] = undefined;
/**
 * Client bank swift code.
 * @member {String} bank_swift_code
 */
Client.prototype['bank_swift_code'] = undefined;
/**
 * Client shipping address.
 * @member {String} shipping_address
 */
Client.prototype['shipping_address'] = undefined;
/**
 * Use e-invoices for this entity
 * @member {Boolean} e_invoice
 * @default false
 */
Client.prototype['e_invoice'] = false;
/**
 * E-invoice code
 * @member {String} ei_code
 */
Client.prototype['ei_code'] = undefined;
/**
 * @member {String} created_at
 */
Client.prototype['created_at'] = undefined;
/**
 * @member {String} updated_at
 */
Client.prototype['updated_at'] = undefined;
// Implement Supplier interface:
/**
 * Unique identifier
 * @member {Number} id
 */
Supplier.prototype['id'] = undefined;
/**
 * Supplier code.
 * @member {String} code
 */
Supplier.prototype['code'] = undefined;
/**
 * Supplier name.
 * @member {String} name
 */
Supplier.prototype['name'] = undefined;
/**
 * Supplier type.
 * @member {module:model/Supplier.TypeEnum} type
 */
Supplier.prototype['type'] = undefined;
/**
 * Supplier first name.
 * @member {String} first_name
 */
Supplier.prototype['first_name'] = undefined;
/**
 * Supplier last name.
 * @member {String} last_name
 */
Supplier.prototype['last_name'] = undefined;
/**
 * @member {String} contact_person
 */
Supplier.prototype['contact_person'] = undefined;
/**
 * Supplier vat number.
 * @member {String} vat_number
 */
Supplier.prototype['vat_number'] = undefined;
/**
 * Supplier tax code.
 * @member {String} tax_code
 */
Supplier.prototype['tax_code'] = undefined;
/**
 * Supplier street address.
 * @member {String} address_street
 */
Supplier.prototype['address_street'] = undefined;
/**
 * Supplier postal code.
 * @member {String} address_postal_code
 */
Supplier.prototype['address_postal_code'] = undefined;
/**
 * Supplier city.
 * @member {String} address_city
 */
Supplier.prototype['address_city'] = undefined;
/**
 * Supplier province.
 * @member {String} address_province
 */
Supplier.prototype['address_province'] = undefined;
/**
 * Supplier address extra info.
 * @member {String} address_extra
 */
Supplier.prototype['address_extra'] = undefined;
/**
 * Supplier country.
 * @member {String} country
 * @default 'Italia'
 */
Supplier.prototype['country'] = 'Italia';
/**
 * Supplier email.
 * @member {String} email
 */
Supplier.prototype['email'] = undefined;
/**
 * Supplier certified email.
 * @member {String} certified_email
 */
Supplier.prototype['certified_email'] = undefined;
/**
 * Supplier phone.
 * @member {String} phone
 */
Supplier.prototype['phone'] = undefined;
/**
 * Supplier fax.
 * @member {String} fax
 */
Supplier.prototype['fax'] = undefined;
/**
 * Supplier extra notes.
 * @member {String} notes
 */
Supplier.prototype['notes'] = undefined;
/**
 * @member {String} created_at
 */
Supplier.prototype['created_at'] = undefined;
/**
 * @member {String} updated_at
 */
Supplier.prototype['updated_at'] = undefined;



/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Entity['TypeEnum'] = {

    /**
     * value: "null"
     * @const
     */
    "null": "null",

    /**
     * value: "company"
     * @const
     */
    "company": "company",

    /**
     * value: "person"
     * @const
     */
    "person": "person",

    /**
     * value: "pa"
     * @const
     */
    "pa": "pa",

    /**
     * value: "condo"
     * @const
     */
    "condo": "condo"
};


/**
 * Allowed values for the <code>default_payment_terms_type</code> property.
 * @enum {String}
 * @readonly
 */
Entity['DefaultPaymentTermsTypeEnum'] = {

    /**
     * value: "standard"
     * @const
     */
    "standard": "standard",

    /**
     * value: "end_of_month"
     * @const
     */
    "end_of_month": "end_of_month"
};



export default Entity;

