import React, { useLayoutEffect } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './components/styles/Header.css'
import { Layout } from 'antd';

// import Navbar from './components/Navbar';
import Header from './components/Header';
//import Card from './components/Card';
import Footer from './components/Footer';

const client = new ApolloClient ({
  uri: '/graphql',
  cache: new InMemoryCache(),
});
// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
// I can place <Navbar /> and  <Card /> inside that <div> in return below but they are deleted for npw
function App() {
  return (
    <Layout style={{background: '#096dd9'}}>
      <ApolloProvider client = {client}>
        <>
      <div>
      <Header /> 
        
      </div>
      <Footer />
      </>
      </ApolloProvider>
    </Layout>
  );
}

export default App;
