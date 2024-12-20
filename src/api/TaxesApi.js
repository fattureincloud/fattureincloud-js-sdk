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
import CreateF24Response from '../model/CreateF24Response'
import GetF24Response from '../model/GetF24Response'
import ListF24Response from '../model/ListF24Response'
import ModifyF24Response from '../model/ModifyF24Response'
import UploadF24AttachmentResponse from '../model/UploadF24AttachmentResponse'

/**
* Taxes service.
* @module api/TaxesApi
* @version 2.1.1
*/
export default class TaxesApi {
  /**
    * Constructs a new TaxesApi.
    * @alias module:api/TaxesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
  constructor (apiClient) {
    this.apiClient = apiClient || ApiClient.instance
  }

  /**
     * Create F24
     * Creates a new F24.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateF24Request} [createF24Request] The F24 to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateF24Response} and HTTP response
     */
  createF24WithHttpInfo (companyId, opts) {
    opts = opts || {}
    const postBody = opts.createF24Request
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling createF24")
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
    const returnType = CreateF24Response
    return this.apiClient.callApi(
      '/c/{company_id}/taxes', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Create F24
     * Creates a new F24.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateF24Request} opts.createF24Request The F24 to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateF24Response}
     */
  createF24 (companyId, opts) {
    return this.createF24WithHttpInfo(companyId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Delete F24
     * Removes the specified F24.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  deleteF24WithHttpInfo (companyId, documentId) {
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling deleteF24")
    }
    // verify the required parameter 'documentId' is set
    if (documentId === undefined || documentId === null) {
      throw new Error("Missing the required parameter 'documentId' when calling deleteF24")
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
      '/c/{company_id}/taxes/{document_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Delete F24
     * Removes the specified F24.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  deleteF24 (companyId, documentId) {
    return this.deleteF24WithHttpInfo(companyId, documentId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Delete F24 Attachment
     * Removes the attachment of the specified F24.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  deleteF24AttachmentWithHttpInfo (companyId, documentId) {
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling deleteF24Attachment")
    }
    // verify the required parameter 'documentId' is set
    if (documentId === undefined || documentId === null) {
      throw new Error("Missing the required parameter 'documentId' when calling deleteF24Attachment")
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
      '/c/{company_id}/taxes/{document_id}/attachment', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Delete F24 Attachment
     * Removes the attachment of the specified F24.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  deleteF24Attachment (companyId, documentId) {
    return this.deleteF24AttachmentWithHttpInfo(companyId, documentId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Get F24
     * Gets the specified F24.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {String} [fields] List of comma-separated fields.
     * @param {module:model/String} [fieldset] Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetF24Response} and HTTP response
     */
  getF24WithHttpInfo (companyId, documentId, opts) {
    opts = opts || {}
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling getF24")
    }
    // verify the required parameter 'documentId' is set
    if (documentId === undefined || documentId === null) {
      throw new Error("Missing the required parameter 'documentId' when calling getF24")
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
    const returnType = GetF24Response
    return this.apiClient.callApi(
      '/c/{company_id}/taxes/{document_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Get F24
     * Gets the specified F24.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetF24Response}
     */
  getF24 (companyId, documentId, opts) {
    return this.getF24WithHttpInfo(companyId, documentId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * List F24
     * Lists the F24s.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} [fields] List of comma-separated fields.
     * @param {module:model/String} [fieldset] Name of the fieldset.
     * @param {String} [sort] List of comma-separated fields for result sorting (minus for desc sorting).
     * @param {Number} [page = 1)] The page to retrieve.
     * @param {Number} [perPage = 5)] The size of the page.
     * @param {String} [q] Query for filtering the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListF24Response} and HTTP response
     */
  listF24WithHttpInfo (companyId, opts) {
    opts = opts || {}
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling listF24")
    }

    const pathParams = {
      company_id: companyId
    }
    const queryParams = {
      fields: opts.fields,
      fieldset: opts.fieldset,
      sort: opts.sort,
      page: opts.page,
      per_page: opts.perPage,
      q: opts.q
    }
    const headerParams = {
    }
    const formParams = {
    }

    const authNames = ['OAuth2AuthenticationCodeFlow']
    const contentTypes = []
    const accepts = ['application/json']
    const returnType = ListF24Response
    return this.apiClient.callApi(
      '/c/{company_id}/taxes', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * List F24
     * Lists the F24s.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @param {String} opts.sort List of comma-separated fields for result sorting (minus for desc sorting).
     * @param {Number} opts.page The page to retrieve. (default to 1)
     * @param {Number} opts.perPage The size of the page. (default to 5)
     * @param {String} opts.q Query for filtering the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListF24Response}
     */
  listF24 (companyId, opts) {
    return this.listF24WithHttpInfo(companyId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Modify F24
     * Modifies the specified F24.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyF24Request} [modifyF24Request] The F24
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModifyF24Response} and HTTP response
     */
  modifyF24WithHttpInfo (companyId, documentId, opts) {
    opts = opts || {}
    const postBody = opts.modifyF24Request
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling modifyF24")
    }
    // verify the required parameter 'documentId' is set
    if (documentId === undefined || documentId === null) {
      throw new Error("Missing the required parameter 'documentId' when calling modifyF24")
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
    const returnType = ModifyF24Response
    return this.apiClient.callApi(
      '/c/{company_id}/taxes/{document_id}', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Modify F24
     * Modifies the specified F24.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyF24Request} opts.modifyF24Request The F24
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModifyF24Response}
     */
  modifyF24 (companyId, documentId, opts) {
    return this.modifyF24WithHttpInfo(companyId, documentId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Upload F24 Attachment
     * Uploads an attachment destined to a F24. The actual association between the document and the attachment must be implemented separately, using the returned token.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} [filename] Attachment file name
     * @param {File} [attachment] Attachment file [.png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UploadF24AttachmentResponse} and HTTP response
     */
  uploadF24AttachmentWithHttpInfo (companyId, opts) {
    opts = opts || {}
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling uploadF24Attachment")
    }

    const pathParams = {
      company_id: companyId
    }
    const queryParams = {
    }
    const headerParams = {
    }
    const formParams = {
      filename: opts.filename,
      attachment: opts.attachment
    }

    const authNames = ['OAuth2AuthenticationCodeFlow']
    const contentTypes = ['multipart/form-data']
    const accepts = ['application/json']
    const returnType = UploadF24AttachmentResponse
    return this.apiClient.callApi(
      '/c/{company_id}/taxes/attachment', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Upload F24 Attachment
     * Uploads an attachment destined to a F24. The actual association between the document and the attachment must be implemented separately, using the returned token.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filename Attachment file name
     * @param {File} opts.attachment Attachment file [.png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UploadF24AttachmentResponse}
     */
  uploadF24Attachment (companyId, opts) {
    return this.uploadF24AttachmentWithHttpInfo(companyId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }
}
