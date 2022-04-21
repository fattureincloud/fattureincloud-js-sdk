/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.15
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DocumentTemplate from './DocumentTemplate';
import PaymentMethod from './PaymentMethod';

/**
 * The IssuedDocumentPreCreateInfoDefaultValues model module.
 * @module model/IssuedDocumentPreCreateInfoDefaultValues
 * @version 2.0.12
 */
class IssuedDocumentPreCreateInfoDefaultValues {
    /**
     * Constructs a new <code>IssuedDocumentPreCreateInfoDefaultValues</code>.
     * Default values for the document.
     * @alias module:model/IssuedDocumentPreCreateInfoDefaultValues
     */
    constructor() { 
        
        IssuedDocumentPreCreateInfoDefaultValues.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssuedDocumentPreCreateInfoDefaultValues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuedDocumentPreCreateInfoDefaultValues} obj Optional instance to populate.
     * @return {module:model/IssuedDocumentPreCreateInfoDefaultValues} The populated <code>IssuedDocumentPreCreateInfoDefaultValues</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssuedDocumentPreCreateInfoDefaultValues();

            if (data.hasOwnProperty('default_template')) {
                obj['default_template'] = DocumentTemplate.constructFromObject(data['default_template']);
            }
            if (data.hasOwnProperty('dn_template')) {
                obj['dn_template'] = DocumentTemplate.constructFromObject(data['dn_template']);
            }
            if (data.hasOwnProperty('ai_template')) {
                obj['ai_template'] = DocumentTemplate.constructFromObject(data['ai_template']);
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('rivalsa')) {
                obj['rivalsa'] = ApiClient.convertToType(data['rivalsa'], 'Number');
            }
            if (data.hasOwnProperty('cassa')) {
                obj['cassa'] = ApiClient.convertToType(data['cassa'], 'Number');
            }
            if (data.hasOwnProperty('withholding_tax')) {
                obj['withholding_tax'] = ApiClient.convertToType(data['withholding_tax'], 'Number');
            }
            if (data.hasOwnProperty('withholding_tax_taxable')) {
                obj['withholding_tax_taxable'] = ApiClient.convertToType(data['withholding_tax_taxable'], 'Number');
            }
            if (data.hasOwnProperty('other_withholding_tax')) {
                obj['other_withholding_tax'] = ApiClient.convertToType(data['other_withholding_tax'], 'Number');
            }
            if (data.hasOwnProperty('use_gross_prices')) {
                obj['use_gross_prices'] = ApiClient.convertToType(data['use_gross_prices'], 'Boolean');
            }
            if (data.hasOwnProperty('payment_method')) {
                obj['payment_method'] = PaymentMethod.constructFromObject(data['payment_method']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DocumentTemplate} default_template
 */
IssuedDocumentPreCreateInfoDefaultValues.prototype['default_template'] = undefined;

/**
 * @member {module:model/DocumentTemplate} dn_template
 */
IssuedDocumentPreCreateInfoDefaultValues.prototype['dn_template'] = undefined;

/**
 * @member {module:model/DocumentTemplate} ai_template
 */
IssuedDocumentPreCreateInfoDefaultValues.prototype['ai_template'] = undefined;

/**
 * Default notes.
 * @member {String} notes
 */
IssuedDocumentPreCreateInfoDefaultValues.prototype['notes'] = undefined;

/**
 * Default rivalsa percentage.
 * @member {Number} rivalsa
 */
IssuedDocumentPreCreateInfoDefaultValues.prototype['rivalsa'] = undefined;

/**
 * Default cassa percentage.
 * @member {Number} cassa
 */
IssuedDocumentPreCreateInfoDefaultValues.prototype['cassa'] = undefined;

/**
 * Default withholding tax percentage.
 * @member {Number} withholding_tax
 */
IssuedDocumentPreCreateInfoDefaultValues.prototype['withholding_tax'] = undefined;

/**
 * Default withholding tax taxable percentage.
 * @member {Number} withholding_tax_taxable
 */
IssuedDocumentPreCreateInfoDefaultValues.prototype['withholding_tax_taxable'] = undefined;

/**
 * Default other withholding tax percentage.
 * @member {Number} other_withholding_tax
 */
IssuedDocumentPreCreateInfoDefaultValues.prototype['other_withholding_tax'] = undefined;

/**
 * Use gross price by default.
 * @member {Boolean} use_gross_prices
 */
IssuedDocumentPreCreateInfoDefaultValues.prototype['use_gross_prices'] = undefined;

/**
 * @member {module:model/PaymentMethod} payment_method
 */
IssuedDocumentPreCreateInfoDefaultValues.prototype['payment_method'] = undefined;






export default IssuedDocumentPreCreateInfoDefaultValues;

