/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.1.3
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'

/**
 * The EmailScheduleInclude model module.
 * @module model/EmailScheduleInclude
 * @version 2.1.1
 */
class EmailScheduleInclude {
  /**
     * Constructs a new <code>EmailScheduleInclude</code>.
     * @alias module:model/EmailScheduleInclude
     */
  constructor () {
    EmailScheduleInclude.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>EmailScheduleInclude</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailScheduleInclude} obj Optional instance to populate.
     * @return {module:model/EmailScheduleInclude} The populated <code>EmailScheduleInclude</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new EmailScheduleInclude()

      if (data.hasOwnProperty('document')) {
        obj.document = ApiClient.convertToType(data.document, 'Boolean')
      }
      if (data.hasOwnProperty('delivery_note')) {
        obj.delivery_note = ApiClient.convertToType(data.delivery_note, 'Boolean')
      }
      if (data.hasOwnProperty('attachment')) {
        obj.attachment = ApiClient.convertToType(data.attachment, 'Boolean')
      }
      if (data.hasOwnProperty('accompanying_invoice')) {
        obj.accompanying_invoice = ApiClient.convertToType(data.accompanying_invoice, 'Boolean')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>EmailScheduleInclude</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailScheduleInclude</code>.
     */
  static validateJSON (data) {
    return true
  }
}

/**
 * Include a button to view the document
 * @member {Boolean} document
 */
EmailScheduleInclude.prototype.document = undefined

/**
 * Include a button to view the delivery note
 * @member {Boolean} delivery_note
 */
EmailScheduleInclude.prototype.delivery_note = undefined

/**
 * Include a button to view the attachment
 * @member {Boolean} attachment
 */
EmailScheduleInclude.prototype.attachment = undefined

/**
 * Include a button to view the accompanying invoice
 * @member {Boolean} accompanying_invoice
 */
EmailScheduleInclude.prototype.accompanying_invoice = undefined

export default EmailScheduleInclude
