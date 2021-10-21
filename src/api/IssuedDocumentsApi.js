/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol. For more information, please visit https://www.fattureincloud.it.
 *
 * The version of the OpenAPI document: 2.0.2
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CreateIssuedDocumentRequest from '../model/CreateIssuedDocumentRequest';
import CreateIssuedDocumentResponse from '../model/CreateIssuedDocumentResponse';
import GetEmailDataResponse from '../model/GetEmailDataResponse';
import GetExistingIssuedDocumentTotalsRequest from '../model/GetExistingIssuedDocumentTotalsRequest';
import GetExistingIssuedDocumentTotalsResponse from '../model/GetExistingIssuedDocumentTotalsResponse';
import GetIssuedDocumentPreCreateInfoResponse from '../model/GetIssuedDocumentPreCreateInfoResponse';
import GetIssuedDocumentResponse from '../model/GetIssuedDocumentResponse';
import GetNewIssuedDocumentTotalsRequest from '../model/GetNewIssuedDocumentTotalsRequest';
import GetNewIssuedDocumentTotalsResponse from '../model/GetNewIssuedDocumentTotalsResponse';
import ListIssuedDocumentsResponse from '../model/ListIssuedDocumentsResponse';
import ModifyIssuedDocumentRequest from '../model/ModifyIssuedDocumentRequest';
import ModifyIssuedDocumentResponse from '../model/ModifyIssuedDocumentResponse';
import ScheduleEmailRequest from '../model/ScheduleEmailRequest';
import UploadIssuedDocumentAttachmentResponse from '../model/UploadIssuedDocumentAttachmentResponse';

/**
* IssuedDocuments service.
* @module api/IssuedDocumentsApi
* @version 2.0.1
*/
export default class IssuedDocumentsApi {

    /**
    * Constructs a new IssuedDocumentsApi. 
    * @alias module:api/IssuedDocumentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createIssuedDocument operation.
     * @callback module:api/IssuedDocumentsApi~createIssuedDocumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateIssuedDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Issued Document
     * Creates a new document.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateIssuedDocumentRequest} opts.createIssuedDocumentRequest The Issued Document
     * @param {module:api/IssuedDocumentsApi~createIssuedDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateIssuedDocumentResponse}
     */
    createIssuedDocument(companyId, opts, callback) {
      opts = opts || {};
      let postBody = opts['createIssuedDocumentRequest'];
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling createIssuedDocument");
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
      let returnType = CreateIssuedDocumentResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/issued_documents', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteIssuedDocument operation.
     * @callback module:api/IssuedDocumentsApi~deleteIssuedDocumentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Issued Document
     * Deletes the specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {module:api/IssuedDocumentsApi~deleteIssuedDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteIssuedDocument(companyId, documentId, callback) {
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling deleteIssuedDocument");
      }
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling deleteIssuedDocument");
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
        '/c/{company_id}/issued_documents/{document_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteIssuedDocumentAttachment operation.
     * @callback module:api/IssuedDocumentsApi~deleteIssuedDocumentAttachmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Issued Document Attachment
     * Removes the attachment of the specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {module:api/IssuedDocumentsApi~deleteIssuedDocumentAttachmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteIssuedDocumentAttachment(companyId, documentId, callback) {
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling deleteIssuedDocumentAttachment");
      }
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling deleteIssuedDocumentAttachment");
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
        '/c/{company_id}/issued_documents/{document_id}/attachment', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEmailData operation.
     * @callback module:api/IssuedDocumentsApi~getEmailDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetEmailDataResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Email Data
     * Gets the pre-compiled email details.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {module:api/IssuedDocumentsApi~getEmailDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetEmailDataResponse}
     */
    getEmailData(companyId, documentId, callback) {
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getEmailData");
      }
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling getEmailData");
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
      let accepts = ['application/json'];
      let returnType = GetEmailDataResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/issued_documents/{document_id}/email', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getExistingIssuedDocumentTotals operation.
     * @callback module:api/IssuedDocumentsApi~getExistingIssuedDocumentTotalsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetExistingIssuedDocumentTotalsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Existing Issued Document Totals
     * Returns the totals for a specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/GetExistingIssuedDocumentTotalsRequest} opts.getExistingIssuedDocumentTotalsRequest 
     * @param {module:api/IssuedDocumentsApi~getExistingIssuedDocumentTotalsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetExistingIssuedDocumentTotalsResponse}
     */
    getExistingIssuedDocumentTotals(companyId, documentId, opts, callback) {
      opts = opts || {};
      let postBody = opts['getExistingIssuedDocumentTotalsRequest'];
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getExistingIssuedDocumentTotals");
      }
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling getExistingIssuedDocumentTotals");
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
      let returnType = GetExistingIssuedDocumentTotalsResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/issued_documents/{document_id}/totals', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getIssuedDocument operation.
     * @callback module:api/IssuedDocumentsApi~getIssuedDocumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetIssuedDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Issued Document
     * Gets the specified document. 
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @param {module:api/IssuedDocumentsApi~getIssuedDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetIssuedDocumentResponse}
     */
    getIssuedDocument(companyId, documentId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getIssuedDocument");
      }
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling getIssuedDocument");
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
      let returnType = GetIssuedDocumentResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/issued_documents/{document_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getIssuedDocumentPreCreateInfo operation.
     * @callback module:api/IssuedDocumentsApi~getIssuedDocumentPreCreateInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetIssuedDocumentPreCreateInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Issued Document Pre-create info
     * Retrieves the information useful while creating a new document.
     * @param {Number} companyId The ID of the company.
     * @param {module:model/String} type The type of the issued document.
     * @param {module:api/IssuedDocumentsApi~getIssuedDocumentPreCreateInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetIssuedDocumentPreCreateInfoResponse}
     */
    getIssuedDocumentPreCreateInfo(companyId, type, callback) {
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getIssuedDocumentPreCreateInfo");
      }
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getIssuedDocumentPreCreateInfo");
      }

      let pathParams = {
        'company_id': companyId
      };
      let queryParams = {
        'type': type
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2AuthenticationCodeFlow'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetIssuedDocumentPreCreateInfoResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/issued_documents/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getNewIssuedDocumentTotals operation.
     * @callback module:api/IssuedDocumentsApi~getNewIssuedDocumentTotalsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetNewIssuedDocumentTotalsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get New Issued Document Totals
     * Returns the totals for a new document.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/GetNewIssuedDocumentTotalsRequest} opts.getNewIssuedDocumentTotalsRequest 
     * @param {module:api/IssuedDocumentsApi~getNewIssuedDocumentTotalsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetNewIssuedDocumentTotalsResponse}
     */
    getNewIssuedDocumentTotals(companyId, opts, callback) {
      opts = opts || {};
      let postBody = opts['getNewIssuedDocumentTotalsRequest'];
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getNewIssuedDocumentTotals");
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
      let returnType = GetNewIssuedDocumentTotalsResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/issued_documents/totals', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listIssuedDocuments operation.
     * @callback module:api/IssuedDocumentsApi~listIssuedDocumentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListIssuedDocumentsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

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
     * @param {module:api/IssuedDocumentsApi~listIssuedDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListIssuedDocumentsResponse}
     */
    listIssuedDocuments(companyId, type, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling listIssuedDocuments");
      }
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling listIssuedDocuments");
      }

      let pathParams = {
        'company_id': companyId
      };
      let queryParams = {
        'type': type,
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
      let returnType = ListIssuedDocumentsResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/issued_documents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the modifyIssuedDocument operation.
     * @callback module:api/IssuedDocumentsApi~modifyIssuedDocumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModifyIssuedDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify Issued Document
     * Modifies the specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyIssuedDocumentRequest} opts.modifyIssuedDocumentRequest The modified document
     * @param {module:api/IssuedDocumentsApi~modifyIssuedDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModifyIssuedDocumentResponse}
     */
    modifyIssuedDocument(companyId, documentId, opts, callback) {
      opts = opts || {};
      let postBody = opts['modifyIssuedDocumentRequest'];
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling modifyIssuedDocument");
      }
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling modifyIssuedDocument");
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
      let returnType = ModifyIssuedDocumentResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/issued_documents/{document_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the scheduleEmail operation.
     * @callback module:api/IssuedDocumentsApi~scheduleEmailCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Schedule Email
     * Schedules the sending of a document by email.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/ScheduleEmailRequest} opts.scheduleEmailRequest Email Schedule
     * @param {module:api/IssuedDocumentsApi~scheduleEmailCallback} callback The callback function, accepting three arguments: error, data, response
     */
    scheduleEmail(companyId, documentId, opts, callback) {
      opts = opts || {};
      let postBody = opts['scheduleEmailRequest'];
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling scheduleEmail");
      }
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling scheduleEmail");
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/c/{company_id}/issued_documents/{document_id}/email', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadIssuedDocumentAttachment operation.
     * @callback module:api/IssuedDocumentsApi~uploadIssuedDocumentAttachmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UploadIssuedDocumentAttachmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload Issued Document Attachment
     * Uploads an attachment destined to an issued document. The actual association between the document and the attachment must be implemented separately, using the returned token.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filename Name of the file.
     * @param {File} opts.attachment Valid format: .png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx
     * @param {module:api/IssuedDocumentsApi~uploadIssuedDocumentAttachmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UploadIssuedDocumentAttachmentResponse}
     */
    uploadIssuedDocumentAttachment(companyId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling uploadIssuedDocumentAttachment");
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
      let returnType = UploadIssuedDocumentAttachmentResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/issued_documents/attachment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
