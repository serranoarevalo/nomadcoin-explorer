import React, { Component } from "react";
import axios from "axios";
import { HTTP_URL, WS_URL } from "../../constants";
import { parseMessage } from "../../utils";
import TransactionsPresenter from "./TransactionsPresenter";

class TransactionsContainer extends Component {
  state = {
    isLoading: true,
    currentPage: 1
  };
  componentDidMount = () => {
    this._getTxs();
    const socket = new WebSocket(WS_URL);
    socket.addEventListener("message", message => {
      const parsedMessage = parseMessage(message);
      if (parsedMessage !== null) {
        this.setState(prevState => {
          return {
            ...prevState,
            txs: [...parsedMessage[0].data, ...prevState.txs]
          };
        });
      }
    });
  };
  render() {
    return (
      <TransactionsPresenter
        {...this.state}
        goToNextPage={this._goToNextPage}
        goToPreviousPage={this._goToPreviousPage}
      />
    );
  }
  _getTxs = async () => {
    const allBlocksReq = await axios.get(
      `${HTTP_URL}/transactions?page=${this.state.currentPage}`
    );
    const response = allBlocksReq.data;
    const { currentPage, perPage, total, totaPages, data } = response;
    this.setState({
      currentPage,
      perPage,
      total,
      totalPages: totaPages,
      txs: data,
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
      }, this._getTxs);
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
      }, this._getTxs);
    }
  };
  _scrollUp = () => {
    window.scrollTo(0, 0);
  };
}

export default TransactionsContainer;
