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
import GetUserInfoResponse from '../model/GetUserInfoResponse'
import ListUserCompaniesResponse from '../model/ListUserCompaniesResponse'

/**
* User service.
* @module api/UserApi
* @version 2.0.19
*/
export default class UserApi {
  /**
    * Constructs a new UserApi.
    * @alias module:api/UserApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
  constructor (apiClient) {
    this.apiClient = apiClient || ApiClient.instance
  }

  /**
     * Get User Info
     * Gets the current user's info.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetUserInfoResponse} and HTTP response
     */
  getUserInfoWithHttpInfo () {
    const postBody = null

    const pathParams = {
    }
    const queryParams = {
    }
    const headerParams = {
    }
    const formParams = {
    }

    const authNames = ['OAuth2AuthenticationCodeFlow']
    const contentTypes = []
    const accepts = ['application/json']
    const returnType = GetUserInfoResponse
    return this.apiClient.callApi(
      '/user/info', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Get User Info
     * Gets the current user's info.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetUserInfoResponse}
     */
  getUserInfo () {
    return this.getUserInfoWithHttpInfo()
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * List User Companies
     * Lists the companies controlled by the current user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListUserCompaniesResponse} and HTTP response
     */
  listUserCompaniesWithHttpInfo () {
    const postBody = null

    const pathParams = {
    }
    const queryParams = {
    }
    const headerParams = {
    }
    const formParams = {
    }

    const authNames = ['OAuth2AuthenticationCodeFlow']
    const contentTypes = []
    const accepts = ['application/json']
    const returnType = ListUserCompaniesResponse
    return this.apiClient.callApi(
      '/user/companies', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * List User Companies
     * Lists the companies controlled by the current user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUserCompaniesResponse}
     */
  listUserCompanies () {
    return this.listUserCompaniesWithHttpInfo()
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }
}
