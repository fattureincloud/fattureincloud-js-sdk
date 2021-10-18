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
 * The IssuedDocumentExtraData model module.
 * @module model/IssuedDocumentExtraData
 * @version 2.0.1
 */
class IssuedDocumentExtraData {
    /**
     * Constructs a new <code>IssuedDocumentExtraData</code>.
     * Extra data. TS fields follow the technical specifications provided by \&quot;Sistema Tessera Sanitaria\&quot;.
     * @alias module:model/IssuedDocumentExtraData
     */
    constructor() { 
        
        IssuedDocumentExtraData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssuedDocumentExtraData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuedDocumentExtraData} obj Optional instance to populate.
     * @return {module:model/IssuedDocumentExtraData} The populated <code>IssuedDocumentExtraData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssuedDocumentExtraData();

            if (data.hasOwnProperty('show_sofort_button')) {
                obj['show_sofort_button'] = ApiClient.convertToType(data['show_sofort_button'], 'Boolean');
            }
            if (data.hasOwnProperty('multifatture_sent')) {
                obj['multifatture_sent'] = ApiClient.convertToType(data['multifatture_sent'], 'Number');
            }
            if (data.hasOwnProperty('ts_communication')) {
                obj['ts_communication'] = ApiClient.convertToType(data['ts_communication'], 'Boolean');
            }
            if (data.hasOwnProperty('ts_flag_tipo_spesa')) {
                obj['ts_flag_tipo_spesa'] = ApiClient.convertToType(data['ts_flag_tipo_spesa'], 'Number');
            }
            if (data.hasOwnProperty('ts_pagamento_tracciato')) {
                obj['ts_pagamento_tracciato'] = ApiClient.convertToType(data['ts_pagamento_tracciato'], 'Boolean');
            }
            if (data.hasOwnProperty('ts_tipo_spesa')) {
                obj['ts_tipo_spesa'] = ApiClient.convertToType(data['ts_tipo_spesa'], 'String');
            }
            if (data.hasOwnProperty('ts_opposizione')) {
                obj['ts_opposizione'] = ApiClient.convertToType(data['ts_opposizione'], 'Boolean');
            }
            if (data.hasOwnProperty('ts_status')) {
                obj['ts_status'] = ApiClient.convertToType(data['ts_status'], 'Number');
            }
            if (data.hasOwnProperty('ts_file_id')) {
                obj['ts_file_id'] = ApiClient.convertToType(data['ts_file_id'], 'String');
            }
            if (data.hasOwnProperty('ts_sent_date')) {
                obj['ts_sent_date'] = ApiClient.convertToType(data['ts_sent_date'], 'String');
            }
            if (data.hasOwnProperty('ts_full_amount')) {
                obj['ts_full_amount'] = ApiClient.convertToType(data['ts_full_amount'], 'Boolean');
            }
            if (data.hasOwnProperty('imported_by')) {
                obj['imported_by'] = ApiClient.convertToType(data['imported_by'], 'String');
            }
            if (data.hasOwnProperty('ts_single_sending')) {
                obj['ts_single_sending'] = ApiClient.convertToType(data['ts_single_sending'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} show_sofort_button
 */
IssuedDocumentExtraData.prototype['show_sofort_button'] = undefined;

/**
 * @member {Number} multifatture_sent
 */
IssuedDocumentExtraData.prototype['multifatture_sent'] = undefined;

/**
 * @member {Boolean} ts_communication
 */
IssuedDocumentExtraData.prototype['ts_communication'] = undefined;

/**
 * 1 => TK (Ticket di pronto soccorso); 2 => SR (Visita in intramoenia)
 * @member {Number} ts_flag_tipo_spesa
 */
IssuedDocumentExtraData.prototype['ts_flag_tipo_spesa'] = undefined;

/**
 * @member {Boolean} ts_pagamento_tracciato
 */
IssuedDocumentExtraData.prototype['ts_pagamento_tracciato'] = undefined;

/**
 * Can be [ 'TK', 'FC', 'FV', 'SV', 'SP', 'AD', 'AS', 'SR', 'CT', 'PI', 'IC', 'AA' ]. Refer to the technical specifications to learn more.
 * @member {String} ts_tipo_spesa
 */
IssuedDocumentExtraData.prototype['ts_tipo_spesa'] = undefined;

/**
 * @member {Boolean} ts_opposizione
 */
IssuedDocumentExtraData.prototype['ts_opposizione'] = undefined;

/**
 * @member {Number} ts_status
 */
IssuedDocumentExtraData.prototype['ts_status'] = undefined;

/**
 * @member {String} ts_file_id
 */
IssuedDocumentExtraData.prototype['ts_file_id'] = undefined;

/**
 * @member {String} ts_sent_date
 */
IssuedDocumentExtraData.prototype['ts_sent_date'] = undefined;

/**
 * @member {Boolean} ts_full_amount
 */
IssuedDocumentExtraData.prototype['ts_full_amount'] = undefined;

/**
 * @member {String} imported_by
 */
IssuedDocumentExtraData.prototype['imported_by'] = undefined;

/**
 * @member {Boolean} ts_single_sending
 */
IssuedDocumentExtraData.prototype['ts_single_sending'] = undefined;






export default IssuedDocumentExtraData;

