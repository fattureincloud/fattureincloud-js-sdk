/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.13
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Currency from './Currency';
import DocumentTemplate from './DocumentTemplate';
import IssuedDocumentPreCreateInfoDefaultValues from './IssuedDocumentPreCreateInfoDefaultValues';
import IssuedDocumentPreCreateInfoExtraDataDefaultValues from './IssuedDocumentPreCreateInfoExtraDataDefaultValues';
import IssuedDocumentPreCreateInfoItemsDefaultValues from './IssuedDocumentPreCreateInfoItemsDefaultValues';
import PaymentAccount from './PaymentAccount';
import PaymentMethod from './PaymentMethod';
import VatType from './VatType';

/**
 * The IssuedDocumentPreCreateInfo model module.
 * @module model/IssuedDocumentPreCreateInfo
 * @version 2.0.10
 */
class IssuedDocumentPreCreateInfo {
    /**
     * Constructs a new <code>IssuedDocumentPreCreateInfo</code>.
     * @alias module:model/IssuedDocumentPreCreateInfo
     */
    constructor() { 
        
        IssuedDocumentPreCreateInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssuedDocumentPreCreateInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuedDocumentPreCreateInfo} obj Optional instance to populate.
     * @return {module:model/IssuedDocumentPreCreateInfo} The populated <code>IssuedDocumentPreCreateInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssuedDocumentPreCreateInfo();

            if (data.hasOwnProperty('numerations')) {
                obj['numerations'] = ApiClient.convertToType(data['numerations'], {'String': Object});
            }
            if (data.hasOwnProperty('dn_numerations')) {
                obj['dn_numerations'] = ApiClient.convertToType(data['dn_numerations'], {'String': Object});
            }
            if (data.hasOwnProperty('default_values')) {
                obj['default_values'] = IssuedDocumentPreCreateInfoDefaultValues.constructFromObject(data['default_values']);
            }
            if (data.hasOwnProperty('extra_data_default_values')) {
                obj['extra_data_default_values'] = IssuedDocumentPreCreateInfoExtraDataDefaultValues.constructFromObject(data['extra_data_default_values']);
            }
            if (data.hasOwnProperty('items_default_values')) {
                obj['items_default_values'] = IssuedDocumentPreCreateInfoItemsDefaultValues.constructFromObject(data['items_default_values']);
            }
            if (data.hasOwnProperty('countries_list')) {
                obj['countries_list'] = ApiClient.convertToType(data['countries_list'], ['String']);
            }
            if (data.hasOwnProperty('currencies_list')) {
                obj['currencies_list'] = ApiClient.convertToType(data['currencies_list'], [Currency]);
            }
            if (data.hasOwnProperty('templates_list')) {
                obj['templates_list'] = ApiClient.convertToType(data['templates_list'], [DocumentTemplate]);
            }
            if (data.hasOwnProperty('dn_templates_list')) {
                obj['dn_templates_list'] = ApiClient.convertToType(data['dn_templates_list'], [DocumentTemplate]);
            }
            if (data.hasOwnProperty('ai_templates_list')) {
                obj['ai_templates_list'] = ApiClient.convertToType(data['ai_templates_list'], [DocumentTemplate]);
            }
            if (data.hasOwnProperty('payment_methods_list')) {
                obj['payment_methods_list'] = ApiClient.convertToType(data['payment_methods_list'], [PaymentMethod]);
            }
            if (data.hasOwnProperty('payment_accounts_list')) {
                obj['payment_accounts_list'] = ApiClient.convertToType(data['payment_accounts_list'], [PaymentAccount]);
            }
            if (data.hasOwnProperty('vat_types_list')) {
                obj['vat_types_list'] = ApiClient.convertToType(data['vat_types_list'], [VatType]);
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, Object.<String, Number>>} numerations
 */
IssuedDocumentPreCreateInfo.prototype['numerations'] = undefined;

/**
 * @member {Object.<String, Object.<String, Number>>} dn_numerations
 */
IssuedDocumentPreCreateInfo.prototype['dn_numerations'] = undefined;

/**
 * @member {module:model/IssuedDocumentPreCreateInfoDefaultValues} default_values
 */
IssuedDocumentPreCreateInfo.prototype['default_values'] = undefined;

/**
 * @member {module:model/IssuedDocumentPreCreateInfoExtraDataDefaultValues} extra_data_default_values
 */
IssuedDocumentPreCreateInfo.prototype['extra_data_default_values'] = undefined;

/**
 * @member {module:model/IssuedDocumentPreCreateInfoItemsDefaultValues} items_default_values
 */
IssuedDocumentPreCreateInfo.prototype['items_default_values'] = undefined;

/**
 * Countries list.
 * @member {Array.<String>} countries_list
 */
IssuedDocumentPreCreateInfo.prototype['countries_list'] = undefined;

/**
 * Currencies list.
 * @member {Array.<module:model/Currency>} currencies_list
 */
IssuedDocumentPreCreateInfo.prototype['currencies_list'] = undefined;

/**
 * Document templates list.
 * @member {Array.<module:model/DocumentTemplate>} templates_list
 */
IssuedDocumentPreCreateInfo.prototype['templates_list'] = undefined;

/**
 * Delivery note templates list.
 * @member {Array.<module:model/DocumentTemplate>} dn_templates_list
 */
IssuedDocumentPreCreateInfo.prototype['dn_templates_list'] = undefined;

/**
 * Accompanying invoice templates list.
 * @member {Array.<module:model/DocumentTemplate>} ai_templates_list
 */
IssuedDocumentPreCreateInfo.prototype['ai_templates_list'] = undefined;

/**
 * Payment methods list.
 * @member {Array.<module:model/PaymentMethod>} payment_methods_list
 */
IssuedDocumentPreCreateInfo.prototype['payment_methods_list'] = undefined;

/**
 * Payment accounts list.
 * @member {Array.<module:model/PaymentAccount>} payment_accounts_list
 */
IssuedDocumentPreCreateInfo.prototype['payment_accounts_list'] = undefined;

/**
 * Vat types list.
 * @member {Array.<module:model/VatType>} vat_types_list
 */
IssuedDocumentPreCreateInfo.prototype['vat_types_list'] = undefined;






export default IssuedDocumentPreCreateInfo;

