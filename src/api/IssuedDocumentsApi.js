/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.5
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
* @version 2.0.3
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
     * Create Issued Document
     * Creates a new document.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateIssuedDocumentRequest} opts.createIssuedDocumentRequest The Issued Document
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateIssuedDocumentResponse} and HTTP response
     */
    createIssuedDocumentWithHttpInfo(companyId, opts) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Issued Document
     * Creates a new document.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateIssuedDocumentRequest} opts.createIssuedDocumentRequest The Issued Document
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateIssuedDocumentResponse}
     */
    createIssuedDocument(companyId, opts) {
      return this.createIssuedDocumentWithHttpInfo(companyId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Issued Document
     * Deletes the specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteIssuedDocumentWithHttpInfo(companyId, documentId) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Issued Document
     * Deletes the specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteIssuedDocument(companyId, documentId) {
      return this.deleteIssuedDocumentWithHttpInfo(companyId, documentId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Issued Document Attachment
     * Removes the attachment of the specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteIssuedDocumentAttachmentWithHttpInfo(companyId, documentId) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Issued Document Attachment
     * Removes the attachment of the specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteIssuedDocumentAttachment(companyId, documentId) {
      return this.deleteIssuedDocumentAttachmentWithHttpInfo(companyId, documentId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Email Data
     * Gets the pre-compiled email details.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetEmailDataResponse} and HTTP response
     */
    getEmailDataWithHttpInfo(companyId, documentId) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Email Data
     * Gets the pre-compiled email details.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetEmailDataResponse}
     */
    getEmailData(companyId, documentId) {
      return this.getEmailDataWithHttpInfo(companyId, documentId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Existing Issued Document Totals
     * Returns the totals for a specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/GetExistingIssuedDocumentTotalsRequest} opts.getExistingIssuedDocumentTotalsRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetExistingIssuedDocumentTotalsResponse} and HTTP response
     */
    getExistingIssuedDocumentTotalsWithHttpInfo(companyId, documentId, opts) {
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
        authNames, contentTypes, accepts, returnType, null
      );
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
    getExistingIssuedDocumentTotals(companyId, documentId, opts) {
      return this.getExistingIssuedDocumentTotalsWithHttpInfo(companyId, documentId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Issued Document
     * Gets the specified document. 
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetIssuedDocumentResponse} and HTTP response
     */
    getIssuedDocumentWithHttpInfo(companyId, documentId, opts) {
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
        authNames, contentTypes, accepts, returnType, null
      );
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
    getIssuedDocument(companyId, documentId, opts) {
      return this.getIssuedDocumentWithHttpInfo(companyId, documentId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Issued Document Pre-create info
     * Retrieves the information useful while creating a new document.
     * @param {Number} companyId The ID of the company.
     * @param {module:model/String} type The type of the issued document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetIssuedDocumentPreCreateInfoResponse} and HTTP response
     */
    getIssuedDocumentPreCreateInfoWithHttpInfo(companyId, type) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Issued Document Pre-create info
     * Retrieves the information useful while creating a new document.
     * @param {Number} companyId The ID of the company.
     * @param {module:model/String} type The type of the issued document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetIssuedDocumentPreCreateInfoResponse}
     */
    getIssuedDocumentPreCreateInfo(companyId, type) {
      return this.getIssuedDocumentPreCreateInfoWithHttpInfo(companyId, type)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get New Issued Document Totals
     * Returns the totals for a new document.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/GetNewIssuedDocumentTotalsRequest} opts.getNewIssuedDocumentTotalsRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetNewIssuedDocumentTotalsResponse} and HTTP response
     */
    getNewIssuedDocumentTotalsWithHttpInfo(companyId, opts) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get New Issued Document Totals
     * Returns the totals for a new document.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/GetNewIssuedDocumentTotalsRequest} opts.getNewIssuedDocumentTotalsRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetNewIssuedDocumentTotalsResponse}
     */
    getNewIssuedDocumentTotals(companyId, opts) {
      return this.getNewIssuedDocumentTotalsWithHttpInfo(companyId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListIssuedDocumentsResponse} and HTTP response
     */
    listIssuedDocumentsWithHttpInfo(companyId, type, opts) {
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
        authNames, contentTypes, accepts, returnType, null
      );
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListIssuedDocumentsResponse}
     */
    listIssuedDocuments(companyId, type, opts) {
      return this.listIssuedDocumentsWithHttpInfo(companyId, type, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Modify Issued Document
     * Modifies the specified document.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyIssuedDocumentRequest} opts.modifyIssuedDocumentRequest The modified document
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModifyIssuedDocumentResponse} and HTTP response
     */
    modifyIssuedDocumentWithHttpInfo(companyId, documentId, opts) {
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
        authNames, contentTypes, accepts, returnType, null
      );
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
    modifyIssuedDocument(companyId, documentId, opts) {
      return this.modifyIssuedDocumentWithHttpInfo(companyId, documentId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Schedule Email
     * Schedules the sending of a document by email.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/ScheduleEmailRequest} opts.scheduleEmailRequest Email Schedule
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    scheduleEmailWithHttpInfo(companyId, documentId, opts) {
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
        authNames, contentTypes, accepts, returnType, null
      );
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
    scheduleEmail(companyId, documentId, opts) {
      return this.scheduleEmailWithHttpInfo(companyId, documentId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Upload Issued Document Attachment
     * Uploads an attachment destined to an issued document. The actual association between the document and the attachment must be implemented separately, using the returned token.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filename Name of the file.
     * @param {File} opts.attachment Valid format: .png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UploadIssuedDocumentAttachmentResponse} and HTTP response
     */
    uploadIssuedDocumentAttachmentWithHttpInfo(companyId, opts) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Upload Issued Document Attachment
     * Uploads an attachment destined to an issued document. The actual association between the document and the attachment must be implemented separately, using the returned token.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filename Name of the file.
     * @param {File} opts.attachment Valid format: .png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UploadIssuedDocumentAttachmentResponse}
     */
    uploadIssuedDocumentAttachment(companyId, opts) {
      return this.uploadIssuedDocumentAttachmentWithHttpInfo(companyId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
