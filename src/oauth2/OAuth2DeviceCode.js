import OAuth2DeviceCodeResponse from './OAuth2DeviceCodeResponse'
import OAuth2Manager from './OAuth2'

/**
 * The OAuth2DeviceCodeManager oauth module.
 * @module oauth2/OAuth2DeviceCodeManager
 */
export default class OAuth2DeviceCodeManager extends OAuth2Manager {
  /**
     * Constructs a new <code>OAuth2DeviceCodeManager</code>.
     * @param {String} clientId The client id.
     * @param {String} baseUri The base uri.
     */
  constructor (clientId, baseUri = 'https://api-v2.fattureincloud.it') {
    super(clientId, baseUri)
  }

  /**
   * Gets the device code to init the flow.
   * @param {Array.<oauth2/Scope>} scopes The scopes.
   * @returns {Promise} - A promise that resolves with the device code response.
   */
  getDeviceCode (scopes) {
    const tokenUri = `${this.baseUri}/oauth/device`
    const scopeStr = OAuth2DeviceCodeManager.getScopeString(scopes)

    const data = {
      client_id: this.clientId,
      scope: scopeStr
    }

    return this.tokenRequest(tokenUri, data, this.mapToDeviceCodeResponse)
  }

  /**
   * Fetches the token using the provided device code.
   * @param {string} code - The device code.
   * @returns {Promise} - A promise that resolves with the token response.
   */
  fetchToken (code) {
    const tokenUri = `${this.baseUri}/oauth/token`

    const data = {
      grant_type: 'urn:ietf:params:oauth:grant-type:device_code',
      client_id: this.clientId,
      device_code: code
    }

    return this.tokenRequest(tokenUri, data, this.mapToTokenResponse)
  }

  /**
   * Refreshes the access token using the provided refresh token.
   * @param {string} refreshToken - The refresh token to use for token refresh.
   * @returns {Promise} - A promise that resolves with the refreshed access token.
   */
  refreshToken (refreshToken) {
    const tokenUri = `${this.baseUri}/oauth/token`

    const data = {
      grant_type: 'refresh_token',
      client_id: this.clientId,
      refresh_token: refreshToken
    }

    return this.tokenRequest(tokenUri, data, this.mapToTokenResponse)
  }

  mapToDeviceCodeResponse (body) {
    return new OAuth2DeviceCodeResponse(body.data.device_code, body.data.user_code, body.data.scope, body.data.verification_uri, body.data.interval, body.data.expires_in)
  }
}
