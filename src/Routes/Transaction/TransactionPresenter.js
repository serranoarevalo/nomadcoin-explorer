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
        <Title>
          <KeyName>Transaction:</KeyName> {tx.id}
        </Title>
        <Title>
          <KeyName>Amount: </KeyName> {tx.amount} NDM
        </Title>
        <Key>
          <KeyName>Timestamp: </KeyName> {makeSexyDate(tx.timestamp)}
        </Key>
        <Key>
          <KeyName>From: </KeyName>
          <SLink to={`${process.env.PUBLIC_URL}/addresses/${tx.from}`}>
            {tx.from}
          </SLink>
        </Key>
        <Key>
          <KeyName>To: </KeyName>
          <SLink to={`${process.env.PUBLIC_URL}/addresses/${tx.to}`}>
            {tx.to}
          </SLink>
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
