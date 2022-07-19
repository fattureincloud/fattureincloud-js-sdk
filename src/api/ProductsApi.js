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
import CreateProductResponse from '../model/CreateProductResponse'
import GetProductResponse from '../model/GetProductResponse'
import ListProductsResponse from '../model/ListProductsResponse'
import ModifyProductResponse from '../model/ModifyProductResponse'

/**
* Products service.
* @module api/ProductsApi
* @version 2.0.15
*/
export default class ProductsApi {
  /**
    * Constructs a new ProductsApi.
    * @alias module:api/ProductsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
  constructor (apiClient) {
    this.apiClient = apiClient || ApiClient.instance
  }

  /**
     * Create Product
     * Creates a new product.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateProductRequest} opts.createProductRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateProductResponse} and HTTP response
     */
  createProductWithHttpInfo (companyId, opts) {
    opts = opts || {}
    const postBody = opts.createProductRequest
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling createProduct")
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
    const returnType = CreateProductResponse
    return this.apiClient.callApi(
      '/c/{company_id}/products', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Create Product
     * Creates a new product.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateProductRequest} opts.createProductRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateProductResponse}
     */
  createProduct (companyId, opts) {
    return this.createProductWithHttpInfo(companyId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Delete Product
     * Deletes the specified product.
     * @param {Number} companyId The ID of the company.
     * @param {Number} productId The ID of the product.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  deleteProductWithHttpInfo (companyId, productId) {
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling deleteProduct")
    }
    // verify the required parameter 'productId' is set
    if (productId === undefined || productId === null) {
      throw new Error("Missing the required parameter 'productId' when calling deleteProduct")
    }

    const pathParams = {
      company_id: companyId,
      product_id: productId
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
      '/c/{company_id}/products/{product_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Delete Product
     * Deletes the specified product.
     * @param {Number} companyId The ID of the company.
     * @param {Number} productId The ID of the product.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  deleteProduct (companyId, productId) {
    return this.deleteProductWithHttpInfo(companyId, productId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Get Product
     * Gets the specified product.
     * @param {Number} companyId The ID of the company.
     * @param {Number} productId The ID of the product.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProductResponse} and HTTP response
     */
  getProductWithHttpInfo (companyId, productId, opts) {
    opts = opts || {}
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling getProduct")
    }
    // verify the required parameter 'productId' is set
    if (productId === undefined || productId === null) {
      throw new Error("Missing the required parameter 'productId' when calling getProduct")
    }

    const pathParams = {
      company_id: companyId,
      product_id: productId
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
    const returnType = GetProductResponse
    return this.apiClient.callApi(
      '/c/{company_id}/products/{product_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Get Product
     * Gets the specified product.
     * @param {Number} companyId The ID of the company.
     * @param {Number} productId The ID of the product.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProductResponse}
     */
  getProduct (companyId, productId, opts) {
    return this.getProductWithHttpInfo(companyId, productId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * List Products
     * Lists the products.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @param {String} opts.sort List of comma-separated fields for result sorting (minus for desc sorting).
     * @param {Number} opts.page The page to retrieve. (default to 1)
     * @param {Number} opts.perPage The size of the page. (default to 5)
     * @param {String} opts.q Query for filtering the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListProductsResponse} and HTTP response
     */
  listProductsWithHttpInfo (companyId, opts) {
    opts = opts || {}
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling listProducts")
    }

    const pathParams = {
      company_id: companyId
    }
    const queryParams = {
      fields: opts.fields,
      fieldset: opts.fieldset,
      sort: opts.sort,
      page: opts.page,
      per_page: opts.perPage,
      q: opts.q
    }
    const headerParams = {
    }
    const formParams = {
    }

    const authNames = ['OAuth2AuthenticationCodeFlow']
    const contentTypes = []
    const accepts = ['application/json']
    const returnType = ListProductsResponse
    return this.apiClient.callApi(
      '/c/{company_id}/products', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * List Products
     * Lists the products.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @param {String} opts.sort List of comma-separated fields for result sorting (minus for desc sorting).
     * @param {Number} opts.page The page to retrieve. (default to 1)
     * @param {Number} opts.perPage The size of the page. (default to 5)
     * @param {String} opts.q Query for filtering the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListProductsResponse}
     */
  listProducts (companyId, opts) {
    return this.listProductsWithHttpInfo(companyId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Modify Product
     * Modifies the specified product.
     * @param {Number} companyId The ID of the company.
     * @param {Number} productId The ID of the product.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyProductRequest} opts.modifyProductRequest Modified product details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModifyProductResponse} and HTTP response
     */
  modifyProductWithHttpInfo (companyId, productId, opts) {
    opts = opts || {}
    const postBody = opts.modifyProductRequest
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling modifyProduct")
    }
    // verify the required parameter 'productId' is set
    if (productId === undefined || productId === null) {
      throw new Error("Missing the required parameter 'productId' when calling modifyProduct")
    }

    const pathParams = {
      company_id: companyId,
      product_id: productId
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
    const returnType = ModifyProductResponse
    return this.apiClient.callApi(
      '/c/{company_id}/products/{product_id}', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Modify Product
     * Modifies the specified product.
     * @param {Number} companyId The ID of the company.
     * @param {Number} productId The ID of the product.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyProductRequest} opts.modifyProductRequest Modified product details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModifyProductResponse}
     */
  modifyProduct (companyId, productId, opts) {
    return this.modifyProductWithHttpInfo(companyId, productId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }
}
