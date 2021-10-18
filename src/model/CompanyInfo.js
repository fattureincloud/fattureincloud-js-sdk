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
import CompanyInfoAccessInfo from './CompanyInfoAccessInfo';
import CompanyInfoPlanInfo from './CompanyInfoPlanInfo';

/**
 * The CompanyInfo model module.
 * @module model/CompanyInfo
 * @version 2.0.1
 */
class CompanyInfo {
    /**
     * Constructs a new <code>CompanyInfo</code>.
     * Detailed information for the company.
     * @alias module:model/CompanyInfo
     */
    constructor() { 
        
        CompanyInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompanyInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyInfo} obj Optional instance to populate.
     * @return {module:model/CompanyInfo} The populated <code>CompanyInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompanyInfo();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('fic')) {
                obj['fic'] = ApiClient.convertToType(data['fic'], 'Boolean');
            }
            if (data.hasOwnProperty('fic_plan_name')) {
                obj['fic_plan_name'] = ApiClient.convertToType(data['fic_plan_name'], 'String');
            }
            if (data.hasOwnProperty('fic_license_type')) {
                obj['fic_license_type'] = ApiClient.convertToType(data['fic_license_type'], 'String');
            }
            if (data.hasOwnProperty('fic_payment_subject')) {
                obj['fic_payment_subject'] = ApiClient.convertToType(data['fic_payment_subject'], 'String');
            }
            if (data.hasOwnProperty('fic_license_expire')) {
                obj['fic_license_expire'] = ApiClient.convertToType(data['fic_license_expire'], 'Date');
            }
            if (data.hasOwnProperty('fic_signup_date')) {
                obj['fic_signup_date'] = ApiClient.convertToType(data['fic_signup_date'], 'String');
            }
            if (data.hasOwnProperty('use_fic')) {
                obj['use_fic'] = ApiClient.convertToType(data['use_fic'], 'Boolean');
            }
            if (data.hasOwnProperty('fic_need_setup')) {
                obj['fic_need_setup'] = ApiClient.convertToType(data['fic_need_setup'], 'Boolean');
            }
            if (data.hasOwnProperty('dic')) {
                obj['dic'] = ApiClient.convertToType(data['dic'], 'Boolean');
            }
            if (data.hasOwnProperty('dic_plan')) {
                obj['dic_plan'] = ApiClient.convertToType(data['dic_plan'], 'String');
            }
            if (data.hasOwnProperty('dic_license_expire')) {
                obj['dic_license_expire'] = ApiClient.convertToType(data['dic_license_expire'], 'Date');
            }
            if (data.hasOwnProperty('use_dic')) {
                obj['use_dic'] = ApiClient.convertToType(data['use_dic'], 'Boolean');
            }
            if (data.hasOwnProperty('dic_need_setup')) {
                obj['dic_need_setup'] = ApiClient.convertToType(data['dic_need_setup'], 'Boolean');
            }
            if (data.hasOwnProperty('access_info')) {
                obj['access_info'] = CompanyInfoAccessInfo.constructFromObject(data['access_info']);
            }
            if (data.hasOwnProperty('plan_info')) {
                obj['plan_info'] = CompanyInfoPlanInfo.constructFromObject(data['plan_info']);
            }
            if (data.hasOwnProperty('can_use_coupon')) {
                obj['can_use_coupon'] = ApiClient.convertToType(data['can_use_coupon'], 'Boolean');
            }
            if (data.hasOwnProperty('accountant_id')) {
                obj['accountant_id'] = ApiClient.convertToType(data['accountant_id'], 'Number');
            }
            if (data.hasOwnProperty('dic_license_type')) {
                obj['dic_license_type'] = ApiClient.convertToType(data['dic_license_type'], 'String');
            }
            if (data.hasOwnProperty('dic_payment_subject')) {
                obj['dic_payment_subject'] = ApiClient.convertToType(data['dic_payment_subject'], 'String');
            }
            if (data.hasOwnProperty('dic_plan_name')) {
                obj['dic_plan_name'] = ApiClient.convertToType(data['dic_plan_name'], 'String');
            }
            if (data.hasOwnProperty('dic_signup_date')) {
                obj['dic_signup_date'] = ApiClient.convertToType(data['dic_signup_date'], 'String');
            }
            if (data.hasOwnProperty('is_accountant')) {
                obj['is_accountant'] = ApiClient.convertToType(data['is_accountant'], 'Boolean');
            }
            if (data.hasOwnProperty('registration_service')) {
                obj['registration_service'] = ApiClient.convertToType(data['registration_service'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Company unique identifier.
 * @member {Number} id
 */
CompanyInfo.prototype['id'] = undefined;

/**
 * Company name.
 * @member {String} name
 */
CompanyInfo.prototype['name'] = undefined;

/**
 * Company email.
 * @member {String} email
 */
CompanyInfo.prototype['email'] = undefined;

/**
 * Company type.
 * @member {module:model/CompanyInfo.TypeEnum} type
 */
CompanyInfo.prototype['type'] = undefined;

/**
 * Determine if the company has a FIC account.
 * @member {Boolean} fic
 */
CompanyInfo.prototype['fic'] = undefined;

/**
 * Company FIC account plan.
 * @member {module:model/CompanyInfo.FicPlanNameEnum} fic_plan_name
 */
CompanyInfo.prototype['fic_plan_name'] = undefined;

/**
 * Company FIC account plan. 
 * @member {String} fic_license_type
 */
CompanyInfo.prototype['fic_license_type'] = undefined;

/**
 * Company FIC account payment subject.
 * @member {String} fic_payment_subject
 */
CompanyInfo.prototype['fic_payment_subject'] = undefined;

/**
 * Company FIC license expiration date.
 * @member {Date} fic_license_expire
 */
CompanyInfo.prototype['fic_license_expire'] = undefined;

/**
 * FIC account sign up date.
 * @member {String} fic_signup_date
 */
CompanyInfo.prototype['fic_signup_date'] = undefined;

/**
 * Determine if the FIC account is actually used. If type=\"company\" this is always true; if type=\"accountant\" it can be true or false. If false, it means that the accountant uses FIC only to control other companies and not to control itself.
 * @member {Boolean} use_fic
 */
CompanyInfo.prototype['use_fic'] = undefined;

/**
 * Indicate that the initial setup for FIC is required.
 * @member {Boolean} fic_need_setup
 */
CompanyInfo.prototype['fic_need_setup'] = undefined;

/**
 * Determine if the company has a DIC account.
 * @member {Boolean} dic
 */
CompanyInfo.prototype['dic'] = undefined;

/**
 * Company DIC account plan.
 * @member {module:model/CompanyInfo.DicPlanEnum} dic_plan
 */
CompanyInfo.prototype['dic_plan'] = undefined;

/**
 * Company FIC license expiration date.
 * @member {Date} dic_license_expire
 */
CompanyInfo.prototype['dic_license_expire'] = undefined;

/**
 * Determine if the DIC account is actually used. If type=“company” this is always true; if type=“accountant” it can be true or false. If false, it means that the accountant uses DIC only to control other companies and not to control itself.
 * @member {Boolean} use_dic
 */
CompanyInfo.prototype['use_dic'] = undefined;

/**
 * Indicate that the initial setup for DIC is required.
 * @member {Boolean} dic_need_setup
 */
CompanyInfo.prototype['dic_need_setup'] = undefined;

/**
 * @member {module:model/CompanyInfoAccessInfo} access_info
 */
CompanyInfo.prototype['access_info'] = undefined;

/**
 * @member {module:model/CompanyInfoPlanInfo} plan_info
 */
CompanyInfo.prototype['plan_info'] = undefined;

/**
 * Determine if a coupon can be used.
 * @member {Boolean} can_use_coupon
 */
CompanyInfo.prototype['can_use_coupon'] = undefined;

/**
 * Accountant unique identifier.
 * @member {Number} accountant_id
 */
CompanyInfo.prototype['accountant_id'] = undefined;

/**
 * Company DIC account license type.
 * @member {String} dic_license_type
 */
CompanyInfo.prototype['dic_license_type'] = undefined;

/**
 * Company DIC account payment subject.
 * @member {String} dic_payment_subject
 */
CompanyInfo.prototype['dic_payment_subject'] = undefined;

/**
 * Company DIC account plan name.
 * @member {String} dic_plan_name
 */
CompanyInfo.prototype['dic_plan_name'] = undefined;

/**
 * DIC account sign up date.
 * @member {String} dic_signup_date
 */
CompanyInfo.prototype['dic_signup_date'] = undefined;

/**
 * Determine if the logged account is an accountant.
 * @member {Boolean} is_accountant
 */
CompanyInfo.prototype['is_accountant'] = undefined;

/**
 * @member {String} registration_service
 */
CompanyInfo.prototype['registration_service'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CompanyInfo['TypeEnum'] = {

    /**
     * value: "company"
     * @const
     */
    "company": "company",

    /**
     * value: "accountant"
     * @const
     */
    "accountant": "accountant"
};


/**
 * Allowed values for the <code>fic_plan_name</code> property.
 * @enum {String}
 * @readonly
 */
CompanyInfo['FicPlanNameEnum'] = {

    /**
     * value: "trial"
     * @const
     */
    "trial": "trial",

    /**
     * value: "standard"
     * @const
     */
    "standard": "standard",

    /**
     * value: "premium"
     * @const
     */
    "premium": "premium",

    /**
     * value: "premium_plus"
     * @const
     */
    "premium_plus": "premium_plus"
};


/**
 * Allowed values for the <code>dic_plan</code> property.
 * @enum {String}
 * @readonly
 */
CompanyInfo['DicPlanEnum'] = {

    /**
     * value: "trial"
     * @const
     */
    "trial": "trial"
};



export default CompanyInfo;
