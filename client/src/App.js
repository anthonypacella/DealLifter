import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Logo from '../src/components/Logo';
import Nav from '../src/components/Nav';
import Footer from '../src/components/Footer';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import Profile from '../src/pages/Profile';
import Results from '../src/pages/Results';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Logo />
            <Nav />
            <InfoBar />
            <Routes>
              <Route>
                {/*Home*/}
              </Route>
              <Route>
                {/*Login*/}
              </Route>
              <Route>
                {/*Profile*/}
              </Route>
              <Route>
                {/*Results*/}
              </Route>
            </Routes>
            <Footer />
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
