/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.30
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import EmailDataDefaultSenderEmail from './EmailDataDefaultSenderEmail'
import SenderEmail from './SenderEmail'

/**
 * The EmailData model module.
 * @module model/EmailData
 * @version 2.0.23
 */
class EmailData {
  /**
     * Constructs a new <code>EmailData</code>.
     * @alias module:model/EmailData
     */
  constructor () {
    EmailData.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>EmailData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailData} obj Optional instance to populate.
     * @return {module:model/EmailData} The populated <code>EmailData</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new EmailData()

      if (data.hasOwnProperty('recipient_email')) {
        obj.recipient_email = ApiClient.convertToType(data.recipient_email, 'String')
      }
      if (data.hasOwnProperty('default_sender_email')) {
        obj.default_sender_email = EmailDataDefaultSenderEmail.constructFromObject(data.default_sender_email)
      }
      if (data.hasOwnProperty('sender_emails_list')) {
        obj.sender_emails_list = ApiClient.convertToType(data.sender_emails_list, [SenderEmail])
      }
      if (data.hasOwnProperty('cc_email')) {
        obj.cc_email = ApiClient.convertToType(data.cc_email, 'String')
      }
      if (data.hasOwnProperty('subject')) {
        obj.subject = ApiClient.convertToType(data.subject, 'String')
      }
      if (data.hasOwnProperty('body')) {
        obj.body = ApiClient.convertToType(data.body, 'String')
      }
      if (data.hasOwnProperty('document_exists')) {
        obj.document_exists = ApiClient.convertToType(data.document_exists, 'Boolean')
      }
      if (data.hasOwnProperty('delivery_note_exists')) {
        obj.delivery_note_exists = ApiClient.convertToType(data.delivery_note_exists, 'Boolean')
      }
      if (data.hasOwnProperty('attachment_exists')) {
        obj.attachment_exists = ApiClient.convertToType(data.attachment_exists, 'Boolean')
      }
      if (data.hasOwnProperty('accompanying_invoice_exists')) {
        obj.accompanying_invoice_exists = ApiClient.convertToType(data.accompanying_invoice_exists, 'Boolean')
      }
      if (data.hasOwnProperty('default_attach_pdf')) {
        obj.default_attach_pdf = ApiClient.convertToType(data.default_attach_pdf, 'Boolean')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>EmailData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailData</code>.
     */
  static validateJSON (data) {
    // ensure the json data is a string
    if (data.recipient_email && !(typeof data.recipient_email === 'string' || data.recipient_email instanceof String)) {
      throw new Error('Expected the field `recipient_email` to be a primitive type in the JSON string but got ' + data.recipient_email)
    }
    // validate the optional field `default_sender_email`
    if (data.default_sender_email) { // data not null
      EmailDataDefaultSenderEmail.validateJSON(data.default_sender_email)
    }
    if (data.sender_emails_list) { // data not null
      // ensure the json data is an array
      if (!Array.isArray(data.sender_emails_list)) {
        throw new Error('Expected the field `sender_emails_list` to be an array in the JSON data but got ' + data.sender_emails_list)
      }
      // validate the optional field `sender_emails_list` (array)
      for (const item of data.sender_emails_list) {
        SenderEmail.validateJSON(item)
      }
    }
    // ensure the json data is a string
    if (data.cc_email && !(typeof data.cc_email === 'string' || data.cc_email instanceof String)) {
      throw new Error('Expected the field `cc_email` to be a primitive type in the JSON string but got ' + data.cc_email)
    }
    // ensure the json data is a string
    if (data.subject && !(typeof data.subject === 'string' || data.subject instanceof String)) {
      throw new Error('Expected the field `subject` to be a primitive type in the JSON string but got ' + data.subject)
    }
    // ensure the json data is a string
    if (data.body && !(typeof data.body === 'string' || data.body instanceof String)) {
      throw new Error('Expected the field `body` to be a primitive type in the JSON string but got ' + data.body)
    }

    return true
  }
}

/**
 * Email recipient
 * @member {String} recipient_email
 */
EmailData.prototype.recipient_email = undefined

/**
 * @member {module:model/EmailDataDefaultSenderEmail} default_sender_email
 */
EmailData.prototype.default_sender_email = undefined

/**
 * List of all emails from which the document can be sent
 * @member {Array.<module:model/SenderEmail>} sender_emails_list
 */
EmailData.prototype.sender_emails_list = undefined

/**
 * Email cc [by default is the logged company email]
 * @member {String} cc_email
 */
EmailData.prototype.cc_email = undefined

/**
 * Email subject
 * @member {String} subject
 */
EmailData.prototype.subject = undefined

/**
 * Email body
 * @member {String} body
 */
EmailData.prototype.body = undefined

/**
 * Document exists if it is not a delivery note
 * @member {Boolean} document_exists
 */
EmailData.prototype.document_exists = undefined

/**
 * Document is a delivery note
 * @member {Boolean} delivery_note_exists
 */
EmailData.prototype.delivery_note_exists = undefined

/**
 * Document has attachment
 * @member {Boolean} attachment_exists
 */
EmailData.prototype.attachment_exists = undefined

/**
 * Document has accompanying invoice
 * @member {Boolean} accompanying_invoice_exists
 */
EmailData.prototype.accompanying_invoice_exists = undefined

/**
 * Attach document pdf
 * @member {Boolean} default_attach_pdf
 */
EmailData.prototype.default_attach_pdf = undefined

export default EmailData
