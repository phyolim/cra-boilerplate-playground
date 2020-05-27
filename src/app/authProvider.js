// authProvider.js
import { MsalAuthProvider, LoginType } from 'react-aad-msal';

const config = {
  auth: {
    authority: 'AUTHORITY',
    clientId: 'CLIENT_ID',
    redirectUri: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
    validateAuthority: true,
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: true,
  },
};
const authenticationParameters = {
  scopes: ['openid'],
};

const options = {
  loginType: LoginType.Redirect,
  // When a token is refreshed it will be done by loading a page in an iframe.
  // Rather than reloading the same page, we can point to an empty html file which will prevent
  // site resources from being loaded twice.
};

export const authProvider = new MsalAuthProvider(
  config,
  authenticationParameters,
  options,
);
