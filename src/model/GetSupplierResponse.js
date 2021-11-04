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
import Supplier from './Supplier';

/**
 * The GetSupplierResponse model module.
 * @module model/GetSupplierResponse
 * @version 2.0.3
 */
class GetSupplierResponse {
    /**
     * Constructs a new <code>GetSupplierResponse</code>.
     * @alias module:model/GetSupplierResponse
     */
    constructor() { 
        
        GetSupplierResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSupplierResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSupplierResponse} obj Optional instance to populate.
     * @return {module:model/GetSupplierResponse} The populated <code>GetSupplierResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSupplierResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = Supplier.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Supplier} data
 */
GetSupplierResponse.prototype['data'] = undefined;






export default GetSupplierResponse;

