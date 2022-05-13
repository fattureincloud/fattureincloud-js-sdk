/**

 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd() + '/src/index'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd() + '/src/index'))
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.fattureInCloudSdk)
  }
}(this, function (expect, fattureInCloudSdk) {
  'use strict'

  let oauth
  beforeEach(function () {
    oauth = new fattureInCloudSdk.OAuth2AuthorizationCodeManager('CLIENT_ID', 'CLIENT_SECRET', 'http://localhost:3000/redirect')
  })

  // const getProperty = function (object, getter, property) {
  //   // Use getter method if present; otherwise, get the property directly.
  //   if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
  // }

  // const setProperty = function (object, setter, property, value) {
  //   // Use setter method if present; otherwise, set the property directly.
  //   if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
  // }

  describe('test Oauth class', function () {
    it('should create an instance of OAuth2AuthorizationCodeManager', function () {
      expect(oauth).to.be.a(fattureInCloudSdk.OAuth2AuthorizationCodeManager)
      expect(oauth.clientId).to.equal('CLIENT_ID')
      expect(oauth.clientSecret).to.equal('CLIENT_SECRET')
      expect(oauth.redirectUri).to.equal('http://localhost:3000/redirect')
      expect(oauth.baseUri).to.equal('https://api-v2.fattureincloud.it')

      oauth.clientId = 'CLIENT_ID_2'
      expect(oauth.clientId).to.equal('CLIENT_ID_2')
      oauth.clientSecret = 'CLIENT_SECRET_2'
      expect(oauth.clientSecret).to.equal('CLIENT_SECRET_2')
      oauth.redirectUri = 'http://localhost:3000/redirect_2'
      expect(oauth.redirectUri).to.equal('http://localhost:3000/redirect_2')
      oauth.baseUri = 'https://api-v2.fattureincloud.it_2'
      expect(oauth.baseUri).to.equal('https://api-v2.fattureincloud.it_2')
    })

    it('should create an instance of OAuth2AuthorizationCodeParams', function () {
      const params = new fattureInCloudSdk.OAuth2AuthorizationCodeParams('EXAMPLE_CODE', 'EXAMPLE_STATE')
      expect(params.authorizationCode).to.equal('EXAMPLE_CODE')
      expect(params.state).to.equal('EXAMPLE_STATE')

      params.authorizationCode = 'EXAMPLE_CODE_2'
      expect(params.authorizationCode).to.equal('EXAMPLE_CODE_2')
      params.state = 'EXAMPLE_STATE_2'
      expect(params.state).to.equal('EXAMPLE_STATE_2')
    })

    it('should create an instance of OAuth2AuthorizationCodeTokenResponse', function () {
      const params = new fattureInCloudSdk.OAuth2AuthorizationCodeTokenResponse('bearer', 'EXAMPLE_ACCESS_TOKEN', 'EXAMPLE_REFRESH_TOKEN', 86400)
      expect(params.tokenType).to.equal('bearer')
      expect(params.accessToken).to.equal('EXAMPLE_ACCESS_TOKEN')
      expect(params.refreshToken).to.equal('EXAMPLE_REFRESH_TOKEN')
      expect(params.expiresIn).to.equal(86400)

      params.tokenType = 'basic'
      expect(params.tokenType).to.equal('basic')
      params.accessToken = 'EXAMPLE_ACCESS_TOKEN_2'
      expect(params.accessToken).to.equal('EXAMPLE_ACCESS_TOKEN_2')
      params.refreshToken = 'EXAMPLE_REFRESH_TOKEN_2'
      expect(params.refreshToken).to.equal('EXAMPLE_REFRESH_TOKEN_2')
      params.expiresIn = 86401
      expect(params.expiresIn).to.equal(86401)
    })

    it('test method "getScopeString"', function () {
      const scopes = [
        fattureInCloudSdk.Scope.ENTITY_SUPPLIERS_READ,
        fattureInCloudSdk.Scope.ISSUED_DOCUMENTS_INVOICES_READ
      ]

      const scopeStr = fattureInCloudSdk.OAuth2AuthorizationCodeManager.getScopeString(scopes)
      expect(scopeStr).to.equal('entity.suppliers:r issued_documents.invoices:r')
    })

    it('test method "getAuthorizationUrl"', function () {
      const scopes = [
        fattureInCloudSdk.Scope.SETTINGS_ALL,
        fattureInCloudSdk.Scope.ISSUED_DOCUMENTS_INVOICES_READ
      ]

      const url = oauth.getAuthorizationUrl(scopes, 'EXAMPLE_STATE')
      expect(url).to.equal('https://api-v2.fattureincloud.it/oauth/authorize?response_type=code&client_id=CLIENT_ID&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fredirect&scope=settings%3Aa+issued_documents.invoices%3Ar&state=EXAMPLE_STATE')
    })
  })
}))
