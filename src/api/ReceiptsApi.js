/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.3
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CreateReceiptRequest from '../model/CreateReceiptRequest';
import CreateReceiptResponse from '../model/CreateReceiptResponse';
import GetReceiptPreCreateInfoResponse from '../model/GetReceiptPreCreateInfoResponse';
import GetReceiptResponse from '../model/GetReceiptResponse';
import GetReceiptsMonthlyTotalsResponse from '../model/GetReceiptsMonthlyTotalsResponse';
import ListReceiptsResponse from '../model/ListReceiptsResponse';
import ModifyReceiptRequest from '../model/ModifyReceiptRequest';
import ModifyReceiptResponse from '../model/ModifyReceiptResponse';

/**
* Receipts service.
* @module api/ReceiptsApi
* @version 2.0.3
*/
export default class ReceiptsApi {

    /**
    * Constructs a new ReceiptsApi. 
    * @alias module:api/ReceiptsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createReceipt operation.
     * @callback module:api/ReceiptsApi~createReceiptCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateReceiptResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Receipt
     * Creates a new receipt.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateReceiptRequest} opts.createReceiptRequest The Receipt to create.
     * @param {module:api/ReceiptsApi~createReceiptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateReceiptResponse}
     */
    createReceipt(companyId, opts, callback) {
      opts = opts || {};
      let postBody = opts['createReceiptRequest'];
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling createReceipt");
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
      let returnType = CreateReceiptResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/receipts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteReceipt operation.
     * @callback module:api/ReceiptsApi~deleteReceiptCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Receipt
     * Deletes the specified receipt.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {module:api/ReceiptsApi~deleteReceiptCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteReceipt(companyId, documentId, callback) {
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling deleteReceipt");
      }
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling deleteReceipt");
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
        '/c/{company_id}/receipts/{document_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getReceipt operation.
     * @callback module:api/ReceiptsApi~getReceiptCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetReceiptResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Receipt
     * Gets the specified receipt.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @param {module:api/ReceiptsApi~getReceiptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetReceiptResponse}
     */
    getReceipt(companyId, documentId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getReceipt");
      }
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling getReceipt");
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
      let returnType = GetReceiptResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/receipts/{document_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getReceiptPreCreateInfo operation.
     * @callback module:api/ReceiptsApi~getReceiptPreCreateInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetReceiptPreCreateInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Receipt Pre-Create Info
     * Retrieves the information useful while creating a new receipt.
     * @param {Number} companyId The ID of the company.
     * @param {module:api/ReceiptsApi~getReceiptPreCreateInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetReceiptPreCreateInfoResponse}
     */
    getReceiptPreCreateInfo(companyId, callback) {
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getReceiptPreCreateInfo");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetReceiptPreCreateInfoResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/receipts/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getReceiptsMonthlyTotals operation.
     * @callback module:api/ReceiptsApi~getReceiptsMonthlyTotalsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetReceiptsMonthlyTotalsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Receipts Monthly Totals
     * Returns the monthly totals by year and receipt type.
     * @param {Number} companyId The ID of the company.
     * @param {module:model/String} type Receipt Type
     * @param {String} year Year for which you want monthly totals
     * @param {module:api/ReceiptsApi~getReceiptsMonthlyTotalsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetReceiptsMonthlyTotalsResponse}
     */
    getReceiptsMonthlyTotals(companyId, type, year, callback) {
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getReceiptsMonthlyTotals");
      }
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getReceiptsMonthlyTotals");
      }
      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling getReceiptsMonthlyTotals");
      }

      let pathParams = {
        'company_id': companyId
      };
      let queryParams = {
        'type': type,
        'year': year
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2AuthenticationCodeFlow'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetReceiptsMonthlyTotalsResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/receipts/monthly_totals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listReceipts operation.
     * @callback module:api/ReceiptsApi~listReceiptsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListReceiptsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

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
     * @param {module:api/ReceiptsApi~listReceiptsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListReceiptsResponse}
     */
    listReceipts(companyId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling listReceipts");
      }

      let pathParams = {
        'company_id': companyId
      };
      let queryParams = {
        'fields': opts['fields'],
        'fieldset': opts['fieldset'],
        'page': opts['page'],
        'per_page': opts['perPage'],
        'sort': opts['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2AuthenticationCodeFlow'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListReceiptsResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/receipts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the modifyReceipt operation.
     * @callback module:api/ReceiptsApi~modifyReceiptCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModifyReceiptResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify Receipt
     * Modifies the specified receipt.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyReceiptRequest} opts.modifyReceiptRequest Modified receipt.
     * @param {module:api/ReceiptsApi~modifyReceiptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModifyReceiptResponse}
     */
    modifyReceipt(companyId, documentId, opts, callback) {
      opts = opts || {};
      let postBody = opts['modifyReceiptRequest'];
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling modifyReceipt");
      }
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling modifyReceipt");
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
      let returnType = ModifyReceiptResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/receipts/{document_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
