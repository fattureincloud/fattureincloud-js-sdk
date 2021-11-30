/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.5
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EmailDataSenderEmailsList model module.
 * @module model/EmailDataSenderEmailsList
 * @version 2.0.3
 */
class EmailDataSenderEmailsList {
    /**
     * Constructs a new <code>EmailDataSenderEmailsList</code>.
     * @alias module:model/EmailDataSenderEmailsList
     * @param id {Number} Id
     * @param email {String} Email address
     */
    constructor(id, email) { 
        
        EmailDataSenderEmailsList.initialize(this, id, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, email) { 
        obj['id'] = id;
        obj['email'] = email;
    }

    /**
     * Constructs a <code>EmailDataSenderEmailsList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailDataSenderEmailsList} obj Optional instance to populate.
     * @return {module:model/EmailDataSenderEmailsList} The populated <code>EmailDataSenderEmailsList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailDataSenderEmailsList();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Id
 * @member {Number} id
 */
EmailDataSenderEmailsList.prototype['id'] = undefined;

/**
 * Email address
 * @member {String} email
 */
EmailDataSenderEmailsList.prototype['email'] = undefined;






export default EmailDataSenderEmailsList;

