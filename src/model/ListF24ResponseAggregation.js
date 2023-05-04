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

import ListF24ResponseAggregatedData from './ListF24ResponseAggregatedData'

/**
 * The ListF24ResponseAggregation model module.
 * @module model/ListF24ResponseAggregation
 * @version 2.0.20
 */
class ListF24ResponseAggregation {
  /**
     * Constructs a new <code>ListF24ResponseAggregation</code>.
     * @alias module:model/ListF24ResponseAggregation
     */
  constructor () {
    ListF24ResponseAggregation.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>ListF24ResponseAggregation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListF24ResponseAggregation} obj Optional instance to populate.
     * @return {module:model/ListF24ResponseAggregation} The populated <code>ListF24ResponseAggregation</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new ListF24ResponseAggregation()

      if (data.hasOwnProperty('aggregated_data')) {
        obj.aggregated_data = ListF24ResponseAggregatedData.constructFromObject(data.aggregated_data)
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>ListF24ResponseAggregation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListF24ResponseAggregation</code>.
     */
  static validateJSON (data) {
    // validate the optional field `aggregated_data`
    if (data.aggregated_data) { // data not null
      ListF24ResponseAggregatedData.validateJSON(data.aggregated_data)
    }

    return true
  }
}

/**
 * @member {module:model/ListF24ResponseAggregatedData} aggregated_data
 */
ListF24ResponseAggregation.prototype.aggregated_data = undefined

export default ListF24ResponseAggregation
