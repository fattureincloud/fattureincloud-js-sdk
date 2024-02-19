import superagent from 'superagent'
import OAuth2AuthorizationCodeParams from './OAuth2AuthorizationCodeParams'
import OAuth2AuthorizationCodeTokenResponse from './OAuth2AuthorizationCodeTokenResponse'
/**
 * The OAuth2AuthorizationCodeManager oauth module.
 * @module oauth2/OAuth2AuthorizationCodeManager
 */
export default class OAuth2AuthorizationCodeManager {
  /**
     * The client id.
     * @member {String} clientId
     */
  clientId

  /**
     * The client secret.
     * @member {String} clientSecret
     */
  clientSecret

  /**
     * The redirect uri.
     * @member {String} redirectUri
     */
  redirectUri

  /**
     * The base uri.
     * @member {String} baseUri
     */
  baseUri = 'https://api-v2.fattureincloud.it'

  /**
     * Constructs a new <code>OAuth2AuthorizationCodeManager</code>.
     * @param {String} clientId The client id.
     * @param {String} clientSecret The client secret.
     * @param {String} redirectUri The redirect uri.
     * @param {String} baseUri The base uri.
     */
  constructor (clientId, clientSecret, redirectUri, baseUri = 'https://api-v2.fattureincloud.it') {
    this.clientId = clientId
    this.clientSecret = clientSecret
    this.redirectUri = redirectUri
    this.baseUri = baseUri
  }

  /**
     * Get the authorization url.
     * @param {Array.<oauth2/Scope>} scopes The scopes.
     * @return {String} The query.
     */
  getAuthorizationUrl (scopes, state) {
    const authorizationUri = `${this.baseUri}/oauth/authorize`
    const scopeStr = OAuth2AuthorizationCodeManager.getScopeString(scopes)

    const params = {
      response_type: 'code',
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
      scope: scopeStr,
      state
    }
    const query = new URLSearchParams(params).toString()

    return `${authorizationUri}?${query}`
  }

  /**
   * Extracts parameters from a URL and returns an OAuth2AuthorizationCodeParams object.
   * @param {string} url - The URL containing the parameters.
   * @returns {OAuth2AuthorizationCodeParams} - The OAuth2AuthorizationCodeParams object containing the extracted parameters.
   */
  getParamsFromUrl (url) {
    const query = url.split('?')[1]
    const params = new URLSearchParams(query)

    return new OAuth2AuthorizationCodeParams(params.get('code'), params.get('state'))
  }

  /**
   * Fetches the token using the provided authorization code.
   * @param {string} code - The authorization code.
   * @returns {Promise} - A promise that resolves with the token response.
   */
  fetchToken (code) {
    const tokenUri = `${this.baseUri}/oauth/token`

    const data = {
      grant_type: 'authorization_code',
      client_id: this.clientId,
      client_secret: this.clientSecret,
      redirect_uri: this.redirectUri,
      code
    }

    return this.tokenRequest(tokenUri, data)
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
      client_secret: this.clientSecret,
      refresh_token: refreshToken
    }

    return this.tokenRequest(tokenUri, data)
  }

  tokenRequest (uri, data) {
    return superagent.post(uri).send(data)
      .then(({ body }) => {
        return new OAuth2AuthorizationCodeTokenResponse(body.token_type, body.access_token, body.refresh_token, body.expires_in)
      })
      .catch(e => {
        throw new Error(e.response.text)
      })
  }

  static getScopeString (scopes) {
    return scopes.map(scope => scope.toString()).join(' ')
  }
}
