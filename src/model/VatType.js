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

/**
 * The VatType model module.
 * @module model/VatType
 * @version 2.0.8
 */
class VatType {
    /**
     * Constructs a new <code>VatType</code>.
     * 
     * @alias module:model/VatType
     * @param value {Number} [Read Only] Percentual value.
     */
    constructor(value) { 
        
        VatType.initialize(this, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, value) { 
        obj['value'] = value;
    }

    /**
     * Constructs a <code>VatType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VatType} obj Optional instance to populate.
     * @return {module:model/VatType} The populated <code>VatType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VatType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('e_invoice')) {
                obj['e_invoice'] = ApiClient.convertToType(data['e_invoice'], 'Boolean');
            }
            if (data.hasOwnProperty('ei_type')) {
                obj['ei_type'] = ApiClient.convertToType(data['ei_type'], 'String');
            }
            if (data.hasOwnProperty('ei_description')) {
                obj['ei_description'] = ApiClient.convertToType(data['ei_description'], 'String');
            }
            if (data.hasOwnProperty('editable')) {
                obj['editable'] = ApiClient.convertToType(data['editable'], 'Boolean');
            }
            if (data.hasOwnProperty('is_disabled')) {
                obj['is_disabled'] = ApiClient.convertToType(data['is_disabled'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Unique identifier
 * @member {Number} id
 */
VatType.prototype['id'] = undefined;

/**
 * [Read Only] Percentual value.
 * @member {Number} value
 */
VatType.prototype['value'] = undefined;

/**
 * Short description.
 * @member {String} description
 */
VatType.prototype['description'] = undefined;

/**
 * Long description and notes shown in documents.
 * @member {String} notes
 */
VatType.prototype['notes'] = undefined;

/**
 * Usable for e-invoices.
 * @member {Boolean} e_invoice
 */
VatType.prototype['e_invoice'] = undefined;

/**
 * E-invoice type (natura).
 * @member {String} ei_type
 */
VatType.prototype['ei_type'] = undefined;

/**
 * E-invoice description.
 * @member {String} ei_description
 */
VatType.prototype['ei_description'] = undefined;

/**
 * [Read Only] Determine if this vat type is editable.
 * @member {Boolean} editable
 * @default true
 */
VatType.prototype['editable'] = true;

/**
 * Determine if the vat type is disabled.
 * @member {Boolean} is_disabled
 */
VatType.prototype['is_disabled'] = undefined;






export default VatType;

