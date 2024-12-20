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
import CreateIssuedDocumentResponse from '../model/CreateIssuedDocumentResponse'
import GetEmailDataResponse from '../model/GetEmailDataResponse'
import GetExistingIssuedDocumentTotalsResponse from '../model/GetExistingIssuedDocumentTotalsResponse'
import GetIssuedDocumentPreCreateInfoResponse from '../model/GetIssuedDocumentPreCreateInfoResponse'
import GetIssuedDocumentResponse from '../model/GetIssuedDocumentResponse'
import GetNewIssuedDocumentTotalsResponse from '../model/GetNewIssuedDocumentTotalsResponse'
import JoinIssuedDocumentsResponse from '../model/JoinIssuedDocumentsResponse'
import ListIssuedDocumentsResponse from '../model/ListIssuedDocumentsResponse'
import ModifyIssuedDocumentResponse from '../model/ModifyIssuedDocumentResponse'
import TransformIssuedDocumentResponse from '../model/TransformIssuedDocumentResponse'
import UploadIssuedDocumentAttachmentResponse from '../model/UploadIssuedDocumentAttachmentResponse'

/**
* IssuedDocuments service.
* @module api/IssuedDocumentsApi
* @version 2.1.1
*/
export default class IssuedDocumentsApi {
  /**
    * Constructs a new IssuedDocumentsApi.
    * @alias module:api/IssuedDocumentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
  constructor (apiClient) {
    this.apiClient = apiClient || ApiClient.instance
  }

  /**
     * Create Issued Document
     * Creates a new document.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateIssuedDocumentRequest} [createIssuedDocumentRequest] The Issued Document
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateIssuedDocumentResponse} and HTTP response
     */
  createIssuedDocumentWithHttpInfo (companyId, opts) {
    opts = opts || {}
    const postBody = opts.createIssuedDocumentRequest
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling createIssuedDocument")
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
    const returnType = CreateIssuedDocumentResponse
    return this.apiClient.callApi(
      '/c/{company_id}/issued_documents', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Create Issued Document
     * Creates a new document.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateIssuedDocumentRequest} opts.createIssuedDocumentRequest The Issued Document
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateIssuedDocumentResponse}
     */
  createIssuedDocument (companyId, opts) {
    return this.createIssuedDocumentWithHttpInfo(companyId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Delete Issued Document
     * Deletes the specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  deleteIssuedDocumentWithHttpInfo (companyId, documentId) {
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling deleteIssuedDocument")
    }
    // verify the required parameter 'documentId' is set
    if (documentId === undefined || documentId === null) {
      throw new Error("Missing the required parameter 'documentId' when calling deleteIssuedDocument")
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
      '/c/{company_id}/issued_documents/{document_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Delete Issued Document
     * Deletes the specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  deleteIssuedDocument (companyId, documentId) {
    return this.deleteIssuedDocumentWithHttpInfo(companyId, documentId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Delete Issued Document Attachment
     * Removes the attachment of the specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  deleteIssuedDocumentAttachmentWithHttpInfo (companyId, documentId) {
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling deleteIssuedDocumentAttachment")
    }
    // verify the required parameter 'documentId' is set
    if (documentId === undefined || documentId === null) {
      throw new Error("Missing the required parameter 'documentId' when calling deleteIssuedDocumentAttachment")
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
      '/c/{company_id}/issued_documents/{document_id}/attachment', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Delete Issued Document Attachment
     * Removes the attachment of the specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  deleteIssuedDocumentAttachment (companyId, documentId) {
    return this.deleteIssuedDocumentAttachmentWithHttpInfo(companyId, documentId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Get Email Data
     * Gets the pre-compiled email details.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetEmailDataResponse} and HTTP response
     */
  getEmailDataWithHttpInfo (companyId, documentId) {
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling getEmailData")
    }
    // verify the required parameter 'documentId' is set
    if (documentId === undefined || documentId === null) {
      throw new Error("Missing the required parameter 'documentId' when calling getEmailData")
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
    const accepts = ['application/json']
    const returnType = GetEmailDataResponse
    return this.apiClient.callApi(
      '/c/{company_id}/issued_documents/{document_id}/email', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Get Email Data
     * Gets the pre-compiled email details.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetEmailDataResponse}
     */
  getEmailData (companyId, documentId) {
    return this.getEmailDataWithHttpInfo(companyId, documentId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Get Existing Issued Document Totals
     * Returns the totals for a specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/GetExistingIssuedDocumentTotalsRequest} [getExistingIssuedDocumentTotalsRequest]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetExistingIssuedDocumentTotalsResponse} and HTTP response
     */
  getExistingIssuedDocumentTotalsWithHttpInfo (companyId, documentId, opts) {
    opts = opts || {}
    const postBody = opts.getExistingIssuedDocumentTotalsRequest
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling getExistingIssuedDocumentTotals")
    }
    // verify the required parameter 'documentId' is set
    if (documentId === undefined || documentId === null) {
      throw new Error("Missing the required parameter 'documentId' when calling getExistingIssuedDocumentTotals")
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
    const returnType = GetExistingIssuedDocumentTotalsResponse
    return this.apiClient.callApi(
      '/c/{company_id}/issued_documents/{document_id}/totals', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Get Existing Issued Document Totals
     * Returns the totals for a specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/GetExistingIssuedDocumentTotalsRequest} opts.getExistingIssuedDocumentTotalsRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetExistingIssuedDocumentTotalsResponse}
     */
  getExistingIssuedDocumentTotals (companyId, documentId, opts) {
    return this.getExistingIssuedDocumentTotalsWithHttpInfo(companyId, documentId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Get Issued Document
     * Gets the specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {String} [fields] List of comma-separated fields.
     * @param {module:model/String} [fieldset] Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetIssuedDocumentResponse} and HTTP response
     */
  getIssuedDocumentWithHttpInfo (companyId, documentId, opts) {
    opts = opts || {}
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling getIssuedDocument")
    }
    // verify the required parameter 'documentId' is set
    if (documentId === undefined || documentId === null) {
      throw new Error("Missing the required parameter 'documentId' when calling getIssuedDocument")
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
    const returnType = GetIssuedDocumentResponse
    return this.apiClient.callApi(
      '/c/{company_id}/issued_documents/{document_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Get Issued Document
     * Gets the specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetIssuedDocumentResponse}
     */
  getIssuedDocument (companyId, documentId, opts) {
    return this.getIssuedDocumentWithHttpInfo(companyId, documentId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Get Issued Document Pre-Create Info
     * Retrieves the information useful while creating a new document.
     * @param {Number} companyId The ID of the company.
     * @param {module:model/String} type The type of the issued document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetIssuedDocumentPreCreateInfoResponse} and HTTP response
     */
  getIssuedDocumentPreCreateInfoWithHttpInfo (companyId, type) {
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling getIssuedDocumentPreCreateInfo")
    }
    // verify the required parameter 'type' is set
    if (type === undefined || type === null) {
      throw new Error("Missing the required parameter 'type' when calling getIssuedDocumentPreCreateInfo")
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
    const returnType = GetIssuedDocumentPreCreateInfoResponse
    return this.apiClient.callApi(
      '/c/{company_id}/issued_documents/info', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Get Issued Document Pre-Create Info
     * Retrieves the information useful while creating a new document.
     * @param {Number} companyId The ID of the company.
     * @param {module:model/String} type The type of the issued document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetIssuedDocumentPreCreateInfoResponse}
     */
  getIssuedDocumentPreCreateInfo (companyId, type) {
    return this.getIssuedDocumentPreCreateInfoWithHttpInfo(companyId, type)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Get New Issued Document Totals
     * Returns the totals for a new document.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/GetNewIssuedDocumentTotalsRequest} [getNewIssuedDocumentTotalsRequest]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetNewIssuedDocumentTotalsResponse} and HTTP response
     */
  getNewIssuedDocumentTotalsWithHttpInfo (companyId, opts) {
    opts = opts || {}
    const postBody = opts.getNewIssuedDocumentTotalsRequest
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling getNewIssuedDocumentTotals")
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
    const returnType = GetNewIssuedDocumentTotalsResponse
    return this.apiClient.callApi(
      '/c/{company_id}/issued_documents/totals', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Get New Issued Document Totals
     * Returns the totals for a new document.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/GetNewIssuedDocumentTotalsRequest} opts.getNewIssuedDocumentTotalsRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetNewIssuedDocumentTotalsResponse}
     */
  getNewIssuedDocumentTotals (companyId, opts) {
    return this.getNewIssuedDocumentTotalsWithHttpInfo(companyId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Join Issued Documents
     * Joins issued documents.
     * @param {Number} companyId The ID of the company.
     * @param {String} ids Ids of the documents.
     * @param {Object} opts Optional parameters
     * @param {module:model/Number} [group] Group items.
     * @param {module:model/String} [type] Type of the documents to be joined
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/JoinIssuedDocumentsResponse} and HTTP response
     */
  joinIssuedDocumentsWithHttpInfo (companyId, ids, opts) {
    opts = opts || {}
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling joinIssuedDocuments")
    }
    // verify the required parameter 'ids' is set
    if (ids === undefined || ids === null) {
      throw new Error("Missing the required parameter 'ids' when calling joinIssuedDocuments")
    }

    const pathParams = {
      company_id: companyId
    }
    const queryParams = {
      ids,
      group: opts.group,
      type: opts.type
    }
    const headerParams = {
    }
    const formParams = {
    }

    const authNames = ['OAuth2AuthenticationCodeFlow']
    const contentTypes = []
    const accepts = ['application/json']
    const returnType = JoinIssuedDocumentsResponse
    return this.apiClient.callApi(
      '/c/{company_id}/issued_documents/join', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Join Issued Documents
     * Joins issued documents.
     * @param {Number} companyId The ID of the company.
     * @param {String} ids Ids of the documents.
     * @param {Object} opts Optional parameters
     * @param {module:model/Number} opts.group Group items.
     * @param {module:model/String} opts.type Type of the documents to be joined
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JoinIssuedDocumentsResponse}
     */
  joinIssuedDocuments (companyId, ids, opts) {
    return this.joinIssuedDocumentsWithHttpInfo(companyId, ids, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * List Issued Documents
     * Lists the issued documents.
     * @param {Number} companyId The ID of the company.
     * @param {module:model/String} type The type of the issued document.
     * @param {Object} opts Optional parameters
     * @param {String} [fields] List of comma-separated fields.
     * @param {module:model/String} [fieldset] Name of the fieldset.
     * @param {String} [sort] List of comma-separated fields for result sorting (minus for desc sorting).
     * @param {Number} [page = 1)] The page to retrieve.
     * @param {Number} [perPage = 5)] The size of the page.
     * @param {String} [q] Query for filtering the results.
     * @param {module:model/Number} [inclusive] (Only for type = delivery_notes) Include invoices delivery notes.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListIssuedDocumentsResponse} and HTTP response
     */
  listIssuedDocumentsWithHttpInfo (companyId, type, opts) {
    opts = opts || {}
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling listIssuedDocuments")
    }
    // verify the required parameter 'type' is set
    if (type === undefined || type === null) {
      throw new Error("Missing the required parameter 'type' when calling listIssuedDocuments")
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
      q: opts.q,
      inclusive: opts.inclusive
    }
    const headerParams = {
    }
    const formParams = {
    }

    const authNames = ['OAuth2AuthenticationCodeFlow']
    const contentTypes = []
    const accepts = ['application/json']
    const returnType = ListIssuedDocumentsResponse
    return this.apiClient.callApi(
      '/c/{company_id}/issued_documents', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * List Issued Documents
     * Lists the issued documents.
     * @param {Number} companyId The ID of the company.
     * @param {module:model/String} type The type of the issued document.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @param {String} opts.sort List of comma-separated fields for result sorting (minus for desc sorting).
     * @param {Number} opts.page The page to retrieve. (default to 1)
     * @param {Number} opts.perPage The size of the page. (default to 5)
     * @param {String} opts.q Query for filtering the results.
     * @param {module:model/Number} opts.inclusive (Only for type = delivery_notes) Include invoices delivery notes.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListIssuedDocumentsResponse}
     */
  listIssuedDocuments (companyId, type, opts) {
    return this.listIssuedDocumentsWithHttpInfo(companyId, type, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Modify Issued Document
     * Modifies the specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyIssuedDocumentRequest} [modifyIssuedDocumentRequest] The modified document
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModifyIssuedDocumentResponse} and HTTP response
     */
  modifyIssuedDocumentWithHttpInfo (companyId, documentId, opts) {
    opts = opts || {}
    const postBody = opts.modifyIssuedDocumentRequest
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling modifyIssuedDocument")
    }
    // verify the required parameter 'documentId' is set
    if (documentId === undefined || documentId === null) {
      throw new Error("Missing the required parameter 'documentId' when calling modifyIssuedDocument")
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
    const returnType = ModifyIssuedDocumentResponse
    return this.apiClient.callApi(
      '/c/{company_id}/issued_documents/{document_id}', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Modify Issued Document
     * Modifies the specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyIssuedDocumentRequest} opts.modifyIssuedDocumentRequest The modified document
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModifyIssuedDocumentResponse}
     */
  modifyIssuedDocument (companyId, documentId, opts) {
    return this.modifyIssuedDocumentWithHttpInfo(companyId, documentId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Schedule Email
     * Schedules the sending of a document by email.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/ScheduleEmailRequest} [scheduleEmailRequest] Email Schedule
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  scheduleEmailWithHttpInfo (companyId, documentId, opts) {
    opts = opts || {}
    const postBody = opts.scheduleEmailRequest
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling scheduleEmail")
    }
    // verify the required parameter 'documentId' is set
    if (documentId === undefined || documentId === null) {
      throw new Error("Missing the required parameter 'documentId' when calling scheduleEmail")
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
    const accepts = []
    const returnType = null
    return this.apiClient.callApi(
      '/c/{company_id}/issued_documents/{document_id}/email', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Schedule Email
     * Schedules the sending of a document by email.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/ScheduleEmailRequest} opts.scheduleEmailRequest Email Schedule
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  scheduleEmail (companyId, documentId, opts) {
    return this.scheduleEmailWithHttpInfo(companyId, documentId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Transform Issued Document
     * Transforms the document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} originalDocumentId Original document id.
     * @param {String} newType New document type.
     * @param {Object} opts Optional parameters
     * @param {String} [type] Current document type.
     * @param {module:model/Number} [eInvoice] New document e_invoice.
     * @param {module:model/Number} [transformKeepCopy] Keep the old document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransformIssuedDocumentResponse} and HTTP response
     */
  transformIssuedDocumentWithHttpInfo (companyId, originalDocumentId, newType, opts) {
    opts = opts || {}
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling transformIssuedDocument")
    }
    // verify the required parameter 'originalDocumentId' is set
    if (originalDocumentId === undefined || originalDocumentId === null) {
      throw new Error("Missing the required parameter 'originalDocumentId' when calling transformIssuedDocument")
    }
    // verify the required parameter 'newType' is set
    if (newType === undefined || newType === null) {
      throw new Error("Missing the required parameter 'newType' when calling transformIssuedDocument")
    }

    const pathParams = {
      company_id: companyId
    }
    const queryParams = {
      original_document_id: originalDocumentId,
      new_type: newType,
      type: opts.type,
      e_invoice: opts.eInvoice,
      transform_keep_copy: opts.transformKeepCopy
    }
    const headerParams = {
    }
    const formParams = {
    }

    const authNames = ['OAuth2AuthenticationCodeFlow']
    const contentTypes = []
    const accepts = ['application/json']
    const returnType = TransformIssuedDocumentResponse
    return this.apiClient.callApi(
      '/c/{company_id}/issued_documents/transform', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Transform Issued Document
     * Transforms the document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} originalDocumentId Original document id.
     * @param {String} newType New document type.
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Current document type.
     * @param {module:model/Number} opts.eInvoice New document e_invoice.
     * @param {module:model/Number} opts.transformKeepCopy Keep the old document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransformIssuedDocumentResponse}
     */
  transformIssuedDocument (companyId, originalDocumentId, newType, opts) {
    return this.transformIssuedDocumentWithHttpInfo(companyId, originalDocumentId, newType, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Upload Issued Document Attachment
     * Uploads an attachment destined to an issued document. The actual association between the document and the attachment must be implemented separately, using the returned token.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} [filename] Attachment file name
     * @param {File} [attachment] Attachment file [.png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UploadIssuedDocumentAttachmentResponse} and HTTP response
     */
  uploadIssuedDocumentAttachmentWithHttpInfo (companyId, opts) {
    opts = opts || {}
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling uploadIssuedDocumentAttachment")
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
    const returnType = UploadIssuedDocumentAttachmentResponse
    return this.apiClient.callApi(
      '/c/{company_id}/issued_documents/attachment', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Upload Issued Document Attachment
     * Uploads an attachment destined to an issued document. The actual association between the document and the attachment must be implemented separately, using the returned token.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filename Attachment file name
     * @param {File} opts.attachment Attachment file [.png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UploadIssuedDocumentAttachmentResponse}
     */
  uploadIssuedDocumentAttachment (companyId, opts) {
    return this.uploadIssuedDocumentAttachmentWithHttpInfo(companyId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }
}
