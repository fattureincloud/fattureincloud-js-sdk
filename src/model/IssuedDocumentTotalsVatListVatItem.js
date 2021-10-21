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

/**
 * The IssuedDocumentTotalsVatListVatItem model module.
 * @module model/IssuedDocumentTotalsVatListVatItem
 * @version 2.0.1
 */
class IssuedDocumentTotalsVatListVatItem {
    /**
     * Constructs a new <code>IssuedDocumentTotalsVatListVatItem</code>.
     * @alias module:model/IssuedDocumentTotalsVatListVatItem
     */
    constructor() { 
        
        IssuedDocumentTotalsVatListVatItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssuedDocumentTotalsVatListVatItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuedDocumentTotalsVatListVatItem} obj Optional instance to populate.
     * @return {module:model/IssuedDocumentTotalsVatListVatItem} The populated <code>IssuedDocumentTotalsVatListVatItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssuedDocumentTotalsVatListVatItem();

            if (data.hasOwnProperty('amount_net')) {
                obj['amount_net'] = ApiClient.convertToType(data['amount_net'], 'Number');
            }
            if (data.hasOwnProperty('amount_vat')) {
                obj['amount_vat'] = ApiClient.convertToType(data['amount_vat'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} amount_net
 */
IssuedDocumentTotalsVatListVatItem.prototype['amount_net'] = undefined;

/**
 * @member {Number} amount_vat
 */
IssuedDocumentTotalsVatListVatItem.prototype['amount_vat'] = undefined;






export default IssuedDocumentTotalsVatListVatItem;

