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
import EmailDataDefaultSenderEmail from './EmailDataDefaultSenderEmail';
import EmailDataSenderEmailsList from './EmailDataSenderEmailsList';

/**
 * The EmailData model module.
 * @module model/EmailData
 * @version 2.0.3
 */
class EmailData {
    /**
     * Constructs a new <code>EmailData</code>.
     * Email
     * @alias module:model/EmailData
     * @param recipient_email {String} Recipient's email
     * @param default_sender_email {module:model/EmailDataDefaultSenderEmail} 
     * @param sender_emails_list {Array.<module:model/EmailDataSenderEmailsList>} List of all emails from which the document can be sent
     * @param cc_email {String} By default is the logged company email. This is the email address to which a copy will be sent.
     * @param subject {String} Email subject
     * @param body {String} Email body
     * @param document_exists {Boolean} If the document is not a delivery note, this flag will be set to true
     * @param delivery_note_exists {Boolean} If the document is a delivery note, this flag will be set to true
     * @param attachment_exists {Boolean} If the document has one or more attachments, this flag will be set to true
     * @param accompanying_invoice_exists {Boolean} If an accompanying invoice exists, this flag will be set to true
     * @param default_attach_pdf {Boolean} If a pdf is attached, this flag will be set to true
     */
    constructor(recipient_email, default_sender_email, sender_emails_list, cc_email, subject, body, document_exists, delivery_note_exists, attachment_exists, accompanying_invoice_exists, default_attach_pdf) { 
        
        EmailData.initialize(this, recipient_email, default_sender_email, sender_emails_list, cc_email, subject, body, document_exists, delivery_note_exists, attachment_exists, accompanying_invoice_exists, default_attach_pdf);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, recipient_email, default_sender_email, sender_emails_list, cc_email, subject, body, document_exists, delivery_note_exists, attachment_exists, accompanying_invoice_exists, default_attach_pdf) { 
        obj['recipient_email'] = recipient_email;
        obj['default_sender_email'] = default_sender_email;
        obj['sender_emails_list'] = sender_emails_list;
        obj['cc_email'] = cc_email;
        obj['subject'] = subject;
        obj['body'] = body;
        obj['document_exists'] = document_exists;
        obj['delivery_note_exists'] = delivery_note_exists;
        obj['attachment_exists'] = attachment_exists;
        obj['accompanying_invoice_exists'] = accompanying_invoice_exists;
        obj['default_attach_pdf'] = default_attach_pdf;
    }

    /**
     * Constructs a <code>EmailData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailData} obj Optional instance to populate.
     * @return {module:model/EmailData} The populated <code>EmailData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailData();

            if (data.hasOwnProperty('recipient_email')) {
                obj['recipient_email'] = ApiClient.convertToType(data['recipient_email'], 'String');
            }
            if (data.hasOwnProperty('default_sender_email')) {
                obj['default_sender_email'] = EmailDataDefaultSenderEmail.constructFromObject(data['default_sender_email']);
            }
            if (data.hasOwnProperty('sender_emails_list')) {
                obj['sender_emails_list'] = ApiClient.convertToType(data['sender_emails_list'], [EmailDataSenderEmailsList]);
            }
            if (data.hasOwnProperty('cc_email')) {
                obj['cc_email'] = ApiClient.convertToType(data['cc_email'], 'String');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('document_exists')) {
                obj['document_exists'] = ApiClient.convertToType(data['document_exists'], 'Boolean');
            }
            if (data.hasOwnProperty('delivery_note_exists')) {
                obj['delivery_note_exists'] = ApiClient.convertToType(data['delivery_note_exists'], 'Boolean');
            }
            if (data.hasOwnProperty('attachment_exists')) {
                obj['attachment_exists'] = ApiClient.convertToType(data['attachment_exists'], 'Boolean');
            }
            if (data.hasOwnProperty('accompanying_invoice_exists')) {
                obj['accompanying_invoice_exists'] = ApiClient.convertToType(data['accompanying_invoice_exists'], 'Boolean');
            }
            if (data.hasOwnProperty('default_attach_pdf')) {
                obj['default_attach_pdf'] = ApiClient.convertToType(data['default_attach_pdf'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Recipient's email
 * @member {String} recipient_email
 */
EmailData.prototype['recipient_email'] = undefined;

/**
 * @member {module:model/EmailDataDefaultSenderEmail} default_sender_email
 */
EmailData.prototype['default_sender_email'] = undefined;

/**
 * List of all emails from which the document can be sent
 * @member {Array.<module:model/EmailDataSenderEmailsList>} sender_emails_list
 */
EmailData.prototype['sender_emails_list'] = undefined;

/**
 * By default is the logged company email. This is the email address to which a copy will be sent.
 * @member {String} cc_email
 */
EmailData.prototype['cc_email'] = undefined;

/**
 * Email subject
 * @member {String} subject
 */
EmailData.prototype['subject'] = undefined;

/**
 * Email body
 * @member {String} body
 */
EmailData.prototype['body'] = undefined;

/**
 * If the document is not a delivery note, this flag will be set to true
 * @member {Boolean} document_exists
 */
EmailData.prototype['document_exists'] = undefined;

/**
 * If the document is a delivery note, this flag will be set to true
 * @member {Boolean} delivery_note_exists
 */
EmailData.prototype['delivery_note_exists'] = undefined;

/**
 * If the document has one or more attachments, this flag will be set to true
 * @member {Boolean} attachment_exists
 */
EmailData.prototype['attachment_exists'] = undefined;

/**
 * If an accompanying invoice exists, this flag will be set to true
 * @member {Boolean} accompanying_invoice_exists
 */
EmailData.prototype['accompanying_invoice_exists'] = undefined;

/**
 * If a pdf is attached, this flag will be set to true
 * @member {Boolean} default_attach_pdf
 */
EmailData.prototype['default_attach_pdf'] = undefined;






export default EmailData;

