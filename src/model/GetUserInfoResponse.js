/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.14
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import GetUserInfoResponseEmailConfirmationState from './GetUserInfoResponseEmailConfirmationState';
import GetUserInfoResponseInfo from './GetUserInfoResponseInfo';
import User from './User';

/**
 * The GetUserInfoResponse model module.
 * @module model/GetUserInfoResponse
 * @version 2.0.11
 */
class GetUserInfoResponse {
    /**
     * Constructs a new <code>GetUserInfoResponse</code>.
     * 
     * @alias module:model/GetUserInfoResponse
     */
    constructor() { 
        
        GetUserInfoResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetUserInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetUserInfoResponse} obj Optional instance to populate.
     * @return {module:model/GetUserInfoResponse} The populated <code>GetUserInfoResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetUserInfoResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = User.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('info')) {
                obj['info'] = GetUserInfoResponseInfo.constructFromObject(data['info']);
            }
            if (data.hasOwnProperty('email_confirmation_state')) {
                obj['email_confirmation_state'] = GetUserInfoResponseEmailConfirmationState.constructFromObject(data['email_confirmation_state']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/User} data
 */
GetUserInfoResponse.prototype['data'] = undefined;

/**
 * @member {module:model/GetUserInfoResponseInfo} info
 */
GetUserInfoResponse.prototype['info'] = undefined;

/**
 * @member {module:model/GetUserInfoResponseEmailConfirmationState} email_confirmation_state
 */
GetUserInfoResponse.prototype['email_confirmation_state'] = undefined;






export default GetUserInfoResponse;

