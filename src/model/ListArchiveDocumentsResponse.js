/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.5
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ArchiveDocument from './ArchiveDocument';
import ListArchiveDocumentsResponsePage from './ListArchiveDocumentsResponsePage';
import Pagination from './Pagination';

/**
 * The ListArchiveDocumentsResponse model module.
 * @module model/ListArchiveDocumentsResponse
 * @version 2.0.3
 */
class ListArchiveDocumentsResponse {
    /**
     * Constructs a new <code>ListArchiveDocumentsResponse</code>.
     * 
     * @alias module:model/ListArchiveDocumentsResponse
     * @implements module:model/Pagination
     * @implements module:model/ListArchiveDocumentsResponsePage
     */
    constructor() { 
        Pagination.initialize(this);ListArchiveDocumentsResponsePage.initialize(this);
        ListArchiveDocumentsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListArchiveDocumentsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListArchiveDocumentsResponse} obj Optional instance to populate.
     * @return {module:model/ListArchiveDocumentsResponse} The populated <code>ListArchiveDocumentsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListArchiveDocumentsResponse();
            Pagination.constructFromObject(data, obj);
            ListArchiveDocumentsResponsePage.constructFromObject(data, obj);

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
                obj['data'] = ApiClient.convertToType(data['data'], [ArchiveDocument]);
            }
        }
        return obj;
    }


}

/**
 * Current page number.
 * @member {Number} current_page
 */
ListArchiveDocumentsResponse.prototype['current_page'] = undefined;

/**
 * First page url.
 * @member {String} first_page_url
 */
ListArchiveDocumentsResponse.prototype['first_page_url'] = undefined;

/**
 * First result of the page.
 * @member {Number} from
 */
ListArchiveDocumentsResponse.prototype['from'] = undefined;

/**
 * Last page number.
 * @member {Number} last_page
 */
ListArchiveDocumentsResponse.prototype['last_page'] = undefined;

/**
 * Last page url.
 * @member {String} last_page_url
 */
ListArchiveDocumentsResponse.prototype['last_page_url'] = undefined;

/**
 * Next page url
 * @member {String} next_page_url
 */
ListArchiveDocumentsResponse.prototype['next_page_url'] = undefined;

/**
 * Request path.
 * @member {String} path
 */
ListArchiveDocumentsResponse.prototype['path'] = undefined;

/**
 * Number of result per page.
 * @member {Number} per_page
 */
ListArchiveDocumentsResponse.prototype['per_page'] = undefined;

/**
 * Previous page url.
 * @member {String} prev_page_url
 */
ListArchiveDocumentsResponse.prototype['prev_page_url'] = undefined;

/**
 * Last result of the page.
 * @member {Number} to
 */
ListArchiveDocumentsResponse.prototype['to'] = undefined;

/**
 * Total number of results
 * @member {Number} total
 */
ListArchiveDocumentsResponse.prototype['total'] = undefined;

/**
 * @member {Array.<module:model/ArchiveDocument>} data
 */
ListArchiveDocumentsResponse.prototype['data'] = undefined;


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
// Implement ListArchiveDocumentsResponsePage interface:
/**
 * @member {Array.<module:model/ArchiveDocument>} data
 */
ListArchiveDocumentsResponsePage.prototype['data'] = undefined;




export default ListArchiveDocumentsResponse;

