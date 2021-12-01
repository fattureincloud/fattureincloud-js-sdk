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
 * The VerifyEInvoiceXmlErrorResponseError model module.
 * @module model/VerifyEInvoiceXmlErrorResponseError
 * @version 2.0.4
 */
class VerifyEInvoiceXmlErrorResponseError {
    /**
     * Constructs a new <code>VerifyEInvoiceXmlErrorResponseError</code>.
     * @alias module:model/VerifyEInvoiceXmlErrorResponseError
     */
    constructor() { 
        
        VerifyEInvoiceXmlErrorResponseError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VerifyEInvoiceXmlErrorResponseError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VerifyEInvoiceXmlErrorResponseError} obj Optional instance to populate.
     * @return {module:model/VerifyEInvoiceXmlErrorResponseError} The populated <code>VerifyEInvoiceXmlErrorResponseError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VerifyEInvoiceXmlErrorResponseError();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('validation_result')) {
                obj['validation_result'] = ApiClient.convertToType(data['validation_result'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {String} message
 */
VerifyEInvoiceXmlErrorResponseError.prototype['message'] = undefined;

/**
 * @member {Object} validation_result
 */
VerifyEInvoiceXmlErrorResponseError.prototype['validation_result'] = undefined;






export default VerifyEInvoiceXmlErrorResponseError;

