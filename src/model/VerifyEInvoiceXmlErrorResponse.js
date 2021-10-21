/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol. For more information, please visit https://www.fattureincloud.it.
 *
 * The version of the OpenAPI document: 2.0.2
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import VerifyEInvoiceXmlErrorResponseError from './VerifyEInvoiceXmlErrorResponseError';
import VerifyEInvoiceXmlErrorResponseExtra from './VerifyEInvoiceXmlErrorResponseExtra';

/**
 * The VerifyEInvoiceXmlErrorResponse model module.
 * @module model/VerifyEInvoiceXmlErrorResponse
 * @version 2.0.2
 */
class VerifyEInvoiceXmlErrorResponse {
    /**
     * Constructs a new <code>VerifyEInvoiceXmlErrorResponse</code>.
     * @alias module:model/VerifyEInvoiceXmlErrorResponse
     */
    constructor() { 
        
        VerifyEInvoiceXmlErrorResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VerifyEInvoiceXmlErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VerifyEInvoiceXmlErrorResponse} obj Optional instance to populate.
     * @return {module:model/VerifyEInvoiceXmlErrorResponse} The populated <code>VerifyEInvoiceXmlErrorResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VerifyEInvoiceXmlErrorResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = VerifyEInvoiceXmlErrorResponseError.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('extra')) {
                obj['extra'] = VerifyEInvoiceXmlErrorResponseExtra.constructFromObject(data['extra']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/VerifyEInvoiceXmlErrorResponseError} error
 */
VerifyEInvoiceXmlErrorResponse.prototype['error'] = undefined;

/**
 * @member {module:model/VerifyEInvoiceXmlErrorResponseExtra} extra
 */
VerifyEInvoiceXmlErrorResponse.prototype['extra'] = undefined;






export default VerifyEInvoiceXmlErrorResponse;

