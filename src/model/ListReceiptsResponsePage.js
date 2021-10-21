/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol. For more information, please visit https://www.fattureincloud.it.
 *
 * The version of the OpenAPI document: 2.0.2
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Receipt from './Receipt';

/**
 * The ListReceiptsResponsePage model module.
 * @module model/ListReceiptsResponsePage
 * @version 2.0.1
 */
class ListReceiptsResponsePage {
    /**
     * Constructs a new <code>ListReceiptsResponsePage</code>.
     * @alias module:model/ListReceiptsResponsePage
     */
    constructor() { 
        
        ListReceiptsResponsePage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListReceiptsResponsePage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListReceiptsResponsePage} obj Optional instance to populate.
     * @return {module:model/ListReceiptsResponsePage} The populated <code>ListReceiptsResponsePage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListReceiptsResponsePage();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Receipt]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Receipt>} data
 */
ListReceiptsResponsePage.prototype['data'] = undefined;






export default ListReceiptsResponsePage;

