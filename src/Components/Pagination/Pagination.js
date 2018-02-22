import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaginationWrapper = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  *::selection {
    background-color: transparent;
  }
`;

const Button = styled.span`
  font-size: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const PageInfo = styled.span`
  font-weight: 600;
  font-size: 14px;
`;

const Pagination = ({
  currentPage,
  totalPages,
  goToNextPage,
  goToPreviousPage
}) => (
  <PaginationContainer>
    <PaginationWrapper>
      <Button onClick={goToPreviousPage}>👈🏻</Button>
      <PageInfo>{`${currentPage}/${totalPages}`}</PageInfo>
      <Button onClick={goToNextPage}>👉🏻</Button>
    </PaginationWrapper>
  </PaginationContainer>
);

export default Pagination;
