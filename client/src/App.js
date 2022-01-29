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
import { Layout, Button, Row, Col } from 'antd';

// importing BrowserRouter to make app a multi-page application
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
// pages and components imported
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { StoreProvider } from "./utils/GlobalState";

const { Header, Sider, Content } = Layout;


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
          <Layout>
          <StoreProvider>
            <Nav />
            <div className="horseHeader">
            <p style={{ color: '#262626', textAlign: 'center', marginTop: '200px', fontSize: '40px', fontFamily: 'fantasy' }}>
              WE GOT HORSEPOWER.
            </p>
            </div>
            <h1 style={{ textAlign: 'center', fontSize: '30px', fontFamily: 'fantasy', color: 'tomato' }}>What We Offer</h1>
            <Row style={{ textAlign: 'center'}}>
              <Col span={8}><img src="https://cdn.businessyab.com/assets/uploads/a71d63722fdd96b5209c836f024a3291_-united-states-north-carolina-wake-county-raleigh-southwest-raleigh-beryl-road-5115-penske-truck-rental-919-773-9416.jpg" alt="moving-truck" style={{ height: '300px', width: '300 px' }}></img><h1>Moving Trucks</h1></Col>
              <Col span={8}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5e295pYKfLy_sh--4qEOuo5trRmWxqy5E9A&usqp=CAU" alt="moving-supplies" style={{ height: '300px', width: '300 px' }}></img><h1>Moving Supplies</h1></Col>
              <Col span={8}><img src="https://rockstarpromovers.com/wp-content/uploads/2021/01/moving-labor-in-los-angeles.png" alt="moving-supplies" style={{ height: '300px', width: '300 px' }}></img><h1>Moving Labor</h1></Col>
            </Row>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </Switch>
            <h1 style={{ textAlign: 'center', fontSize: '30px', fontFamily: 'fantasy', color: 'tomato' }}>What We're Made Of</h1>
            <Row style={{ textAlign: 'center'}}>
              <Col span={8}><img src="https://s19525.pcdn.co/wp-content/uploads/2019/09/community.jpg" alt="Foundation" style={{ height: '300px', width: '300 px' }}></img><h1>Our Foundation</h1><p style={{ fontSize: '20px' }}>We pride ourselves on being able to give back to the community. Thats what keeps our teams strong and morale high.</p></Col>
              <Col span={8}><img src="https://needinc.files.wordpress.com/2018/01/how-to-be-successful-with-weight-loss_1-1024x682.jpg" alt="Dedication" style={{ height: '300px', width: '300 px' }}></img><h1>Our Dedication to Service</h1><p style={{ fontSize: '20px' }}>We bring top notch service for a great price. Our employees stop at nothing to give you the best service possible.</p></Col>
              <Col span={8}><img src="https://www.theridgeep.com/hp_wordpress/wp-content/uploads/2020/06/The-Recruiting-Funnel-Connect-Phase.jpg" alt="Connect" style={{ height: '300px', width: '300 px' }}></img><h1>Connect With Us!</h1><p style={{ fontSize: '20px' }}>Find us on all social medias and see what were all about!</p></Col>
            </Row>
            <Footer />
          </StoreProvider>
          </Layout>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
