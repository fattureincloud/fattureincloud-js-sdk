/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.3
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import IssuedDocumentTotalsVatListVatItem from './IssuedDocumentTotalsVatListVatItem';

/**
 * The IssuedDocumentTotalsVatList model module.
 * @module model/IssuedDocumentTotalsVatList
 * @version 2.0.3
 */
class IssuedDocumentTotalsVatList {
    /**
     * Constructs a new <code>IssuedDocumentTotalsVatList</code>.
     * @alias module:model/IssuedDocumentTotalsVatList
     */
    constructor() { 
        
        IssuedDocumentTotalsVatList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssuedDocumentTotalsVatList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuedDocumentTotalsVatList} obj Optional instance to populate.
     * @return {module:model/IssuedDocumentTotalsVatList} The populated <code>IssuedDocumentTotalsVatList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssuedDocumentTotalsVatList();

            if (data.hasOwnProperty('vat_item')) {
                obj['vat_item'] = IssuedDocumentTotalsVatListVatItem.constructFromObject(data['vat_item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/IssuedDocumentTotalsVatListVatItem} vat_item
 */
IssuedDocumentTotalsVatList.prototype['vat_item'] = undefined;






export default IssuedDocumentTotalsVatList;

