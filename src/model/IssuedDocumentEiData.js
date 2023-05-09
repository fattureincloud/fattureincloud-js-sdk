/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.28
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import OriginalDocumentType from './OriginalDocumentType'
import VatKind from './VatKind'

/**
 * The IssuedDocumentEiData model module.
 * @module model/IssuedDocumentEiData
 * @version 2.0.21
 */
class IssuedDocumentEiData {
  /**
     * Constructs a new <code>IssuedDocumentEiData</code>.
     * E-invoice data. [Only if e_invoice&#x3D;true]
     * @alias module:model/IssuedDocumentEiData
     */
  constructor () {
    IssuedDocumentEiData.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>IssuedDocumentEiData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuedDocumentEiData} obj Optional instance to populate.
     * @return {module:model/IssuedDocumentEiData} The populated <code>IssuedDocumentEiData</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new IssuedDocumentEiData()

      if (data.hasOwnProperty('vat_kind')) {
        obj.vat_kind = VatKind.constructFromObject(data.vat_kind)
      }
      if (data.hasOwnProperty('original_document_type')) {
        obj.original_document_type = OriginalDocumentType.constructFromObject(data.original_document_type)
      }
      if (data.hasOwnProperty('od_number')) {
        obj.od_number = ApiClient.convertToType(data.od_number, 'String')
      }
      if (data.hasOwnProperty('od_date')) {
        obj.od_date = ApiClient.convertToType(data.od_date, 'Date')
      }
      if (data.hasOwnProperty('cig')) {
        obj.cig = ApiClient.convertToType(data.cig, 'String')
      }
      if (data.hasOwnProperty('cup')) {
        obj.cup = ApiClient.convertToType(data.cup, 'String')
      }
      if (data.hasOwnProperty('payment_method')) {
        obj.payment_method = ApiClient.convertToType(data.payment_method, 'String')
      }
      if (data.hasOwnProperty('bank_name')) {
        obj.bank_name = ApiClient.convertToType(data.bank_name, 'String')
      }
      if (data.hasOwnProperty('bank_iban')) {
        obj.bank_iban = ApiClient.convertToType(data.bank_iban, 'String')
      }
      if (data.hasOwnProperty('bank_beneficiary')) {
        obj.bank_beneficiary = ApiClient.convertToType(data.bank_beneficiary, 'String')
      }
      if (data.hasOwnProperty('invoice_number')) {
        obj.invoice_number = ApiClient.convertToType(data.invoice_number, 'String')
      }
      if (data.hasOwnProperty('invoice_date')) {
        obj.invoice_date = ApiClient.convertToType(data.invoice_date, 'Date')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>IssuedDocumentEiData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IssuedDocumentEiData</code>.
     */
  static validateJSON (data) {
    // ensure the json data is a string
    if (data.od_number && !(typeof data.od_number === 'string' || data.od_number instanceof String)) {
      throw new Error('Expected the field `od_number` to be a primitive type in the JSON string but got ' + data.od_number)
    }
    // ensure the json data is a string
    if (data.cig && !(typeof data.cig === 'string' || data.cig instanceof String)) {
      throw new Error('Expected the field `cig` to be a primitive type in the JSON string but got ' + data.cig)
    }
    // ensure the json data is a string
    if (data.cup && !(typeof data.cup === 'string' || data.cup instanceof String)) {
      throw new Error('Expected the field `cup` to be a primitive type in the JSON string but got ' + data.cup)
    }
    // ensure the json data is a string
    if (data.payment_method && !(typeof data.payment_method === 'string' || data.payment_method instanceof String)) {
      throw new Error('Expected the field `payment_method` to be a primitive type in the JSON string but got ' + data.payment_method)
    }
    // ensure the json data is a string
    if (data.bank_name && !(typeof data.bank_name === 'string' || data.bank_name instanceof String)) {
      throw new Error('Expected the field `bank_name` to be a primitive type in the JSON string but got ' + data.bank_name)
    }
    // ensure the json data is a string
    if (data.bank_iban && !(typeof data.bank_iban === 'string' || data.bank_iban instanceof String)) {
      throw new Error('Expected the field `bank_iban` to be a primitive type in the JSON string but got ' + data.bank_iban)
    }
    // ensure the json data is a string
    if (data.bank_beneficiary && !(typeof data.bank_beneficiary === 'string' || data.bank_beneficiary instanceof String)) {
      throw new Error('Expected the field `bank_beneficiary` to be a primitive type in the JSON string but got ' + data.bank_beneficiary)
    }
    // ensure the json data is a string
    if (data.invoice_number && !(typeof data.invoice_number === 'string' || data.invoice_number instanceof String)) {
      throw new Error('Expected the field `invoice_number` to be a primitive type in the JSON string but got ' + data.invoice_number)
    }

    return true
  }
}

/**
 * @member {module:model/VatKind} vat_kind
 */
IssuedDocumentEiData.prototype.vat_kind = undefined

/**
 * @member {module:model/OriginalDocumentType} original_document_type
 */
IssuedDocumentEiData.prototype.original_document_type = undefined

/**
 * Original document number.
 * @member {String} od_number
 */
IssuedDocumentEiData.prototype.od_number = undefined

/**
 * Original document date.
 * @member {Date} od_date
 */
IssuedDocumentEiData.prototype.od_date = undefined

/**
 * CIG.
 * @member {String} cig
 */
IssuedDocumentEiData.prototype.cig = undefined

/**
 * CUP.
 * @member {String} cup
 */
IssuedDocumentEiData.prototype.cup = undefined

/**
 * Payment method (see https://www.fatturapa.gov.it/export/documenti/fatturapa/v1.2.1/Rappresentazione-tabellare-fattura-ordinaria.pdf for the accepted values of ModalitaPagamento).
 * @member {String} payment_method
 */
IssuedDocumentEiData.prototype.payment_method = undefined

/**
 * Bank name.
 * @member {String} bank_name
 */
IssuedDocumentEiData.prototype.bank_name = undefined

/**
 * IBAN.
 * @member {String} bank_iban
 */
IssuedDocumentEiData.prototype.bank_iban = undefined

/**
 * Bank beneficiary.
 * @member {String} bank_beneficiary
 */
IssuedDocumentEiData.prototype.bank_beneficiary = undefined

/**
 * Invoice number.
 * @member {String} invoice_number
 */
IssuedDocumentEiData.prototype.invoice_number = undefined

/**
 * Invoice date.
 * @member {Date} invoice_date
 */
IssuedDocumentEiData.prototype.invoice_date = undefined

export default IssuedDocumentEiData
