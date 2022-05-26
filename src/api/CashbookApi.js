/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.17
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import CreateCashbookEntryResponse from '../model/CreateCashbookEntryResponse'
import GetCashbookEntryResponse from '../model/GetCashbookEntryResponse'
import ListCashbookEntriesResponse from '../model/ListCashbookEntriesResponse'
import ModifyCashbookEntryResponse from '../model/ModifyCashbookEntryResponse'

/**
* Cashbook service.
* @module api/CashbookApi
* @version 2.0.14
*/
export default class CashbookApi {
  /**
    * Constructs a new CashbookApi.
    * @alias module:api/CashbookApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
  constructor (apiClient) {
    this.apiClient = apiClient || ApiClient.instance
  }

  /**
     * Create Cashbook Entry
     * Creates a new cashbook entry.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateCashbookEntryRequest} opts.createCashbookEntryRequest Cashbook entry.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateCashbookEntryResponse} and HTTP response
     */
  createCashbookEntryWithHttpInfo (companyId, opts) {
    opts = opts || {}
    const postBody = opts.createCashbookEntryRequest
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling createCashbookEntry")
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
    const contentTypes = ['application/json']
    const accepts = ['application/json']
    const returnType = CreateCashbookEntryResponse
    return this.apiClient.callApi(
      '/c/{company_id}/cashbook', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Create Cashbook Entry
     * Creates a new cashbook entry.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateCashbookEntryRequest} opts.createCashbookEntryRequest Cashbook entry.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateCashbookEntryResponse}
     */
  createCashbookEntry (companyId, opts) {
    return this.createCashbookEntryWithHttpInfo(companyId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Delete Cashbook Entry
     * Deletes the specified cashbook entry.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  deleteCashbookEntryWithHttpInfo (companyId, documentId) {
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling deleteCashbookEntry")
    }
    // verify the required parameter 'documentId' is set
    if (documentId === undefined || documentId === null) {
      throw new Error("Missing the required parameter 'documentId' when calling deleteCashbookEntry")
    }

    const pathParams = {
      company_id: companyId,
      document_id: documentId
    }
    const queryParams = {
    }
    const headerParams = {
    }
    const formParams = {
    }

    const authNames = ['OAuth2AuthenticationCodeFlow']
    const contentTypes = []
    const accepts = []
    const returnType = null
    return this.apiClient.callApi(
      '/c/{company_id}/cashbook/{document_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Delete Cashbook Entry
     * Deletes the specified cashbook entry.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  deleteCashbookEntry (companyId, documentId) {
    return this.deleteCashbookEntryWithHttpInfo(companyId, documentId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Get Cashbook Entry
     * Gets the specified cashbook entry.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetCashbookEntryResponse} and HTTP response
     */
  getCashbookEntryWithHttpInfo (companyId, documentId, opts) {
    opts = opts || {}
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling getCashbookEntry")
    }
    // verify the required parameter 'documentId' is set
    if (documentId === undefined || documentId === null) {
      throw new Error("Missing the required parameter 'documentId' when calling getCashbookEntry")
    }

    const pathParams = {
      company_id: companyId,
      document_id: documentId
    }
    const queryParams = {
      fields: opts.fields,
      fieldset: opts.fieldset
    }
    const headerParams = {
    }
    const formParams = {
    }

    const authNames = ['OAuth2AuthenticationCodeFlow']
    const contentTypes = []
    const accepts = ['application/json']
    const returnType = GetCashbookEntryResponse
    return this.apiClient.callApi(
      '/c/{company_id}/cashbook/{document_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Get Cashbook Entry
     * Gets the specified cashbook entry.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetCashbookEntryResponse}
     */
  getCashbookEntry (companyId, documentId, opts) {
    return this.getCashbookEntryWithHttpInfo(companyId, documentId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * List Cashbook Entries
     * Lists the cashbook entries.
     * @param {Number} companyId The ID of the company.
     * @param {String} dateFrom Start date.
     * @param {String} dateTo End date.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Filter cashbook by year.
     * @param {module:model/String} opts.type Filter cashbook by type.
     * @param {Number} opts.paymentAccountId Filter by payment account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListCashbookEntriesResponse} and HTTP response
     */
  listCashbookEntriesWithHttpInfo (companyId, dateFrom, dateTo, opts) {
    opts = opts || {}
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling listCashbookEntries")
    }
    // verify the required parameter 'dateFrom' is set
    if (dateFrom === undefined || dateFrom === null) {
      throw new Error("Missing the required parameter 'dateFrom' when calling listCashbookEntries")
    }
    // verify the required parameter 'dateTo' is set
    if (dateTo === undefined || dateTo === null) {
      throw new Error("Missing the required parameter 'dateTo' when calling listCashbookEntries")
    }

    const pathParams = {
      company_id: companyId
    }
    const queryParams = {
      date_from: dateFrom,
      date_to: dateTo,
      year: opts.year,
      type: opts.type,
      payment_account_id: opts.paymentAccountId
    }
    const headerParams = {
    }
    const formParams = {
    }

    const authNames = ['OAuth2AuthenticationCodeFlow']
    const contentTypes = []
    const accepts = ['application/json']
    const returnType = ListCashbookEntriesResponse
    return this.apiClient.callApi(
      '/c/{company_id}/cashbook', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * List Cashbook Entries
     * Lists the cashbook entries.
     * @param {Number} companyId The ID of the company.
     * @param {String} dateFrom Start date.
     * @param {String} dateTo End date.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Filter cashbook by year.
     * @param {module:model/String} opts.type Filter cashbook by type.
     * @param {Number} opts.paymentAccountId Filter by payment account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCashbookEntriesResponse}
     */
  listCashbookEntries (companyId, dateFrom, dateTo, opts) {
    return this.listCashbookEntriesWithHttpInfo(companyId, dateFrom, dateTo, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Modify Cashbook Entry
     * Modifies the specified cashbook entry.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyCashbookEntryRequest} opts.modifyCashbookEntryRequest Cashbook Entry
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModifyCashbookEntryResponse} and HTTP response
     */
  modifyCashbookEntryWithHttpInfo (companyId, documentId, opts) {
    opts = opts || {}
    const postBody = opts.modifyCashbookEntryRequest
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling modifyCashbookEntry")
    }
    // verify the required parameter 'documentId' is set
    if (documentId === undefined || documentId === null) {
      throw new Error("Missing the required parameter 'documentId' when calling modifyCashbookEntry")
    }

    const pathParams = {
      company_id: companyId,
      document_id: documentId
    }
    const queryParams = {
    }
    const headerParams = {
    }
    const formParams = {
    }

    const authNames = ['OAuth2AuthenticationCodeFlow']
    const contentTypes = ['application/json']
    const accepts = ['application/json']
    const returnType = ModifyCashbookEntryResponse
    return this.apiClient.callApi(
      '/c/{company_id}/cashbook/{document_id}', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Modify Cashbook Entry
     * Modifies the specified cashbook entry.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyCashbookEntryRequest} opts.modifyCashbookEntryRequest Cashbook Entry
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModifyCashbookEntryResponse}
     */
  modifyCashbookEntry (companyId, documentId, opts) {
    return this.modifyCashbookEntryWithHttpInfo(companyId, documentId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }
}
