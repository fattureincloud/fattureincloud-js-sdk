/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.1.3
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import SupplierType from './SupplierType'

/**
 * The Supplier model module.
 * @module model/Supplier
 * @version 2.1.1
 */
class Supplier {
  /**
     * Constructs a new <code>Supplier</code>.
     * @alias module:model/Supplier
     */
  constructor () {
    Supplier.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>Supplier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Supplier} obj Optional instance to populate.
     * @return {module:model/Supplier} The populated <code>Supplier</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new Supplier()

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
        obj.type = SupplierType.constructFromObject(data.type)
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
      if (data.hasOwnProperty('bank_iban')) {
        obj.bank_iban = ApiClient.convertToType(data.bank_iban, 'String')
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
     * Validates the JSON data with respect to <code>Supplier</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Supplier</code>.
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
    // ensure the json data is a string
    if (data.bank_iban && !(typeof data.bank_iban === 'string' || data.bank_iban instanceof String)) {
      throw new Error('Expected the field `bank_iban` to be a primitive type in the JSON string but got ' + data.bank_iban)
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
 * Supplier id
 * @member {Number} id
 */
Supplier.prototype.id = undefined

/**
 * Supplier code
 * @member {String} code
 */
Supplier.prototype.code = undefined

/**
 * Supplier name
 * @member {String} name
 */
Supplier.prototype.name = undefined

/**
 * @member {module:model/SupplierType} type
 */
Supplier.prototype.type = undefined

/**
 * Supplier first name
 * @member {String} first_name
 */
Supplier.prototype.first_name = undefined

/**
 * Supplier last name
 * @member {String} last_name
 */
Supplier.prototype.last_name = undefined

/**
 * Supplier contact person
 * @member {String} contact_person
 */
Supplier.prototype.contact_person = undefined

/**
 * Supplier vat number
 * @member {String} vat_number
 */
Supplier.prototype.vat_number = undefined

/**
 * Supplier tax code
 * @member {String} tax_code
 */
Supplier.prototype.tax_code = undefined

/**
 * Supplier street address
 * @member {String} address_street
 */
Supplier.prototype.address_street = undefined

/**
 * Supplier postal code
 * @member {String} address_postal_code
 */
Supplier.prototype.address_postal_code = undefined

/**
 * Supplier city
 * @member {String} address_city
 */
Supplier.prototype.address_city = undefined

/**
 * Supplier province
 * @member {String} address_province
 */
Supplier.prototype.address_province = undefined

/**
 * Supplier address extra info
 * @member {String} address_extra
 */
Supplier.prototype.address_extra = undefined

/**
 * Supplier country
 * @member {String} country
 */
Supplier.prototype.country = undefined

/**
 * Supplier country iso code
 * @member {String} country_iso
 */
Supplier.prototype.country_iso = undefined

/**
 * Supplier email
 * @member {String} email
 */
Supplier.prototype.email = undefined

/**
 * Supplier certified email
 * @member {String} certified_email
 */
Supplier.prototype.certified_email = undefined

/**
 * Supplier phone
 * @member {String} phone
 */
Supplier.prototype.phone = undefined

/**
 * Supplier fax
 * @member {String} fax
 */
Supplier.prototype.fax = undefined

/**
 * Supplier extra notes
 * @member {String} notes
 */
Supplier.prototype.notes = undefined

/**
 * Supplier bank IBAN
 * @member {String} bank_iban
 */
Supplier.prototype.bank_iban = undefined

/**
 * Supplier creation date
 * @member {String} created_at
 */
Supplier.prototype.created_at = undefined

/**
 * Supplier last update date
 * @member {String} updated_at
 */
Supplier.prototype.updated_at = undefined

export default Supplier
