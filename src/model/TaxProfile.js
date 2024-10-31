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
import VatType from './VatType'

/**
 * The TaxProfile model module.
 * @module model/TaxProfile
 * @version 2.1.1
 */
class TaxProfile {
  /**
     * Constructs a new <code>TaxProfile</code>.
     * @alias module:model/TaxProfile
     */
  constructor () {
    TaxProfile.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>TaxProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaxProfile} obj Optional instance to populate.
     * @return {module:model/TaxProfile} The populated <code>TaxProfile</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new TaxProfile()

      if (data.hasOwnProperty('company_type')) {
        obj.company_type = ApiClient.convertToType(data.company_type, 'String')
      }
      if (data.hasOwnProperty('company_subtype')) {
        obj.company_subtype = ApiClient.convertToType(data.company_subtype, 'String')
      }
      if (data.hasOwnProperty('profession')) {
        obj.profession = ApiClient.convertToType(data.profession, 'String')
      }
      if (data.hasOwnProperty('regime')) {
        obj.regime = ApiClient.convertToType(data.regime, 'String')
      }
      if (data.hasOwnProperty('rivalsa_name')) {
        obj.rivalsa_name = ApiClient.convertToType(data.rivalsa_name, 'String')
      }
      if (data.hasOwnProperty('default_rivalsa')) {
        obj.default_rivalsa = ApiClient.convertToType(data.default_rivalsa, 'Number')
      }
      if (data.hasOwnProperty('cassa_name')) {
        obj.cassa_name = ApiClient.convertToType(data.cassa_name, 'String')
      }
      if (data.hasOwnProperty('default_cassa')) {
        obj.default_cassa = ApiClient.convertToType(data.default_cassa, 'Number')
      }
      if (data.hasOwnProperty('default_cassa_taxable')) {
        obj.default_cassa_taxable = ApiClient.convertToType(data.default_cassa_taxable, 'Number')
      }
      if (data.hasOwnProperty('cassa2_name')) {
        obj.cassa2_name = ApiClient.convertToType(data.cassa2_name, 'String')
      }
      if (data.hasOwnProperty('default_cassa2')) {
        obj.default_cassa2 = ApiClient.convertToType(data.default_cassa2, 'Number')
      }
      if (data.hasOwnProperty('default_cassa2_taxable')) {
        obj.default_cassa2_taxable = ApiClient.convertToType(data.default_cassa2_taxable, 'Number')
      }
      if (data.hasOwnProperty('default_withholding_tax')) {
        obj.default_withholding_tax = ApiClient.convertToType(data.default_withholding_tax, 'Number')
      }
      if (data.hasOwnProperty('default_withholding_tax_taxable')) {
        obj.default_withholding_tax_taxable = ApiClient.convertToType(data.default_withholding_tax_taxable, 'Number')
      }
      if (data.hasOwnProperty('default_other_withholding_tax')) {
        obj.default_other_withholding_tax = ApiClient.convertToType(data.default_other_withholding_tax, 'Number')
      }
      if (data.hasOwnProperty('enasarco')) {
        obj.enasarco = ApiClient.convertToType(data.enasarco, 'Boolean')
      }
      if (data.hasOwnProperty('enasarco_type')) {
        obj.enasarco_type = ApiClient.convertToType(data.enasarco_type, 'String')
      }
      if (data.hasOwnProperty('contributions_percentage')) {
        obj.contributions_percentage = ApiClient.convertToType(data.contributions_percentage, 'Number')
      }
      if (data.hasOwnProperty('profit_coefficient')) {
        obj.profit_coefficient = ApiClient.convertToType(data.profit_coefficient, 'Number')
      }
      if (data.hasOwnProperty('med')) {
        obj.med = ApiClient.convertToType(data.med, 'Boolean')
      }
      if (data.hasOwnProperty('default_vat')) {
        obj.default_vat = VatType.constructFromObject(data.default_vat)
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>TaxProfile</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TaxProfile</code>.
     */
  static validateJSON (data) {
    // ensure the json data is a string
    if (data.company_type && !(typeof data.company_type === 'string' || data.company_type instanceof String)) {
      throw new Error('Expected the field `company_type` to be a primitive type in the JSON string but got ' + data.company_type)
    }
    // ensure the json data is a string
    if (data.company_subtype && !(typeof data.company_subtype === 'string' || data.company_subtype instanceof String)) {
      throw new Error('Expected the field `company_subtype` to be a primitive type in the JSON string but got ' + data.company_subtype)
    }
    // ensure the json data is a string
    if (data.profession && !(typeof data.profession === 'string' || data.profession instanceof String)) {
      throw new Error('Expected the field `profession` to be a primitive type in the JSON string but got ' + data.profession)
    }
    // ensure the json data is a string
    if (data.regime && !(typeof data.regime === 'string' || data.regime instanceof String)) {
      throw new Error('Expected the field `regime` to be a primitive type in the JSON string but got ' + data.regime)
    }
    // ensure the json data is a string
    if (data.rivalsa_name && !(typeof data.rivalsa_name === 'string' || data.rivalsa_name instanceof String)) {
      throw new Error('Expected the field `rivalsa_name` to be a primitive type in the JSON string but got ' + data.rivalsa_name)
    }
    // ensure the json data is a string
    if (data.cassa_name && !(typeof data.cassa_name === 'string' || data.cassa_name instanceof String)) {
      throw new Error('Expected the field `cassa_name` to be a primitive type in the JSON string but got ' + data.cassa_name)
    }
    // ensure the json data is a string
    if (data.cassa2_name && !(typeof data.cassa2_name === 'string' || data.cassa2_name instanceof String)) {
      throw new Error('Expected the field `cassa2_name` to be a primitive type in the JSON string but got ' + data.cassa2_name)
    }
    // ensure the json data is a string
    if (data.enasarco_type && !(typeof data.enasarco_type === 'string' || data.enasarco_type instanceof String)) {
      throw new Error('Expected the field `enasarco_type` to be a primitive type in the JSON string but got ' + data.enasarco_type)
    }
    // validate the optional field `default_vat`
    if (data.default_vat) { // data not null
      VatType.validateJSON(data.default_vat)
    }

    return true
  }
}

/**
 * The company type
 * @member {String} company_type
 */
TaxProfile.prototype.company_type = undefined

/**
 * The company subtype
 * @member {String} company_subtype
 */
TaxProfile.prototype.company_subtype = undefined

/**
 * The profession
 * @member {String} profession
 */
TaxProfile.prototype.profession = undefined

/**
 * The applied regime
 * @member {String} regime
 */
TaxProfile.prototype.regime = undefined

/**
 * The name of the rivalsa
 * @member {String} rivalsa_name
 */
TaxProfile.prototype.rivalsa_name = undefined

/**
 * The default rivalsa amount
 * @member {Number} default_rivalsa
 */
TaxProfile.prototype.default_rivalsa = undefined

/**
 * The name of the cassa
 * @member {String} cassa_name
 */
TaxProfile.prototype.cassa_name = undefined

/**
 * The default cassa amount
 * @member {Number} default_cassa
 */
TaxProfile.prototype.default_cassa = undefined

/**
 * The default taxable amount for the cassa
 * @member {Number} default_cassa_taxable
 */
TaxProfile.prototype.default_cassa_taxable = undefined

/**
 * The name of the second cassa
 * @member {String} cassa2_name
 */
TaxProfile.prototype.cassa2_name = undefined

/**
 * The default second cassa amount
 * @member {Number} default_cassa2
 */
TaxProfile.prototype.default_cassa2 = undefined

/**
 * The default taxable amount for the second cassa
 * @member {Number} default_cassa2_taxable
 */
TaxProfile.prototype.default_cassa2_taxable = undefined

/**
 * The default withholding tax
 * @member {Number} default_withholding_tax
 */
TaxProfile.prototype.default_withholding_tax = undefined

/**
 * The default taxable amount for the withholding tax
 * @member {Number} default_withholding_tax_taxable
 */
TaxProfile.prototype.default_withholding_tax_taxable = undefined

/**
 * The default other withholding tax
 * @member {Number} default_other_withholding_tax
 */
TaxProfile.prototype.default_other_withholding_tax = undefined

/**
 * If it has enasarco
 * @member {Boolean} enasarco
 */
TaxProfile.prototype.enasarco = undefined

/**
 * The enasarco type
 * @member {String} enasarco_type
 */
TaxProfile.prototype.enasarco_type = undefined

/**
 * The contributions percentage
 * @member {Number} contributions_percentage
 */
TaxProfile.prototype.contributions_percentage = undefined

/**
 * The profit coefficient
 * @member {Number} profit_coefficient
 */
TaxProfile.prototype.profit_coefficient = undefined

/**
 * If the health card system is active
 * @member {Boolean} med
 */
TaxProfile.prototype.med = undefined

/**
 * @member {module:model/VatType} default_vat
 */
TaxProfile.prototype.default_vat = undefined

export default TaxProfile
