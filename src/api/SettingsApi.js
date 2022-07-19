/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.19
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import CreatePaymentAccountResponse from '../model/CreatePaymentAccountResponse'
import CreatePaymentMethodResponse from '../model/CreatePaymentMethodResponse'
import CreateVatTypeResponse from '../model/CreateVatTypeResponse'
import GetPaymentAccountResponse from '../model/GetPaymentAccountResponse'
import GetPaymentMethodResponse from '../model/GetPaymentMethodResponse'
import GetVatTypeResponse from '../model/GetVatTypeResponse'
import ModifyPaymentAccountResponse from '../model/ModifyPaymentAccountResponse'
import ModifyPaymentMethodResponse from '../model/ModifyPaymentMethodResponse'
import ModifyVatTypeResponse from '../model/ModifyVatTypeResponse'

/**
* Settings service.
* @module api/SettingsApi
* @version 2.0.15
*/
export default class SettingsApi {
  /**
    * Constructs a new SettingsApi.
    * @alias module:api/SettingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
  constructor (apiClient) {
    this.apiClient = apiClient || ApiClient.instance
  }

  /**
     * Create Payment Account
     * Creates a new payment account.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreatePaymentAccountRequest} opts.createPaymentAccountRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreatePaymentAccountResponse} and HTTP response
     */
  createPaymentAccountWithHttpInfo (companyId, opts) {
    opts = opts || {}
    const postBody = opts.createPaymentAccountRequest
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling createPaymentAccount")
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
    const returnType = CreatePaymentAccountResponse
    return this.apiClient.callApi(
      '/c/{company_id}/settings/payment_accounts', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Create Payment Account
     * Creates a new payment account.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreatePaymentAccountRequest} opts.createPaymentAccountRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreatePaymentAccountResponse}
     */
  createPaymentAccount (companyId, opts) {
    return this.createPaymentAccountWithHttpInfo(companyId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Create Payment Method
     * Creates a new payment method.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreatePaymentMethodRequest} opts.createPaymentMethodRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreatePaymentMethodResponse} and HTTP response
     */
  createPaymentMethodWithHttpInfo (companyId, opts) {
    opts = opts || {}
    const postBody = opts.createPaymentMethodRequest
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling createPaymentMethod")
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
    const returnType = CreatePaymentMethodResponse
    return this.apiClient.callApi(
      '/c/{company_id}/settings/payment_methods', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Create Payment Method
     * Creates a new payment method.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreatePaymentMethodRequest} opts.createPaymentMethodRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreatePaymentMethodResponse}
     */
  createPaymentMethod (companyId, opts) {
    return this.createPaymentMethodWithHttpInfo(companyId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Create Vat Type
     * Creates a vat type.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateVatTypeRequest} opts.createVatTypeRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateVatTypeResponse} and HTTP response
     */
  createVatTypeWithHttpInfo (companyId, opts) {
    opts = opts || {}
    const postBody = opts.createVatTypeRequest
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling createVatType")
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
    const returnType = CreateVatTypeResponse
    return this.apiClient.callApi(
      '/c/{company_id}/settings/vat_types', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Create Vat Type
     * Creates a vat type.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateVatTypeRequest} opts.createVatTypeRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateVatTypeResponse}
     */
  createVatType (companyId, opts) {
    return this.createVatTypeWithHttpInfo(companyId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Delete Payment Account
     * Deletes the specified payment account.
     * @param {Number} companyId The ID of the company.
     * @param {Number} paymentAccountId The Referred Payment Account Id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  deletePaymentAccountWithHttpInfo (companyId, paymentAccountId) {
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling deletePaymentAccount")
    }
    // verify the required parameter 'paymentAccountId' is set
    if (paymentAccountId === undefined || paymentAccountId === null) {
      throw new Error("Missing the required parameter 'paymentAccountId' when calling deletePaymentAccount")
    }

    const pathParams = {
      company_id: companyId,
      payment_account_id: paymentAccountId
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
      '/c/{company_id}/settings/payment_accounts/{payment_account_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Delete Payment Account
     * Deletes the specified payment account.
     * @param {Number} companyId The ID of the company.
     * @param {Number} paymentAccountId The Referred Payment Account Id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  deletePaymentAccount (companyId, paymentAccountId) {
    return this.deletePaymentAccountWithHttpInfo(companyId, paymentAccountId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Delete Payment Method
     * Deletes the specified payment method.
     * @param {Number} companyId The ID of the company.
     * @param {Number} paymentMethodId The Referred Payment Method Id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  deletePaymentMethodWithHttpInfo (companyId, paymentMethodId) {
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling deletePaymentMethod")
    }
    // verify the required parameter 'paymentMethodId' is set
    if (paymentMethodId === undefined || paymentMethodId === null) {
      throw new Error("Missing the required parameter 'paymentMethodId' when calling deletePaymentMethod")
    }

    const pathParams = {
      company_id: companyId,
      payment_method_id: paymentMethodId
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
      '/c/{company_id}/settings/payment_methods/{payment_method_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Delete Payment Method
     * Deletes the specified payment method.
     * @param {Number} companyId The ID of the company.
     * @param {Number} paymentMethodId The Referred Payment Method Id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  deletePaymentMethod (companyId, paymentMethodId) {
    return this.deletePaymentMethodWithHttpInfo(companyId, paymentMethodId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Delete Vat Type
     * Deletes the specified vat type.
     * @param {Number} companyId The ID of the company.
     * @param {Number} vatTypeId The Referred Vat Type Id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  deleteVatTypeWithHttpInfo (companyId, vatTypeId) {
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling deleteVatType")
    }
    // verify the required parameter 'vatTypeId' is set
    if (vatTypeId === undefined || vatTypeId === null) {
      throw new Error("Missing the required parameter 'vatTypeId' when calling deleteVatType")
    }

    const pathParams = {
      company_id: companyId,
      vat_type_id: vatTypeId
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
      '/c/{company_id}/settings/vat_types/{vat_type_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Delete Vat Type
     * Deletes the specified vat type.
     * @param {Number} companyId The ID of the company.
     * @param {Number} vatTypeId The Referred Vat Type Id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  deleteVatType (companyId, vatTypeId) {
    return this.deleteVatTypeWithHttpInfo(companyId, vatTypeId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Get Payment Account
     * Gets the specified payment account.
     * @param {Number} companyId The ID of the company.
     * @param {Number} paymentAccountId The Referred Payment Account Id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetPaymentAccountResponse} and HTTP response
     */
  getPaymentAccountWithHttpInfo (companyId, paymentAccountId, opts) {
    opts = opts || {}
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling getPaymentAccount")
    }
    // verify the required parameter 'paymentAccountId' is set
    if (paymentAccountId === undefined || paymentAccountId === null) {
      throw new Error("Missing the required parameter 'paymentAccountId' when calling getPaymentAccount")
    }

    const pathParams = {
      company_id: companyId,
      payment_account_id: paymentAccountId
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
    const returnType = GetPaymentAccountResponse
    return this.apiClient.callApi(
      '/c/{company_id}/settings/payment_accounts/{payment_account_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Get Payment Account
     * Gets the specified payment account.
     * @param {Number} companyId The ID of the company.
     * @param {Number} paymentAccountId The Referred Payment Account Id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetPaymentAccountResponse}
     */
  getPaymentAccount (companyId, paymentAccountId, opts) {
    return this.getPaymentAccountWithHttpInfo(companyId, paymentAccountId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Get Payment Method
     * Gets the specified payment method.
     * @param {Number} companyId The ID of the company.
     * @param {Number} paymentMethodId The Referred Payment Method Id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetPaymentMethodResponse} and HTTP response
     */
  getPaymentMethodWithHttpInfo (companyId, paymentMethodId, opts) {
    opts = opts || {}
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling getPaymentMethod")
    }
    // verify the required parameter 'paymentMethodId' is set
    if (paymentMethodId === undefined || paymentMethodId === null) {
      throw new Error("Missing the required parameter 'paymentMethodId' when calling getPaymentMethod")
    }

    const pathParams = {
      company_id: companyId,
      payment_method_id: paymentMethodId
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
    const returnType = GetPaymentMethodResponse
    return this.apiClient.callApi(
      '/c/{company_id}/settings/payment_methods/{payment_method_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Get Payment Method
     * Gets the specified payment method.
     * @param {Number} companyId The ID of the company.
     * @param {Number} paymentMethodId The Referred Payment Method Id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetPaymentMethodResponse}
     */
  getPaymentMethod (companyId, paymentMethodId, opts) {
    return this.getPaymentMethodWithHttpInfo(companyId, paymentMethodId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Get Vat Type
     * Gets the specified vat type.
     * @param {Number} companyId The ID of the company.
     * @param {Number} vatTypeId The Referred Vat Type Id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetVatTypeResponse} and HTTP response
     */
  getVatTypeWithHttpInfo (companyId, vatTypeId) {
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling getVatType")
    }
    // verify the required parameter 'vatTypeId' is set
    if (vatTypeId === undefined || vatTypeId === null) {
      throw new Error("Missing the required parameter 'vatTypeId' when calling getVatType")
    }

    const pathParams = {
      company_id: companyId,
      vat_type_id: vatTypeId
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
    const returnType = GetVatTypeResponse
    return this.apiClient.callApi(
      '/c/{company_id}/settings/vat_types/{vat_type_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Get Vat Type
     * Gets the specified vat type.
     * @param {Number} companyId The ID of the company.
     * @param {Number} vatTypeId The Referred Vat Type Id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetVatTypeResponse}
     */
  getVatType (companyId, vatTypeId) {
    return this.getVatTypeWithHttpInfo(companyId, vatTypeId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Modify Payment Account
     * Modifies the specified payment account.
     * @param {Number} companyId The ID of the company.
     * @param {Number} paymentAccountId The Referred Payment Account Id.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyPaymentAccountRequest} opts.modifyPaymentAccountRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModifyPaymentAccountResponse} and HTTP response
     */
  modifyPaymentAccountWithHttpInfo (companyId, paymentAccountId, opts) {
    opts = opts || {}
    const postBody = opts.modifyPaymentAccountRequest
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling modifyPaymentAccount")
    }
    // verify the required parameter 'paymentAccountId' is set
    if (paymentAccountId === undefined || paymentAccountId === null) {
      throw new Error("Missing the required parameter 'paymentAccountId' when calling modifyPaymentAccount")
    }

    const pathParams = {
      company_id: companyId,
      payment_account_id: paymentAccountId
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
    const returnType = ModifyPaymentAccountResponse
    return this.apiClient.callApi(
      '/c/{company_id}/settings/payment_accounts/{payment_account_id}', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Modify Payment Account
     * Modifies the specified payment account.
     * @param {Number} companyId The ID of the company.
     * @param {Number} paymentAccountId The Referred Payment Account Id.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyPaymentAccountRequest} opts.modifyPaymentAccountRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModifyPaymentAccountResponse}
     */
  modifyPaymentAccount (companyId, paymentAccountId, opts) {
    return this.modifyPaymentAccountWithHttpInfo(companyId, paymentAccountId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Modify Payment Method
     * Modifies the specified payment method.
     * @param {Number} companyId The ID of the company.
     * @param {Number} paymentMethodId The Referred Payment Method Id.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyPaymentMethodRequest} opts.modifyPaymentMethodRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModifyPaymentMethodResponse} and HTTP response
     */
  modifyPaymentMethodWithHttpInfo (companyId, paymentMethodId, opts) {
    opts = opts || {}
    const postBody = opts.modifyPaymentMethodRequest
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling modifyPaymentMethod")
    }
    // verify the required parameter 'paymentMethodId' is set
    if (paymentMethodId === undefined || paymentMethodId === null) {
      throw new Error("Missing the required parameter 'paymentMethodId' when calling modifyPaymentMethod")
    }

    const pathParams = {
      company_id: companyId,
      payment_method_id: paymentMethodId
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
    const returnType = ModifyPaymentMethodResponse
    return this.apiClient.callApi(
      '/c/{company_id}/settings/payment_methods/{payment_method_id}', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Modify Payment Method
     * Modifies the specified payment method.
     * @param {Number} companyId The ID of the company.
     * @param {Number} paymentMethodId The Referred Payment Method Id.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyPaymentMethodRequest} opts.modifyPaymentMethodRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModifyPaymentMethodResponse}
     */
  modifyPaymentMethod (companyId, paymentMethodId, opts) {
    return this.modifyPaymentMethodWithHttpInfo(companyId, paymentMethodId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Modify Vat Type
     * Modifies the specified vat type.
     * @param {Number} companyId The ID of the company.
     * @param {Number} vatTypeId The Referred Vat Type Id.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyVatTypeRequest} opts.modifyVatTypeRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModifyVatTypeResponse} and HTTP response
     */
  modifyVatTypeWithHttpInfo (companyId, vatTypeId, opts) {
    opts = opts || {}
    const postBody = opts.modifyVatTypeRequest
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling modifyVatType")
    }
    // verify the required parameter 'vatTypeId' is set
    if (vatTypeId === undefined || vatTypeId === null) {
      throw new Error("Missing the required parameter 'vatTypeId' when calling modifyVatType")
    }

    const pathParams = {
      company_id: companyId,
      vat_type_id: vatTypeId
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
    const returnType = ModifyVatTypeResponse
    return this.apiClient.callApi(
      '/c/{company_id}/settings/vat_types/{vat_type_id}', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Modify Vat Type
     * Modifies the specified vat type.
     * @param {Number} companyId The ID of the company.
     * @param {Number} vatTypeId The Referred Vat Type Id.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyVatTypeRequest} opts.modifyVatTypeRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModifyVatTypeResponse}
     */
  modifyVatType (companyId, vatTypeId, opts) {
    return this.modifyVatTypeWithHttpInfo(companyId, vatTypeId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }
}
