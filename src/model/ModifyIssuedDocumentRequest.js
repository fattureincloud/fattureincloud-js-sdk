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
import IssuedDocument from './IssuedDocument';

/**
 * The ModifyIssuedDocumentRequest model module.
 * @module model/ModifyIssuedDocumentRequest
 * @version 2.0.2
 */
class ModifyIssuedDocumentRequest {
    /**
     * Constructs a new <code>ModifyIssuedDocumentRequest</code>.
     * The issued document
     * @alias module:model/ModifyIssuedDocumentRequest
     */
    constructor() { 
        
        ModifyIssuedDocumentRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModifyIssuedDocumentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyIssuedDocumentRequest} obj Optional instance to populate.
     * @return {module:model/ModifyIssuedDocumentRequest} The populated <code>ModifyIssuedDocumentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModifyIssuedDocumentRequest();

            if (data.hasOwnProperty('data')) {
                obj['data'] = IssuedDocument.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/IssuedDocument} data
 */
ModifyIssuedDocumentRequest.prototype['data'] = undefined;






export default ModifyIssuedDocumentRequest;

