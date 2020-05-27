import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from '../NavBar';
import { Masthead } from './Masthead';
import { Features } from './Features';
import { PageWrapper } from 'app/components/PageWrapper';
import { AuthenticationState, AzureAD } from 'react-aad-msal';
import { authProvider } from '../../authProvider';
import { LoadingIndicator } from '../../components/LoadingIndicator';

export function HomePage({store}) {
  return (
    <AzureAD provider={authProvider} reduxStore={store}>
      {({ login, logout, authenticationState, accountInfo }): ReactElement => {
        switch (authenticationState) {
          case AuthenticationState.Authenticated:
            return (
              <>
                <Helmet>
                  <title>Home Page</title>
                  <meta
                    name="description"
                    content="A React Boilerplate application homepage"
                  />
                </Helmet>
                <NavBar />
                <PageWrapper>
                  <Masthead />
                  <Features />
                </PageWrapper>
              </>
            );
          default:
            return (
              <button type="button" onClick={login}>
                LOGIN
              </button>
            );
        }
      }}
    </AzureAD>
  );
}
