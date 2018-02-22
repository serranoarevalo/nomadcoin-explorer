import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { makeSexyDate } from "../../utils";
import { Link } from "react-router-dom";
import { KeyName, Title, Key } from "Components/Shared";

const TxContainer = styled.div`
  margin-top: 20px;
`;

const SLink = styled(Link)`
  color: #2196f3;
`;

const TransactionPresenter = ({ tx, isLoading }) => (
  <TxContainer>
    {isLoading ? (
      <Title>Getting Transaction</Title>
    ) : (
      <Fragment>
        <Title>Transaction: {tx.id}</Title>
        <Title>
          <KeyName>Amount:</KeyName> {tx.amount} NDM
        </Title>
        <Key>
          <KeyName>Timestamp:</KeyName> {makeSexyDate(tx.timestamp)}
        </Key>
        <Key>
          <KeyName>From:</KeyName>
          {tx.txOuts[1] !== undefined ? (
            <SLink to={`/addresses/${tx.txOuts[1].address}`}>
              {tx.txOuts[1].address}
            </SLink>
          ) : (
            " Coinbase"
          )}
        </Key>
        <Key>
          <KeyName>To:</KeyName>{" "}
          <SLink to={`/addresses/${tx.txOuts[0].address}`}>
            {tx.txOuts[0].address}
          </SLink>
        </Key>
        <Key>
          <KeyName>In Block:</KeyName>{" "}
          <SLink to={`/blocks/${tx.inBlock}`}>{tx.inBlock}</SLink>
        </Key>
      </Fragment>
    )}
  </TxContainer>
);

TransactionPresenter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  tx: PropTypes.object
};

export default TransactionPresenter;
