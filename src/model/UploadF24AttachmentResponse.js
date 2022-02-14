/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.11
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AttachmentData from './AttachmentData';

/**
 * The UploadF24AttachmentResponse model module.
 * @module model/UploadF24AttachmentResponse
 * @version 5.0.0
 */
class UploadF24AttachmentResponse {
    /**
     * Constructs a new <code>UploadF24AttachmentResponse</code>.
     * @alias module:model/UploadF24AttachmentResponse
     */
    constructor() { 
        
        UploadF24AttachmentResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UploadF24AttachmentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UploadF24AttachmentResponse} obj Optional instance to populate.
     * @return {module:model/UploadF24AttachmentResponse} The populated <code>UploadF24AttachmentResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UploadF24AttachmentResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = AttachmentData.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/AttachmentData} data
 */
UploadF24AttachmentResponse.prototype['data'] = undefined;






export default UploadF24AttachmentResponse;

