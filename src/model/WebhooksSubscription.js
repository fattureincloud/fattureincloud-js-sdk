/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.31
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import EventType from './EventType'
import WebhooksSubscriptionConfig from './WebhooksSubscriptionConfig'

/**
 * The WebhooksSubscription model module.
 * @module model/WebhooksSubscription
 * @version 2.0.24
 */
class WebhooksSubscription {
  /**
     * Constructs a new <code>WebhooksSubscription</code>.
     * @alias module:model/WebhooksSubscription
     */
  constructor () {
    WebhooksSubscription.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>WebhooksSubscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhooksSubscription} obj Optional instance to populate.
     * @return {module:model/WebhooksSubscription} The populated <code>WebhooksSubscription</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new WebhooksSubscription()

      if (data.hasOwnProperty('id')) {
        obj.id = ApiClient.convertToType(data.id, 'String')
      }
      if (data.hasOwnProperty('sink')) {
        obj.sink = ApiClient.convertToType(data.sink, 'String')
      }
      if (data.hasOwnProperty('verified')) {
        obj.verified = ApiClient.convertToType(data.verified, 'Boolean')
      }
      if (data.hasOwnProperty('types')) {
        obj.types = ApiClient.convertToType(data.types, [EventType])
      }
      if (data.hasOwnProperty('config')) {
        obj.config = WebhooksSubscriptionConfig.constructFromObject(data.config)
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>WebhooksSubscription</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhooksSubscription</code>.
     */
  static validateJSON (data) {
    // ensure the json data is a string
    if (data.id && !(typeof data.id === 'string' || data.id instanceof String)) {
      throw new Error('Expected the field `id` to be a primitive type in the JSON string but got ' + data.id)
    }
    // ensure the json data is a string
    if (data.sink && !(typeof data.sink === 'string' || data.sink instanceof String)) {
      throw new Error('Expected the field `sink` to be a primitive type in the JSON string but got ' + data.sink)
    }
    // ensure the json data is an array
    if (!Array.isArray(data.types)) {
      throw new Error('Expected the field `types` to be an array in the JSON data but got ' + data.types)
    }
    // validate the optional field `config`
    if (data.config) { // data not null
      WebhooksSubscriptionConfig.validateJSON(data.config)
    }

    return true
  }
}

/**
 * Webhooks subscription id
 * @member {String} id
 */
WebhooksSubscription.prototype.id = undefined

/**
 * Webhooks callback uri.
 * @member {String} sink
 */
WebhooksSubscription.prototype.sink = undefined

/**
 * [Read Only] True if the webhooks subscription has been verified.
 * @member {Boolean} verified
 */
WebhooksSubscription.prototype.verified = undefined

/**
 * Webhooks events types.
 * @member {Array.<module:model/EventType>} types
 */
WebhooksSubscription.prototype.types = undefined

/**
 * @member {module:model/WebhooksSubscriptionConfig} config
 */
WebhooksSubscription.prototype.config = undefined

export default WebhooksSubscription
