/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.32
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import ClientType from './ClientType'
import PaymentMethod from './PaymentMethod'
import PaymentTermsType from './PaymentTermsType'
import VatType from './VatType'

/**
 * The Client model module.
 * @module model/Client
 * @version 2.0.25
 */
class Client {
  /**
     * Constructs a new <code>Client</code>.
     * @alias module:model/Client
     */
  constructor () {
    Client.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>Client</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Client} obj Optional instance to populate.
     * @return {module:model/Client} The populated <code>Client</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new Client()

      if (data.hasOwnProperty('id')) {
        obj.id = ApiClient.convertToType(data.id, 'Number')
      }
      if (data.hasOwnProperty('code')) {
        obj.code = ApiClient.convertToType(data.code, 'String')
      }
      if (data.hasOwnProperty('name')) {
        obj.name = ApiClient.convertToType(data.name, 'String')
      }
      if (data.hasOwnProperty('type')) {
        obj.type = ClientType.constructFromObject(data.type)
      }
      if (data.hasOwnProperty('first_name')) {
        obj.first_name = ApiClient.convertToType(data.first_name, 'String')
      }
      if (data.hasOwnProperty('last_name')) {
        obj.last_name = ApiClient.convertToType(data.last_name, 'String')
      }
      if (data.hasOwnProperty('contact_person')) {
        obj.contact_person = ApiClient.convertToType(data.contact_person, 'String')
      }
      if (data.hasOwnProperty('vat_number')) {
        obj.vat_number = ApiClient.convertToType(data.vat_number, 'String')
      }
      if (data.hasOwnProperty('tax_code')) {
        obj.tax_code = ApiClient.convertToType(data.tax_code, 'String')
      }
      if (data.hasOwnProperty('address_street')) {
        obj.address_street = ApiClient.convertToType(data.address_street, 'String')
      }
      if (data.hasOwnProperty('address_postal_code')) {
        obj.address_postal_code = ApiClient.convertToType(data.address_postal_code, 'String')
      }
      if (data.hasOwnProperty('address_city')) {
        obj.address_city = ApiClient.convertToType(data.address_city, 'String')
      }
      if (data.hasOwnProperty('address_province')) {
        obj.address_province = ApiClient.convertToType(data.address_province, 'String')
      }
      if (data.hasOwnProperty('address_extra')) {
        obj.address_extra = ApiClient.convertToType(data.address_extra, 'String')
      }
      if (data.hasOwnProperty('country')) {
        obj.country = ApiClient.convertToType(data.country, 'String')
      }
      if (data.hasOwnProperty('country_iso')) {
        obj.country_iso = ApiClient.convertToType(data.country_iso, 'String')
      }
      if (data.hasOwnProperty('email')) {
        obj.email = ApiClient.convertToType(data.email, 'String')
      }
      if (data.hasOwnProperty('certified_email')) {
        obj.certified_email = ApiClient.convertToType(data.certified_email, 'String')
      }
      if (data.hasOwnProperty('phone')) {
        obj.phone = ApiClient.convertToType(data.phone, 'String')
      }
      if (data.hasOwnProperty('fax')) {
        obj.fax = ApiClient.convertToType(data.fax, 'String')
      }
      if (data.hasOwnProperty('notes')) {
        obj.notes = ApiClient.convertToType(data.notes, 'String')
      }
      if (data.hasOwnProperty('default_vat')) {
        obj.default_vat = VatType.constructFromObject(data.default_vat)
      }
      if (data.hasOwnProperty('default_payment_terms')) {
        obj.default_payment_terms = ApiClient.convertToType(data.default_payment_terms, 'Number')
      }
      if (data.hasOwnProperty('default_payment_terms_type')) {
        obj.default_payment_terms_type = PaymentTermsType.constructFromObject(data.default_payment_terms_type)
      }
      if (data.hasOwnProperty('default_payment_method')) {
        obj.default_payment_method = PaymentMethod.constructFromObject(data.default_payment_method)
      }
      if (data.hasOwnProperty('bank_name')) {
        obj.bank_name = ApiClient.convertToType(data.bank_name, 'String')
      }
      if (data.hasOwnProperty('bank_iban')) {
        obj.bank_iban = ApiClient.convertToType(data.bank_iban, 'String')
      }
      if (data.hasOwnProperty('bank_swift_code')) {
        obj.bank_swift_code = ApiClient.convertToType(data.bank_swift_code, 'String')
      }
      if (data.hasOwnProperty('shipping_address')) {
        obj.shipping_address = ApiClient.convertToType(data.shipping_address, 'String')
      }
      if (data.hasOwnProperty('e_invoice')) {
        obj.e_invoice = ApiClient.convertToType(data.e_invoice, 'Boolean')
      }
      if (data.hasOwnProperty('ei_code')) {
        obj.ei_code = ApiClient.convertToType(data.ei_code, 'String')
      }
      if (data.hasOwnProperty('discount_highlight')) {
        obj.discount_highlight = ApiClient.convertToType(data.discount_highlight, 'Boolean')
      }
      if (data.hasOwnProperty('default_discount')) {
        obj.default_discount = ApiClient.convertToType(data.default_discount, 'Number')
      }
      if (data.hasOwnProperty('has_intent_declaration')) {
        obj.has_intent_declaration = ApiClient.convertToType(data.has_intent_declaration, 'Boolean')
      }
      if (data.hasOwnProperty('intent_declaration_protocol_number')) {
        obj.intent_declaration_protocol_number = ApiClient.convertToType(data.intent_declaration_protocol_number, 'String')
      }
      if (data.hasOwnProperty('intent_declaration_protocol_date')) {
        obj.intent_declaration_protocol_date = ApiClient.convertToType(data.intent_declaration_protocol_date, 'Date')
      }
      if (data.hasOwnProperty('created_at')) {
        obj.created_at = ApiClient.convertToType(data.created_at, 'String')
      }
      if (data.hasOwnProperty('updated_at')) {
        obj.updated_at = ApiClient.convertToType(data.updated_at, 'String')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>Client</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Client</code>.
     */
  static validateJSON (data) {
    // ensure the json data is a string
    if (data.code && !(typeof data.code === 'string' || data.code instanceof String)) {
      throw new Error('Expected the field `code` to be a primitive type in the JSON string but got ' + data.code)
    }
    // ensure the json data is a string
    if (data.name && !(typeof data.name === 'string' || data.name instanceof String)) {
      throw new Error('Expected the field `name` to be a primitive type in the JSON string but got ' + data.name)
    }
    // ensure the json data is a string
    if (data.first_name && !(typeof data.first_name === 'string' || data.first_name instanceof String)) {
      throw new Error('Expected the field `first_name` to be a primitive type in the JSON string but got ' + data.first_name)
    }
    // ensure the json data is a string
    if (data.last_name && !(typeof data.last_name === 'string' || data.last_name instanceof String)) {
      throw new Error('Expected the field `last_name` to be a primitive type in the JSON string but got ' + data.last_name)
    }
    // ensure the json data is a string
    if (data.contact_person && !(typeof data.contact_person === 'string' || data.contact_person instanceof String)) {
      throw new Error('Expected the field `contact_person` to be a primitive type in the JSON string but got ' + data.contact_person)
    }
    // ensure the json data is a string
    if (data.vat_number && !(typeof data.vat_number === 'string' || data.vat_number instanceof String)) {
      throw new Error('Expected the field `vat_number` to be a primitive type in the JSON string but got ' + data.vat_number)
    }
    // ensure the json data is a string
    if (data.tax_code && !(typeof data.tax_code === 'string' || data.tax_code instanceof String)) {
      throw new Error('Expected the field `tax_code` to be a primitive type in the JSON string but got ' + data.tax_code)
    }
    // ensure the json data is a string
    if (data.address_street && !(typeof data.address_street === 'string' || data.address_street instanceof String)) {
      throw new Error('Expected the field `address_street` to be a primitive type in the JSON string but got ' + data.address_street)
    }
    // ensure the json data is a string
    if (data.address_postal_code && !(typeof data.address_postal_code === 'string' || data.address_postal_code instanceof String)) {
      throw new Error('Expected the field `address_postal_code` to be a primitive type in the JSON string but got ' + data.address_postal_code)
    }
    // ensure the json data is a string
    if (data.address_city && !(typeof data.address_city === 'string' || data.address_city instanceof String)) {
      throw new Error('Expected the field `address_city` to be a primitive type in the JSON string but got ' + data.address_city)
    }
    // ensure the json data is a string
    if (data.address_province && !(typeof data.address_province === 'string' || data.address_province instanceof String)) {
      throw new Error('Expected the field `address_province` to be a primitive type in the JSON string but got ' + data.address_province)
    }
    // ensure the json data is a string
    if (data.address_extra && !(typeof data.address_extra === 'string' || data.address_extra instanceof String)) {
      throw new Error('Expected the field `address_extra` to be a primitive type in the JSON string but got ' + data.address_extra)
    }
    // ensure the json data is a string
    if (data.country && !(typeof data.country === 'string' || data.country instanceof String)) {
      throw new Error('Expected the field `country` to be a primitive type in the JSON string but got ' + data.country)
    }
    // ensure the json data is a string
    if (data.country_iso && !(typeof data.country_iso === 'string' || data.country_iso instanceof String)) {
      throw new Error('Expected the field `country_iso` to be a primitive type in the JSON string but got ' + data.country_iso)
    }
    // ensure the json data is a string
    if (data.email && !(typeof data.email === 'string' || data.email instanceof String)) {
      throw new Error('Expected the field `email` to be a primitive type in the JSON string but got ' + data.email)
    }
    // ensure the json data is a string
    if (data.certified_email && !(typeof data.certified_email === 'string' || data.certified_email instanceof String)) {
      throw new Error('Expected the field `certified_email` to be a primitive type in the JSON string but got ' + data.certified_email)
    }
    // ensure the json data is a string
    if (data.phone && !(typeof data.phone === 'string' || data.phone instanceof String)) {
      throw new Error('Expected the field `phone` to be a primitive type in the JSON string but got ' + data.phone)
    }
    // ensure the json data is a string
    if (data.fax && !(typeof data.fax === 'string' || data.fax instanceof String)) {
      throw new Error('Expected the field `fax` to be a primitive type in the JSON string but got ' + data.fax)
    }
    // ensure the json data is a string
    if (data.notes && !(typeof data.notes === 'string' || data.notes instanceof String)) {
      throw new Error('Expected the field `notes` to be a primitive type in the JSON string but got ' + data.notes)
    }
    // validate the optional field `default_vat`
    if (data.default_vat) { // data not null
      VatType.validateJSON(data.default_vat)
    }
    // validate the optional field `default_payment_method`
    if (data.default_payment_method) { // data not null
      PaymentMethod.validateJSON(data.default_payment_method)
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
    if (data.bank_swift_code && !(typeof data.bank_swift_code === 'string' || data.bank_swift_code instanceof String)) {
      throw new Error('Expected the field `bank_swift_code` to be a primitive type in the JSON string but got ' + data.bank_swift_code)
    }
    // ensure the json data is a string
    if (data.shipping_address && !(typeof data.shipping_address === 'string' || data.shipping_address instanceof String)) {
      throw new Error('Expected the field `shipping_address` to be a primitive type in the JSON string but got ' + data.shipping_address)
    }
    // ensure the json data is a string
    if (data.ei_code && !(typeof data.ei_code === 'string' || data.ei_code instanceof String)) {
      throw new Error('Expected the field `ei_code` to be a primitive type in the JSON string but got ' + data.ei_code)
    }
    // ensure the json data is a string
    if (data.intent_declaration_protocol_number && !(typeof data.intent_declaration_protocol_number === 'string' || data.intent_declaration_protocol_number instanceof String)) {
      throw new Error('Expected the field `intent_declaration_protocol_number` to be a primitive type in the JSON string but got ' + data.intent_declaration_protocol_number)
    }
    // ensure the json data is a string
    if (data.created_at && !(typeof data.created_at === 'string' || data.created_at instanceof String)) {
      throw new Error('Expected the field `created_at` to be a primitive type in the JSON string but got ' + data.created_at)
    }
    // ensure the json data is a string
    if (data.updated_at && !(typeof data.updated_at === 'string' || data.updated_at instanceof String)) {
      throw new Error('Expected the field `updated_at` to be a primitive type in the JSON string but got ' + data.updated_at)
    }

    return true
  }
}

/**
 * Client id
 * @member {Number} id
 */
Client.prototype.id = undefined

/**
 * Client code
 * @member {String} code
 */
Client.prototype.code = undefined

/**
 * Client name
 * @member {String} name
 */
Client.prototype.name = undefined

/**
 * @member {module:model/ClientType} type
 */
Client.prototype.type = undefined

/**
 * Client first name
 * @member {String} first_name
 */
Client.prototype.first_name = undefined

/**
 * Client last name
 * @member {String} last_name
 */
Client.prototype.last_name = undefined

/**
 * Client contact person
 * @member {String} contact_person
 */
Client.prototype.contact_person = undefined

/**
 * Client vat number
 * @member {String} vat_number
 */
Client.prototype.vat_number = undefined

/**
 * Client tax code
 * @member {String} tax_code
 */
Client.prototype.tax_code = undefined

/**
 * Client address street
 * @member {String} address_street
 */
Client.prototype.address_street = undefined

/**
 * Client address postal code
 * @member {String} address_postal_code
 */
Client.prototype.address_postal_code = undefined

/**
 * Client address city
 * @member {String} address_city
 */
Client.prototype.address_city = undefined

/**
 * Client address province
 * @member {String} address_province
 */
Client.prototype.address_province = undefined

/**
 * Client address extra info
 * @member {String} address_extra
 */
Client.prototype.address_extra = undefined

/**
 * Client country
 * @member {String} country
 */
Client.prototype.country = undefined

/**
 * Client country iso code
 * @member {String} country_iso
 */
Client.prototype.country_iso = undefined

/**
 * Client email
 * @member {String} email
 */
Client.prototype.email = undefined

/**
 * Client certified email
 * @member {String} certified_email
 */
Client.prototype.certified_email = undefined

/**
 * Client phone
 * @member {String} phone
 */
Client.prototype.phone = undefined

/**
 * Client fax
 * @member {String} fax
 */
Client.prototype.fax = undefined

/**
 * Client extra
 * @member {String} notes
 */
Client.prototype.notes = undefined

/**
 * @member {module:model/VatType} default_vat
 */
Client.prototype.default_vat = undefined

/**
 * Client default payment terms
 * @member {Number} default_payment_terms
 */
Client.prototype.default_payment_terms = undefined

/**
 * @member {module:model/PaymentTermsType} default_payment_terms_type
 */
Client.prototype.default_payment_terms_type = undefined

/**
 * @member {module:model/PaymentMethod} default_payment_method
 */
Client.prototype.default_payment_method = undefined

/**
 * Client bank name
 * @member {String} bank_name
 */
Client.prototype.bank_name = undefined

/**
 * Client bank iban
 * @member {String} bank_iban
 */
Client.prototype.bank_iban = undefined

/**
 * Client bank swift code
 * @member {String} bank_swift_code
 */
Client.prototype.bank_swift_code = undefined

/**
 * Client shipping address
 * @member {String} shipping_address
 */
Client.prototype.shipping_address = undefined

/**
 * Use e-invoices for this entity
 * @member {Boolean} e_invoice
 */
Client.prototype.e_invoice = undefined

/**
 * Client e-invoice code
 * @member {String} ei_code
 */
Client.prototype.ei_code = undefined

/**
 * Highlight Discount
 * @member {Boolean} discount_highlight
 */
Client.prototype.discount_highlight = undefined

/**
 * Client default discount
 * @member {Number} default_discount
 */
Client.prototype.default_discount = undefined

/**
 * Client has intent declaration
 * @member {Boolean} has_intent_declaration
 */
Client.prototype.has_intent_declaration = undefined

/**
 * Client intent declaration protocol number
 * @member {String} intent_declaration_protocol_number
 */
Client.prototype.intent_declaration_protocol_number = undefined

/**
 * Client intent declaration protocol date
 * @member {Date} intent_declaration_protocol_date
 */
Client.prototype.intent_declaration_protocol_date = undefined

/**
 * Client creation date
 * @member {String} created_at
 */
Client.prototype.created_at = undefined

/**
 * Client last update date
 * @member {String} updated_at
 */
Client.prototype.updated_at = undefined

export default Client
