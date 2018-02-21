import React, { Component } from "react";
import styled, { injectGlobal } from "styled-components";
import typography from "./typography";
import Header from "Header";
import { BrowserRouter } from "react-router-dom";
import reset from "styled-reset";

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
      <AppContainer>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AppContainer>
    );
  }
}

export default App;
