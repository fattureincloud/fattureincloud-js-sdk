/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.10
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DefaultPaymentTermsType from './DefaultPaymentTermsType';
import EntityType from './EntityType';
import PaymentMethod from './PaymentMethod';
import VatType from './VatType';

/**
 * The Entity model module.
 * @module model/Entity
 * @version 2.0.8
 */
class Entity {
    /**
     * Constructs a new <code>Entity</code>.
     * 
     * @alias module:model/Entity
     * @param name {String} Name
     */
    constructor(name) { 
        
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
                obj['type'] = EntityType.constructFromObject(data['type']);
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
                obj['default_payment_terms_type'] = DefaultPaymentTermsType.constructFromObject(data['default_payment_terms_type']);
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
 * Code.
 * @member {String} code
 */
Entity.prototype['code'] = undefined;

/**
 * Name
 * @member {String} name
 */
Entity.prototype['name'] = undefined;

/**
 * @member {module:model/EntityType} type
 */
Entity.prototype['type'] = undefined;

/**
 * First name.
 * @member {String} first_name
 */
Entity.prototype['first_name'] = undefined;

/**
 * Last name.
 * @member {String} last_name
 */
Entity.prototype['last_name'] = undefined;

/**
 * @member {String} contact_person
 */
Entity.prototype['contact_person'] = undefined;

/**
 * Vat number
 * @member {String} vat_number
 */
Entity.prototype['vat_number'] = undefined;

/**
 * Tax code.
 * @member {String} tax_code
 */
Entity.prototype['tax_code'] = undefined;

/**
 * Street address.
 * @member {String} address_street
 */
Entity.prototype['address_street'] = undefined;

/**
 * Postal code.
 * @member {String} address_postal_code
 */
Entity.prototype['address_postal_code'] = undefined;

/**
 * City.
 * @member {String} address_city
 */
Entity.prototype['address_city'] = undefined;

/**
 * Province.
 * @member {String} address_province
 */
Entity.prototype['address_province'] = undefined;

/**
 * Address extra info.
 * @member {String} address_extra
 */
Entity.prototype['address_extra'] = undefined;

/**
 * Country
 * @member {String} country
 * @default 'Italia'
 */
Entity.prototype['country'] = 'Italia';

/**
 * Email.
 * @member {String} email
 */
Entity.prototype['email'] = undefined;

/**
 * Certified email.
 * @member {String} certified_email
 */
Entity.prototype['certified_email'] = undefined;

/**
 * Phone.
 * @member {String} phone
 */
Entity.prototype['phone'] = undefined;

/**
 * Fax.
 * @member {String} fax
 */
Entity.prototype['fax'] = undefined;

/**
 * Extra notes.
 * @member {String} notes
 */
Entity.prototype['notes'] = undefined;

/**
 * @member {module:model/VatType} default_vat
 */
Entity.prototype['default_vat'] = undefined;

/**
 * [Only for client] Default payment terms.
 * @member {Number} default_payment_terms
 */
Entity.prototype['default_payment_terms'] = undefined;

/**
 * @member {module:model/DefaultPaymentTermsType} default_payment_terms_type
 */
Entity.prototype['default_payment_terms_type'] = undefined;

/**
 * @member {module:model/PaymentMethod} default_payment_method
 */
Entity.prototype['default_payment_method'] = undefined;

/**
 * [Only for client] Bank name.
 * @member {String} bank_name
 */
Entity.prototype['bank_name'] = undefined;

/**
 * [Only for client] Iban.
 * @member {String} bank_iban
 */
Entity.prototype['bank_iban'] = undefined;

/**
 * [Only for client] Bank swift code.
 * @member {String} bank_swift_code
 */
Entity.prototype['bank_swift_code'] = undefined;

/**
 * [Only for client] Shipping address.
 * @member {String} shipping_address
 */
Entity.prototype['shipping_address'] = undefined;

/**
 * [Only for client] Use e-invoices.
 * @member {Boolean} e_invoice
 * @default false
 */
Entity.prototype['e_invoice'] = false;

/**
 * [Only for client] E-invoices code.
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






export default Entity;

