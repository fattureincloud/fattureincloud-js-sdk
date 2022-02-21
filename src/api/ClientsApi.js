/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.12
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
* @module api/ClientsApi
* @version 2.0.10
*/
export default class ClientsApi {

    /**
    * Constructs a new ClientsApi. 
    * @alias module:api/ClientsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create Client
     * Creates a new client.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateClientRequest} opts.createClientRequest The client to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateClientResponse} and HTTP response
     */
    createClientWithHttpInfo(companyId, opts) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Client
     * Creates a new client.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateClientRequest} opts.createClientRequest The client to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateClientResponse}
     */
    createClient(companyId, opts) {
      return this.createClientWithHttpInfo(companyId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Client
     * Deletes the specified client.
     * @param {Number} companyId The ID of the company.
     * @param {Number} clientId The ID of the client.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteClientWithHttpInfo(companyId, clientId) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Client
     * Deletes the specified client.
     * @param {Number} companyId The ID of the company.
     * @param {Number} clientId The ID of the client.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteClient(companyId, clientId) {
      return this.deleteClientWithHttpInfo(companyId, clientId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Client
     * Gets the specified client.
     * @param {Number} companyId The ID of the company.
     * @param {Number} clientId The ID of the client.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetClientResponse} and HTTP response
     */
    getClientWithHttpInfo(companyId, clientId, opts) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Client
     * Gets the specified client.
     * @param {Number} companyId The ID of the company.
     * @param {Number} clientId The ID of the client.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetClientResponse}
     */
    getClient(companyId, clientId, opts) {
      return this.getClientWithHttpInfo(companyId, clientId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Clients
     * Lists the clients.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @param {String} opts.sort List of comma-separated fields for result sorting (minus for desc sorting).
     * @param {Number} opts.page The page to retrieve. (default to 1)
     * @param {Number} opts.perPage The size of the page. (default to 5)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListClientsResponse} and HTTP response
     */
    listClientsWithHttpInfo(companyId, opts) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Clients
     * Lists the clients.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @param {String} opts.sort List of comma-separated fields for result sorting (minus for desc sorting).
     * @param {Number} opts.page The page to retrieve. (default to 1)
     * @param {Number} opts.perPage The size of the page. (default to 5)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListClientsResponse}
     */
    listClients(companyId, opts) {
      return this.listClientsWithHttpInfo(companyId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Modify Client
     * Modifies the specified client.
     * @param {Number} companyId The ID of the company.
     * @param {Number} clientId The ID of the client.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyClientRequest} opts.modifyClientRequest The modified Client. First level parameters are managed in delta mode.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModifyClientResponse} and HTTP response
     */
    modifyClientWithHttpInfo(companyId, clientId, opts) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Modify Client
     * Modifies the specified client.
     * @param {Number} companyId The ID of the company.
     * @param {Number} clientId The ID of the client.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyClientRequest} opts.modifyClientRequest The modified Client. First level parameters are managed in delta mode.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModifyClientResponse}
     */
    modifyClient(companyId, clientId, opts) {
      return this.modifyClientWithHttpInfo(companyId, clientId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
