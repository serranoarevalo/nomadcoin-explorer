import React, { Component } from "react";
import styled, { injectGlobal } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import reset from "styled-reset";
import typography from "./typography";
import Header from "Components/Header";
import Blocks from "Routes/Blocks";
import Home from "Routes/Home";
import Status from "Routes/Status";
import Transactions from "Routes/Transactions";

const baseStyles = () => injectGlobal`
  ${reset};
  ${typography};
  a{
    text-decoration:none;
  }
`;

const AppContainer = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
`;

class App extends Component {
  render() {
    baseStyles();
    return (
      <BrowserRouter>
        <AppContainer>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blocks" component={Blocks} />
            <Route exact path="/transactions" component={Transactions} />
            <Route exact path="/network-status" component={Status} />
          </Switch>
        </AppContainer>
      </BrowserRouter>
    );
  }
}

export default App;
