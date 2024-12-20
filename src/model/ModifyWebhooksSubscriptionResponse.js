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
import WebhooksSubscription from './WebhooksSubscription'

/**
 * The ModifyWebhooksSubscriptionResponse model module.
 * @module model/ModifyWebhooksSubscriptionResponse
 * @version 2.1.1
 */
class ModifyWebhooksSubscriptionResponse {
  /**
     * Constructs a new <code>ModifyWebhooksSubscriptionResponse</code>.
     * @alias module:model/ModifyWebhooksSubscriptionResponse
     */
  constructor () {
    ModifyWebhooksSubscriptionResponse.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>ModifyWebhooksSubscriptionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyWebhooksSubscriptionResponse} obj Optional instance to populate.
     * @return {module:model/ModifyWebhooksSubscriptionResponse} The populated <code>ModifyWebhooksSubscriptionResponse</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new ModifyWebhooksSubscriptionResponse()

      if (data.hasOwnProperty('data')) {
        obj.data = WebhooksSubscription.constructFromObject(data.data)
      }
      if (data.hasOwnProperty('warnings')) {
        obj.warnings = ApiClient.convertToType(data.warnings, ['String'])
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>ModifyWebhooksSubscriptionResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModifyWebhooksSubscriptionResponse</code>.
     */
  static validateJSON (data) {
    // validate the optional field `data`
    if (data.data) { // data not null
      WebhooksSubscription.validateJSON(data.data)
    }
    // ensure the json data is an array
    if (!Array.isArray(data.warnings)) {
      throw new Error('Expected the field `warnings` to be an array in the JSON data but got ' + data.warnings)
    }

    return true
  }
}

/**
 * @member {module:model/WebhooksSubscription} data
 */
ModifyWebhooksSubscriptionResponse.prototype.data = undefined

/**
 * Webhooks registration warnings
 * @member {Array.<String>} warnings
 */
ModifyWebhooksSubscriptionResponse.prototype.warnings = undefined

export default ModifyWebhooksSubscriptionResponse
