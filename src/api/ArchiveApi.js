/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.10
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CreateArchiveDocumentRequest from '../model/CreateArchiveDocumentRequest';
import CreateArchiveDocumentResponse from '../model/CreateArchiveDocumentResponse';
import GetArchiveDocumentResponse from '../model/GetArchiveDocumentResponse';
import ListArchiveDocumentsResponse from '../model/ListArchiveDocumentsResponse';
import ModifyArchiveDocumentRequest from '../model/ModifyArchiveDocumentRequest';
import ModifyArchiveDocumentResponse from '../model/ModifyArchiveDocumentResponse';
import UploadArchiveAttachmentResponse from '../model/UploadArchiveAttachmentResponse';

/**
* Archive service.
* @module api/ArchiveApi
* @version 2.0.8
*/
export default class ArchiveApi {

    /**
    * Constructs a new ArchiveApi. 
    * @alias module:api/ArchiveApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create Archive Document
     * Creates a new archive document.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateArchiveDocumentRequest} opts.createArchiveDocumentRequest The Archive Document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateArchiveDocumentResponse} and HTTP response
     */
    createArchiveDocumentWithHttpInfo(companyId, opts) {
      opts = opts || {};
      let postBody = opts['createArchiveDocumentRequest'];
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling createArchiveDocument");
      }

      let pathParams = {
        'company_id': companyId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2AuthenticationCodeFlow'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreateArchiveDocumentResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/archive', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Archive Document
     * Creates a new archive document.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateArchiveDocumentRequest} opts.createArchiveDocumentRequest The Archive Document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateArchiveDocumentResponse}
     */
    createArchiveDocument(companyId, opts) {
      return this.createArchiveDocumentWithHttpInfo(companyId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Archive Document
     * Deletes the specified archive document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteArchiveDocumentWithHttpInfo(companyId, documentId) {
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling deleteArchiveDocument");
      }
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling deleteArchiveDocument");
      }

      let pathParams = {
        'company_id': companyId,
        'document_id': documentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2AuthenticationCodeFlow'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/c/{company_id}/archive/{document_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Archive Document
     * Deletes the specified archive document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteArchiveDocument(companyId, documentId) {
      return this.deleteArchiveDocumentWithHttpInfo(companyId, documentId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Archive Document
     * Gets the specified archive document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetArchiveDocumentResponse} and HTTP response
     */
    getArchiveDocumentWithHttpInfo(companyId, documentId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getArchiveDocument");
      }
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling getArchiveDocument");
      }

      let pathParams = {
        'company_id': companyId,
        'document_id': documentId
      };
      let queryParams = {
        'fields': opts['fields'],
        'fieldset': opts['fieldset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2AuthenticationCodeFlow'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetArchiveDocumentResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/archive/{document_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Archive Document
     * Gets the specified archive document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetArchiveDocumentResponse}
     */
    getArchiveDocument(companyId, documentId, opts) {
      return this.getArchiveDocumentWithHttpInfo(companyId, documentId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Archive Documents
     * Lists the archive documents.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @param {String} opts.sort List of comma-separated fields for result sorting (minus for desc sorting).
     * @param {Number} opts.page The page to retrieve. (default to 1)
     * @param {Number} opts.perPage The size of the page. (default to 5)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListArchiveDocumentsResponse} and HTTP response
     */
    listArchiveDocumentsWithHttpInfo(companyId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling listArchiveDocuments");
      }

      let pathParams = {
        'company_id': companyId
      };
      let queryParams = {
        'fields': opts['fields'],
        'fieldset': opts['fieldset'],
        'sort': opts['sort'],
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2AuthenticationCodeFlow'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListArchiveDocumentsResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/archive', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Archive Documents
     * Lists the archive documents.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @param {String} opts.sort List of comma-separated fields for result sorting (minus for desc sorting).
     * @param {Number} opts.page The page to retrieve. (default to 1)
     * @param {Number} opts.perPage The size of the page. (default to 5)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListArchiveDocumentsResponse}
     */
    listArchiveDocuments(companyId, opts) {
      return this.listArchiveDocumentsWithHttpInfo(companyId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Modify Archive Document
     * Modifies the specified archive document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyArchiveDocumentRequest} opts.modifyArchiveDocumentRequest Modified Archive Document
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModifyArchiveDocumentResponse} and HTTP response
     */
    modifyArchiveDocumentWithHttpInfo(companyId, documentId, opts) {
      opts = opts || {};
      let postBody = opts['modifyArchiveDocumentRequest'];
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling modifyArchiveDocument");
      }
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling modifyArchiveDocument");
      }

      let pathParams = {
        'company_id': companyId,
        'document_id': documentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2AuthenticationCodeFlow'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ModifyArchiveDocumentResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/archive/{document_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Modify Archive Document
     * Modifies the specified archive document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyArchiveDocumentRequest} opts.modifyArchiveDocumentRequest Modified Archive Document
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModifyArchiveDocumentResponse}
     */
    modifyArchiveDocument(companyId, documentId, opts) {
      return this.modifyArchiveDocumentWithHttpInfo(companyId, documentId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Upload Archive Document Attachment
     * Uploads an attachment destined to an archive document. The actual association between the document and the attachment must be implemented separately, using the returned token.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filename Name of the file.
     * @param {File} opts.attachment Valid format: .png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UploadArchiveAttachmentResponse} and HTTP response
     */
    uploadArchiveDocumentAttachmentWithHttpInfo(companyId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling uploadArchiveDocumentAttachment");
      }

      let pathParams = {
        'company_id': companyId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'filename': opts['filename'],
        'attachment': opts['attachment']
      };

      let authNames = ['OAuth2AuthenticationCodeFlow'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = UploadArchiveAttachmentResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/archive/attachment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Upload Archive Document Attachment
     * Uploads an attachment destined to an archive document. The actual association between the document and the attachment must be implemented separately, using the returned token.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filename Name of the file.
     * @param {File} opts.attachment Valid format: .png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UploadArchiveAttachmentResponse}
     */
    uploadArchiveDocumentAttachment(companyId, opts) {
      return this.uploadArchiveDocumentAttachmentWithHttpInfo(companyId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
