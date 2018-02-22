import React, { Component } from "react";
import axios from "axios";
import { HTTP_URL } from "../../constants";
import BlockPresenter from "./BlockPresenter";

class BlockContainer extends Component {
  state = {
    isLoading: true
  };
  componentDidMount() {
    const { match: { params: { hash } } } = this.props;
    this._getBlock(hash);
  }
  render() {
    return <BlockPresenter {...this.state} />;
  }
  _getBlock = async hash => {
    const request = await axios.get(`${HTTP_URL}/blocks/${hash}`);
    const block = request.data;
    this.setState({
      block,
      isLoading: false
    });
  };
}

export default BlockContainer;
