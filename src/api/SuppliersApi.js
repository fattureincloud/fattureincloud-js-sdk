/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.16
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import CreateSupplierResponse from '../model/CreateSupplierResponse'
import GetSupplierResponse from '../model/GetSupplierResponse'
import ListSuppliersResponse from '../model/ListSuppliersResponse'
import ModifySupplierResponse from '../model/ModifySupplierResponse'

/**
* Suppliers service.
* @module api/SuppliersApi
* @version 5.0.0
*/
export default class SuppliersApi {
  /**
    * Constructs a new SuppliersApi.
    * @alias module:api/SuppliersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
  constructor (apiClient) {
    this.apiClient = apiClient || ApiClient.instance
  }

  /**
     * Create Supplier
     * Creates a new supplier.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateSupplierRequest} opts.createSupplierRequest The supplier to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateSupplierResponse} and HTTP response
     */
  createSupplierWithHttpInfo (companyId, opts) {
    opts = opts || {}
    const postBody = opts.createSupplierRequest
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling createSupplier")
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
    const returnType = CreateSupplierResponse
    return this.apiClient.callApi(
      '/c/{company_id}/entities/suppliers', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Create Supplier
     * Creates a new supplier.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateSupplierRequest} opts.createSupplierRequest The supplier to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateSupplierResponse}
     */
  createSupplier (companyId, opts) {
    return this.createSupplierWithHttpInfo(companyId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Delete Supplier
     * Deletes the specified supplier.
     * @param {Number} companyId The ID of the company.
     * @param {Number} supplierId The ID of the supplier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  deleteSupplierWithHttpInfo (companyId, supplierId) {
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling deleteSupplier")
    }
    // verify the required parameter 'supplierId' is set
    if (supplierId === undefined || supplierId === null) {
      throw new Error("Missing the required parameter 'supplierId' when calling deleteSupplier")
    }

    const pathParams = {
      company_id: companyId,
      supplier_id: supplierId
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
      '/c/{company_id}/entities/suppliers/{supplier_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Delete Supplier
     * Deletes the specified supplier.
     * @param {Number} companyId The ID of the company.
     * @param {Number} supplierId The ID of the supplier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  deleteSupplier (companyId, supplierId) {
    return this.deleteSupplierWithHttpInfo(companyId, supplierId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Get Supplier
     * Gets the specified supplier.
     * @param {Number} companyId The ID of the company.
     * @param {Number} supplierId The ID of the supplier.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetSupplierResponse} and HTTP response
     */
  getSupplierWithHttpInfo (companyId, supplierId, opts) {
    opts = opts || {}
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling getSupplier")
    }
    // verify the required parameter 'supplierId' is set
    if (supplierId === undefined || supplierId === null) {
      throw new Error("Missing the required parameter 'supplierId' when calling getSupplier")
    }

    const pathParams = {
      company_id: companyId,
      supplier_id: supplierId
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
    const returnType = GetSupplierResponse
    return this.apiClient.callApi(
      '/c/{company_id}/entities/suppliers/{supplier_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Get Supplier
     * Gets the specified supplier.
     * @param {Number} companyId The ID of the company.
     * @param {Number} supplierId The ID of the supplier.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetSupplierResponse}
     */
  getSupplier (companyId, supplierId, opts) {
    return this.getSupplierWithHttpInfo(companyId, supplierId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * List Suppliers
     * Lists the suppliers.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @param {String} opts.sort List of comma-separated fields for result sorting (minus for desc sorting).
     * @param {Number} opts.page The page to retrieve. (default to 1)
     * @param {Number} opts.perPage The size of the page. (default to 5)
     * @param {String} opts.q Query for filtering the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListSuppliersResponse} and HTTP response
     */
  listSuppliersWithHttpInfo (companyId, opts) {
    opts = opts || {}
    const postBody = null
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling listSuppliers")
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
    const returnType = ListSuppliersResponse
    return this.apiClient.callApi(
      '/c/{company_id}/entities/suppliers', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * List Suppliers
     * Lists the suppliers.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @param {String} opts.sort List of comma-separated fields for result sorting (minus for desc sorting).
     * @param {Number} opts.page The page to retrieve. (default to 1)
     * @param {Number} opts.perPage The size of the page. (default to 5)
     * @param {String} opts.q Query for filtering the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSuppliersResponse}
     */
  listSuppliers (companyId, opts) {
    return this.listSuppliersWithHttpInfo(companyId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Modify Supplier
     * Modifies the specified supplier.
     * @param {Number} companyId The ID of the company.
     * @param {Number} supplierId The ID of the supplier.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifySupplierRequest} opts.modifySupplierRequest The modified Supplier. First level parameters are managed in delta mode.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModifySupplierResponse} and HTTP response
     */
  modifySupplierWithHttpInfo (companyId, supplierId, opts) {
    opts = opts || {}
    const postBody = opts.modifySupplierRequest
    // verify the required parameter 'companyId' is set
    if (companyId === undefined || companyId === null) {
      throw new Error("Missing the required parameter 'companyId' when calling modifySupplier")
    }
    // verify the required parameter 'supplierId' is set
    if (supplierId === undefined || supplierId === null) {
      throw new Error("Missing the required parameter 'supplierId' when calling modifySupplier")
    }

    const pathParams = {
      company_id: companyId,
      supplier_id: supplierId
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
    const returnType = ModifySupplierResponse
    return this.apiClient.callApi(
      '/c/{company_id}/entities/suppliers/{supplier_id}', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Modify Supplier
     * Modifies the specified supplier.
     * @param {Number} companyId The ID of the company.
     * @param {Number} supplierId The ID of the supplier.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifySupplierRequest} opts.modifySupplierRequest The modified Supplier. First level parameters are managed in delta mode.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModifySupplierResponse}
     */
  modifySupplier (companyId, supplierId, opts) {
    return this.modifySupplierWithHttpInfo(companyId, supplierId, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }
}
