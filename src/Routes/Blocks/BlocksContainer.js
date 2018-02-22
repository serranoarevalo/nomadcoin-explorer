import React, { Component } from "react";
import axios from "axios";
import { HTTP_URL } from "../../constants";
import BlocksPresenter from "./BlocksPresenter";

class BlocksContainer extends Component {
  state = {
    isLoading: true
  };
  componentDidMount = async () => {
    const allBlocksReq = await axios.get(`${HTTP_URL}/blocks`);
    const blocks = allBlocksReq.data;
    this.setState({
      blocks,
      isLoading: false
    });
  };
  render() {
    return <BlocksPresenter {...this.state} />;
  }
}

export default BlocksContainer;
