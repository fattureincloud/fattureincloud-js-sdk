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

/**
 * The IssuedDocumentOptions model module.
 * @module model/IssuedDocumentOptions
 * @version 2.0.23
 */
class IssuedDocumentOptions {
  /**
     * Constructs a new <code>IssuedDocumentOptions</code>.
     * @alias module:model/IssuedDocumentOptions
     */
  constructor () {
    IssuedDocumentOptions.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>IssuedDocumentOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuedDocumentOptions} obj Optional instance to populate.
     * @return {module:model/IssuedDocumentOptions} The populated <code>IssuedDocumentOptions</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new IssuedDocumentOptions()

      if (data.hasOwnProperty('fix_payments')) {
        obj.fix_payments = ApiClient.convertToType(data.fix_payments, 'Boolean')
      }
      if (data.hasOwnProperty('create_from')) {
        obj.create_from = ApiClient.convertToType(data.create_from, ['String'])
      }
      if (data.hasOwnProperty('transform')) {
        obj.transform = ApiClient.convertToType(data.transform, 'Boolean')
      }
      if (data.hasOwnProperty('keep_copy')) {
        obj.keep_copy = ApiClient.convertToType(data.keep_copy, 'Boolean')
      }
      if (data.hasOwnProperty('join_type')) {
        obj.join_type = ApiClient.convertToType(data.join_type, 'String')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>IssuedDocumentOptions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IssuedDocumentOptions</code>.
     */
  static validateJSON (data) {
    // ensure the json data is an array
    if (!Array.isArray(data.create_from)) {
      throw new Error('Expected the field `create_from` to be an array in the JSON data but got ' + data.create_from)
    }
    // ensure the json data is a string
    if (data.join_type && !(typeof data.join_type === 'string' || data.join_type instanceof String)) {
      throw new Error('Expected the field `join_type` to be a primitive type in the JSON string but got ' + data.join_type)
    }

    return true
  }
}

/**
 * Fixes your last payment amount to match your document total
 * @member {Boolean} fix_payments
 */
IssuedDocumentOptions.prototype.fix_payments = undefined

/**
 * Original documents ids [only for join/transform]
 * @member {Array.<String>} create_from
 */
IssuedDocumentOptions.prototype.create_from = undefined

/**
 * Tranform a document [only for transform]
 * @member {Boolean} transform
 */
IssuedDocumentOptions.prototype.transform = undefined

/**
 * Keep original document [only for transform]
 * @member {Boolean} keep_copy
 */
IssuedDocumentOptions.prototype.keep_copy = undefined

/**
 * Join type [only for join]
 * @member {String} join_type
 */
IssuedDocumentOptions.prototype.join_type = undefined

export default IssuedDocumentOptions
