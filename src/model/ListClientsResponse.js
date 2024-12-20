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
import Client from './Client'
import ListClientsResponsePage from './ListClientsResponsePage'
import Pagination from './Pagination'

/**
 * The ListClientsResponse model module.
 * @module model/ListClientsResponse
 * @version 2.1.1
 */
class ListClientsResponse {
  /**
     * Constructs a new <code>ListClientsResponse</code>.
     * @alias module:model/ListClientsResponse
     * @implements module:model/Pagination
     * @implements module:model/ListClientsResponsePage
     */
  constructor () {
    Pagination.initialize(this); ListClientsResponsePage.initialize(this)
    ListClientsResponse.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>ListClientsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListClientsResponse} obj Optional instance to populate.
     * @return {module:model/ListClientsResponse} The populated <code>ListClientsResponse</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new ListClientsResponse()
      Pagination.constructFromObject(data, obj)
      ListClientsResponsePage.constructFromObject(data, obj)

      if (data.hasOwnProperty('current_page')) {
        obj.current_page = ApiClient.convertToType(data.current_page, 'Number')
      }
      if (data.hasOwnProperty('first_page_url')) {
        obj.first_page_url = ApiClient.convertToType(data.first_page_url, 'String')
      }
      if (data.hasOwnProperty('from')) {
        obj.from = ApiClient.convertToType(data.from, 'Number')
      }
      if (data.hasOwnProperty('last_page')) {
        obj.last_page = ApiClient.convertToType(data.last_page, 'Number')
      }
      if (data.hasOwnProperty('last_page_url')) {
        obj.last_page_url = ApiClient.convertToType(data.last_page_url, 'String')
      }
      if (data.hasOwnProperty('next_page_url')) {
        obj.next_page_url = ApiClient.convertToType(data.next_page_url, 'String')
      }
      if (data.hasOwnProperty('path')) {
        obj.path = ApiClient.convertToType(data.path, 'String')
      }
      if (data.hasOwnProperty('per_page')) {
        obj.per_page = ApiClient.convertToType(data.per_page, 'Number')
      }
      if (data.hasOwnProperty('prev_page_url')) {
        obj.prev_page_url = ApiClient.convertToType(data.prev_page_url, 'String')
      }
      if (data.hasOwnProperty('to')) {
        obj.to = ApiClient.convertToType(data.to, 'Number')
      }
      if (data.hasOwnProperty('total')) {
        obj.total = ApiClient.convertToType(data.total, 'Number')
      }
      if (data.hasOwnProperty('data')) {
        obj.data = ApiClient.convertToType(data.data, [Client])
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>ListClientsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListClientsResponse</code>.
     */
  static validateJSON (data) {
    // ensure the json data is a string
    if (data.first_page_url && !(typeof data.first_page_url === 'string' || data.first_page_url instanceof String)) {
      throw new Error('Expected the field `first_page_url` to be a primitive type in the JSON string but got ' + data.first_page_url)
    }
    // ensure the json data is a string
    if (data.last_page_url && !(typeof data.last_page_url === 'string' || data.last_page_url instanceof String)) {
      throw new Error('Expected the field `last_page_url` to be a primitive type in the JSON string but got ' + data.last_page_url)
    }
    // ensure the json data is a string
    if (data.next_page_url && !(typeof data.next_page_url === 'string' || data.next_page_url instanceof String)) {
      throw new Error('Expected the field `next_page_url` to be a primitive type in the JSON string but got ' + data.next_page_url)
    }
    // ensure the json data is a string
    if (data.path && !(typeof data.path === 'string' || data.path instanceof String)) {
      throw new Error('Expected the field `path` to be a primitive type in the JSON string but got ' + data.path)
    }
    // ensure the json data is a string
    if (data.prev_page_url && !(typeof data.prev_page_url === 'string' || data.prev_page_url instanceof String)) {
      throw new Error('Expected the field `prev_page_url` to be a primitive type in the JSON string but got ' + data.prev_page_url)
    }
    if (data.data) { // data not null
      // ensure the json data is an array
      if (!Array.isArray(data.data)) {
        throw new Error('Expected the field `data` to be an array in the JSON data but got ' + data.data)
      }
      // validate the optional field `data` (array)
      for (const item of data.data) {
        Client.validateJSON(item)
      }
    }

    return true
  }
}

/**
 * Current page number.
 * @member {Number} current_page
 */
ListClientsResponse.prototype.current_page = undefined

/**
 * First page url.
 * @member {String} first_page_url
 */
ListClientsResponse.prototype.first_page_url = undefined

/**
 * First result of the page.
 * @member {Number} from
 */
ListClientsResponse.prototype.from = undefined

/**
 * Last page number.
 * @member {Number} last_page
 */
ListClientsResponse.prototype.last_page = undefined

/**
 * Last page url.
 * @member {String} last_page_url
 */
ListClientsResponse.prototype.last_page_url = undefined

/**
 * Next page url
 * @member {String} next_page_url
 */
ListClientsResponse.prototype.next_page_url = undefined

/**
 * Request path.
 * @member {String} path
 */
ListClientsResponse.prototype.path = undefined

/**
 * Number of result per page.
 * @member {Number} per_page
 */
ListClientsResponse.prototype.per_page = undefined

/**
 * Previous page url.
 * @member {String} prev_page_url
 */
ListClientsResponse.prototype.prev_page_url = undefined

/**
 * Last result of the page.
 * @member {Number} to
 */
ListClientsResponse.prototype.to = undefined

/**
 * Total number of results
 * @member {Number} total
 */
ListClientsResponse.prototype.total = undefined

/**
 * @member {Array.<module:model/Client>} data
 */
ListClientsResponse.prototype.data = undefined

// Implement Pagination interface:
/**
 * Current page number.
 * @member {Number} current_page
 */
Pagination.prototype.current_page = undefined
/**
 * First page url.
 * @member {String} first_page_url
 */
Pagination.prototype.first_page_url = undefined
/**
 * First result of the page.
 * @member {Number} from
 */
Pagination.prototype.from = undefined
/**
 * Last page number.
 * @member {Number} last_page
 */
Pagination.prototype.last_page = undefined
/**
 * Last page url.
 * @member {String} last_page_url
 */
Pagination.prototype.last_page_url = undefined
/**
 * Next page url
 * @member {String} next_page_url
 */
Pagination.prototype.next_page_url = undefined
/**
 * Request path.
 * @member {String} path
 */
Pagination.prototype.path = undefined
/**
 * Number of result per page.
 * @member {Number} per_page
 */
Pagination.prototype.per_page = undefined
/**
 * Previous page url.
 * @member {String} prev_page_url
 */
Pagination.prototype.prev_page_url = undefined
/**
 * Last result of the page.
 * @member {Number} to
 */
Pagination.prototype.to = undefined
/**
 * Total number of results
 * @member {Number} total
 */
Pagination.prototype.total = undefined
// Implement ListClientsResponsePage interface:
/**
 * @member {Array.<module:model/Client>} data
 */
ListClientsResponsePage.prototype.data = undefined

export default ListClientsResponse
