import React, { Component } from "react";
import styled, { injectGlobal } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import reset from "styled-reset";
import typography from "./typography";
import Header from "Components/Header";
import Blocks from "Routes/Blocks";
import Home from "Routes/Home";
import Transactions from "Routes/Transactions";
import Block from "Routes/Block";
import Transaction from "Routes/Transaction";
import Address from "Routes/Address";

const baseStyles = () => injectGlobal`
  ${reset};
  ${typography};
  a{
    text-decoration:none;
    color:inherit;
  }
  h1,h2{
    margin:0!important;
  }
`;

const AppContainer = styled.div`
  background-color: #f2f6fa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;

const Main = styled.main`
  max-width: 1000px;
  width: 100%;
  @media screen and (max-width: 600px) {
    width: 95%;
  }
`;

class App extends Component {
  render() {
    baseStyles();
    return (
      <BrowserRouter>
        <AppContainer>
          <Header />
          <Main>
            <Switch>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/`}
                component={Home}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/blocks`}
                component={Blocks}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/transactions`}
                component={Transactions}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/blocks/:index`}
                component={Block}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/transactions/:id`}
                component={Transaction}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/addresses/:address`}
                component={Address}
              />
            </Switch>
          </Main>
        </AppContainer>
      </BrowserRouter>
    );
  }
}

export default App;
