import React, { Component } from "react";
import axios from "axios";
import AddressPresenter from "./AddressPresenter";

class AddressContainer extends Component {
  state = {
    isLoading: true
  };
  render() {
    return <AddressPresenter {...this.state} />;
  }
}

export default AddressContainer;
