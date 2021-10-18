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
import CreateClientRequest from '../model/CreateClientRequest';
import CreateClientResponse from '../model/CreateClientResponse';
import GetClientResponse from '../model/GetClientResponse';
import ListClientsResponse from '../model/ListClientsResponse';
import ModifyClientRequest from '../model/ModifyClientRequest';
import ModifyClientResponse from '../model/ModifyClientResponse';

/**
* Clients service.
* @module FattureInCloud/api/ClientsApi
* @version 2.0.1
*/
export default class ClientsApi {

    /**
    * Constructs a new ClientsApi. 
    * @alias module:FattureInCloud/api/ClientsApi
    * @class
    * @param {module:FattureInCloud/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:FattureInCloud/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createClient operation.
     * @callback module:FattureInCloud/api/ClientsApi~createClientCallback
     * @param {String} error Error message, if any.
     * @param {module:FattureInCloud/model/CreateClientResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Client
     * Creates a new client.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:FattureInCloud/model/CreateClientRequest} opts.createClientRequest The client to create
     * @param {module:FattureInCloud/api/ClientsApi~createClientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:FattureInCloud/model/CreateClientResponse}
     */
    createClient(companyId, opts, callback) {
      opts = opts || {};
      let postBody = opts['createClientRequest'];
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling createClient");
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
      let returnType = CreateClientResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/entities/clients', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteClient operation.
     * @callback module:FattureInCloud/api/ClientsApi~deleteClientCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Client
     * Deletes the specified client.
     * @param {Number} companyId The ID of the company.
     * @param {Number} clientId The ID of the client.
     * @param {module:FattureInCloud/api/ClientsApi~deleteClientCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteClient(companyId, clientId, callback) {
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling deleteClient");
      }
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling deleteClient");
      }

      let pathParams = {
        'company_id': companyId,
        'client_id': clientId
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
        '/c/{company_id}/entities/clients/{client_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getClient operation.
     * @callback module:FattureInCloud/api/ClientsApi~getClientCallback
     * @param {String} error Error message, if any.
     * @param {module:FattureInCloud/model/GetClientResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Client
     * Gets the specified client.
     * @param {Number} companyId The ID of the company.
     * @param {Number} clientId The ID of the client.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:FattureInCloud/model/String} opts.fieldset Name of the fieldset.
     * @param {module:FattureInCloud/api/ClientsApi~getClientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:FattureInCloud/model/GetClientResponse}
     */
    getClient(companyId, clientId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getClient");
      }
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling getClient");
      }

      let pathParams = {
        'company_id': companyId,
        'client_id': clientId
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
      let returnType = GetClientResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/entities/clients/{client_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listClients operation.
     * @callback module:FattureInCloud/api/ClientsApi~listClientsCallback
     * @param {String} error Error message, if any.
     * @param {module:FattureInCloud/model/ListClientsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Clients
     * Lists the clients.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:FattureInCloud/model/String} opts.fieldset Name of the fieldset.
     * @param {String} opts.sort List of comma-separated fields for result sorting (minus for desc sorting).
     * @param {Number} opts.page The page to retrieve. (default to 1)
     * @param {Number} opts.perPage The size of the page. (default to 5)
     * @param {module:FattureInCloud/api/ClientsApi~listClientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:FattureInCloud/model/ListClientsResponse}
     */
    listClients(companyId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling listClients");
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
      let returnType = ListClientsResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/entities/clients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the modifyClient operation.
     * @callback module:FattureInCloud/api/ClientsApi~modifyClientCallback
     * @param {String} error Error message, if any.
     * @param {module:FattureInCloud/model/ModifyClientResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify Client
     * Modifies the specified client.
     * @param {Number} companyId The ID of the company.
     * @param {Number} clientId The ID of the client.
     * @param {Object} opts Optional parameters
     * @param {module:FattureInCloud/model/ModifyClientRequest} opts.modifyClientRequest The modified Client. First level parameters are managed in delta mode.
     * @param {module:FattureInCloud/api/ClientsApi~modifyClientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:FattureInCloud/model/ModifyClientResponse}
     */
    modifyClient(companyId, clientId, opts, callback) {
      opts = opts || {};
      let postBody = opts['modifyClientRequest'];
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling modifyClient");
      }
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling modifyClient");
      }

      let pathParams = {
        'company_id': companyId,
        'client_id': clientId
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
      let returnType = ModifyClientResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/entities/clients/{client_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
