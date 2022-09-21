/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.20
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'

/**
 * The GetUserInfoResponseInfo model module.
 * @module model/GetUserInfoResponseInfo
 * @version 2.0.16
 */
class GetUserInfoResponseInfo {
  /**
     * Constructs a new <code>GetUserInfoResponseInfo</code>.
     * @alias module:model/GetUserInfoResponseInfo
     */
  constructor () {
    GetUserInfoResponseInfo.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>GetUserInfoResponseInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetUserInfoResponseInfo} obj Optional instance to populate.
     * @return {module:model/GetUserInfoResponseInfo} The populated <code>GetUserInfoResponseInfo</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new GetUserInfoResponseInfo()

      if (data.hasOwnProperty('need_marketing_consents_confirmation')) {
        obj.need_marketing_consents_confirmation = ApiClient.convertToType(data.need_marketing_consents_confirmation, 'Boolean')
      }
      if (data.hasOwnProperty('need_password_change')) {
        obj.need_password_change = ApiClient.convertToType(data.need_password_change, 'Boolean')
      }
      if (data.hasOwnProperty('need_terms_of_service_confirmation')) {
        obj.need_terms_of_service_confirmation = ApiClient.convertToType(data.need_terms_of_service_confirmation, 'Boolean')
      }
    }
    return obj
  }
}

/**
 * @member {Boolean} need_marketing_consents_confirmation
 */
GetUserInfoResponseInfo.prototype.need_marketing_consents_confirmation = undefined

/**
 * @member {Boolean} need_password_change
 */
GetUserInfoResponseInfo.prototype.need_password_change = undefined

/**
 * @member {Boolean} need_terms_of_service_confirmation
 */
GetUserInfoResponseInfo.prototype.need_terms_of_service_confirmation = undefined

export default GetUserInfoResponseInfo
