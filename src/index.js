/* import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App'

ReactDOM.render(<App />, document.getElementById('app')); */

import React from 'react';
import { App } from './App'
import { createRoot } from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
const container = document.getElementById('app');
const root = createRoot(container);

const client = new ApolloClient({
    uri: 'https://petgram-server-mszjar-qury9j4md-mszjar.vercel.app/graphql',
    cache: new InMemoryCache()
});

root.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
);