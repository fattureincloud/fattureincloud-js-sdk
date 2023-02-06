/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.25
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import CreateReceivedDocumentResponse from '../model/CreateReceivedDocumentResponse'
import GetExistingReceivedDocumentTotalsResponse from '../model/GetExistingReceivedDocumentTotalsResponse'
import GetNewReceivedDocumentTotalsResponse from '../model/GetNewReceivedDocumentTotalsResponse'
import GetReceivedDocumentPreCreateInfoResponse from '../model/GetReceivedDocumentPreCreateInfoResponse'
import GetReceivedDocumentResponse from '../model/GetReceivedDocumentResponse'
import ListReceivedDocumentsResponse from '../model/ListReceivedDocumentsResponse'
import ModifyReceivedDocumentResponse from '../model/ModifyReceivedDocumentResponse'
import UploadReceivedDocumentAttachmentResponse from '../model/UploadReceivedDocumentAttachmentResponse'

/**
* ReceivedDocuments service.
* @module api/ReceivedDocumentsApi
* @version 2.0.19
*/
export default class ReceivedDocumentsApi {
  /**
    * Constructs a new ReceivedDocumentsApi.
    * @alias module:api/ReceivedDocumentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
  constructor (apiClient) {
    this.apiClient = apiClient || ApiClient.instance
  }

  /**
     * Create Received Document
     * Creates a new document.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateReceivedDocumentRequest} opts.createReceivedDocumentRequest Document to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateReceivedDocumentResponse} and HTTP response
     */
  createReceivedDocumentWithHttpInfo (companyId, opts) {
    opts = opts || {}
    const postBody = opts.createReceivedDocumentRequest
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling createReceivedDocument")
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
    const returnType = CreateReceivedDocumentResponse
    return this.apiClient.callApi(
      '/c/{company_id}/received_documents', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Create Received Document
     * Creates a new document.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateReceivedDocumentRequest} opts.createReceivedDocumentRequest Document to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateReceivedDocumentResponse}
     */
  createReceivedDocument (companyId, opts) {
    return this.createReceivedDocumentWithHttpInfo(companyId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Delete Received Document
     * Deletes the specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  deleteReceivedDocumentWithHttpInfo (companyId, documentId) {
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling deleteReceivedDocument")
    }
    // verify the required parameter 'documentId' is set
    if (documentId === undefined || documentId === null) {
      throw new Error("Missing the required parameter 'documentId' when calling deleteReceivedDocument")
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
      '/c/{company_id}/received_documents/{document_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Delete Received Document
     * Deletes the specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  deleteReceivedDocument (companyId, documentId) {
    return this.deleteReceivedDocumentWithHttpInfo(companyId, documentId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Delete Received Document Attachment
     * Removes the attachment of the specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  deleteReceivedDocumentAttachmentWithHttpInfo (companyId, documentId) {
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling deleteReceivedDocumentAttachment")
    }
    // verify the required parameter 'documentId' is set
    if (documentId === undefined || documentId === null) {
      throw new Error("Missing the required parameter 'documentId' when calling deleteReceivedDocumentAttachment")
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
      '/c/{company_id}/received_documents/{document_id}/attachment', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Delete Received Document Attachment
     * Removes the attachment of the specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  deleteReceivedDocumentAttachment (companyId, documentId) {
    return this.deleteReceivedDocumentAttachmentWithHttpInfo(companyId, documentId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Get Existing Received Document Totals
     * Returns the totals for the specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/GetExistingReceivedDocumentTotalsRequest} opts.getExistingReceivedDocumentTotalsRequest Received document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetExistingReceivedDocumentTotalsResponse} and HTTP response
     */
  getExistingReceivedDocumentTotalsWithHttpInfo (companyId, documentId, opts) {
    opts = opts || {}
    const postBody = opts.getExistingReceivedDocumentTotalsRequest
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling getExistingReceivedDocumentTotals")
    }
    // verify the required parameter 'documentId' is set
    if (documentId === undefined || documentId === null) {
      throw new Error("Missing the required parameter 'documentId' when calling getExistingReceivedDocumentTotals")
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
    const returnType = GetExistingReceivedDocumentTotalsResponse
    return this.apiClient.callApi(
      '/c/{company_id}/received_documents/{document_id}/totals', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Get Existing Received Document Totals
     * Returns the totals for the specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/GetExistingReceivedDocumentTotalsRequest} opts.getExistingReceivedDocumentTotalsRequest Received document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetExistingReceivedDocumentTotalsResponse}
     */
  getExistingReceivedDocumentTotals (companyId, documentId, opts) {
    return this.getExistingReceivedDocumentTotalsWithHttpInfo(companyId, documentId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Get New Received Document Totals
     * Returns the totals for a new document.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/GetNewReceivedDocumentTotalsRequest} opts.getNewReceivedDocumentTotalsRequest Received document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetNewReceivedDocumentTotalsResponse} and HTTP response
     */
  getNewReceivedDocumentTotalsWithHttpInfo (companyId, opts) {
    opts = opts || {}
    const postBody = opts.getNewReceivedDocumentTotalsRequest
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling getNewReceivedDocumentTotals")
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
    const returnType = GetNewReceivedDocumentTotalsResponse
    return this.apiClient.callApi(
      '/c/{company_id}/received_documents/totals', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Get New Received Document Totals
     * Returns the totals for a new document.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/GetNewReceivedDocumentTotalsRequest} opts.getNewReceivedDocumentTotalsRequest Received document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetNewReceivedDocumentTotalsResponse}
     */
  getNewReceivedDocumentTotals (companyId, opts) {
    return this.getNewReceivedDocumentTotalsWithHttpInfo(companyId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Get Received Document
     * Gets the specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetReceivedDocumentResponse} and HTTP response
     */
  getReceivedDocumentWithHttpInfo (companyId, documentId, opts) {
    opts = opts || {}
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling getReceivedDocument")
    }
    // verify the required parameter 'documentId' is set
    if (documentId === undefined || documentId === null) {
      throw new Error("Missing the required parameter 'documentId' when calling getReceivedDocument")
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
    const returnType = GetReceivedDocumentResponse
    return this.apiClient.callApi(
      '/c/{company_id}/received_documents/{document_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Get Received Document
     * Gets the specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetReceivedDocumentResponse}
     */
  getReceivedDocument (companyId, documentId, opts) {
    return this.getReceivedDocumentWithHttpInfo(companyId, documentId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Get Received Document Pre-Create Info
     * Retrieves the information useful while creating a new document.
     * @param {Number} companyId The ID of the company.
     * @param {module:model/String} type The type of the received document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetReceivedDocumentPreCreateInfoResponse} and HTTP response
     */
  getReceivedDocumentPreCreateInfoWithHttpInfo (companyId, type) {
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling getReceivedDocumentPreCreateInfo")
    }
    // verify the required parameter 'type' is set
    if (type === undefined || type === null) {
      throw new Error("Missing the required parameter 'type' when calling getReceivedDocumentPreCreateInfo")
    }

    const pathParams = {
      company_id: companyId
    }
    const queryParams = {
      type
    }
    const headerParams = {
    }
    const formParams = {
    }

    const authNames = ['OAuth2AuthenticationCodeFlow']
    const contentTypes = []
    const accepts = ['application/json']
    const returnType = GetReceivedDocumentPreCreateInfoResponse
    return this.apiClient.callApi(
      '/c/{company_id}/received_documents/info', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Get Received Document Pre-Create Info
     * Retrieves the information useful while creating a new document.
     * @param {Number} companyId The ID of the company.
     * @param {module:model/String} type The type of the received document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetReceivedDocumentPreCreateInfoResponse}
     */
  getReceivedDocumentPreCreateInfo (companyId, type) {
    return this.getReceivedDocumentPreCreateInfoWithHttpInfo(companyId, type)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * List Received Documents
     * Lists the received documents.
     * @param {Number} companyId The ID of the company.
     * @param {module:model/String} type The type of the received document.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @param {String} opts.sort List of comma-separated fields for result sorting (minus for desc sorting).
     * @param {Number} opts.page The page to retrieve. (default to 1)
     * @param {Number} opts.perPage The size of the page. (default to 5)
     * @param {String} opts.q Query for filtering the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListReceivedDocumentsResponse} and HTTP response
     */
  listReceivedDocumentsWithHttpInfo (companyId, type, opts) {
    opts = opts || {}
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling listReceivedDocuments")
    }
    // verify the required parameter 'type' is set
    if (type === undefined || type === null) {
      throw new Error("Missing the required parameter 'type' when calling listReceivedDocuments")
    }

    const pathParams = {
      company_id: companyId
    }
    const queryParams = {
      type,
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
    const returnType = ListReceivedDocumentsResponse
    return this.apiClient.callApi(
      '/c/{company_id}/received_documents', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * List Received Documents
     * Lists the received documents.
     * @param {Number} companyId The ID of the company.
     * @param {module:model/String} type The type of the received document.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @param {String} opts.sort List of comma-separated fields for result sorting (minus for desc sorting).
     * @param {Number} opts.page The page to retrieve. (default to 1)
     * @param {Number} opts.perPage The size of the page. (default to 5)
     * @param {String} opts.q Query for filtering the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListReceivedDocumentsResponse}
     */
  listReceivedDocuments (companyId, type, opts) {
    return this.listReceivedDocumentsWithHttpInfo(companyId, type, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Modify Received Document
     * Modifies the specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyReceivedDocumentRequest} opts.modifyReceivedDocumentRequest Modified document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModifyReceivedDocumentResponse} and HTTP response
     */
  modifyReceivedDocumentWithHttpInfo (companyId, documentId, opts) {
    opts = opts || {}
    const postBody = opts.modifyReceivedDocumentRequest
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling modifyReceivedDocument")
    }
    // verify the required parameter 'documentId' is set
    if (documentId === undefined || documentId === null) {
      throw new Error("Missing the required parameter 'documentId' when calling modifyReceivedDocument")
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
    const returnType = ModifyReceivedDocumentResponse
    return this.apiClient.callApi(
      '/c/{company_id}/received_documents/{document_id}', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Modify Received Document
     * Modifies the specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyReceivedDocumentRequest} opts.modifyReceivedDocumentRequest Modified document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModifyReceivedDocumentResponse}
     */
  modifyReceivedDocument (companyId, documentId, opts) {
    return this.modifyReceivedDocumentWithHttpInfo(companyId, documentId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Upload Received Document Attachment
     * Uploads an attachment destined to a received document. The actual association between the document and the attachment must be implemented separately, using the returned token.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filename Name of the file.
     * @param {File} opts.attachment Valid format: .png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UploadReceivedDocumentAttachmentResponse} and HTTP response
     */
  uploadReceivedDocumentAttachmentWithHttpInfo (companyId, opts) {
    opts = opts || {}
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling uploadReceivedDocumentAttachment")
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
    const returnType = UploadReceivedDocumentAttachmentResponse
    return this.apiClient.callApi(
      '/c/{company_id}/received_documents/attachment', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Upload Received Document Attachment
     * Uploads an attachment destined to a received document. The actual association between the document and the attachment must be implemented separately, using the returned token.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filename Name of the file.
     * @param {File} opts.attachment Valid format: .png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UploadReceivedDocumentAttachmentResponse}
     */
  uploadReceivedDocumentAttachment (companyId, opts) {
    return this.uploadReceivedDocumentAttachmentWithHttpInfo(companyId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }
}
