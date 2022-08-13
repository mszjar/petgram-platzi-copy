import React from 'react';
import { App } from './App'
import { createRoot } from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Context from './Context';
import { setContext } from '@apollo/client';

const container = document.getElementById('app');
const root = createRoot(container);

const client = new ApolloClient({
    uri: 'https://petgram-server-mszjar-qury9j4md-mszjar.vercel.app/graphql',
    cache: new InMemoryCache(),
    request: operation => {
      const token = window.sessionStorage.getItem('token')
      const authorization = token ? `Bearer ${token}` : ''
      operation.setContext({
        headers: {
          authorization
        }
      })
    },
    onError: error => {
      const { networkError } = error
      if (networkError && networkError.result.code === 'invalid_token') {
        window.sessionStorage.removeItem('token')
        window.location.href = '/'
      }
    }
});

root.render(
    <Context.Provider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Context.Provider>
);