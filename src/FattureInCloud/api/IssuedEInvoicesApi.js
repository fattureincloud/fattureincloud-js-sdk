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
import SendEInvoiceRequest from '../model/SendEInvoiceRequest';
import SendEInvoiceResponse from '../model/SendEInvoiceResponse';
import VerifyEInvoiceXmlErrorResponse from '../model/VerifyEInvoiceXmlErrorResponse';
import VerifyEInvoiceXmlResponse from '../model/VerifyEInvoiceXmlResponse';

/**
* IssuedEInvoices service.
* @module FattureInCloud/api/IssuedEInvoicesApi
* @version 2.0.1
*/
export default class IssuedEInvoicesApi {

    /**
    * Constructs a new IssuedEInvoicesApi. 
    * @alias module:FattureInCloud/api/IssuedEInvoicesApi
    * @class
    * @param {module:FattureInCloud/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:FattureInCloud/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the sendEInvoice operation.
     * @callback module:FattureInCloud/api/IssuedEInvoicesApi~sendEInvoiceCallback
     * @param {String} error Error message, if any.
     * @param {module:FattureInCloud/model/SendEInvoiceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send the e-invoice
     * Sends the e-invoice to SDI.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {Object} opts Optional parameters
     * @param {module:FattureInCloud/model/SendEInvoiceRequest} opts.sendEInvoiceRequest 
     * @param {module:FattureInCloud/api/IssuedEInvoicesApi~sendEInvoiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:FattureInCloud/model/SendEInvoiceResponse}
     */
    sendEInvoice(companyId, documentId, opts, callback) {
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
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the verifyEInvoiceXml operation.
     * @callback module:FattureInCloud/api/IssuedEInvoicesApi~verifyEInvoiceXmlCallback
     * @param {String} error Error message, if any.
     * @param {module:FattureInCloud/model/VerifyEInvoiceXmlResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Verify e-invoice xml
     * Verifies the e-invoice xml format. Checks if all of the mandatory fields are filled and compliant to the right format.
     * @param {Number} companyId The ID of the company.
     * @param {Number} documentId The ID of the document.
     * @param {module:FattureInCloud/api/IssuedEInvoicesApi~verifyEInvoiceXmlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:FattureInCloud/model/VerifyEInvoiceXmlResponse}
     */
    verifyEInvoiceXml(companyId, documentId, callback) {
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
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
