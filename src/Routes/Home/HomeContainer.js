import React, { Component } from "react";
import HomePresenter from "./HomePresenter";
import axios from "axios";
import { HTTP_URL, WS_URL } from "../../constants";
import { parseMessage } from "../../utils";

class HomeContainer extends Component {
  state = {
    isLoading: true
  };
  componentDidMount = () => {
    this._getHome();
    const socket = new WebSocket(WS_URL);
    socket.addEventListener("message", message => {
      const parsedMessage = parseMessage(message);
      if (parsedMessage !== null) {
        this.setState(prevState => {
          return {
            ...prevState,
            blocks: [...parsedMessage, ...prevState.blocks],
            txs: [...parsedMessage[0].data, ...prevState.txs]
          };
        });
      }
    });
  };
  render() {
    return <HomePresenter {...this.state} />;
  }
  _getHome = async () => {
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
}

export default HomeContainer;
