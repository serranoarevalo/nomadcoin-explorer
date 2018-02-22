import React, { Component } from "react";
import axios from "axios";
import { HTTP_URL } from "../../constants";
import TransactionPresenter from "./TransactionPresenter";

class TransactionContainer extends Component {
  state = {
    isLoading: true
  };
  componentDidMount = () => {
    const { match: { params: { id } } } = this.props;
    this._getTx(id);
  };
  render() {
    return <TransactionPresenter {...this.state} />;
  }
  _getTx = async id => {
    const request = await axios.get(`${HTTP_URL}/transactions/${id}`);
    const tx = request.data;
    this.setState({
      tx,
      isLoading: false
    });
  };
}

export default TransactionContainer;
