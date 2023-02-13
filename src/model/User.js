/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.26
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'

/**
 * The User model module.
 * @module model/User
 * @version 2.0.19
 */
class User {
  /**
     * Constructs a new <code>User</code>.
     *
     * @alias module:model/User
     */
  constructor () {
    User.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new User()

      if (data.hasOwnProperty('id')) {
        obj.id = ApiClient.convertToType(data.id, 'Number')
      }
      if (data.hasOwnProperty('name')) {
        obj.name = ApiClient.convertToType(data.name, 'String')
      }
      if (data.hasOwnProperty('first_name')) {
        obj.first_name = ApiClient.convertToType(data.first_name, 'String')
      }
      if (data.hasOwnProperty('last_name')) {
        obj.last_name = ApiClient.convertToType(data.last_name, 'String')
      }
      if (data.hasOwnProperty('email')) {
        obj.email = ApiClient.convertToType(data.email, 'String')
      }
      if (data.hasOwnProperty('hash')) {
        obj.hash = ApiClient.convertToType(data.hash, 'String')
      }
      if (data.hasOwnProperty('picture')) {
        obj.picture = ApiClient.convertToType(data.picture, 'String')
      }
    }
    return obj
  }

  /**
     * Validates the JSON data with respect to <code>User</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>User</code>.
     */
  static validateJSON (data) {
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
    if (data.email && !(typeof data.email === 'string' || data.email instanceof String)) {
      throw new Error('Expected the field `email` to be a primitive type in the JSON string but got ' + data.email)
    }
    // ensure the json data is a string
    if (data.hash && !(typeof data.hash === 'string' || data.hash instanceof String)) {
      throw new Error('Expected the field `hash` to be a primitive type in the JSON string but got ' + data.hash)
    }
    // ensure the json data is a string
    if (data.picture && !(typeof data.picture === 'string' || data.picture instanceof String)) {
      throw new Error('Expected the field `picture` to be a primitive type in the JSON string but got ' + data.picture)
    }

    return true
  }
}

/**
 * User identifier.
 * @member {Number} id
 */
User.prototype.id = undefined

/**
 * Full name of the user.
 * @member {String} name
 */
User.prototype.name = undefined

/**
 * First name of the user.
 * @member {String} first_name
 */
User.prototype.first_name = undefined

/**
 * Last name of the user.
 * @member {String} last_name
 */
User.prototype.last_name = undefined

/**
 * Email of the user.
 * @member {String} email
 */
User.prototype.email = undefined

/**
 * @member {String} hash
 */
User.prototype.hash = undefined

/**
 * Picture of the user.
 * @member {String} picture
 */
User.prototype.picture = undefined

export default User
