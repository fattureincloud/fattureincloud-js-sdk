/**
 * The OAuth2TokenResponse oauth module.
 * @module oauth2/OAuth2TokenResponse
 */
export default class OAuth2TokenResponse {
  /**
     * The token type.
     * @member {String} tokenType
     */
  tokenType

  /**
     * The access token.
     * @member {String} accessToken
     */
  accessToken

  /**
     * The refresh token.
     * @member {String} refreshToken
     */
  refreshToken

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
