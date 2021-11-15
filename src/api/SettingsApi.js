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
import CreatePaymentAccountRequest from '../model/CreatePaymentAccountRequest';
import CreatePaymentAccountResponse from '../model/CreatePaymentAccountResponse';
import CreatePaymentMethodRequest from '../model/CreatePaymentMethodRequest';
import CreatePaymentMethodResponse from '../model/CreatePaymentMethodResponse';
import GetPaymentAccountResponse from '../model/GetPaymentAccountResponse';
import GetPaymentMethodResponse from '../model/GetPaymentMethodResponse';
import ModifyPaymentAccountRequest from '../model/ModifyPaymentAccountRequest';
import ModifyPaymentAccountResponse from '../model/ModifyPaymentAccountResponse';
import ModifyPaymentMethodRequest from '../model/ModifyPaymentMethodRequest';
import ModifyPaymentMethodResponse from '../model/ModifyPaymentMethodResponse';

/**
* Settings service.
* @module api/SettingsApi
* @version 2.0.3
*/
export default class SettingsApi {

    /**
    * Constructs a new SettingsApi. 
    * @alias module:api/SettingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create Payment Account
     * Creates a new payment account.
     * @param {Number} company_id The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreatePaymentAccountRequest} opts.CreatePaymentAccountRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreatePaymentAccountResponse} and HTTP response
     */
    createPaymentAccountWithHttpInfo(company_id, opts) {
      opts = opts || {};
      let postBody = opts['CreatePaymentAccountRequest'];
      // verify the required parameter 'company_id' is set
      if (company_id === undefined || company_id === null) {
        throw new Error("Missing the required parameter 'company_id' when calling createPaymentAccount");
      }

      let pathParams = {
        'company_id': company_id
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
      let returnType = CreatePaymentAccountResponse;
      return this.apiClient.callApi(
        '/c/{companyId}/settings/payment_accounts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Payment Account
     * Creates a new payment account.
     * @param {Number} company_id The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreatePaymentAccountRequest} opts.CreatePaymentAccountRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreatePaymentAccountResponse}
     */
    createPaymentAccount(company_id, opts) {
      return this.createPaymentAccountWithHttpInfo(company_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create Payment Method
     * Creates a new payment method.
     * @param {Number} company_id The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreatePaymentMethodRequest} opts.CreatePaymentMethodRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreatePaymentMethodResponse} and HTTP response
     */
    createPaymentMethodWithHttpInfo(company_id, opts) {
      opts = opts || {};
      let postBody = opts['CreatePaymentMethodRequest'];
      // verify the required parameter 'company_id' is set
      if (company_id === undefined || company_id === null) {
        throw new Error("Missing the required parameter 'company_id' when calling createPaymentMethod");
      }

      let pathParams = {
        'company_id': company_id
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
      let returnType = CreatePaymentMethodResponse;
      return this.apiClient.callApi(
        '/c/{companyId}/settings/payment_methods', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Payment Method
     * Creates a new payment method.
     * @param {Number} company_id The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreatePaymentMethodRequest} opts.CreatePaymentMethodRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreatePaymentMethodResponse}
     */
    createPaymentMethod(company_id, opts) {
      return this.createPaymentMethodWithHttpInfo(company_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Payment Account
     * Deletes the specified payment account.
     * @param {Number} company_id The ID of the company.
     * @param {String} paymentAccountId The Referred Payment Account Id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deletePaymentAccountWithHttpInfo(company_id, paymentAccountId) {
      let postBody = null;
      // verify the required parameter 'company_id' is set
      if (company_id === undefined || company_id === null) {
        throw new Error("Missing the required parameter 'company_id' when calling deletePaymentAccount");
      }
      // verify the required parameter 'paymentAccountId' is set
      if (paymentAccountId === undefined || paymentAccountId === null) {
        throw new Error("Missing the required parameter 'paymentAccountId' when calling deletePaymentAccount");
      }

      let pathParams = {
        'company_id': company_id,
        'paymentAccountId': paymentAccountId
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
        '/c/{companyId}/settings/payment_accounts/{paymentAccountId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Payment Account
     * Deletes the specified payment account.
     * @param {Number} company_id The ID of the company.
     * @param {String} paymentAccountId The Referred Payment Account Id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deletePaymentAccount(company_id, paymentAccountId) {
      return this.deletePaymentAccountWithHttpInfo(company_id, paymentAccountId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Payment Method
     * Deletes the specified payment method.
     * @param {Number} company_id The ID of the company.
     * @param {Number} paymentMethodId The Referred Payment Method Id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deletePaymentMethodWithHttpInfo(company_id, paymentMethodId) {
      let postBody = null;
      // verify the required parameter 'company_id' is set
      if (company_id === undefined || company_id === null) {
        throw new Error("Missing the required parameter 'company_id' when calling deletePaymentMethod");
      }
      // verify the required parameter 'paymentMethodId' is set
      if (paymentMethodId === undefined || paymentMethodId === null) {
        throw new Error("Missing the required parameter 'paymentMethodId' when calling deletePaymentMethod");
      }

      let pathParams = {
        'company_id': company_id,
        'paymentMethodId': paymentMethodId
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
        '/c/{companyId}/settings/payment_method/{paymentMethodId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Payment Method
     * Deletes the specified payment method.
     * @param {Number} company_id The ID of the company.
     * @param {Number} paymentMethodId The Referred Payment Method Id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deletePaymentMethod(company_id, paymentMethodId) {
      return this.deletePaymentMethodWithHttpInfo(company_id, paymentMethodId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Payment Account
     * Gets the specified payment account.
     * @param {Number} company_id The ID of the company.
     * @param {String} paymentAccountId The Referred Payment Account Id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetPaymentAccountResponse} and HTTP response
     */
    getPaymentAccountWithHttpInfo(company_id, paymentAccountId, opts) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'company_id' is set
      if (company_id === undefined || company_id === null) {
        throw new Error("Missing the required parameter 'company_id' when calling getPaymentAccount");
      }
      // verify the required parameter 'paymentAccountId' is set
      if (paymentAccountId === undefined || paymentAccountId === null) {
        throw new Error("Missing the required parameter 'paymentAccountId' when calling getPaymentAccount");
      }

      let pathParams = {
        'company_id': company_id,
        'paymentAccountId': paymentAccountId
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetPaymentAccountResponse;
      return this.apiClient.callApi(
        '/c/{companyId}/settings/payment_accounts/{paymentAccountId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Payment Account
     * Gets the specified payment account.
     * @param {Number} company_id The ID of the company.
     * @param {String} paymentAccountId The Referred Payment Account Id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetPaymentAccountResponse}
     */
    getPaymentAccount(company_id, paymentAccountId, opts) {
      return this.getPaymentAccountWithHttpInfo(company_id, paymentAccountId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Payment Method
     * Gets the specified payment method.
     * @param {Number} company_id The ID of the company.
     * @param {Number} paymentMethodId The Referred Payment Method Id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetPaymentMethodResponse} and HTTP response
     */
    getPaymentMethodWithHttpInfo(company_id, paymentMethodId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'company_id' is set
      if (company_id === undefined || company_id === null) {
        throw new Error("Missing the required parameter 'company_id' when calling getPaymentMethod");
      }
      // verify the required parameter 'paymentMethodId' is set
      if (paymentMethodId === undefined || paymentMethodId === null) {
        throw new Error("Missing the required parameter 'paymentMethodId' when calling getPaymentMethod");
      }

      let pathParams = {
        'company_id': company_id,
        'paymentMethodId': paymentMethodId
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
      let returnType = GetPaymentMethodResponse;
      return this.apiClient.callApi(
        '/c/{companyId}/settings/payment_method/{paymentMethodId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Payment Method
     * Gets the specified payment method.
     * @param {Number} company_id The ID of the company.
     * @param {Number} paymentMethodId The Referred Payment Method Id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetPaymentMethodResponse}
     */
    getPaymentMethod(company_id, paymentMethodId, opts) {
      return this.getPaymentMethodWithHttpInfo(company_id, paymentMethodId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Modify Payment Account
     * Modifies the specified payment account.
     * @param {Number} company_id The ID of the company.
     * @param {String} paymentAccountId The Referred Payment Account Id.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyPaymentAccountRequest} opts.ModifyPaymentAccountRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModifyPaymentAccountResponse} and HTTP response
     */
    modifyPaymentAccountWithHttpInfo(company_id, paymentAccountId, opts) {
      opts = opts || {};
      let postBody = opts['ModifyPaymentAccountRequest'];
      // verify the required parameter 'company_id' is set
      if (company_id === undefined || company_id === null) {
        throw new Error("Missing the required parameter 'company_id' when calling modifyPaymentAccount");
      }
      // verify the required parameter 'paymentAccountId' is set
      if (paymentAccountId === undefined || paymentAccountId === null) {
        throw new Error("Missing the required parameter 'paymentAccountId' when calling modifyPaymentAccount");
      }

      let pathParams = {
        'company_id': company_id,
        'paymentAccountId': paymentAccountId
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
      let returnType = ModifyPaymentAccountResponse;
      return this.apiClient.callApi(
        '/c/{companyId}/settings/payment_accounts/{paymentAccountId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Modify Payment Account
     * Modifies the specified payment account.
     * @param {Number} company_id The ID of the company.
     * @param {String} paymentAccountId The Referred Payment Account Id.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyPaymentAccountRequest} opts.ModifyPaymentAccountRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModifyPaymentAccountResponse}
     */
    modifyPaymentAccount(company_id, paymentAccountId, opts) {
      return this.modifyPaymentAccountWithHttpInfo(company_id, paymentAccountId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Modify Payment Method
     * Modifies the specified payment method.
     * @param {Number} company_id The ID of the company.
     * @param {Number} paymentMethodId The Referred Payment Method Id.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyPaymentMethodRequest} opts.ModifyPaymentMethodRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModifyPaymentMethodResponse} and HTTP response
     */
    modifyPaymentMethodWithHttpInfo(company_id, paymentMethodId, opts) {
      opts = opts || {};
      let postBody = opts['ModifyPaymentMethodRequest'];
      // verify the required parameter 'company_id' is set
      if (company_id === undefined || company_id === null) {
        throw new Error("Missing the required parameter 'company_id' when calling modifyPaymentMethod");
      }
      // verify the required parameter 'paymentMethodId' is set
      if (paymentMethodId === undefined || paymentMethodId === null) {
        throw new Error("Missing the required parameter 'paymentMethodId' when calling modifyPaymentMethod");
      }

      let pathParams = {
        'company_id': company_id,
        'paymentMethodId': paymentMethodId
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
      let returnType = ModifyPaymentMethodResponse;
      return this.apiClient.callApi(
        '/c/{companyId}/settings/payment_method/{paymentMethodId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Modify Payment Method
     * Modifies the specified payment method.
     * @param {Number} company_id The ID of the company.
     * @param {Number} paymentMethodId The Referred Payment Method Id.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyPaymentMethodRequest} opts.ModifyPaymentMethodRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModifyPaymentMethodResponse}
     */
    modifyPaymentMethod(company_id, paymentMethodId, opts) {
      return this.modifyPaymentMethodWithHttpInfo(company_id, paymentMethodId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
