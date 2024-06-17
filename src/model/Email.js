/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.1.0
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import EmailAttachment from './EmailAttachment'
import EmailRecipientStatus from './EmailRecipientStatus'
import EmailStatus from './EmailStatus'

/**
 * The Email model module.
 * @module model/Email
 * @version 2.1.0
 */
class Email {
  /**
     * Constructs a new <code>Email</code>.
     * @alias module:model/Email
     */
  constructor () {
    Email.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>Email</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Email} obj Optional instance to populate.
     * @return {module:model/Email} The populated <code>Email</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new Email()

      if (data.hasOwnProperty('id')) {
        obj.id = ApiClient.convertToType(data.id, 'Number')
      }
      if (data.hasOwnProperty('status')) {
        obj.status = EmailStatus.constructFromObject(data.status)
      }
      if (data.hasOwnProperty('sent_date')) {
        obj.sent_date = ApiClient.convertToType(data.sent_date, 'Date')
      }
      if (data.hasOwnProperty('errors_count')) {
        obj.errors_count = ApiClient.convertToType(data.errors_count, 'Number')
      }
      if (data.hasOwnProperty('error_log')) {
        obj.error_log = ApiClient.convertToType(data.error_log, 'String')
      }
      if (data.hasOwnProperty('from_email')) {
        obj.from_email = ApiClient.convertToType(data.from_email, 'String')
      }
      if (data.hasOwnProperty('from_name')) {
        obj.from_name = ApiClient.convertToType(data.from_name, 'String')
      }
      if (data.hasOwnProperty('to_email')) {
        obj.to_email = ApiClient.convertToType(data.to_email, 'String')
      }
      if (data.hasOwnProperty('to_name')) {
        obj.to_name = ApiClient.convertToType(data.to_name, 'String')
      }
      if (data.hasOwnProperty('subject')) {
        obj.subject = ApiClient.convertToType(data.subject, 'String')
      }
      if (data.hasOwnProperty('content')) {
        obj.content = ApiClient.convertToType(data.content, 'String')
      }
      if (data.hasOwnProperty('copy_to')) {
        obj.copy_to = ApiClient.convertToType(data.copy_to, 'String')
      }
      if (data.hasOwnProperty('recipient_status')) {
        obj.recipient_status = EmailRecipientStatus.constructFromObject(data.recipient_status)
      }
      if (data.hasOwnProperty('recipient_date')) {
        obj.recipient_date = ApiClient.convertToType(data.recipient_date, 'Date')
      }
      if (data.hasOwnProperty('kind')) {
        obj.kind = ApiClient.convertToType(data.kind, 'String')
      }
      if (data.hasOwnProperty('attachments')) {
        obj.attachments = ApiClient.convertToType(data.attachments, [EmailAttachment])
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>Email</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Email</code>.
     */
  static validateJSON (data) {
    // ensure the json data is a string
    if (data.error_log && !(typeof data.error_log === 'string' || data.error_log instanceof String)) {
      throw new Error('Expected the field `error_log` to be a primitive type in the JSON string but got ' + data.error_log)
    }
    // ensure the json data is a string
    if (data.from_email && !(typeof data.from_email === 'string' || data.from_email instanceof String)) {
      throw new Error('Expected the field `from_email` to be a primitive type in the JSON string but got ' + data.from_email)
    }
    // ensure the json data is a string
    if (data.from_name && !(typeof data.from_name === 'string' || data.from_name instanceof String)) {
      throw new Error('Expected the field `from_name` to be a primitive type in the JSON string but got ' + data.from_name)
    }
    // ensure the json data is a string
    if (data.to_email && !(typeof data.to_email === 'string' || data.to_email instanceof String)) {
      throw new Error('Expected the field `to_email` to be a primitive type in the JSON string but got ' + data.to_email)
    }
    // ensure the json data is a string
    if (data.to_name && !(typeof data.to_name === 'string' || data.to_name instanceof String)) {
      throw new Error('Expected the field `to_name` to be a primitive type in the JSON string but got ' + data.to_name)
    }
    // ensure the json data is a string
    if (data.subject && !(typeof data.subject === 'string' || data.subject instanceof String)) {
      throw new Error('Expected the field `subject` to be a primitive type in the JSON string but got ' + data.subject)
    }
    // ensure the json data is a string
    if (data.content && !(typeof data.content === 'string' || data.content instanceof String)) {
      throw new Error('Expected the field `content` to be a primitive type in the JSON string but got ' + data.content)
    }
    // ensure the json data is a string
    if (data.copy_to && !(typeof data.copy_to === 'string' || data.copy_to instanceof String)) {
      throw new Error('Expected the field `copy_to` to be a primitive type in the JSON string but got ' + data.copy_to)
    }
    // ensure the json data is a string
    if (data.kind && !(typeof data.kind === 'string' || data.kind instanceof String)) {
      throw new Error('Expected the field `kind` to be a primitive type in the JSON string but got ' + data.kind)
    }
    if (data.attachments) { // data not null
      // ensure the json data is an array
      if (!Array.isArray(data.attachments)) {
        throw new Error('Expected the field `attachments` to be an array in the JSON data but got ' + data.attachments)
      }
      // validate the optional field `attachments` (array)
      for (const item of data.attachments) {
        EmailAttachment.validateJSON(item)
      }
    }

    return true
  }
}

/**
 * Email id
 * @member {Number} id
 */
Email.prototype.id = undefined

/**
 * @member {module:model/EmailStatus} status
 */
Email.prototype.status = undefined

/**
 * Email sent date
 * @member {Date} sent_date
 */
Email.prototype.sent_date = undefined

/**
 * Email errors count
 * @member {Number} errors_count
 */
Email.prototype.errors_count = undefined

/**
 * Email errors log
 * @member {String} error_log
 */
Email.prototype.error_log = undefined

/**
 * Email sender email
 * @member {String} from_email
 */
Email.prototype.from_email = undefined

/**
 * Email sender name
 * @member {String} from_name
 */
Email.prototype.from_name = undefined

/**
 * Email recipient email
 * @member {String} to_email
 */
Email.prototype.to_email = undefined

/**
 * Email receipient name
 * @member {String} to_name
 */
Email.prototype.to_name = undefined

/**
 * Email subject
 * @member {String} subject
 */
Email.prototype.subject = undefined

/**
 * Email content
 * @member {String} content
 */
Email.prototype.content = undefined

/**
 * Email cc
 * @member {String} copy_to
 */
Email.prototype.copy_to = undefined

/**
 * @member {module:model/EmailRecipientStatus} recipient_status
 */
Email.prototype.recipient_status = undefined

/**
 * Email recipient date
 * @member {Date} recipient_date
 */
Email.prototype.recipient_date = undefined

/**
 * Email kind
 * @member {String} kind
 */
Email.prototype.kind = undefined

/**
 * Email attachments
 * @member {Array.<module:model/EmailAttachment>} attachments
 */
Email.prototype.attachments = undefined

export default Email
