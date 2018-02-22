import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Table from "Components/Table";

const HomePresenter = ({ isLoading, blocks, txs }) => (
  <Fragment>
    <Table
      isLoading={isLoading}
      title={"Latest Blocks"}
      loaderText={"Getting blocks"}
      data={blocks}
      headers={"Index, Hash, Difficulty, Amount (NMD), Timestamp"}
      selected={["index", "hash", "difficulty", "amount", "timestamp"]}
      linkPage={"blocks"}
      linkParam={"hash"}
    />
    <Table
      isLoading={isLoading}
      title={"Latest Transactions"}
      loaderText={"Getting transactions"}
      data={txs}
      headers={"In Block, Transaction ID, Amount (NMD), Timestamp"}
      selected={["inBlock", "id", "amount", "timestamp"]}
      linkPage={"transaction"}
      linkParam={"id"}
    />
  </Fragment>
);

HomePresenter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  blocks: PropTypes.array,
  txs: PropTypes.array
};

export default HomePresenter;
