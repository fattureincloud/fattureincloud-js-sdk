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
import GetCompanyInfoResponse from '../model/GetCompanyInfoResponse';

/**
* Companies service.
* @module api/CompaniesApi
* @version 2.0.3
*/
export default class CompaniesApi {

    /**
    * Constructs a new CompaniesApi. 
    * @alias module:api/CompaniesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get Company Info
     * Gets the company detailed info.
     * @param {Number} companyId The ID of the company.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetCompanyInfoResponse} and HTTP response
     */
    getCompanyInfoWithHttpInfo(companyId) {
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getCompanyInfo");
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
      let returnType = GetCompanyInfoResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/company/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Company Info
     * Gets the company detailed info.
     * @param {Number} companyId The ID of the company.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetCompanyInfoResponse}
     */
    getCompanyInfo(companyId) {
      return this.getCompanyInfoWithHttpInfo(companyId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
