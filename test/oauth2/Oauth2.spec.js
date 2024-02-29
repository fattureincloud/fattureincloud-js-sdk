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

  let authCodeMngr, devCodeMngr
  beforeEach(function () {
    authCodeMngr = new fattureInCloudSdk.OAuth2AuthorizationCodeManager('CLIENT_ID', 'CLIENT_SECRET', 'http://localhost:3000/redirect')
    devCodeMngr = new fattureInCloudSdk.OAuth2DeviceCodeManager('CLIENT_ID')
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
      expect(authCodeMngr).to.be.a(fattureInCloudSdk.OAuth2AuthorizationCodeManager)
      expect(authCodeMngr.clientId).to.equal('CLIENT_ID')
      expect(authCodeMngr.clientSecret).to.equal('CLIENT_SECRET')
      expect(authCodeMngr.redirectUri).to.equal('http://localhost:3000/redirect')
      expect(authCodeMngr.baseUri).to.equal('https://api-v2.fattureincloud.it')

      authCodeMngr.clientId = 'CLIENT_ID_2'
      expect(authCodeMngr.clientId).to.equal('CLIENT_ID_2')
      authCodeMngr.clientSecret = 'CLIENT_SECRET_2'
      expect(authCodeMngr.clientSecret).to.equal('CLIENT_SECRET_2')
      authCodeMngr.redirectUri = 'http://localhost:3000/redirect_2'
      expect(authCodeMngr.redirectUri).to.equal('http://localhost:3000/redirect_2')
      authCodeMngr.baseUri = 'https://api-v2.fattureincloud.it_2'
      expect(authCodeMngr.baseUri).to.equal('https://api-v2.fattureincloud.it_2')
    })

    it('should create an instance of OAuth2DeviceCodeManager', function () {
      expect(devCodeMngr).to.be.a(fattureInCloudSdk.OAuth2DeviceCodeManager)
      expect(devCodeMngr.clientId).to.equal('CLIENT_ID')
      expect(devCodeMngr.baseUri).to.equal('https://api-v2.fattureincloud.it')

      devCodeMngr.clientId = 'CLIENT_ID_2'
      expect(devCodeMngr.clientId).to.equal('CLIENT_ID_2')
      devCodeMngr.baseUri = 'https://api-v2.fattureincloud.it_2'
      expect(devCodeMngr.baseUri).to.equal('https://api-v2.fattureincloud.it_2')
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

    it('should create an instance of OAuth2TokenResponse', function () {
      const params = new fattureInCloudSdk.OAuth2TokenResponse('bearer', 'EXAMPLE_ACCESS_TOKEN', 'EXAMPLE_REFRESH_TOKEN', 86400)
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

    it('should create an instance of OAuth2DeviceCodeResponse', function () {
      const scope = {
        situation: 'r',
        settings: 'a'
      }
      const params = new fattureInCloudSdk.OAuth2DeviceCodeResponse('papaya', 'lion', scope, 'https://fattureincloud.it/connetti', 5, 300)
      expect(params.deviceCode).to.equal('papaya')
      expect(params.userCode).to.equal('lion')
      expect(params.scope).to.equal(scope)
      expect(params.verificationUri).to.equal('https://fattureincloud.it/connetti')
      expect(params.interval).to.equal(5)
      expect(params.expiresIn).to.equal(300)

      params.deviceCode = 'mango'
      expect(params.deviceCode).to.equal('mango')
      params.userCode = 'teddy'
      expect(params.userCode).to.equal('teddy')
      params.scope = {
        situation: 'a',
        settings: 'r'
      }
      expect(params.scope).to.equal({
        situation: 'a',
        settings: 'r'
      })
      params.interval = 10
      expect(params.interval).to.equal(10)
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

      const url = authCodeMngr.getAuthorizationUrl(scopes, 'EXAMPLE_STATE')
      expect(url).to.equal('https://api-v2.fattureincloud.it/oauth/authorize?response_type=code&client_id=CLIENT_ID&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fredirect&scope=settings%3Aa+issued_documents.invoices%3Ar&state=EXAMPLE_STATE')
    })
  })
}))
