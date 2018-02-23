import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Table from "Components/Table";
import Pagination from "Components/Pagination";

const TransactionsPresenter = ({
  isLoading,
  txs = [],
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
      title={`All Transactions (${total || 0})`}
      loaderText={"Getting transactions"}
      data={txs.slice(0, 15)}
      headers={"Amount (NMD), Transaction ID, Timestamp"}
      selected={["amount", "id", "timestamp"]}
      linkPages={["transactions", "transactions"]}
      linkParams={["id", "id"]}
    />
    <Pagination
      totalPages={totalPages}
      currentPage={currentPage}
      goToNextPage={goToNextPage}
      goToPreviousPage={goToPreviousPage}
    />
  </Fragment>
);

TransactionsPresenter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  tx: PropTypes.array,
  goToNextPage: PropTypes.func.isRequired,
  goToPreviousPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number,
  total: PropTypes.number,
  totalPages: PropTypes.number
};

export default TransactionsPresenter;
