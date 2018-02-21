import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const TableCard = styled.div`
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  min-height: 50vh;
  margin-bottom: 50px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const TableTitle = styled.h2`
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const TableContent = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Table = ({ title, isLoading, loaderText, data }) => (
  <TableCard>
    <TableTitle>{title}</TableTitle>
    <TableContent>{isLoading && <Loader text={loaderText} />}</TableContent>
  </TableCard>
);

Table.propTypes = {
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loaderText: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default Table;
