/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.14
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import PermissionLevel from './PermissionLevel';
import PermissionsFicIssuedDocumentsDetailed from './PermissionsFicIssuedDocumentsDetailed';

/**
 * The Permissions model module.
 * @module model/Permissions
 * @version 2.0.11
 */
class Permissions {
    /**
     * Constructs a new <code>Permissions</code>.
     * 
     * @alias module:model/Permissions
     */
    constructor() { 
        
        Permissions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Permissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Permissions} obj Optional instance to populate.
     * @return {module:model/Permissions} The populated <code>Permissions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Permissions();

            if (data.hasOwnProperty('fic_situation')) {
                obj['fic_situation'] = PermissionLevel.constructFromObject(data['fic_situation']);
            }
            if (data.hasOwnProperty('fic_clients')) {
                obj['fic_clients'] = PermissionLevel.constructFromObject(data['fic_clients']);
            }
            if (data.hasOwnProperty('fic_suppliers')) {
                obj['fic_suppliers'] = PermissionLevel.constructFromObject(data['fic_suppliers']);
            }
            if (data.hasOwnProperty('fic_products')) {
                obj['fic_products'] = PermissionLevel.constructFromObject(data['fic_products']);
            }
            if (data.hasOwnProperty('fic_issued_documents')) {
                obj['fic_issued_documents'] = PermissionLevel.constructFromObject(data['fic_issued_documents']);
            }
            if (data.hasOwnProperty('fic_received_documents')) {
                obj['fic_received_documents'] = PermissionLevel.constructFromObject(data['fic_received_documents']);
            }
            if (data.hasOwnProperty('fic_receipts')) {
                obj['fic_receipts'] = PermissionLevel.constructFromObject(data['fic_receipts']);
            }
            if (data.hasOwnProperty('fic_calendar')) {
                obj['fic_calendar'] = PermissionLevel.constructFromObject(data['fic_calendar']);
            }
            if (data.hasOwnProperty('fic_archive')) {
                obj['fic_archive'] = PermissionLevel.constructFromObject(data['fic_archive']);
            }
            if (data.hasOwnProperty('fic_taxes')) {
                obj['fic_taxes'] = PermissionLevel.constructFromObject(data['fic_taxes']);
            }
            if (data.hasOwnProperty('fic_stock')) {
                obj['fic_stock'] = PermissionLevel.constructFromObject(data['fic_stock']);
            }
            if (data.hasOwnProperty('fic_cashbook')) {
                obj['fic_cashbook'] = PermissionLevel.constructFromObject(data['fic_cashbook']);
            }
            if (data.hasOwnProperty('fic_settings')) {
                obj['fic_settings'] = PermissionLevel.constructFromObject(data['fic_settings']);
            }
            if (data.hasOwnProperty('fic_emails')) {
                obj['fic_emails'] = PermissionLevel.constructFromObject(data['fic_emails']);
            }
            if (data.hasOwnProperty('fic_export')) {
                obj['fic_export'] = PermissionLevel.constructFromObject(data['fic_export']);
            }
            if (data.hasOwnProperty('fic_import_bankstatements')) {
                obj['fic_import_bankstatements'] = PermissionLevel.constructFromObject(data['fic_import_bankstatements']);
            }
            if (data.hasOwnProperty('fic_import_clients_suppliers')) {
                obj['fic_import_clients_suppliers'] = PermissionLevel.constructFromObject(data['fic_import_clients_suppliers']);
            }
            if (data.hasOwnProperty('fic_import_issued_documents')) {
                obj['fic_import_issued_documents'] = PermissionLevel.constructFromObject(data['fic_import_issued_documents']);
            }
            if (data.hasOwnProperty('fic_import_products')) {
                obj['fic_import_products'] = PermissionLevel.constructFromObject(data['fic_import_products']);
            }
            if (data.hasOwnProperty('fic_recurring')) {
                obj['fic_recurring'] = PermissionLevel.constructFromObject(data['fic_recurring']);
            }
            if (data.hasOwnProperty('fic_riba')) {
                obj['fic_riba'] = PermissionLevel.constructFromObject(data['fic_riba']);
            }
            if (data.hasOwnProperty('dic_employees')) {
                obj['dic_employees'] = PermissionLevel.constructFromObject(data['dic_employees']);
            }
            if (data.hasOwnProperty('dic_settings')) {
                obj['dic_settings'] = PermissionLevel.constructFromObject(data['dic_settings']);
            }
            if (data.hasOwnProperty('dic_timesheet')) {
                obj['dic_timesheet'] = PermissionLevel.constructFromObject(data['dic_timesheet']);
            }
            if (data.hasOwnProperty('fic_issued_documents_detailed')) {
                obj['fic_issued_documents_detailed'] = PermissionsFicIssuedDocumentsDetailed.constructFromObject(data['fic_issued_documents_detailed']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PermissionLevel} fic_situation
 */
Permissions.prototype['fic_situation'] = undefined;

/**
 * @member {module:model/PermissionLevel} fic_clients
 */
Permissions.prototype['fic_clients'] = undefined;

/**
 * @member {module:model/PermissionLevel} fic_suppliers
 */
Permissions.prototype['fic_suppliers'] = undefined;

/**
 * @member {module:model/PermissionLevel} fic_products
 */
Permissions.prototype['fic_products'] = undefined;

/**
 * @member {module:model/PermissionLevel} fic_issued_documents
 */
Permissions.prototype['fic_issued_documents'] = undefined;

/**
 * @member {module:model/PermissionLevel} fic_received_documents
 */
Permissions.prototype['fic_received_documents'] = undefined;

/**
 * @member {module:model/PermissionLevel} fic_receipts
 */
Permissions.prototype['fic_receipts'] = undefined;

/**
 * @member {module:model/PermissionLevel} fic_calendar
 */
Permissions.prototype['fic_calendar'] = undefined;

/**
 * @member {module:model/PermissionLevel} fic_archive
 */
Permissions.prototype['fic_archive'] = undefined;

/**
 * @member {module:model/PermissionLevel} fic_taxes
 */
Permissions.prototype['fic_taxes'] = undefined;

/**
 * @member {module:model/PermissionLevel} fic_stock
 */
Permissions.prototype['fic_stock'] = undefined;

/**
 * @member {module:model/PermissionLevel} fic_cashbook
 */
Permissions.prototype['fic_cashbook'] = undefined;

/**
 * @member {module:model/PermissionLevel} fic_settings
 */
Permissions.prototype['fic_settings'] = undefined;

/**
 * @member {module:model/PermissionLevel} fic_emails
 */
Permissions.prototype['fic_emails'] = undefined;

/**
 * @member {module:model/PermissionLevel} fic_export
 */
Permissions.prototype['fic_export'] = undefined;

/**
 * @member {module:model/PermissionLevel} fic_import_bankstatements
 */
Permissions.prototype['fic_import_bankstatements'] = undefined;

/**
 * @member {module:model/PermissionLevel} fic_import_clients_suppliers
 */
Permissions.prototype['fic_import_clients_suppliers'] = undefined;

/**
 * @member {module:model/PermissionLevel} fic_import_issued_documents
 */
Permissions.prototype['fic_import_issued_documents'] = undefined;

/**
 * @member {module:model/PermissionLevel} fic_import_products
 */
Permissions.prototype['fic_import_products'] = undefined;

/**
 * @member {module:model/PermissionLevel} fic_recurring
 */
Permissions.prototype['fic_recurring'] = undefined;

/**
 * @member {module:model/PermissionLevel} fic_riba
 */
Permissions.prototype['fic_riba'] = undefined;

/**
 * @member {module:model/PermissionLevel} dic_employees
 */
Permissions.prototype['dic_employees'] = undefined;

/**
 * @member {module:model/PermissionLevel} dic_settings
 */
Permissions.prototype['dic_settings'] = undefined;

/**
 * @member {module:model/PermissionLevel} dic_timesheet
 */
Permissions.prototype['dic_timesheet'] = undefined;

/**
 * @member {module:model/PermissionsFicIssuedDocumentsDetailed} fic_issued_documents_detailed
 */
Permissions.prototype['fic_issued_documents_detailed'] = undefined;






export default Permissions;

