/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.13
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ListReceiptsResponsePage from './ListReceiptsResponsePage';
import Pagination from './Pagination';
import Receipt from './Receipt';

/**
 * The ListReceiptsResponse model module.
 * @module model/ListReceiptsResponse
 * @version 2.0.10
 */
class ListReceiptsResponse {
    /**
     * Constructs a new <code>ListReceiptsResponse</code>.
     * 
     * @alias module:model/ListReceiptsResponse
     * @implements module:model/Pagination
     * @implements module:model/ListReceiptsResponsePage
     */
    constructor() { 
        Pagination.initialize(this);ListReceiptsResponsePage.initialize(this);
        ListReceiptsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListReceiptsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListReceiptsResponse} obj Optional instance to populate.
     * @return {module:model/ListReceiptsResponse} The populated <code>ListReceiptsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListReceiptsResponse();
            Pagination.constructFromObject(data, obj);
            ListReceiptsResponsePage.constructFromObject(data, obj);

            if (data.hasOwnProperty('current_page')) {
                obj['current_page'] = ApiClient.convertToType(data['current_page'], 'Number');
            }
            if (data.hasOwnProperty('first_page_url')) {
                obj['first_page_url'] = ApiClient.convertToType(data['first_page_url'], 'String');
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'Number');
            }
            if (data.hasOwnProperty('last_page')) {
                obj['last_page'] = ApiClient.convertToType(data['last_page'], 'Number');
            }
            if (data.hasOwnProperty('last_page_url')) {
                obj['last_page_url'] = ApiClient.convertToType(data['last_page_url'], 'String');
            }
            if (data.hasOwnProperty('next_page_url')) {
                obj['next_page_url'] = ApiClient.convertToType(data['next_page_url'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('per_page')) {
                obj['per_page'] = ApiClient.convertToType(data['per_page'], 'Number');
            }
            if (data.hasOwnProperty('prev_page_url')) {
                obj['prev_page_url'] = ApiClient.convertToType(data['prev_page_url'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Receipt]);
            }
        }
        return obj;
    }


}

/**
 * Current page number.
 * @member {Number} current_page
 */
ListReceiptsResponse.prototype['current_page'] = undefined;

/**
 * First page url.
 * @member {String} first_page_url
 */
ListReceiptsResponse.prototype['first_page_url'] = undefined;

/**
 * First result of the page.
 * @member {Number} from
 */
ListReceiptsResponse.prototype['from'] = undefined;

/**
 * Last page number.
 * @member {Number} last_page
 */
ListReceiptsResponse.prototype['last_page'] = undefined;

/**
 * Last page url.
 * @member {String} last_page_url
 */
ListReceiptsResponse.prototype['last_page_url'] = undefined;

/**
 * Next page url
 * @member {String} next_page_url
 */
ListReceiptsResponse.prototype['next_page_url'] = undefined;

/**
 * Request path.
 * @member {String} path
 */
ListReceiptsResponse.prototype['path'] = undefined;

/**
 * Number of result per page.
 * @member {Number} per_page
 */
ListReceiptsResponse.prototype['per_page'] = undefined;

/**
 * Previous page url.
 * @member {String} prev_page_url
 */
ListReceiptsResponse.prototype['prev_page_url'] = undefined;

/**
 * Last result of the page.
 * @member {Number} to
 */
ListReceiptsResponse.prototype['to'] = undefined;

/**
 * Total number of results
 * @member {Number} total
 */
ListReceiptsResponse.prototype['total'] = undefined;

/**
 * @member {Array.<module:model/Receipt>} data
 */
ListReceiptsResponse.prototype['data'] = undefined;


// Implement Pagination interface:
/**
 * Current page number.
 * @member {Number} current_page
 */
Pagination.prototype['current_page'] = undefined;
/**
 * First page url.
 * @member {String} first_page_url
 */
Pagination.prototype['first_page_url'] = undefined;
/**
 * First result of the page.
 * @member {Number} from
 */
Pagination.prototype['from'] = undefined;
/**
 * Last page number.
 * @member {Number} last_page
 */
Pagination.prototype['last_page'] = undefined;
/**
 * Last page url.
 * @member {String} last_page_url
 */
Pagination.prototype['last_page_url'] = undefined;
/**
 * Next page url
 * @member {String} next_page_url
 */
Pagination.prototype['next_page_url'] = undefined;
/**
 * Request path.
 * @member {String} path
 */
Pagination.prototype['path'] = undefined;
/**
 * Number of result per page.
 * @member {Number} per_page
 */
Pagination.prototype['per_page'] = undefined;
/**
 * Previous page url.
 * @member {String} prev_page_url
 */
Pagination.prototype['prev_page_url'] = undefined;
/**
 * Last result of the page.
 * @member {Number} to
 */
Pagination.prototype['to'] = undefined;
/**
 * Total number of results
 * @member {Number} total
 */
Pagination.prototype['total'] = undefined;
// Implement ListReceiptsResponsePage interface:
/**
 * @member {Array.<module:model/Receipt>} data
 */
ListReceiptsResponsePage.prototype['data'] = undefined;




export default ListReceiptsResponse;

