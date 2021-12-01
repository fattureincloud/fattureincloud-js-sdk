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

/**
 * The SendEInvoiceRequestData model module.
 * @module model/SendEInvoiceRequestData
 * @version 2.0.4
 */
class SendEInvoiceRequestData {
    /**
     * Constructs a new <code>SendEInvoiceRequestData</code>.
     * @alias module:model/SendEInvoiceRequestData
     */
    constructor() { 
        
        SendEInvoiceRequestData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendEInvoiceRequestData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendEInvoiceRequestData} obj Optional instance to populate.
     * @return {module:model/SendEInvoiceRequestData} The populated <code>SendEInvoiceRequestData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendEInvoiceRequestData();

            if (data.hasOwnProperty('cassa_type')) {
                obj['cassa_type'] = ApiClient.convertToType(data['cassa_type'], 'String');
            }
            if (data.hasOwnProperty('withholding_tax_causal')) {
                obj['withholding_tax_causal'] = ApiClient.convertToType(data['withholding_tax_causal'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Value of TipoCassa used (optional, override the company default value).
 * @member {String} cassa_type
 */
SendEInvoiceRequestData.prototype['cassa_type'] = undefined;

/**
 * Value of CausalePagamento used (optional, override the company default value).
 * @member {String} withholding_tax_causal
 */
SendEInvoiceRequestData.prototype['withholding_tax_causal'] = undefined;






export default SendEInvoiceRequestData;

