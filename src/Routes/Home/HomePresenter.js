import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Table from "Components/Table";

const HomeTitle = styled;

const HomePresenter = ({ isLoading, blocks, txs }) => (
  <Fragment>
    <Table
      isLoading={isLoading}
      title={"Latest Blocks"}
      loaderText={"Getting blocks"}
      data={blocks}
    />
    <Table
      isLoading={isLoading}
      title={"Latest Transactions"}
      loaderText={"Getting transactions"}
      data={txs}
    />
  </Fragment>
);

HomePresenter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  blocks: PropTypes.array,
  txs: PropTypes.array
};

export default HomePresenter;
