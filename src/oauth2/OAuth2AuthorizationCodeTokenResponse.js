/**
 * The OAuth2AuthorizationCodeTokenResponse oauth module.
 * @module oauth2/OAuth2AuthorizationCodeTokenResponse
 */
export default class OAuth2AuthorizationCodeTokenResponse {
  /**
     * The client id.
     * @member {String} tokenType
     */
  tokenType

  /**
     * The client secret.
     * @member {String} accessToken
     */
  accessToken

  /**
     * The redirect uri.
     * @member {String} refreshToken
     */
  redirectUri

  /**
     * The expire time.
     * @member {String} expiresIn
     */
  expiresIn

  /**
     * Constructs a new <code>OAuth2AuthorizationCodeTokenResponse</code>.
     * @param {String} tokenType The token type.
     * @param {String} accessToken The access token.
     * @param {String} refreshToken The refresh token.
     * @param {Int} expiresIn The expire time.
     */
  constructor (tokenType, accessToken, refreshToken, expiresIn) {
    this.tokenType = tokenType
    this.accessToken = accessToken
    this.refreshToken = refreshToken
    this.expiresIn = expiresIn
  }
}
