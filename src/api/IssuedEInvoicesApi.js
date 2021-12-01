/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.6
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import SendEInvoiceRequest from '../model/SendEInvoiceRequest';
import SendEInvoiceResponse from '../model/SendEInvoiceResponse';
import VerifyEInvoiceXmlErrorResponse from '../model/VerifyEInvoiceXmlErrorResponse';
import VerifyEInvoiceXmlResponse from '../model/VerifyEInvoiceXmlResponse';

/**
* IssuedEInvoices service.
* @module api/IssuedEInvoicesApi
* @version 2.0.4
*/
export default class IssuedEInvoicesApi {

    /**
    * Constructs a new IssuedEInvoicesApi. 
    * @alias module:api/IssuedEInvoicesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Send the e-invoice
     * Sends the e-invoice to SDI.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/SendEInvoiceRequest} opts.sendEInvoiceRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendEInvoiceResponse} and HTTP response
     */
    sendEInvoiceWithHttpInfo(companyId, documentId, opts) {
      opts = opts || {};
      let postBody = opts['sendEInvoiceRequest'];
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling sendEInvoice");
      }
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling sendEInvoice");
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
      let returnType = SendEInvoiceResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/issued_documents/{document_id}/e_invoice/send', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Send the e-invoice
     * Sends the e-invoice to SDI.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/SendEInvoiceRequest} opts.sendEInvoiceRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendEInvoiceResponse}
     */
    sendEInvoice(companyId, documentId, opts) {
      return this.sendEInvoiceWithHttpInfo(companyId, documentId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Verify e-invoice xml
     * Verifies the e-invoice xml format. Checks if all of the mandatory fields are filled and compliant to the right format.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VerifyEInvoiceXmlResponse} and HTTP response
     */
    verifyEInvoiceXmlWithHttpInfo(companyId, documentId) {
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling verifyEInvoiceXml");
      }
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling verifyEInvoiceXml");
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
      let accepts = ['application/json'];
      let returnType = VerifyEInvoiceXmlResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/issued_documents/{document_id}/e_invoice/xml_verify', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Verify e-invoice xml
     * Verifies the e-invoice xml format. Checks if all of the mandatory fields are filled and compliant to the right format.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VerifyEInvoiceXmlResponse}
     */
    verifyEInvoiceXml(companyId, documentId) {
      return this.verifyEInvoiceXmlWithHttpInfo(companyId, documentId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
