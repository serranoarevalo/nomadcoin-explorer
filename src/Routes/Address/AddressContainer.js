import React, { Component } from "react";
import axios from "axios";
import { HTTP_URL } from "../../constants";
import AddressPresenter from "./AddressPresenter";

class AddressContainer extends Component {
  state = {
    isLoading: true
  };
  componentDidMount = () => {
    const { match: { params: { address } } } = this.props;
    this._getBalance(address);
  };
  render() {
    const { match: { params: { address } } } = this.props;
    return <AddressPresenter {...this.state} address={address} />;
  }
  _getBalance = async address => {
    const request = await axios.get(`${HTTP_URL}/addresses/${address}`);
    const balance = request.data;
    this.setState({
      isLoading: false,
      balance
    });
  };
}

export default AddressContainer;
