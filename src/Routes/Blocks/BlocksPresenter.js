import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Table from "Components/Table";
import Pagination from "Components/Pagination";

const BlocksPresenter = ({
  isLoading,
  blocks,
  pages,
  currentPage,
  perPage,
  total,
  totalPages,
  goToNextPage,
  goToPreviousPage
}) => (
  <Fragment>
    <Table
      isLoading={isLoading}
      title={`All Blocks (${total || 0})`}
      loaderText={"Getting blocks"}
      data={blocks}
      headers={"Index, Hash, Difficulty, Amount (NMD), Timestamp"}
      selected={["index", "hash", "difficulty", "amount", "timestamp"]}
      linkPage={"blocks"}
      linkParam={"hash"}
    />
    <Pagination
      totalPages={totalPages}
      currentPage={currentPage}
      goToNextPage={goToNextPage}
      goToPreviousPage={goToPreviousPage}
    />
  </Fragment>
);

BlocksPresenter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  blocks: PropTypes.array,
  goToNextPage: PropTypes.func.isRequired,
  goToPreviousPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number,
  total: PropTypes.number,
  totalPages: PropTypes.number
};

export default BlocksPresenter;
