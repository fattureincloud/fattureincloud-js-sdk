/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.31
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import CreateWebhooksSubscriptionResponse from '../model/CreateWebhooksSubscriptionResponse'
import GetWebhooksSubscriptionResponse from '../model/GetWebhooksSubscriptionResponse'
import ListWebhooksSubscriptionsResponse from '../model/ListWebhooksSubscriptionsResponse'
import ModifyWebhooksSubscriptionResponse from '../model/ModifyWebhooksSubscriptionResponse'

/**
* Webhooks service.
* @module api/WebhooksApi
* @version 2.0.24
*/
export default class WebhooksApi {
  /**
    * Constructs a new WebhooksApi.
    * @alias module:api/WebhooksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
  constructor (apiClient) {
    this.apiClient = apiClient || ApiClient.instance
  }

  /**
     * Create a Webhook Subscription
     * Register some webhooks Subscriptions.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateWebhooksSubscriptionRequest} [createWebhooksSubscriptionRequest]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateWebhooksSubscriptionResponse} and HTTP response
     */
  createWebhooksSubscriptionWithHttpInfo (companyId, opts) {
    opts = opts || {}
    const postBody = opts.createWebhooksSubscriptionRequest
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling createWebhooksSubscription")
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
    const returnType = CreateWebhooksSubscriptionResponse
    return this.apiClient.callApi(
      '/c/{company_id}/subscriptions', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Create a Webhook Subscription
     * Register some webhooks Subscriptions.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateWebhooksSubscriptionRequest} opts.createWebhooksSubscriptionRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateWebhooksSubscriptionResponse}
     */
  createWebhooksSubscription (companyId, opts) {
    return this.createWebhooksSubscriptionWithHttpInfo(companyId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Delete Webhooks Subscription
     * Delete a webhooks subscription.
     * @param {Number} companyId The ID of the company.
     * @param {String} subscriptionId The ID of the subscription.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  deleteWebhooksSubscriptionWithHttpInfo (companyId, subscriptionId) {
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling deleteWebhooksSubscription")
    }
    // verify the required parameter 'subscriptionId' is set
    if (subscriptionId === undefined || subscriptionId === null) {
      throw new Error("Missing the required parameter 'subscriptionId' when calling deleteWebhooksSubscription")
    }

    const pathParams = {
      company_id: companyId,
      subscription_id: subscriptionId
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
      '/c/{company_id}/subscriptions/{subscription_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Delete Webhooks Subscription
     * Delete a webhooks subscription.
     * @param {Number} companyId The ID of the company.
     * @param {String} subscriptionId The ID of the subscription.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  deleteWebhooksSubscription (companyId, subscriptionId) {
    return this.deleteWebhooksSubscriptionWithHttpInfo(companyId, subscriptionId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Get Webhooks Subscription
     * Get a webhooks subscription.
     * @param {Number} companyId The ID of the company.
     * @param {String} subscriptionId The ID of the subscription.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetWebhooksSubscriptionResponse} and HTTP response
     */
  getWebhooksSubscriptionWithHttpInfo (companyId, subscriptionId) {
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling getWebhooksSubscription")
    }
    // verify the required parameter 'subscriptionId' is set
    if (subscriptionId === undefined || subscriptionId === null) {
      throw new Error("Missing the required parameter 'subscriptionId' when calling getWebhooksSubscription")
    }

    const pathParams = {
      company_id: companyId,
      subscription_id: subscriptionId
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
    const returnType = GetWebhooksSubscriptionResponse
    return this.apiClient.callApi(
      '/c/{company_id}/subscriptions/{subscription_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Get Webhooks Subscription
     * Get a webhooks subscription.
     * @param {Number} companyId The ID of the company.
     * @param {String} subscriptionId The ID of the subscription.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetWebhooksSubscriptionResponse}
     */
  getWebhooksSubscription (companyId, subscriptionId) {
    return this.getWebhooksSubscriptionWithHttpInfo(companyId, subscriptionId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * List Webhooks Subscriptions
     * List active webhooks subscriptions.
     * @param {Number} companyId The ID of the company.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListWebhooksSubscriptionsResponse} and HTTP response
     */
  listWebhooksSubscriptionsWithHttpInfo (companyId) {
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling listWebhooksSubscriptions")
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
    const contentTypes = []
    const accepts = ['application/json']
    const returnType = ListWebhooksSubscriptionsResponse
    return this.apiClient.callApi(
      '/c/{company_id}/subscriptions', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * List Webhooks Subscriptions
     * List active webhooks subscriptions.
     * @param {Number} companyId The ID of the company.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListWebhooksSubscriptionsResponse}
     */
  listWebhooksSubscriptions (companyId) {
    return this.listWebhooksSubscriptionsWithHttpInfo(companyId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Modify Webhooks Subscription
     * Edit a webhooks subscription.
     * @param {Number} companyId The ID of the company.
     * @param {String} subscriptionId The ID of the subscription.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyWebhooksSubscriptionRequest} [modifyWebhooksSubscriptionRequest]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModifyWebhooksSubscriptionResponse} and HTTP response
     */
  modifyWebhooksSubscriptionWithHttpInfo (companyId, subscriptionId, opts) {
    opts = opts || {}
    const postBody = opts.modifyWebhooksSubscriptionRequest
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling modifyWebhooksSubscription")
    }
    // verify the required parameter 'subscriptionId' is set
    if (subscriptionId === undefined || subscriptionId === null) {
      throw new Error("Missing the required parameter 'subscriptionId' when calling modifyWebhooksSubscription")
    }

    const pathParams = {
      company_id: companyId,
      subscription_id: subscriptionId
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
    const returnType = ModifyWebhooksSubscriptionResponse
    return this.apiClient.callApi(
      '/c/{company_id}/subscriptions/{subscription_id}', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Modify Webhooks Subscription
     * Edit a webhooks subscription.
     * @param {Number} companyId The ID of the company.
     * @param {String} subscriptionId The ID of the subscription.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyWebhooksSubscriptionRequest} opts.modifyWebhooksSubscriptionRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModifyWebhooksSubscriptionResponse}
     */
  modifyWebhooksSubscription (companyId, subscriptionId, opts) {
    return this.modifyWebhooksSubscriptionWithHttpInfo(companyId, subscriptionId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }
}
