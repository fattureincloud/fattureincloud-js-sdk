/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.20
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import ListSuppliersResponsePage from './ListSuppliersResponsePage'
import Pagination from './Pagination'
import Supplier from './Supplier'

/**
 * The ListSuppliersResponse model module.
 * @module model/ListSuppliersResponse
 * @version 2.0.16
 */
class ListSuppliersResponse {
  /**
     * Constructs a new <code>ListSuppliersResponse</code>.
     * @alias module:model/ListSuppliersResponse
     * @implements module:model/Pagination
     * @implements module:model/ListSuppliersResponsePage
     */
  constructor () {
    Pagination.initialize(this); ListSuppliersResponsePage.initialize(this)
    ListSuppliersResponse.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>ListSuppliersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListSuppliersResponse} obj Optional instance to populate.
     * @return {module:model/ListSuppliersResponse} The populated <code>ListSuppliersResponse</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new ListSuppliersResponse()
      Pagination.constructFromObject(data, obj)
      ListSuppliersResponsePage.constructFromObject(data, obj)

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
        obj.data = ApiClient.convertToType(data.data, [Supplier])
      }
    }
    return obj
  }
}

/**
 * Current page number.
 * @member {Number} current_page
 */
ListSuppliersResponse.prototype.current_page = undefined

/**
 * First page url.
 * @member {String} first_page_url
 */
ListSuppliersResponse.prototype.first_page_url = undefined

/**
 * First result of the page.
 * @member {Number} from
 */
ListSuppliersResponse.prototype.from = undefined

/**
 * Last page number.
 * @member {Number} last_page
 */
ListSuppliersResponse.prototype.last_page = undefined

/**
 * Last page url.
 * @member {String} last_page_url
 */
ListSuppliersResponse.prototype.last_page_url = undefined

/**
 * Next page url
 * @member {String} next_page_url
 */
ListSuppliersResponse.prototype.next_page_url = undefined

/**
 * Request path.
 * @member {String} path
 */
ListSuppliersResponse.prototype.path = undefined

/**
 * Number of result per page.
 * @member {Number} per_page
 */
ListSuppliersResponse.prototype.per_page = undefined

/**
 * Previous page url.
 * @member {String} prev_page_url
 */
ListSuppliersResponse.prototype.prev_page_url = undefined

/**
 * Last result of the page.
 * @member {Number} to
 */
ListSuppliersResponse.prototype.to = undefined

/**
 * Total number of results
 * @member {Number} total
 */
ListSuppliersResponse.prototype.total = undefined

/**
 * @member {Array.<module:model/Supplier>} data
 */
ListSuppliersResponse.prototype.data = undefined

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
// Implement ListSuppliersResponsePage interface:
/**
 * @member {Array.<module:model/Supplier>} data
 */
ListSuppliersResponsePage.prototype.data = undefined

export default ListSuppliersResponse
