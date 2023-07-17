/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.29
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import ListEmailsResponse from '../model/ListEmailsResponse'

/**
* Emails service.
* @module api/EmailsApi
* @version 2.0.22
*/
export default class EmailsApi {
  /**
    * Constructs a new EmailsApi.
    * @alias module:api/EmailsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
  constructor (apiClient) {
    this.apiClient = apiClient || ApiClient.instance
  }

  /**
     * List emails
     * List Emails.
     * @param {Number} companyId The ID of the company.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListEmailsResponse} and HTTP response
     */
  listEmailsWithHttpInfo (companyId) {
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling listEmails")
    }

    const pathParams = {
      company_id: companyId
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
    const returnType = ListEmailsResponse
    return this.apiClient.callApi(
      '/c/{company_id}/emails', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * List emails
     * List Emails.
     * @param {Number} companyId The ID of the company.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListEmailsResponse}
     */
  listEmails (companyId) {
    return this.listEmailsWithHttpInfo(companyId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }
}
