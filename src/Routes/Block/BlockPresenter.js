import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { makeSexyDate } from "../../utils";
import Table from "Components/Table";
import Transaction from "Components/Transaction";

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
  &:last-child {
    margin-bottom: 0;
  }
`;

const Transactions = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 25px;
`;

const Headers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  > * {
    width: 40%;
  }
  > *:nth-child(2) {
    width: 10%;
  }
`;

const Header = styled.span`
  font-weight: 600;
  text-align: center;
`;

const BlockPresenter = ({ isLoading, block }) => (
  <BlockContainer>
    {isLoading ? (
      <Title>Getting block</Title>
    ) : (
      <Fragment>
        <Title>Block #{block.index}</Title>
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
          <Key>
            {block.data.length > 1
              ? "Transactions"
              : "No transactions on this block"}
          </Key>
          {block.data.length > 1 && (
            <Headers>
              <Header>From</Header>
              <Header>Amount</Header>
              <Header>To</Header>
              <Header>Timestamp</Header>
            </Headers>
          )}
          {block.data.map((tx, index) => {
            if (index === 0) {
              return;
            } else {
              return (
                <Transaction
                  from={tx.txOuts[1].address}
                  to={tx.txOuts[0].address}
                  amount={tx.amount}
                  timestamp={tx.timestamp}
                  key={index}
                />
              );
            }
          })}
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
