/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.6
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import SupplierType from './SupplierType';

/**
 * The Supplier model module.
 * @module model/Supplier
 * @version 2.0.4
 */
class Supplier {
    /**
     * Constructs a new <code>Supplier</code>.
     * Supplier.
     * @alias module:model/Supplier
     * @param name {String} Supplier name.
     */
    constructor(name) { 
        
        Supplier.initialize(this, name);
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
     * Constructs a <code>Supplier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Supplier} obj Optional instance to populate.
     * @return {module:model/Supplier} The populated <code>Supplier</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Supplier();

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
                obj['type'] = SupplierType.constructFromObject(data['type']);
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
 * @member {module:model/SupplierType} type
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






export default Supplier;

