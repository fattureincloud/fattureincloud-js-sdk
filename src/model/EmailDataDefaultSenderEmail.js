/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.29
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'

/**
 * The EmailDataDefaultSenderEmail model module.
 * @module model/EmailDataDefaultSenderEmail
 * @version 2.0.22
 */
class EmailDataDefaultSenderEmail {
  /**
     * Constructs a new <code>EmailDataDefaultSenderEmail</code>.
     * Default sender email. (Other emails can be found in **sender_emails_list**)
     * @alias module:model/EmailDataDefaultSenderEmail
     */
  constructor () {
    EmailDataDefaultSenderEmail.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>EmailDataDefaultSenderEmail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailDataDefaultSenderEmail} obj Optional instance to populate.
     * @return {module:model/EmailDataDefaultSenderEmail} The populated <code>EmailDataDefaultSenderEmail</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new EmailDataDefaultSenderEmail()

      if (data.hasOwnProperty('id')) {
        obj.id = ApiClient.convertToType(data.id, 'Number')
      }
      if (data.hasOwnProperty('email')) {
        obj.email = ApiClient.convertToType(data.email, 'String')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>EmailDataDefaultSenderEmail</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailDataDefaultSenderEmail</code>.
     */
  static validateJSON (data) {
    // ensure the json data is a string
    if (data.email && !(typeof data.email === 'string' || data.email instanceof String)) {
      throw new Error('Expected the field `email` to be a primitive type in the JSON string but got ' + data.email)
    }

    return true
  }
}

/**
 * Default sender email id
 * @member {Number} id
 */
EmailDataDefaultSenderEmail.prototype.id = undefined

/**
 * Default sender email address
 * @member {String} email
 */
EmailDataDefaultSenderEmail.prototype.email = undefined

export default EmailDataDefaultSenderEmail
