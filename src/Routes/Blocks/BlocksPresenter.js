import React from "react";
import PropTypes from "prop-types";
import Table from "Components/Table";

const BlocksPresenter = ({ isLoading, blocks, pages }) => (
  <Table
    isLoading={isLoading}
    title={"All Blocks"}
    loaderText={"Getting blocks"}
    data={blocks}
    headers={"Index, Hash, Difficulty, Amount (NMD), Timestamp"}
    selected={["index", "hash", "difficulty", "amount", "timestamp"]}
    linkPage={"block"}
    linkParam={"hash"}
  />
);

BlocksPresenter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  blocks: PropTypes.array
};

export default BlocksPresenter;
