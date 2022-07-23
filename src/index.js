/* import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App'

ReactDOM.render(<App />, document.getElementById('app')); */

import React from 'react';
import { App } from './App'
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'; 
root.render(<App />);
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
  } from '@apollo/client'

  const client = new ApolloClient({
    uri: 'https://curso-platzi-react-avanzado-git-master-mszjar.vercel.app/',
    cache: new InMemoryCache()
  })

  root.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('app')
  )