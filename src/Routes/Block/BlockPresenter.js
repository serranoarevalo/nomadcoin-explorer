import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Table from "Components/Table";
import { makeSexyDate } from "../../utils";

const BlockContainer = styled.div`
  margin-top: 20px;
`;

const KeyName = styled.span`
  color: #999;
`;

const Title = styled.h2`
  margin-bottom: 20px !important;
`;

const Key = styled.h3`
  margin-bottom: 20px;
`;

const Transactions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Transaction = styled.div`
  width: 40%;
`;

const BlockPresenter = ({ isLoading, block }) => (
  <BlockContainer>
    {isLoading ? (
      <Title>Getting block</Title>
    ) : (
      <Fragment>
        <Title>
          <KeyName>Hash:</KeyName> {block.hash}
        </Title>
        <Key>
          <KeyName>Timestamp:</KeyName> {makeSexyDate(block.timestamp)}
        </Key>
        <Key>
          <KeyName>Difficulty:</KeyName> {block.difficulty}
        </Key>
        <Key>
          <KeyName>Nonce:</KeyName> {block.nonce}
        </Key>
        <Transactions>
          <Transaction />
        </Transactions>
      </Fragment>
    )}
  </BlockContainer>
);

BlockPresenter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  block: PropTypes.object
};

export default BlockPresenter;
