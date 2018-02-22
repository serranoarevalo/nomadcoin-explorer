import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { makeSexyDate } from "../../utils";

const Tx = styled.div`
  margin: 20px 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  > * {
    width: 40%;
  }
  > *:nth-child(2) {
    width: 10%;
    color: inherit;
  }
`;

const Column = styled.div`
  text-align: center;
  line-height: 2;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const SLink = styled(Link)`
  color: #2196f3;
`;

const Transaction = ({ from, to, amount, timestamp }) => (
  <Tx>
    <Column>
      <SLink to={`/addresses/${from}`}>{from}</SLink>
    </Column>
    <Column>{amount}</Column>
    <Column>
      <SLink to={`/addresses/${to}`}>{to}</SLink>
    </Column>
    <Column>{makeSexyDate(timestamp)}</Column>
  </Tx>
);

Transaction.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
};

export default Transaction;
