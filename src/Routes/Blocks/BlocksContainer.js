import React, { Component } from "react";
import axios from "axios";
import { HTTP_URL, WS_URL } from "../../constants";
import { parseMessage } from "../../utils";
import BlocksPresenter from "./BlocksPresenter";

class BlocksContainer extends Component {
  state = {
    isLoading: true,
    currentPage: 1
  };
  componentDidMount = () => {
    this._getBlocks();
    const socket = new WebSocket(WS_URL);
    socket.addEventListener("message", message => {
      const parsedMessage = parseMessage(message);
      if (parsedMessage !== null && parsedMessage !== undefined) {
        this.setState(prevState => {
          return {
            ...prevState,
            blocks: [...parsedMessage, ...prevState.blocks]
          };
        });
      }
    });
  };
  render() {
    return (
      <BlocksPresenter
        {...this.state}
        goToNextPage={this._goToNextPage}
        goToPreviousPage={this._goToPreviousPage}
      />
    );
  }
  _getBlocks = async () => {
    const allBlocksReq = await axios.get(
      `${HTTP_URL}/blocks?page=${this.state.currentPage}`
    );
    const response = allBlocksReq.data;
    const { currentPage, perPage, total, totaPages, data } = response;
    this.setState({
      currentPage,
      perPage,
      total,
      totalPages: totaPages,
      blocks: data,
      isLoading: false
    });
  };
  _goToNextPage = () => {
    const { totalPages, currentPage } = this.state;
    if (currentPage < totalPages) {
      this._scrollUp();
      this.setState(prevState => {
        return {
          currentPage: prevState.currentPage + 1
        };
      }, this._getBlocks);
    }
  };
  _goToPreviousPage = () => {
    const { currentPage } = this.state;
    if (currentPage !== 1) {
      this._scrollUp();
      this.setState(prevState => {
        return {
          currentPage: prevState.currentPage - 1
        };
      }, this._getBlocks);
    }
  };
  _scrollUp = () => {
    window.scrollTo(0, 0);
  };
}

export default BlocksContainer;
