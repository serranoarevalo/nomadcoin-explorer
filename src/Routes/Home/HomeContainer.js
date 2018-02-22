import React, { Component } from "react";
import HomePresenter from "./HomePresenter";
import axios from "axios";
import { HTTP_URL } from "../../constants";

class HomeContainer extends Component {
  state = {
    isLoading: true
  };
  componentDidMount = async () => {
    const blockReq = await axios.get(`${HTTP_URL}/blocks/latest`);
    const txReq = await axios.get(`${HTTP_URL}/transactions/latest`);
    const blocks = blockReq.data;
    const txs = txReq.data;
    this.setState({
      blocks,
      txs,
      isLoading: false
    });
  };

  render() {
    return <HomePresenter {...this.state} />;
  }
}

export default HomeContainer;
