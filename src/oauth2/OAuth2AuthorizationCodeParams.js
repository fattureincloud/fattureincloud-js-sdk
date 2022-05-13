/**
 * The OAuth2AuthorizationCodeParams oauth module.
 * @module oauth2/OAuth2AuthorizationCodeParams
 */
export default class OAuth2AuthorizationCodeParams {
  /**
     * The authorization code.
     * @member {String} authorizationCode
     */
  authorizationCode

  /**
     * The state.
     * @member {String} state
     */
  state

  /**
     * Constructs a new <code>OAuth2AuthorizationCodeParams</code>.
     * @param {String} authorizationCode The authorization code.
     * @param {String} state The state.
     */
  constructor (authorizationCode, state) {
    this.authorizationCode = authorizationCode
    this.state = state
  }
}
