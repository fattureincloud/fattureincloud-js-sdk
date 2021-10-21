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
import CreateF24Request from '../model/CreateF24Request';
import CreateF24Response from '../model/CreateF24Response';
import GetF24Response from '../model/GetF24Response';
import ListF24Response from '../model/ListF24Response';
import ModifyF24Request from '../model/ModifyF24Request';
import ModifyF24Response from '../model/ModifyF24Response';
import UploadF24AttachmentResponse from '../model/UploadF24AttachmentResponse';

/**
* Taxes service.
* @module api/TaxesApi
* @version 2.0.1
*/
export default class TaxesApi {

    /**
    * Constructs a new TaxesApi. 
    * @alias module:api/TaxesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createF24 operation.
     * @callback module:api/TaxesApi~createF24Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateF24Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create F24
     * Creates a new F24.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateF24Request} opts.createF24Request The F24 to create
     * @param {module:api/TaxesApi~createF24Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateF24Response}
     */
    createF24(companyId, opts, callback) {
      opts = opts || {};
      let postBody = opts['createF24Request'];
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling createF24");
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
      let returnType = CreateF24Response;
      return this.apiClient.callApi(
        '/c/{company_id}/taxes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteF24 operation.
     * @callback module:api/TaxesApi~deleteF24Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete F24
     * Removes the specified F24.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {module:api/TaxesApi~deleteF24Callback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteF24(companyId, documentId, callback) {
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling deleteF24");
      }
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling deleteF24");
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
        '/c/{company_id}/taxes/{document_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteF24Attachment operation.
     * @callback module:api/TaxesApi~deleteF24AttachmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete F24 Attachment
     * Removes the attachment of the specified F24.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {module:api/TaxesApi~deleteF24AttachmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteF24Attachment(companyId, documentId, callback) {
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling deleteF24Attachment");
      }
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling deleteF24Attachment");
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
        '/c/{company_id}/taxes/{document_id}/attachment', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getF24 operation.
     * @callback module:api/TaxesApi~getF24Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetF24Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get F24
     * Gets the specified F24.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @param {module:api/TaxesApi~getF24Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetF24Response}
     */
    getF24(companyId, documentId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getF24");
      }
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling getF24");
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
      let returnType = GetF24Response;
      return this.apiClient.callApi(
        '/c/{company_id}/taxes/{document_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listF24 operation.
     * @callback module:api/TaxesApi~listF24Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ListF24Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

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
     * @param {module:api/TaxesApi~listF24Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListF24Response}
     */
    listF24(companyId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling listF24");
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
      let returnType = ListF24Response;
      return this.apiClient.callApi(
        '/c/{company_id}/taxes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the modifyF24 operation.
     * @callback module:api/TaxesApi~modifyF24Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ModifyF24Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify F24
     * Modifies the specified F24.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyF24Request} opts.modifyF24Request The F24
     * @param {module:api/TaxesApi~modifyF24Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModifyF24Response}
     */
    modifyF24(companyId, documentId, opts, callback) {
      opts = opts || {};
      let postBody = opts['modifyF24Request'];
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling modifyF24");
      }
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling modifyF24");
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
      let returnType = ModifyF24Response;
      return this.apiClient.callApi(
        '/c/{company_id}/taxes/{document_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadF24Attachment operation.
     * @callback module:api/TaxesApi~uploadF24AttachmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UploadF24AttachmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload F24 Attachment
     * Uploads an attachment destined to a F24. The actual association between the document and the attachment must be implemented separately, using the returned token.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filename Name of the file.
     * @param {File} opts.attachment Valid format: .png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx
     * @param {module:api/TaxesApi~uploadF24AttachmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UploadF24AttachmentResponse}
     */
    uploadF24Attachment(companyId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling uploadF24Attachment");
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
      let returnType = UploadF24AttachmentResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/taxes/attachment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
