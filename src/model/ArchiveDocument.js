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
 * The ArchiveDocument model module.
 * @module model/ArchiveDocument
 * @version 2.0.1
 */
class ArchiveDocument {
    /**
     * Constructs a new <code>ArchiveDocument</code>.
     * @alias module:model/ArchiveDocument
     * @param date {Date} Archive document date.
     * @param description {String} Archive Document description.
     * @param category {String} Archive document category.
     */
    constructor(date, description, category) { 
        
        ArchiveDocument.initialize(this, date, description, category);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, date, description, category) { 
        obj['date'] = date;
        obj['description'] = description;
        obj['category'] = category;
    }

    /**
     * Constructs a <code>ArchiveDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArchiveDocument} obj Optional instance to populate.
     * @return {module:model/ArchiveDocument} The populated <code>ArchiveDocument</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArchiveDocument();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('attachment_url')) {
                obj['attachment_url'] = ApiClient.convertToType(data['attachment_url'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('attachment_token')) {
                obj['attachment_token'] = ApiClient.convertToType(data['attachment_token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Archive document unique identifier.
 * @member {Number} id
 */
ArchiveDocument.prototype['id'] = undefined;

/**
 * Archive document date.
 * @member {Date} date
 */
ArchiveDocument.prototype['date'] = undefined;

/**
 * Archive Document description.
 * @member {String} description
 */
ArchiveDocument.prototype['description'] = undefined;

/**
 * [Read Only] Absolute url of the attached file. Authomatically set if a valid attachment token is passed via POST /archive or PUT /archive/{documentId}.
 * @member {String} attachment_url
 */
ArchiveDocument.prototype['attachment_url'] = undefined;

/**
 * Archive document category.
 * @member {String} category
 */
ArchiveDocument.prototype['category'] = undefined;

/**
 * [Write Only]  [Required] Attachment token returned by POST /archive/attachment. Used to attach the file already uploaded.
 * @member {String} attachment_token
 */
ArchiveDocument.prototype['attachment_token'] = undefined;






export default ArchiveDocument;

