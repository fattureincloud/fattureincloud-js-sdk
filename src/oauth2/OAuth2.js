import superagent from "superagent";
import OAuth2AuthorizationCodeParams from "./OAuth2AuthorizationCodeParams";
import OAuth2AuthorizationCodeTokenResponse from "./OAuth2AuthorizationCodeTokenResponse";
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
    constructor(clientId, clientSecret, redirectUri, baseUri = 'https://api-v2.fattureincloud.it') {
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
    getAuthorizationUrl(scopes, state) {

        var authorizationUri = `${this.baseUri}/oauth/authorize`
        var scopeStr = OAuth2AuthorizationCodeManager.getScopeString(scopes)

        var params = {
            response_type: 'code',
            client_id: this.clientId,
            redirect_uri: this.redirectUri,
            scope: scopeStr,
            state: state
        }
        var query = new URLSearchParams(params).toString()

        return `${authorizationUri}?${query}`
    }

    getParamsFromUrl(url) {
        var query = url.split('?')[1];
        var params = new URLSearchParams(query);

        return new OAuth2AuthorizationCodeParams(params.get('code'), params.get('state'))
    }

    fetchToken(code) {
        var tokenUri = `${this.baseUri}/oauth/token`

        var data = {
            grant_type: 'authorization_code',
            client_id: this.clientId,
            client_secret: this.clientSecret,
            redirect_uri: this.redirectUri,
            code: code
        }

        var res = this.tokenRequest(tokenUri, data)
        return res
    }

    refreshToken(refreshToken) {
        var tokenUri = `${this.baseUri}/oauth/token`

        var data = {
            grant_type: 'refresh_token',
            client_id: this.clientId,
            client_secret: this.clientSecret,
            refresh_token: refreshToken
        }

        var res = this.tokenRequest(tokenUri, data)
        return new OAuth2AuthorizationCodeTokenResponse(res.token_type, res.access_token, res.refresh_token, res.expires_in)
    }

    tokenRequest(uri, data) {
        return superagent.post(uri).send(data)
            .then(d => {
                return d.body;
            })
            .catch(e => {
                throw new Error(e.response.text)
            })
    }

    static getScopeString(scopes) {
        return scopes.map(scope => scope.toString()).join(' ');
    }

}