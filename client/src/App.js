import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import { SchemaLink } from 'apollo-link-schema';

import Logo from './components/Logo';
import Nav from './components/Nav';
import Footer from './components/Footer';
import InfoBar from './components/InfoBar';
// import StoreList from './components/StoreList'
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import Profile from '../src/pages/Profile';
import Results from '../src/pages/Results';
import Signup from './pages/Signup';
import Post from './pages/Post'

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

// commenting out to try and get heroku deployment
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// const client = new ApolloClient({
//   ssrMode: true,
//   // Instead of "createHttpLink" use SchemaLink here
//   link: new SchemaLink({ schema }),
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
            <Nav />
            <Routes>
              <Route exact = 'true' path = '/' element = {
                <div>
                  < Home />
                </div>
              }>
              </Route>
              <Route 
                path="/me" 
                element={<Profile />}
              />
              <Route exact = 'true' path = '/login' element = {
                < Login />
              }>
              </Route>
              <Route exact = 'true' path = '/signup' element = {
                < Signup />
              }>
              </Route>
              <Route exact = 'true' path = '/profile/:userName' element = {
                < Profile />
              }>
              </Route>
              <Route exact = 'true' path = '/results/:keyword' element = {
                < Results />
              }>
              </Route>
              <Route exact = 'true' path = '/post' element = {
                < Post />
              }>
              </Route>
            </Routes>
            <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
