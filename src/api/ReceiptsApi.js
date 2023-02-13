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
import CreateReceiptResponse from '../model/CreateReceiptResponse'
import GetReceiptPreCreateInfoResponse from '../model/GetReceiptPreCreateInfoResponse'
import GetReceiptResponse from '../model/GetReceiptResponse'
import GetReceiptsMonthlyTotalsResponse from '../model/GetReceiptsMonthlyTotalsResponse'
import ListReceiptsResponse from '../model/ListReceiptsResponse'
import ModifyReceiptResponse from '../model/ModifyReceiptResponse'

/**
* Receipts service.
* @module api/ReceiptsApi
* @version 2.0.19
*/
export default class ReceiptsApi {
  /**
    * Constructs a new ReceiptsApi.
    * @alias module:api/ReceiptsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
  constructor (apiClient) {
    this.apiClient = apiClient || ApiClient.instance
  }

  /**
     * Create Receipt
     * Creates a new receipt.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateReceiptRequest} opts.createReceiptRequest The Receipt to create.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateReceiptResponse} and HTTP response
     */
  createReceiptWithHttpInfo (companyId, opts) {
    opts = opts || {}
    const postBody = opts.createReceiptRequest
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling createReceipt")
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
    const returnType = CreateReceiptResponse
    return this.apiClient.callApi(
      '/c/{company_id}/receipts', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Create Receipt
     * Creates a new receipt.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateReceiptRequest} opts.createReceiptRequest The Receipt to create.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateReceiptResponse}
     */
  createReceipt (companyId, opts) {
    return this.createReceiptWithHttpInfo(companyId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Delete Receipt
     * Deletes the specified receipt.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  deleteReceiptWithHttpInfo (companyId, documentId) {
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling deleteReceipt")
    }
    // verify the required parameter 'documentId' is set
    if (documentId === undefined || documentId === null) {
      throw new Error("Missing the required parameter 'documentId' when calling deleteReceipt")
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
      '/c/{company_id}/receipts/{document_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Delete Receipt
     * Deletes the specified receipt.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  deleteReceipt (companyId, documentId) {
    return this.deleteReceiptWithHttpInfo(companyId, documentId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Get Receipt
     * Gets the specified receipt.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetReceiptResponse} and HTTP response
     */
  getReceiptWithHttpInfo (companyId, documentId, opts) {
    opts = opts || {}
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling getReceipt")
    }
    // verify the required parameter 'documentId' is set
    if (documentId === undefined || documentId === null) {
      throw new Error("Missing the required parameter 'documentId' when calling getReceipt")
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
    const returnType = GetReceiptResponse
    return this.apiClient.callApi(
      '/c/{company_id}/receipts/{document_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Get Receipt
     * Gets the specified receipt.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetReceiptResponse}
     */
  getReceipt (companyId, documentId, opts) {
    return this.getReceiptWithHttpInfo(companyId, documentId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Get Receipt Pre-Create Info
     * Retrieves the information useful while creating a new receipt.
     * @param {Number} companyId The ID of the company.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetReceiptPreCreateInfoResponse} and HTTP response
     */
  getReceiptPreCreateInfoWithHttpInfo (companyId) {
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling getReceiptPreCreateInfo")
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
    const returnType = GetReceiptPreCreateInfoResponse
    return this.apiClient.callApi(
      '/c/{company_id}/receipts/info', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Get Receipt Pre-Create Info
     * Retrieves the information useful while creating a new receipt.
     * @param {Number} companyId The ID of the company.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetReceiptPreCreateInfoResponse}
     */
  getReceiptPreCreateInfo (companyId) {
    return this.getReceiptPreCreateInfoWithHttpInfo(companyId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Get Receipts Monthly Totals
     * Returns the monthly totals by year and receipt type.
     * @param {Number} companyId The ID of the company.
     * @param {module:model/String} type Receipt Type
     * @param {String} year Year for which you want monthly totals
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetReceiptsMonthlyTotalsResponse} and HTTP response
     */
  getReceiptsMonthlyTotalsWithHttpInfo (companyId, type, year) {
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling getReceiptsMonthlyTotals")
    }
    // verify the required parameter 'type' is set
    if (type === undefined || type === null) {
      throw new Error("Missing the required parameter 'type' when calling getReceiptsMonthlyTotals")
    }
    // verify the required parameter 'year' is set
    if (year === undefined || year === null) {
      throw new Error("Missing the required parameter 'year' when calling getReceiptsMonthlyTotals")
    }

    const pathParams = {
      company_id: companyId
    }
    const queryParams = {
      type,
      year
    }
    const headerParams = {
    }
    const formParams = {
    }

    const authNames = ['OAuth2AuthenticationCodeFlow']
    const contentTypes = []
    const accepts = ['application/json']
    const returnType = GetReceiptsMonthlyTotalsResponse
    return this.apiClient.callApi(
      '/c/{company_id}/receipts/monthly_totals', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Get Receipts Monthly Totals
     * Returns the monthly totals by year and receipt type.
     * @param {Number} companyId The ID of the company.
     * @param {module:model/String} type Receipt Type
     * @param {String} year Year for which you want monthly totals
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetReceiptsMonthlyTotalsResponse}
     */
  getReceiptsMonthlyTotals (companyId, type, year) {
    return this.getReceiptsMonthlyTotalsWithHttpInfo(companyId, type, year)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * List Receipts
     * Lists the receipts.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @param {Number} opts.page The page to retrieve. (default to 1)
     * @param {Number} opts.perPage The size of the page. (default to 5)
     * @param {String} opts.sort List of comma-separated fields for result sorting (minus for desc sorting).
     * @param {String} opts.q Query for filtering the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListReceiptsResponse} and HTTP response
     */
  listReceiptsWithHttpInfo (companyId, opts) {
    opts = opts || {}
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling listReceipts")
    }

    const pathParams = {
      company_id: companyId
    }
    const queryParams = {
      fields: opts.fields,
      fieldset: opts.fieldset,
      page: opts.page,
      per_page: opts.perPage,
      sort: opts.sort,
      q: opts.q
    }
    const headerParams = {
    }
    const formParams = {
    }

    const authNames = ['OAuth2AuthenticationCodeFlow']
    const contentTypes = []
    const accepts = ['application/json']
    const returnType = ListReceiptsResponse
    return this.apiClient.callApi(
      '/c/{company_id}/receipts', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * List Receipts
     * Lists the receipts.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @param {Number} opts.page The page to retrieve. (default to 1)
     * @param {Number} opts.perPage The size of the page. (default to 5)
     * @param {String} opts.sort List of comma-separated fields for result sorting (minus for desc sorting).
     * @param {String} opts.q Query for filtering the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListReceiptsResponse}
     */
  listReceipts (companyId, opts) {
    return this.listReceiptsWithHttpInfo(companyId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Modify Receipt
     * Modifies the specified receipt.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyReceiptRequest} opts.modifyReceiptRequest Modified receipt.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModifyReceiptResponse} and HTTP response
     */
  modifyReceiptWithHttpInfo (companyId, documentId, opts) {
    opts = opts || {}
    const postBody = opts.modifyReceiptRequest
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling modifyReceipt")
    }
    // verify the required parameter 'documentId' is set
    if (documentId === undefined || documentId === null) {
      throw new Error("Missing the required parameter 'documentId' when calling modifyReceipt")
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
    const returnType = ModifyReceiptResponse
    return this.apiClient.callApi(
      '/c/{company_id}/receipts/{document_id}', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Modify Receipt
     * Modifies the specified receipt.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyReceiptRequest} opts.modifyReceiptRequest Modified receipt.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModifyReceiptResponse}
     */
  modifyReceipt (companyId, documentId, opts) {
    return this.modifyReceiptWithHttpInfo(companyId, documentId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }
}
