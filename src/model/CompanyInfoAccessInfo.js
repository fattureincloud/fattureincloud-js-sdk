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
import Permissions from './Permissions';

/**
 * The CompanyInfoAccessInfo model module.
 * @module model/CompanyInfoAccessInfo
 * @version 2.0.1
 */
class CompanyInfoAccessInfo {
    /**
     * Constructs a new <code>CompanyInfoAccessInfo</code>.
     * @alias module:model/CompanyInfoAccessInfo
     */
    constructor() { 
        
        CompanyInfoAccessInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompanyInfoAccessInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyInfoAccessInfo} obj Optional instance to populate.
     * @return {module:model/CompanyInfoAccessInfo} The populated <code>CompanyInfoAccessInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompanyInfoAccessInfo();

            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = Permissions.constructFromObject(data['permissions']);
            }
            if (data.hasOwnProperty('through_accountant')) {
                obj['through_accountant'] = ApiClient.convertToType(data['through_accountant'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Role of the user in this company.
 * @member {module:model/CompanyInfoAccessInfo.RoleEnum} role
 */
CompanyInfoAccessInfo.prototype['role'] = undefined;

/**
 * @member {module:model/Permissions} permissions
 */
CompanyInfoAccessInfo.prototype['permissions'] = undefined;

/**
 * @member {Boolean} through_accountant
 */
CompanyInfoAccessInfo.prototype['through_accountant'] = undefined;





/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
CompanyInfoAccessInfo['RoleEnum'] = {

    /**
     * value: "master"
     * @const
     */
    "master": "master",

    /**
     * value: "subaccount"
     * @const
     */
    "subaccount": "subaccount",

    /**
     * value: "employee"
     * @const
     */
    "employee": "employee"
};



export default CompanyInfoAccessInfo;
