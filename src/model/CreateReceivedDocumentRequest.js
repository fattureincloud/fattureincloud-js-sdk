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
import ReceivedDocument from './ReceivedDocument';

/**
 * The CreateReceivedDocumentRequest model module.
 * @module model/CreateReceivedDocumentRequest
 * @version 2.0.4
 */
class CreateReceivedDocumentRequest {
    /**
     * Constructs a new <code>CreateReceivedDocumentRequest</code>.
     * 
     * @alias module:model/CreateReceivedDocumentRequest
     * @param data {module:model/ReceivedDocument} 
     */
    constructor(data) { 
        
        CreateReceivedDocumentRequest.initialize(this, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data) { 
        obj['data'] = data;
    }

    /**
     * Constructs a <code>CreateReceivedDocumentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateReceivedDocumentRequest} obj Optional instance to populate.
     * @return {module:model/CreateReceivedDocumentRequest} The populated <code>CreateReceivedDocumentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateReceivedDocumentRequest();

            if (data.hasOwnProperty('pending_id')) {
                obj['pending_id'] = ApiClient.convertToType(data['pending_id'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ReceivedDocument.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * Pending received document id of the document from which the new document is created.
 * @member {Number} pending_id
 */
CreateReceivedDocumentRequest.prototype['pending_id'] = undefined;

/**
 * @member {module:model/ReceivedDocument} data
 */
CreateReceivedDocumentRequest.prototype['data'] = undefined;






export default CreateReceivedDocumentRequest;

