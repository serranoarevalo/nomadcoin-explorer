import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Table from "Components/Table";

const HomePresenter = ({ isLoading, blocks = [], txs = [] }) => (
  <Fragment>
    <Table
      isLoading={isLoading}
      title={"Latest Blocks"}
      loaderText={"Getting blocks"}
      data={blocks.slice(0, 5)}
      headers={"Index, Hash, Difficulty, Amount (NMD), Timestamp"}
      selected={["index", "hash", "difficulty", "amount", "timestamp"]}
      linkPages={["blocks", "blocks"]}
      linkParams={["index", "index"]}
    />
    <Table
      isLoading={isLoading}
      title={"Latest Transactions"}
      loaderText={"Getting transactions"}
      data={txs.slice(0, 5)}
      headers={"Amount (NMD), Transaction ID, Timestamp"}
      selected={["amount", "id", "timestamp"]}
      linkPages={["transactions", "transactions"]}
      linkParams={["id", "id"]}
    />
  </Fragment>
);

HomePresenter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  blocks: PropTypes.array,
  txs: PropTypes.array
};

export default HomePresenter;
