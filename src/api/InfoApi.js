/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.15
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ListArchiveCategoriesResponse from '../model/ListArchiveCategoriesResponse';
import ListCitiesResponse from '../model/ListCitiesResponse';
import ListCostCentersResponse from '../model/ListCostCentersResponse';
import ListCountriesResponse from '../model/ListCountriesResponse';
import ListCurrenciesResponse from '../model/ListCurrenciesResponse';
import ListDeliveryNotesDefaultCausalsResponse from '../model/ListDeliveryNotesDefaultCausalsResponse';
import ListDetailedCountriesResponse from '../model/ListDetailedCountriesResponse';
import ListLanguagesResponse from '../model/ListLanguagesResponse';
import ListPaymentAccountsResponse from '../model/ListPaymentAccountsResponse';
import ListPaymentMethodsResponse from '../model/ListPaymentMethodsResponse';
import ListProductCategoriesResponse from '../model/ListProductCategoriesResponse';
import ListReceivedDocumentCategoriesResponse from '../model/ListReceivedDocumentCategoriesResponse';
import ListRevenueCentersResponse from '../model/ListRevenueCentersResponse';
import ListTemplatesResponse from '../model/ListTemplatesResponse';
import ListUnitsOfMeasureResponse from '../model/ListUnitsOfMeasureResponse';
import ListVatTypesResponse from '../model/ListVatTypesResponse';

/**
* Info service.
* @module api/InfoApi
* @version 2.0.12
*/
export default class InfoApi {

    /**
    * Constructs a new InfoApi. 
    * @alias module:api/InfoApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * List Archive Categories
     * Lists the archive categories.
     * @param {Number} companyId The ID of the company.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListArchiveCategoriesResponse} and HTTP response
     */
    listArchiveCategoriesWithHttpInfo(companyId) {
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling listArchiveCategories");
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
      let returnType = ListArchiveCategoriesResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/info/archive_categories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Archive Categories
     * Lists the archive categories.
     * @param {Number} companyId The ID of the company.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListArchiveCategoriesResponse}
     */
    listArchiveCategories(companyId) {
      return this.listArchiveCategoriesWithHttpInfo(companyId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Cities
     * Lists the Italian cities.
     * @param {Object} opts Optional parameters
     * @param {String} opts.postalCode Postal code for filtering.
     * @param {String} opts.city City for filtering (ignored if postal_code is passed).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListCitiesResponse} and HTTP response
     */
    listCitiesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'postal_code': opts['postalCode'],
        'city': opts['city']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2AuthenticationCodeFlow'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListCitiesResponse;
      return this.apiClient.callApi(
        '/info/cities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Cities
     * Lists the Italian cities.
     * @param {Object} opts Optional parameters
     * @param {String} opts.postalCode Postal code for filtering.
     * @param {String} opts.city City for filtering (ignored if postal_code is passed).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCitiesResponse}
     */
    listCities(opts) {
      return this.listCitiesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Cost Centers
     * Lists the cost centers.
     * @param {Number} companyId The ID of the company.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListCostCentersResponse} and HTTP response
     */
    listCostCentersWithHttpInfo(companyId) {
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling listCostCenters");
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
      let returnType = ListCostCentersResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/info/cost_centers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Cost Centers
     * Lists the cost centers.
     * @param {Number} companyId The ID of the company.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCostCentersResponse}
     */
    listCostCenters(companyId) {
      return this.listCostCentersWithHttpInfo(companyId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Countries
     * Lists the supported countries.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListCountriesResponse} and HTTP response
     */
    listCountriesWithHttpInfo() {
      let postBody = null;

      let pathParams = {
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
      let returnType = ListCountriesResponse;
      return this.apiClient.callApi(
        '/info/countries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Countries
     * Lists the supported countries.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCountriesResponse}
     */
    listCountries() {
      return this.listCountriesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Currencies
     * Lists the supported currencies.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListCurrenciesResponse} and HTTP response
     */
    listCurrenciesWithHttpInfo() {
      let postBody = null;

      let pathParams = {
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
      let returnType = ListCurrenciesResponse;
      return this.apiClient.callApi(
        '/info/currencies', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Currencies
     * Lists the supported currencies.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCurrenciesResponse}
     */
    listCurrencies() {
      return this.listCurrenciesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Delivery Notes Default Causals
     * Lists the delivery note default causals.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListDeliveryNotesDefaultCausalsResponse} and HTTP response
     */
    listDeliveryNotesDefaultCausalsWithHttpInfo() {
      let postBody = null;

      let pathParams = {
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
      let returnType = ListDeliveryNotesDefaultCausalsResponse;
      return this.apiClient.callApi(
        '/info/dn_causals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Delivery Notes Default Causals
     * Lists the delivery note default causals.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListDeliveryNotesDefaultCausalsResponse}
     */
    listDeliveryNotesDefaultCausals() {
      return this.listDeliveryNotesDefaultCausalsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Detailed Countries
     * Lists the supported countries.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListDetailedCountriesResponse} and HTTP response
     */
    listDetailedCountriesWithHttpInfo() {
      let postBody = null;

      let pathParams = {
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
      let returnType = ListDetailedCountriesResponse;
      return this.apiClient.callApi(
        '/info/detailed_countries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Detailed Countries
     * Lists the supported countries.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListDetailedCountriesResponse}
     */
    listDetailedCountries() {
      return this.listDetailedCountriesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Languages
     * Lists the supported languages.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListLanguagesResponse} and HTTP response
     */
    listLanguagesWithHttpInfo() {
      let postBody = null;

      let pathParams = {
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
      let returnType = ListLanguagesResponse;
      return this.apiClient.callApi(
        '/info/languages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Languages
     * Lists the supported languages.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListLanguagesResponse}
     */
    listLanguages() {
      return this.listLanguagesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Payment Accounts
     * Lists the available payment accounts.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @param {String} opts.sort List of comma-separated fields for result sorting (minus for desc sorting).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListPaymentAccountsResponse} and HTTP response
     */
    listPaymentAccountsWithHttpInfo(companyId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling listPaymentAccounts");
      }

      let pathParams = {
        'company_id': companyId
      };
      let queryParams = {
        'fields': opts['fields'],
        'fieldset': opts['fieldset'],
        'sort': opts['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2AuthenticationCodeFlow'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListPaymentAccountsResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/info/payment_accounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Payment Accounts
     * Lists the available payment accounts.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @param {String} opts.sort List of comma-separated fields for result sorting (minus for desc sorting).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListPaymentAccountsResponse}
     */
    listPaymentAccounts(companyId, opts) {
      return this.listPaymentAccountsWithHttpInfo(companyId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Payment Methods
     * Lists the available payment methods.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @param {String} opts.sort List of comma-separated fields for result sorting (minus for desc sorting).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListPaymentMethodsResponse} and HTTP response
     */
    listPaymentMethodsWithHttpInfo(companyId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling listPaymentMethods");
      }

      let pathParams = {
        'company_id': companyId
      };
      let queryParams = {
        'fields': opts['fields'],
        'fieldset': opts['fieldset'],
        'sort': opts['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2AuthenticationCodeFlow'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListPaymentMethodsResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/info/payment_methods', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Payment Methods
     * Lists the available payment methods.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields List of comma-separated fields.
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @param {String} opts.sort List of comma-separated fields for result sorting (minus for desc sorting).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListPaymentMethodsResponse}
     */
    listPaymentMethods(companyId, opts) {
      return this.listPaymentMethodsWithHttpInfo(companyId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Product Categories
     * Lists the product categories.
     * @param {Number} companyId The ID of the company.
     * @param {module:model/String} context 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListProductCategoriesResponse} and HTTP response
     */
    listProductCategoriesWithHttpInfo(companyId, context) {
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling listProductCategories");
      }
      // verify the required parameter 'context' is set
      if (context === undefined || context === null) {
        throw new Error("Missing the required parameter 'context' when calling listProductCategories");
      }

      let pathParams = {
        'company_id': companyId
      };
      let queryParams = {
        'context': context
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2AuthenticationCodeFlow'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListProductCategoriesResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/info/product_categories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Product Categories
     * Lists the product categories.
     * @param {Number} companyId The ID of the company.
     * @param {module:model/String} context 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListProductCategoriesResponse}
     */
    listProductCategories(companyId, context) {
      return this.listProductCategoriesWithHttpInfo(companyId, context)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Received Document Categories
     * Lists the received document categories.
     * @param {Number} companyId The ID of the company.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListReceivedDocumentCategoriesResponse} and HTTP response
     */
    listReceivedDocumentCategoriesWithHttpInfo(companyId) {
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling listReceivedDocumentCategories");
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
      let returnType = ListReceivedDocumentCategoriesResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/info/received_document_categories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Received Document Categories
     * Lists the received document categories.
     * @param {Number} companyId The ID of the company.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListReceivedDocumentCategoriesResponse}
     */
    listReceivedDocumentCategories(companyId) {
      return this.listReceivedDocumentCategoriesWithHttpInfo(companyId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Revenue Centers
     * Lists the revenue centers.
     * @param {Number} companyId The ID of the company.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListRevenueCentersResponse} and HTTP response
     */
    listRevenueCentersWithHttpInfo(companyId) {
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling listRevenueCenters");
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
      let returnType = ListRevenueCentersResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/info/revenue_centers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Revenue Centers
     * Lists the revenue centers.
     * @param {Number} companyId The ID of the company.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListRevenueCentersResponse}
     */
    listRevenueCenters(companyId) {
      return this.listRevenueCentersWithHttpInfo(companyId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Templates
     * Lists the available templates.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type Type of the templates. (default to 'all')
     * @param {Boolean} opts.byType [Only if type=all] If true, splits the list in objects, grouping templates by type. (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListTemplatesResponse} and HTTP response
     */
    listTemplatesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'type': opts['type'],
        'by_type': opts['byType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2AuthenticationCodeFlow'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListTemplatesResponse;
      return this.apiClient.callApi(
        '/info/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Templates
     * Lists the available templates.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type Type of the templates. (default to 'all')
     * @param {Boolean} opts.byType [Only if type=all] If true, splits the list in objects, grouping templates by type. (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListTemplatesResponse}
     */
    listTemplates(opts) {
      return this.listTemplatesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Units of Measure
     * Lists the units of measure.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListUnitsOfMeasureResponse} and HTTP response
     */
    listUnitsOfMeasureWithHttpInfo() {
      let postBody = null;

      let pathParams = {
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
      let returnType = ListUnitsOfMeasureResponse;
      return this.apiClient.callApi(
        '/info/measures', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Units of Measure
     * Lists the units of measure.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUnitsOfMeasureResponse}
     */
    listUnitsOfMeasure() {
      return this.listUnitsOfMeasureWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Vat Types
     * Lists the available vat types.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListVatTypesResponse} and HTTP response
     */
    listVatTypesWithHttpInfo(companyId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling listVatTypes");
      }

      let pathParams = {
        'company_id': companyId
      };
      let queryParams = {
        'fieldset': opts['fieldset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2AuthenticationCodeFlow'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListVatTypesResponse;
      return this.apiClient.callApi(
        '/c/{company_id}/info/vat_types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Vat Types
     * Lists the available vat types.
     * @param {Number} companyId The ID of the company.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.fieldset Name of the fieldset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListVatTypesResponse}
     */
    listVatTypes(companyId, opts) {
      return this.listVatTypesWithHttpInfo(companyId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
