import React, { Fragment } from "react";
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
`;

const TableContent = styled.div`
  width: 100%;
`;

const TableHeader = styled.header`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const HeaderItem = styled.span`
  font-weight: 600;
  color: #333333;
`;

const TableData = styled.div`
  width: 100%;
`;

const TableRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  text-align: center;
  & * {
    text-align: center;
    width: 15%;
  }
  & *:nth-child(2) {
    width: 40%;
  }
`;

const TableCell = styled.div`
  padding: 10px 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Table = ({ title, isLoading, loaderText, data, headers, selected }) => (
  <TableCard>
    <TableTitle>{title}</TableTitle>
    <TableContent>
      {isLoading && <Loader text={loaderText} />}
      {!isLoading && (
        <Fragment>
          <TableHeader>
            <TableRow>
              {headers
                .split(",")
                .map((header, index) => (
                  <HeaderItem key={index}>{header}</HeaderItem>
                ))}
            </TableRow>
          </TableHeader>
          <TableData>
            {data
              .reverse()
              .map((item, index) => (
                <TableRow>
                  {selected.map(key => <TableCell>{item[key]}</TableCell>)}
                </TableRow>
              ))}
          </TableData>
        </Fragment>
      )}
    </TableContent>
  </TableCard>
);

Table.propTypes = {
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loaderText: PropTypes.string.isRequired,
  headers: PropTypes.string.isRequired,
  data: PropTypes.array,
  selected: PropTypes.array.isRequired
};

export default Table;
