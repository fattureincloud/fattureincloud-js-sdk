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
import Currency from './Currency';
import DocumentTemplate from './DocumentTemplate';
import Entity from './Entity';
import IssuedDocumentEiData from './IssuedDocumentEiData';
import IssuedDocumentExtraData from './IssuedDocumentExtraData';
import IssuedDocumentItemsList from './IssuedDocumentItemsList';
import IssuedDocumentPaymentsList from './IssuedDocumentPaymentsList';
import IssuedDocumentRefersTo from './IssuedDocumentRefersTo';
import IssuedDocumentType from './IssuedDocumentType';
import Language from './Language';
import PaymentMethod from './PaymentMethod';

/**
 * The IssuedDocument model module.
 * @module FattureInCloud/model/IssuedDocument
 * @version 2.0.1
 */
class IssuedDocument {
    /**
     * Constructs a new <code>IssuedDocument</code>.
     * @alias module:FattureInCloud/model/IssuedDocument
     */
    constructor() { 
        
        IssuedDocument.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssuedDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:FattureInCloud/model/IssuedDocument} obj Optional instance to populate.
     * @return {module:FattureInCloud/model/IssuedDocument} The populated <code>IssuedDocument</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssuedDocument();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('entity')) {
                obj['entity'] = Entity.constructFromObject(data['entity']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = IssuedDocumentType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('numeration')) {
                obj['numeration'] = ApiClient.convertToType(data['numeration'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = Language.constructFromObject(data['language']);
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('visible_subject')) {
                obj['visible_subject'] = ApiClient.convertToType(data['visible_subject'], 'String');
            }
            if (data.hasOwnProperty('rc_center')) {
                obj['rc_center'] = ApiClient.convertToType(data['rc_center'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('rivalsa')) {
                obj['rivalsa'] = ApiClient.convertToType(data['rivalsa'], 'Number');
            }
            if (data.hasOwnProperty('cassa')) {
                obj['cassa'] = ApiClient.convertToType(data['cassa'], 'Number');
            }
            if (data.hasOwnProperty('withholding_tax')) {
                obj['withholding_tax'] = ApiClient.convertToType(data['withholding_tax'], 'Number');
            }
            if (data.hasOwnProperty('withholding_tax_taxable')) {
                obj['withholding_tax_taxable'] = ApiClient.convertToType(data['withholding_tax_taxable'], 'Number');
            }
            if (data.hasOwnProperty('other_withholding_tax')) {
                obj['other_withholding_tax'] = ApiClient.convertToType(data['other_withholding_tax'], 'Number');
            }
            if (data.hasOwnProperty('stamp_duty')) {
                obj['stamp_duty'] = ApiClient.convertToType(data['stamp_duty'], 'Number');
            }
            if (data.hasOwnProperty('payment_method')) {
                obj['payment_method'] = PaymentMethod.constructFromObject(data['payment_method']);
            }
            if (data.hasOwnProperty('use_split_payment')) {
                obj['use_split_payment'] = ApiClient.convertToType(data['use_split_payment'], 'Boolean');
            }
            if (data.hasOwnProperty('use_gross_prices')) {
                obj['use_gross_prices'] = ApiClient.convertToType(data['use_gross_prices'], 'Boolean');
            }
            if (data.hasOwnProperty('e_invoice')) {
                obj['e_invoice'] = ApiClient.convertToType(data['e_invoice'], 'Boolean');
            }
            if (data.hasOwnProperty('ei_data')) {
                obj['ei_data'] = IssuedDocumentEiData.constructFromObject(data['ei_data']);
            }
            if (data.hasOwnProperty('items_list')) {
                obj['items_list'] = ApiClient.convertToType(data['items_list'], [IssuedDocumentItemsList]);
            }
            if (data.hasOwnProperty('payments_list')) {
                obj['payments_list'] = ApiClient.convertToType(data['payments_list'], [IssuedDocumentPaymentsList]);
            }
            if (data.hasOwnProperty('template')) {
                obj['template'] = DocumentTemplate.constructFromObject(data['template']);
            }
            if (data.hasOwnProperty('delivery_note_template')) {
                obj['delivery_note_template'] = DocumentTemplate.constructFromObject(data['delivery_note_template']);
            }
            if (data.hasOwnProperty('acc_inv_template')) {
                obj['acc_inv_template'] = DocumentTemplate.constructFromObject(data['acc_inv_template']);
            }
            if (data.hasOwnProperty('h_margins')) {
                obj['h_margins'] = ApiClient.convertToType(data['h_margins'], 'Number');
            }
            if (data.hasOwnProperty('show_payments')) {
                obj['show_payments'] = ApiClient.convertToType(data['show_payments'], 'Boolean');
            }
            if (data.hasOwnProperty('show_payment_method')) {
                obj['show_payment_method'] = ApiClient.convertToType(data['show_payment_method'], 'Boolean');
            }
            if (data.hasOwnProperty('show_totals')) {
                obj['show_totals'] = ApiClient.convertToType(data['show_totals'], 'String');
            }
            if (data.hasOwnProperty('v_margins')) {
                obj['v_margins'] = ApiClient.convertToType(data['v_margins'], 'Number');
            }
            if (data.hasOwnProperty('show_paypal_button')) {
                obj['show_paypal_button'] = ApiClient.convertToType(data['show_paypal_button'], 'Boolean');
            }
            if (data.hasOwnProperty('show_notification_button')) {
                obj['show_notification_button'] = ApiClient.convertToType(data['show_notification_button'], 'Boolean');
            }
            if (data.hasOwnProperty('delivery_note')) {
                obj['delivery_note'] = ApiClient.convertToType(data['delivery_note'], 'Boolean');
            }
            if (data.hasOwnProperty('accompanying_invoice')) {
                obj['accompanying_invoice'] = ApiClient.convertToType(data['accompanying_invoice'], 'Boolean');
            }
            if (data.hasOwnProperty('dn_number')) {
                obj['dn_number'] = ApiClient.convertToType(data['dn_number'], 'Number');
            }
            if (data.hasOwnProperty('dn_date')) {
                obj['dn_date'] = ApiClient.convertToType(data['dn_date'], 'Date');
            }
            if (data.hasOwnProperty('dn_ai_packages_number')) {
                obj['dn_ai_packages_number'] = ApiClient.convertToType(data['dn_ai_packages_number'], 'String');
            }
            if (data.hasOwnProperty('dn_ai_weight')) {
                obj['dn_ai_weight'] = ApiClient.convertToType(data['dn_ai_weight'], 'String');
            }
            if (data.hasOwnProperty('dn_ai_causal')) {
                obj['dn_ai_causal'] = ApiClient.convertToType(data['dn_ai_causal'], 'String');
            }
            if (data.hasOwnProperty('dn_ai_destination')) {
                obj['dn_ai_destination'] = ApiClient.convertToType(data['dn_ai_destination'], 'String');
            }
            if (data.hasOwnProperty('dn_ai_transporter')) {
                obj['dn_ai_transporter'] = ApiClient.convertToType(data['dn_ai_transporter'], 'String');
            }
            if (data.hasOwnProperty('dn_ai_notes')) {
                obj['dn_ai_notes'] = ApiClient.convertToType(data['dn_ai_notes'], 'String');
            }
            if (data.hasOwnProperty('refers_to')) {
                obj['refers_to'] = IssuedDocumentRefersTo.constructFromObject(data['refers_to']);
            }
            if (data.hasOwnProperty('is_marked')) {
                obj['is_marked'] = ApiClient.convertToType(data['is_marked'], 'Boolean');
            }
            if (data.hasOwnProperty('amount_net')) {
                obj['amount_net'] = ApiClient.convertToType(data['amount_net'], 'Number');
            }
            if (data.hasOwnProperty('amount_vat')) {
                obj['amount_vat'] = ApiClient.convertToType(data['amount_vat'], 'Number');
            }
            if (data.hasOwnProperty('amount_gross')) {
                obj['amount_gross'] = ApiClient.convertToType(data['amount_gross'], 'Number');
            }
            if (data.hasOwnProperty('amount_rivalsa')) {
                obj['amount_rivalsa'] = ApiClient.convertToType(data['amount_rivalsa'], 'Number');
            }
            if (data.hasOwnProperty('amount_cassa')) {
                obj['amount_cassa'] = ApiClient.convertToType(data['amount_cassa'], 'Number');
            }
            if (data.hasOwnProperty('amount_withholding_tax')) {
                obj['amount_withholding_tax'] = ApiClient.convertToType(data['amount_withholding_tax'], 'Number');
            }
            if (data.hasOwnProperty('amount_other_withholding_tax')) {
                obj['amount_other_withholding_tax'] = ApiClient.convertToType(data['amount_other_withholding_tax'], 'Number');
            }
            if (data.hasOwnProperty('extra_data')) {
                obj['extra_data'] = IssuedDocumentExtraData.constructFromObject(data['extra_data']);
            }
            if (data.hasOwnProperty('seen_date')) {
                obj['seen_date'] = ApiClient.convertToType(data['seen_date'], 'Date');
            }
            if (data.hasOwnProperty('next_due_date')) {
                obj['next_due_date'] = ApiClient.convertToType(data['next_due_date'], 'Date');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('attachment_url')) {
                obj['attachment_url'] = ApiClient.convertToType(data['attachment_url'], 'String');
            }
            if (data.hasOwnProperty('attachment_token')) {
                obj['attachment_token'] = ApiClient.convertToType(data['attachment_token'], 'String');
            }
            if (data.hasOwnProperty('ei_raw')) {
                obj['ei_raw'] = ApiClient.convertToType(data['ei_raw'], Object);
            }
            if (data.hasOwnProperty('show_tspay_button')) {
                obj['show_tspay_button'] = ApiClient.convertToType(data['show_tspay_button'], 'Boolean');
            }
            if (data.hasOwnProperty('year')) {
                obj['year'] = ApiClient.convertToType(data['year'], 'Number');
            }
            if (data.hasOwnProperty('amount_rivalsa_taxable')) {
                obj['amount_rivalsa_taxable'] = ApiClient.convertToType(data['amount_rivalsa_taxable'], 'Number');
            }
            if (data.hasOwnProperty('amount_global_cassa_taxable')) {
                obj['amount_global_cassa_taxable'] = ApiClient.convertToType(data['amount_global_cassa_taxable'], 'Number');
            }
            if (data.hasOwnProperty('amount_cassa_taxable')) {
                obj['amount_cassa_taxable'] = ApiClient.convertToType(data['amount_cassa_taxable'], 'Number');
            }
            if (data.hasOwnProperty('amount_cassa2')) {
                obj['amount_cassa2'] = ApiClient.convertToType(data['amount_cassa2'], 'Number');
            }
            if (data.hasOwnProperty('amount_cassa2_taxable')) {
                obj['amount_cassa2_taxable'] = ApiClient.convertToType(data['amount_cassa2_taxable'], 'Number');
            }
            if (data.hasOwnProperty('amount_withholding_tax_taxable')) {
                obj['amount_withholding_tax_taxable'] = ApiClient.convertToType(data['amount_withholding_tax_taxable'], 'Number');
            }
            if (data.hasOwnProperty('amount_enasarco_taxable')) {
                obj['amount_enasarco_taxable'] = ApiClient.convertToType(data['amount_enasarco_taxable'], 'Number');
            }
            if (data.hasOwnProperty('amount_other_withholding_tax_taxable')) {
                obj['amount_other_withholding_tax_taxable'] = ApiClient.convertToType(data['amount_other_withholding_tax_taxable'], 'Number');
            }
            if (data.hasOwnProperty('ei_cassa_type')) {
                obj['ei_cassa_type'] = ApiClient.convertToType(data['ei_cassa_type'], 'String');
            }
            if (data.hasOwnProperty('ei_cassa2_type')) {
                obj['ei_cassa2_type'] = ApiClient.convertToType(data['ei_cassa2_type'], 'String');
            }
            if (data.hasOwnProperty('ei_withholding_tax_causal')) {
                obj['ei_withholding_tax_causal'] = ApiClient.convertToType(data['ei_withholding_tax_causal'], 'String');
            }
            if (data.hasOwnProperty('ei_other_withholding_tax_type')) {
                obj['ei_other_withholding_tax_type'] = ApiClient.convertToType(data['ei_other_withholding_tax_type'], 'String');
            }
            if (data.hasOwnProperty('ei_other_withholding_tax_causal')) {
                obj['ei_other_withholding_tax_causal'] = ApiClient.convertToType(data['ei_other_withholding_tax_causal'], 'String');
            }
            if (data.hasOwnProperty('amount_due_discount')) {
                obj['amount_due_discount'] = ApiClient.convertToType(data['amount_due_discount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Unique identifier of the document.
 * @member {Number} id
 */
IssuedDocument.prototype['id'] = undefined;

/**
 * @member {module:FattureInCloud/model/Entity} entity
 */
IssuedDocument.prototype['entity'] = undefined;

/**
 * @member {module:FattureInCloud/model/IssuedDocumentType} type
 */
IssuedDocument.prototype['type'] = undefined;

/**
 * Number of the document [If not specified, next number is used]
 * @member {Number} number
 */
IssuedDocument.prototype['number'] = undefined;

/**
 * Numeration of the document [Not available if type=delivery_note]
 * @member {String} numeration
 */
IssuedDocument.prototype['numeration'] = undefined;

/**
 * Date of the document [If not specified, today date is used]
 * @member {Date} date
 */
IssuedDocument.prototype['date'] = undefined;

/**
 * @member {module:FattureInCloud/model/Currency} currency
 */
IssuedDocument.prototype['currency'] = undefined;

/**
 * @member {module:FattureInCloud/model/Language} language
 */
IssuedDocument.prototype['language'] = undefined;

/**
 * Issued document subject.
 * @member {String} subject
 */
IssuedDocument.prototype['subject'] = undefined;

/**
 * Issued document visible subject.
 * @member {String} visible_subject
 */
IssuedDocument.prototype['visible_subject'] = undefined;

/**
 * Revenue center [or cost center if type=supplier_order].
 * @member {String} rc_center
 */
IssuedDocument.prototype['rc_center'] = undefined;

/**
 * Issued document extra notes.
 * @member {String} notes
 */
IssuedDocument.prototype['notes'] = undefined;

/**
 * \"Rivalsa INPS\" percentual value
 * @member {Number} rivalsa
 */
IssuedDocument.prototype['rivalsa'] = undefined;

/**
 * \"Cassa previdenziale\" percentual value
 * @member {Number} cassa
 */
IssuedDocument.prototype['cassa'] = undefined;

/**
 * Withholding tax (ritenuta d'acconto) percentual value
 * @member {Number} withholding_tax
 */
IssuedDocument.prototype['withholding_tax'] = undefined;

/**
 * Withholding tax taxable (imponibile) percentual value
 * @member {Number} withholding_tax_taxable
 */
IssuedDocument.prototype['withholding_tax_taxable'] = undefined;

/**
 * Other withholding tax (altra ritenuta) percentual value
 * @member {Number} other_withholding_tax
 */
IssuedDocument.prototype['other_withholding_tax'] = undefined;

/**
 * Stamp duty value [0 if not present]
 * @member {Number} stamp_duty
 */
IssuedDocument.prototype['stamp_duty'] = undefined;

/**
 * @member {module:FattureInCloud/model/PaymentMethod} payment_method
 */
IssuedDocument.prototype['payment_method'] = undefined;

/**
 * @member {Boolean} use_split_payment
 * @default false
 */
IssuedDocument.prototype['use_split_payment'] = false;

/**
 * @member {Boolean} use_gross_prices
 * @default false
 */
IssuedDocument.prototype['use_gross_prices'] = false;

/**
 * Indicates if this is an e-invoice.
 * @member {Boolean} e_invoice
 * @default false
 */
IssuedDocument.prototype['e_invoice'] = false;

/**
 * @member {module:FattureInCloud/model/IssuedDocumentEiData} ei_data
 */
IssuedDocument.prototype['ei_data'] = undefined;

/**
 * @member {Array.<module:FattureInCloud/model/IssuedDocumentItemsList>} items_list
 */
IssuedDocument.prototype['items_list'] = undefined;

/**
 * @member {Array.<module:FattureInCloud/model/IssuedDocumentPaymentsList>} payments_list
 */
IssuedDocument.prototype['payments_list'] = undefined;

/**
 * @member {module:FattureInCloud/model/DocumentTemplate} template
 */
IssuedDocument.prototype['template'] = undefined;

/**
 * @member {module:FattureInCloud/model/DocumentTemplate} delivery_note_template
 */
IssuedDocument.prototype['delivery_note_template'] = undefined;

/**
 * @member {module:FattureInCloud/model/DocumentTemplate} acc_inv_template
 */
IssuedDocument.prototype['acc_inv_template'] = undefined;

/**
 * Horizontal margins.
 * @member {Number} h_margins
 */
IssuedDocument.prototype['h_margins'] = undefined;

/**
 * Shows the expiration dates of the payments on the document.
 * @member {Boolean} show_payments
 */
IssuedDocument.prototype['show_payments'] = undefined;

/**
 * Show the payment method details on the document.
 * @member {Boolean} show_payment_method
 */
IssuedDocument.prototype['show_payment_method'] = undefined;

/**
 * Totals mode.
 * @member {module:FattureInCloud/model/IssuedDocument.ShowTotalsEnum} show_totals
 * @default 'all'
 */
IssuedDocument.prototype['show_totals'] = 'all';

/**
 * Vertical margins.
 * @member {Number} v_margins
 */
IssuedDocument.prototype['v_margins'] = undefined;

/**
 * @member {Boolean} show_paypal_button
 * @default false
 */
IssuedDocument.prototype['show_paypal_button'] = false;

/**
 * @member {Boolean} show_notification_button
 * @default false
 */
IssuedDocument.prototype['show_notification_button'] = false;

/**
 * @member {Boolean} delivery_note
 */
IssuedDocument.prototype['delivery_note'] = undefined;

/**
 * Attach an accompanying invoice.
 * @member {Boolean} accompanying_invoice
 * @default false
 */
IssuedDocument.prototype['accompanying_invoice'] = false;

/**
 * Number (for the attached delivery note).
 * @member {Number} dn_number
 */
IssuedDocument.prototype['dn_number'] = undefined;

/**
 * Date (for the attached delivery note).
 * @member {Date} dn_date
 */
IssuedDocument.prototype['dn_date'] = undefined;

/**
 * Number of packages (for the attached delivery note).
 * @member {String} dn_ai_packages_number
 */
IssuedDocument.prototype['dn_ai_packages_number'] = undefined;

/**
 * Weight (for the attached delivery note).
 * @member {String} dn_ai_weight
 */
IssuedDocument.prototype['dn_ai_weight'] = undefined;

/**
 * Causal (for the attached delivery note).
 * @member {String} dn_ai_causal
 */
IssuedDocument.prototype['dn_ai_causal'] = undefined;

/**
 * Destination (for the attached delivery note).
 * @member {String} dn_ai_destination
 */
IssuedDocument.prototype['dn_ai_destination'] = undefined;

/**
 * Transporter (for the attached delivery note).
 * @member {String} dn_ai_transporter
 */
IssuedDocument.prototype['dn_ai_transporter'] = undefined;

/**
 * Notes (for the attached delivery note).
 * @member {String} dn_ai_notes
 */
IssuedDocument.prototype['dn_ai_notes'] = undefined;

/**
 * @member {module:FattureInCloud/model/IssuedDocumentRefersTo} refers_to
 */
IssuedDocument.prototype['refers_to'] = undefined;

/**
 * This is true if the document is marked.
 * @member {Boolean} is_marked
 */
IssuedDocument.prototype['is_marked'] = undefined;

/**
 * [Read Only] Total net amount (competenze).
 * @member {Number} amount_net
 */
IssuedDocument.prototype['amount_net'] = undefined;

/**
 * [Read Only] Total vat amount (IVA).
 * @member {Number} amount_vat
 */
IssuedDocument.prototype['amount_vat'] = undefined;

/**
 * [Read Only] Total gross amount (totale documento).
 * @member {Number} amount_gross
 */
IssuedDocument.prototype['amount_gross'] = undefined;

/**
 * [Read Only] Rivalsa amount.
 * @member {Number} amount_rivalsa
 */
IssuedDocument.prototype['amount_rivalsa'] = undefined;

/**
 * [Read Only] Cassa amount.
 * @member {Number} amount_cassa
 */
IssuedDocument.prototype['amount_cassa'] = undefined;

/**
 * [Read Only] Withholding tax amount (ritenuta d'acconto).
 * @member {Number} amount_withholding_tax
 */
IssuedDocument.prototype['amount_withholding_tax'] = undefined;

/**
 * [Read Only] Other withholding tax amount (altra ritenuta).
 * @member {Number} amount_other_withholding_tax
 */
IssuedDocument.prototype['amount_other_withholding_tax'] = undefined;

/**
 * @member {module:FattureInCloud/model/IssuedDocumentExtraData} extra_data
 */
IssuedDocument.prototype['extra_data'] = undefined;

/**
 * Date when the client/supplier has seen the document.
 * @member {Date} seen_date
 */
IssuedDocument.prototype['seen_date'] = undefined;

/**
 * Date of the next not paid payment.
 * @member {Date} next_due_date
 */
IssuedDocument.prototype['next_due_date'] = undefined;

/**
 * Public url of the document PDF file.
 * @member {String} url
 */
IssuedDocument.prototype['url'] = undefined;

/**
 * [Read Only] Public url of the attached file. Authomatically set if a valid attachment token is passed via POST /issued_documents or PUT /issued_documents/{documentId}.
 * @member {String} attachment_url
 */
IssuedDocument.prototype['attachment_url'] = undefined;

/**
 * [Write Only] Attachment token returned by POST /issued_documents/attachment. Used to attach the file already uploaded.
 * @member {String} attachment_token
 */
IssuedDocument.prototype['attachment_token'] = undefined;

/**
 * Advanced raw attributes for e-invoices.
 * @member {Object} ei_raw
 */
IssuedDocument.prototype['ei_raw'] = undefined;

/**
 * Show ts pay button.
 * @member {Boolean} show_tspay_button
 */
IssuedDocument.prototype['show_tspay_button'] = undefined;

/**
 * Invoice year.
 * @member {Number} year
 */
IssuedDocument.prototype['year'] = undefined;

/**
 * @member {Number} amount_rivalsa_taxable
 */
IssuedDocument.prototype['amount_rivalsa_taxable'] = undefined;

/**
 * @member {Number} amount_global_cassa_taxable
 */
IssuedDocument.prototype['amount_global_cassa_taxable'] = undefined;

/**
 * @member {Number} amount_cassa_taxable
 */
IssuedDocument.prototype['amount_cassa_taxable'] = undefined;

/**
 * @member {Number} amount_cassa2
 */
IssuedDocument.prototype['amount_cassa2'] = undefined;

/**
 * @member {Number} amount_cassa2_taxable
 */
IssuedDocument.prototype['amount_cassa2_taxable'] = undefined;

/**
 * @member {Number} amount_withholding_tax_taxable
 */
IssuedDocument.prototype['amount_withholding_tax_taxable'] = undefined;

/**
 * @member {Number} amount_enasarco_taxable
 */
IssuedDocument.prototype['amount_enasarco_taxable'] = undefined;

/**
 * @member {Number} amount_other_withholding_tax_taxable
 */
IssuedDocument.prototype['amount_other_withholding_tax_taxable'] = undefined;

/**
 * @member {String} ei_cassa_type
 */
IssuedDocument.prototype['ei_cassa_type'] = undefined;

/**
 * @member {String} ei_cassa2_type
 */
IssuedDocument.prototype['ei_cassa2_type'] = undefined;

/**
 * @member {String} ei_withholding_tax_causal
 */
IssuedDocument.prototype['ei_withholding_tax_causal'] = undefined;

/**
 * @member {String} ei_other_withholding_tax_type
 */
IssuedDocument.prototype['ei_other_withholding_tax_type'] = undefined;

/**
 * @member {String} ei_other_withholding_tax_causal
 */
IssuedDocument.prototype['ei_other_withholding_tax_causal'] = undefined;

/**
 * @member {Number} amount_due_discount
 */
IssuedDocument.prototype['amount_due_discount'] = undefined;





/**
 * Allowed values for the <code>show_totals</code> property.
 * @enum {String}
 * @readonly
 */
IssuedDocument['ShowTotalsEnum'] = {

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "nets"
     * @const
     */
    "nets": "nets",

    /**
     * value: "all"
     * @const
     */
    "all": "all"
};



export default IssuedDocument;

