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

import EmailData from './EmailData'

/**
 * The GetEmailDataResponse model module.
 * @module model/GetEmailDataResponse
 * @version 2.0.12
 */
class GetEmailDataResponse {
  /**
     * Constructs a new <code>GetEmailDataResponse</code>.
     * @alias module:model/GetEmailDataResponse
     */
  constructor () {
    GetEmailDataResponse.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>GetEmailDataResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEmailDataResponse} obj Optional instance to populate.
     * @return {module:model/GetEmailDataResponse} The populated <code>GetEmailDataResponse</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new GetEmailDataResponse()

      if (data.hasOwnProperty('data')) {
        obj.data = EmailData.constructFromObject(data.data)
      }
    }
    return obj
  }
}

/**
 * @member {module:model/EmailData} data
 */
GetEmailDataResponse.prototype.data = undefined

export default GetEmailDataResponse
