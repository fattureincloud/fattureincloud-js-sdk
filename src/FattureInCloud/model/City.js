/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.  For more information, please visit https://www.fattureincloud.it.
 *
 * The version of the OpenAPI document: 2.0.1
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The City model module.
 * @module FattureInCloud/model/City
 * @version 2.0.1
 */
class City {
    /**
     * Constructs a new <code>City</code>.
     * @alias module:FattureInCloud/model/City
     * @param postalCode {String} City postal code.
     * @param city {String} City name.
     * @param province {String} Province.
     */
    constructor(postalCode, city, province) { 
        
        City.initialize(this, postalCode, city, province);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, postalCode, city, province) { 
        obj['postal_code'] = postalCode;
        obj['city'] = city;
        obj['province'] = province;
    }

    /**
     * Constructs a <code>City</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:FattureInCloud/model/City} obj Optional instance to populate.
     * @return {module:FattureInCloud/model/City} The populated <code>City</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new City();

            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('province')) {
                obj['province'] = ApiClient.convertToType(data['province'], 'String');
            }
        }
        return obj;
    }


}

/**
 * City postal code.
 * @member {String} postal_code
 */
City.prototype['postal_code'] = undefined;

/**
 * City name.
 * @member {String} city
 */
City.prototype['city'] = undefined;

/**
 * Province.
 * @member {String} province
 */
City.prototype['province'] = undefined;






export default City;

