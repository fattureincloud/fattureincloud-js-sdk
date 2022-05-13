/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.15
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'

/**
 * The GetUserInfoResponseEmailConfirmationState model module.
 * @module model/GetUserInfoResponseEmailConfirmationState
 * @version 2.0.12
 */
class GetUserInfoResponseEmailConfirmationState {
  /**
     * Constructs a new <code>GetUserInfoResponseEmailConfirmationState</code>.
     * @alias module:model/GetUserInfoResponseEmailConfirmationState
     */
  constructor () {
    GetUserInfoResponseEmailConfirmationState.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>GetUserInfoResponseEmailConfirmationState</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetUserInfoResponseEmailConfirmationState} obj Optional instance to populate.
     * @return {module:model/GetUserInfoResponseEmailConfirmationState} The populated <code>GetUserInfoResponseEmailConfirmationState</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new GetUserInfoResponseEmailConfirmationState()

      if (data.hasOwnProperty('need_confirmation')) {
        obj.need_confirmation = ApiClient.convertToType(data.need_confirmation, 'Boolean')
      }
    }
    return obj
  }
}

/**
 * @member {Boolean} need_confirmation
 */
GetUserInfoResponseEmailConfirmationState.prototype.need_confirmation = undefined

export default GetUserInfoResponseEmailConfirmationState
