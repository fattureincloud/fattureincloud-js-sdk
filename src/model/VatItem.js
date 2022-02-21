/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.12
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The VatItem model module.
 * @module model/VatItem
 * @version 2.0.10
 */
class VatItem {
    /**
     * Constructs a new <code>VatItem</code>.
     * @alias module:model/VatItem
     */
    constructor() { 
        
        VatItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VatItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VatItem} obj Optional instance to populate.
     * @return {module:model/VatItem} The populated <code>VatItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VatItem();

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
VatItem.prototype['amount_net'] = undefined;

/**
 * @member {Number} amount_vat
 */
VatItem.prototype['amount_vat'] = undefined;






export default VatItem;
