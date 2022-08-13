import React from 'react';
import { App } from './App'
import { createRoot } from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, from, HttpLink, setContext, operationName } from '@apollo/client';
import Context from './Context';
import { onError } from '@apollo/client/link/error';

const container = document.getElementById('app');
const root = createRoot(container);

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = sessionStorage.getItem('token');
  const authorization = token ? `Bearer ${token}` : ''
  operation.setContext({
    headers: {
      authorization
    }
  })
  return forward(operation)
});

const errorMiddleware = onError(
  ({ networkError }) => {
    if (networkError && networkError.result.code === 'invalid_token') {
      sessionStorage.removeItem('token');
      window.location = '/';
    }
  }
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: 'https://petgram-server-mszjar-qury9j4md-mszjar.vercel.app/graphql', 
    })
  ])
});

root.render(
    <Context.Provider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Context.Provider>
);