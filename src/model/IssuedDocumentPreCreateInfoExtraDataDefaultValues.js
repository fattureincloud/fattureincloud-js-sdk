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
 * The IssuedDocumentPreCreateInfoExtraDataDefaultValues model module.
 * @module model/IssuedDocumentPreCreateInfoExtraDataDefaultValues
 * @version 2.0.1
 */
class IssuedDocumentPreCreateInfoExtraDataDefaultValues {
    /**
     * Constructs a new <code>IssuedDocumentPreCreateInfoExtraDataDefaultValues</code>.
     * @alias module:model/IssuedDocumentPreCreateInfoExtraDataDefaultValues
     */
    constructor() { 
        
        IssuedDocumentPreCreateInfoExtraDataDefaultValues.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssuedDocumentPreCreateInfoExtraDataDefaultValues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuedDocumentPreCreateInfoExtraDataDefaultValues} obj Optional instance to populate.
     * @return {module:model/IssuedDocumentPreCreateInfoExtraDataDefaultValues} The populated <code>IssuedDocumentPreCreateInfoExtraDataDefaultValues</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssuedDocumentPreCreateInfoExtraDataDefaultValues();

            if (data.hasOwnProperty('ts_communication')) {
                obj['ts_communication'] = ApiClient.convertToType(data['ts_communication'], 'Boolean');
            }
            if (data.hasOwnProperty('ts_tipo_spesa')) {
                obj['ts_tipo_spesa'] = ApiClient.convertToType(data['ts_tipo_spesa'], 'String');
            }
            if (data.hasOwnProperty('ts_flag_tipo_spesa')) {
                obj['ts_flag_tipo_spesa'] = ApiClient.convertToType(data['ts_flag_tipo_spesa'], 'Number');
            }
            if (data.hasOwnProperty('ts_pagamento_tracciato')) {
                obj['ts_pagamento_tracciato'] = ApiClient.convertToType(data['ts_pagamento_tracciato'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} ts_communication
 */
IssuedDocumentPreCreateInfoExtraDataDefaultValues.prototype['ts_communication'] = undefined;

/**
 * @member {String} ts_tipo_spesa
 */
IssuedDocumentPreCreateInfoExtraDataDefaultValues.prototype['ts_tipo_spesa'] = undefined;

/**
 * @member {Number} ts_flag_tipo_spesa
 */
IssuedDocumentPreCreateInfoExtraDataDefaultValues.prototype['ts_flag_tipo_spesa'] = undefined;

/**
 * @member {Boolean} ts_pagamento_tracciato
 */
IssuedDocumentPreCreateInfoExtraDataDefaultValues.prototype['ts_pagamento_tracciato'] = undefined;






export default IssuedDocumentPreCreateInfoExtraDataDefaultValues;

