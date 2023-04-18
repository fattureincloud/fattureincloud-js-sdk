/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.27
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import EmailScheduleInclude from './EmailScheduleInclude'

/**
 * The EmailSchedule model module.
 * @module model/EmailSchedule
 * @version 2.0.20
 */
class EmailSchedule {
  /**
     * Constructs a new <code>EmailSchedule</code>.
     * @alias module:model/EmailSchedule
     */
  constructor () {
    EmailSchedule.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>EmailSchedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailSchedule} obj Optional instance to populate.
     * @return {module:model/EmailSchedule} The populated <code>EmailSchedule</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new EmailSchedule()

      if (data.hasOwnProperty('sender_id')) {
        obj.sender_id = ApiClient.convertToType(data.sender_id, 'Number')
      }
      if (data.hasOwnProperty('sender_email')) {
        obj.sender_email = ApiClient.convertToType(data.sender_email, 'String')
      }
      if (data.hasOwnProperty('recipient_email')) {
        obj.recipient_email = ApiClient.convertToType(data.recipient_email, 'String')
      }
      if (data.hasOwnProperty('subject')) {
        obj.subject = ApiClient.convertToType(data.subject, 'String')
      }
      if (data.hasOwnProperty('body')) {
        obj.body = ApiClient.convertToType(data.body, 'String')
      }
      if (data.hasOwnProperty('include')) {
        obj.include = EmailScheduleInclude.constructFromObject(data.include)
      }
      if (data.hasOwnProperty('attach_pdf')) {
        obj.attach_pdf = ApiClient.convertToType(data.attach_pdf, 'Boolean')
      }
      if (data.hasOwnProperty('send_copy')) {
        obj.send_copy = ApiClient.convertToType(data.send_copy, 'Boolean')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>EmailSchedule</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailSchedule</code>.
     */
  static validateJSON (data) {
    // ensure the json data is a string
    if (data.sender_email && !(typeof data.sender_email === 'string' || data.sender_email instanceof String)) {
      throw new Error('Expected the field `sender_email` to be a primitive type in the JSON string but got ' + data.sender_email)
    }
    // ensure the json data is a string
    if (data.recipient_email && !(typeof data.recipient_email === 'string' || data.recipient_email instanceof String)) {
      throw new Error('Expected the field `recipient_email` to be a primitive type in the JSON string but got ' + data.recipient_email)
    }
    // ensure the json data is a string
    if (data.subject && !(typeof data.subject === 'string' || data.subject instanceof String)) {
      throw new Error('Expected the field `subject` to be a primitive type in the JSON string but got ' + data.subject)
    }
    // ensure the json data is a string
    if (data.body && !(typeof data.body === 'string' || data.body instanceof String)) {
      throw new Error('Expected the field `body` to be a primitive type in the JSON string but got ' + data.body)
    }
    // validate the optional field `include`
    if (data.include) { // data not null
      EmailScheduleInclude.validateJSON(data.include)
    }

    return true
  }
}

/**
 * Sender id. Required if `sender_email` is not specified
 * @member {Number} sender_id
 */
EmailSchedule.prototype.sender_id = undefined

/**
 * Sender email. Required if `sender_id` is not specified
 * @member {String} sender_email
 */
EmailSchedule.prototype.sender_email = undefined

/**
 * One or more comma separated recipient emails
 * @member {String} recipient_email
 */
EmailSchedule.prototype.recipient_email = undefined

/**
 * Email subject
 * @member {String} subject
 */
EmailSchedule.prototype.subject = undefined

/**
 * Email body [HTML Escaped] [max size 50KiB]
 * @member {String} body
 */
EmailSchedule.prototype.body = undefined

/**
 * @member {module:model/EmailScheduleInclude} include
 */
EmailSchedule.prototype.include = undefined

/**
 * If set to true, documents will be sent as PDF attachments too
 * @member {Boolean} attach_pdf
 */
EmailSchedule.prototype.attach_pdf = undefined

/**
 * If set to true, a copy of the email will be sent to the `cc_email` specified by `Get email data`
 * @member {Boolean} send_copy
 */
EmailSchedule.prototype.send_copy = undefined

export default EmailSchedule
