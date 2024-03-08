import superagent from 'superagent'
import OAuth2TokenResponse from './OAuth2TokenResponse'

/**
 * The OAuth2Manager oauth module.
 * @module oauth2/OAuth2Manager
 */
export default class OAuth2Manager {
  /**
     * The client id.
     * @member {String} clientId
     */
  clientId

  /**
     * The base uri.
     * @member {String} baseUri
     */
  baseUri = 'https://api-v2.fattureincloud.it'

  /**
     * Constructs a new <code>OAuth2Manager</code>.
     * @param {String} clientId The client id.
     * @param {String} baseUri The base uri.
     */
  constructor (clientId, baseUri = 'https://api-v2.fattureincloud.it') {
    this.clientId = clientId
    this.baseUri = baseUri
  }

  tokenRequest (uri, data, mapFunc) {
    return superagent.post(uri).send(data)
      .then(({ body }) => {
        return mapFunc(body)
      })
      .catch(e => {
        throw new Error(e.response.text)
      })
  }

  mapToTokenResponse (body) {
    return new OAuth2TokenResponse(body.token_type, body.access_token, body.refresh_token, body.expires_in)
  }

  static getScopeString (scopes) {
    return scopes.map(scope => scope.toString()).join(' ')
  }
}
