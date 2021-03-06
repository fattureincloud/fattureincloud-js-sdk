/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.19
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import F24Status from './F24Status'
import PaymentAccount from './PaymentAccount'

/**
 * The F24 model module.
 * @module model/F24
 * @version 2.0.15
 */
class F24 {
  /**
     * Constructs a new <code>F24</code>.
     * @alias module:model/F24
     */
  constructor () {
    F24.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>F24</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/F24} obj Optional instance to populate.
     * @return {module:model/F24} The populated <code>F24</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new F24()

      if (data.hasOwnProperty('id')) {
        obj.id = ApiClient.convertToType(data.id, 'Number')
      }
      if (data.hasOwnProperty('due_date')) {
        obj.due_date = ApiClient.convertToType(data.due_date, 'Date')
      }
      if (data.hasOwnProperty('status')) {
        obj.status = F24Status.constructFromObject(data.status)
      }
      if (data.hasOwnProperty('payment_account')) {
        obj.payment_account = PaymentAccount.constructFromObject(data.payment_account)
      }
      if (data.hasOwnProperty('amount')) {
        obj.amount = ApiClient.convertToType(data.amount, 'Number')
      }
      if (data.hasOwnProperty('attachment_url')) {
        obj.attachment_url = ApiClient.convertToType(data.attachment_url, 'String')
      }
      if (data.hasOwnProperty('attachment_token')) {
        obj.attachment_token = ApiClient.convertToType(data.attachment_token, 'String')
      }
      if (data.hasOwnProperty('description')) {
        obj.description = ApiClient.convertToType(data.description, 'String')
      }
    }
    return obj
  }
}

/**
 * Unique F24 identifier.
 * @member {Number} id
 */
F24.prototype.id = undefined

/**
 * Due date.
 * @member {Date} due_date
 */
F24.prototype.due_date = undefined

/**
 * @member {module:model/F24Status} status
 */
F24.prototype.status = undefined

/**
 * @member {module:model/PaymentAccount} payment_account
 */
F24.prototype.payment_account = undefined

/**
 * Taxes amount.
 * @member {Number} amount
 */
F24.prototype.amount = undefined

/**
 * [Read Only] Absolute url of the attached file. Authomatically set if a valid attachment token is passed via POST /taxes or PUT /taxes/{documentId}.
 * @member {String} attachment_url
 */
F24.prototype.attachment_url = undefined

/**
 * [Write Only] Attachment token returned by POST /taxes/attachment. Used to attach the file already uploaded.
 * @member {String} attachment_token
 */
F24.prototype.attachment_token = undefined

/**
 * Name or brief description.
 * @member {String} description
 */
F24.prototype.description = undefined

export default F24
