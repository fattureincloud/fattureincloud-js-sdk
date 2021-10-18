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
import UploadIssuedDocumentAttachmentResponseData from './UploadIssuedDocumentAttachmentResponseData';

/**
 * The UploadArchiveAttachmentResponse model module.
 * @module model/UploadArchiveAttachmentResponse
 * @version 2.0.1
 */
class UploadArchiveAttachmentResponse {
    /**
     * Constructs a new <code>UploadArchiveAttachmentResponse</code>.
     * @alias module:model/UploadArchiveAttachmentResponse
     */
    constructor() { 
        
        UploadArchiveAttachmentResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UploadArchiveAttachmentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UploadArchiveAttachmentResponse} obj Optional instance to populate.
     * @return {module:model/UploadArchiveAttachmentResponse} The populated <code>UploadArchiveAttachmentResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UploadArchiveAttachmentResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = UploadIssuedDocumentAttachmentResponseData.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/UploadIssuedDocumentAttachmentResponseData} data
 */
UploadArchiveAttachmentResponse.prototype['data'] = undefined;






export default UploadArchiveAttachmentResponse;

