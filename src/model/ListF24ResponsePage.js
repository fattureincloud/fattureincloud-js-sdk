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
import F24 from './F24'

/**
 * The ListF24ResponsePage model module.
 * @module model/ListF24ResponsePage
 * @version 2.0.15
 */
class ListF24ResponsePage {
  /**
     * Constructs a new <code>ListF24ResponsePage</code>.
     * @alias module:model/ListF24ResponsePage
     */
  constructor () {
    ListF24ResponsePage.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>ListF24ResponsePage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListF24ResponsePage} obj Optional instance to populate.
     * @return {module:model/ListF24ResponsePage} The populated <code>ListF24ResponsePage</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new ListF24ResponsePage()

      if (data.hasOwnProperty('data')) {
        obj.data = ApiClient.convertToType(data.data, [F24])
      }
    }
    return obj
  }
}

/**
 * @member {Array.<module:model/F24>} data
 */
ListF24ResponsePage.prototype.data = undefined

export default ListF24ResponsePage
