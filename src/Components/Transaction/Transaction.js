import React from "react";
import PropTypes from "prop-types";
import styles from "styled-components";

const Transaction = ({ from, to, amount }) => `${from} ${to} ${amount}`;

Transaction.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
};

export default Transaction;
