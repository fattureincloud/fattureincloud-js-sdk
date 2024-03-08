/**
 * The OAuth2DeviceCodeResponse oauth module.
 * @module oauth2/OAuth2DeviceCodeResponse
 */
export default class OAuth2DeviceCodeResponse {
  /**
     * The device code.
     * @member {String} deviceCode
     */
  deviceCode

  /**
     * The user code.
     * @member {String} userCode
     */
  userCode

  /**
     * The scope.
     * @member {Object.<String, String>} scope
     */
  scope

  /**
     * The verification uri.
     * @member {String} verificationUri
     */
  verificationUri

  /**
     * The interval.
     * @member {String} interval
     */
  interval

  /**
     * The expire time.
     * @member {String} expiresIn
     */
  expiresIn

  /**
     * Constructs a new <code>OAuth2DeviceCodeTokenResponse</code>.
     * @param {String} deviceCode The device code.
     * @param {String} userCode The user code.
     * @param {Object.<String, String>} scope The scope.
     * @param {String} verificationUri The verification uri.
     * @param {Int} interval The interval.
     * @param {Int} expiresIn The expire time.
     */
  constructor (deviceCode, userCode, scope, verificationUri, interval, expiresIn) {
    this.deviceCode = deviceCode
    this.userCode = userCode
    this.scope = scope
    this.verificationUri = verificationUri
    this.interval = interval
    this.expiresIn = expiresIn
  }
}
