import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Title, KeyName } from "Components/Shared";

const AddressContainer = styled.div`
  margin-top: 20px;
`;

const AddressPresenter = ({ isLoading, address, balance }) => (
  <AddressContainer>
    {isLoading ? (
      <Title>Getting Balance</Title>
    ) : (
      <Fragment>
        <Title>
          <KeyName>Address:</KeyName> {address}
        </Title>
        <Title>
          <KeyName>Balance: </KeyName> {balance} NMD
        </Title>
      </Fragment>
    )}
  </AddressContainer>
);

AddressPresenter.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  address: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired
};

export default AddressPresenter;
