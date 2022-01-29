// MB ON 01/25/22: ADDED BROWSER ROUTER AND GLOBAL STATE. ALSO USING SWITCH FOR HOME (PRODUCTIONLIST AND CART), LOGIN AND SIGNUP.
// ApolloClient:library for JS that enables you to manage data with GraphQL
// InMemoryCache:Data store for Apollo Client
// ApolloProvider: Wraps your React app and places Apollo Client on the context, which enables you to access it from anywhere in your component tree
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
// setContext: tool to authenticate requests sent to backend when user logged-in
import { setContext } from "@apollo/client/link/context";
import React from "react";
import "antd/dist/antd.css";
// importing BrowserRouter to make app a multi-page application
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";

// pages and components imported
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { StoreProvider } from "./utils/GlobalState";
import Contact from "./pages/Contact";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/products/:id" component={Detail} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
            <Footer />
          </StoreProvider>
        </div>
        {/* THIS IS THE PRESET LAYOUT WHEN CREATING A REACT APP..DONT USE */}
        {/* <div className="App"> */}
        {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p> */}
        {/* <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            > */}
        {/* Learn React
            </a> */}
        {/* </header>
        </div> */}
      </Router>
    </ApolloProvider>
  );
}

export default App;
