/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.  For more information, please visit https://www.fattureincloud.it.
 *
 * The version of the OpenAPI document: 2.0.1
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EntityOptions from './EntityOptions';
import IssuedDocument from './IssuedDocument';

/**
 * The CreateIssuedDocumentRequest model module.
 * @module model/CreateIssuedDocumentRequest
 * @version 2.0.1
 */
class CreateIssuedDocumentRequest {
    /**
     * Constructs a new <code>CreateIssuedDocumentRequest</code>.
     * @alias module:model/CreateIssuedDocumentRequest
     */
    constructor() { 
        
        CreateIssuedDocumentRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateIssuedDocumentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateIssuedDocumentRequest} obj Optional instance to populate.
     * @return {module:model/CreateIssuedDocumentRequest} The populated <code>CreateIssuedDocumentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateIssuedDocumentRequest();

            if (data.hasOwnProperty('data')) {
                obj['data'] = IssuedDocument.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = EntityOptions.constructFromObject(data['options']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/IssuedDocument} data
 */
CreateIssuedDocumentRequest.prototype['data'] = undefined;

/**
 * @member {module:model/EntityOptions} options
 */
CreateIssuedDocumentRequest.prototype['options'] = undefined;






export default CreateIssuedDocumentRequest;
