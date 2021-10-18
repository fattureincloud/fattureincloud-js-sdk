/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.  For more information, please visit https://www.fattureincloud.it.
 *
 * The version of the OpenAPI document: 2.0.1
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CreateCashbookEntryRequest from '../model/CreateCashbookEntryRequest';
import CreateCashbookEntryResponse from '../model/CreateCashbookEntryResponse';
import GetCashbookEntryResponse from '../model/GetCashbookEntryResponse';
import ListCashbookEntriesResponse from '../model/ListCashbookEntriesResponse';
import ModifyCashbookEntryRequest from '../model/ModifyCashbookEntryRequest';
import ModifyCashbookEntryResponse from '../model/ModifyCashbookEntryResponse';

/**
* Cashbook service.
* @module FattureInCloud/api/CashbookApi
* @version 2.0.1
*/
export default class CashbookApi {

    /**
    * Constructs a new CashbookApi. 
    * @alias module:FattureInCloud/api/CashbookApi
    * @class
    * @param {module:FattureInCloud/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:FattureInCloud/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createCashbookEntry operation.
     * @callback module:FattureInCloud/api/CashbookApi~createCashbookEntryCallback
     * @param {String} error Error message, if any.
     * @param {module:FattureInCloud/model/CreateCashbookEntryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Cashbook Entry
     * Creates a new cashbook entry.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:FattureInCloud/model/CreateCashbookEntryRequest} opts.createCashbookEntryRequest Cashbook entry. 
     * @param {module:FattureInCloud/api/CashbookApi~createCashbookEntryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:FattureInCloud/model/CreateCashbookEntryResponse}
     */
    createCashbookEntry(companyId, opts, callback) {
      opts = opts || {};
      let postBody = opts['createCashbookEntryRequest'];
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling createCashbookEntry");
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
      let returnType = CreateCashbookEntryResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/cashbook', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCashbookEntry operation.
     * @callback module:FattureInCloud/api/CashbookApi~deleteCashbookEntryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Cashbook Entry
     * Deletes the specified cashbook entry.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {module:FattureInCloud/api/CashbookApi~deleteCashbookEntryCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteCashbookEntry(companyId, documentId, callback) {
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling deleteCashbookEntry");
      }
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling deleteCashbookEntry");
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
        '/c/{company_id}/cashbook/{document_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCashbookEntry operation.
     * @callback module:FattureInCloud/api/CashbookApi~getCashbookEntryCallback
     * @param {String} error Error message, if any.
     * @param {module:FattureInCloud/model/GetCashbookEntryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Cashbook Entry
     * Gets the specified cashbook entry.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:FattureInCloud/model/String} opts.fieldset Name of the fieldset.
     * @param {module:FattureInCloud/api/CashbookApi~getCashbookEntryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:FattureInCloud/model/GetCashbookEntryResponse}
     */
    getCashbookEntry(companyId, documentId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getCashbookEntry");
      }
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling getCashbookEntry");
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
      let returnType = GetCashbookEntryResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/cashbook/{document_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listCashbookEntries operation.
     * @callback module:FattureInCloud/api/CashbookApi~listCashbookEntriesCallback
     * @param {String} error Error message, if any.
     * @param {module:FattureInCloud/model/ListCashbookEntriesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Cashbook Entries
     * Lists the cashbook entries.
     * @param {Number} companyId The ID of the company.
     * @param {String} dateFrom Start date.
     * @param {String} dateTo End date.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Filter cashbook by year.
     * @param {module:FattureInCloud/model/String} opts.type Filter cashbook by type.
     * @param {Number} opts.paymentAccountId Filter by payment account.
     * @param {module:FattureInCloud/api/CashbookApi~listCashbookEntriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:FattureInCloud/model/ListCashbookEntriesResponse}
     */
    listCashbookEntries(companyId, dateFrom, dateTo, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling listCashbookEntries");
      }
      // verify the required parameter 'dateFrom' is set
      if (dateFrom === undefined || dateFrom === null) {
        throw new Error("Missing the required parameter 'dateFrom' when calling listCashbookEntries");
      }
      // verify the required parameter 'dateTo' is set
      if (dateTo === undefined || dateTo === null) {
        throw new Error("Missing the required parameter 'dateTo' when calling listCashbookEntries");
      }

      let pathParams = {
        'company_id': companyId
      };
      let queryParams = {
        'date_from': dateFrom,
        'date_to': dateTo,
        'year': opts['year'],
        'type': opts['type'],
        'payment_account_id': opts['paymentAccountId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2AuthenticationCodeFlow'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListCashbookEntriesResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/cashbook', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the modifyCashbookEntry operation.
     * @callback module:FattureInCloud/api/CashbookApi~modifyCashbookEntryCallback
     * @param {String} error Error message, if any.
     * @param {module:FattureInCloud/model/ModifyCashbookEntryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify Cashbook Entry
     * Modifies the specified cashbook entry.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:FattureInCloud/model/ModifyCashbookEntryRequest} opts.modifyCashbookEntryRequest Cashbook Entry
     * @param {module:FattureInCloud/api/CashbookApi~modifyCashbookEntryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:FattureInCloud/model/ModifyCashbookEntryResponse}
     */
    modifyCashbookEntry(companyId, documentId, opts, callback) {
      opts = opts || {};
      let postBody = opts['modifyCashbookEntryRequest'];
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling modifyCashbookEntry");
      }
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling modifyCashbookEntry");
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
      let returnType = ModifyCashbookEntryResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/cashbook/{document_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
