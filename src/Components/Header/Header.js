import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TitleLink = styled(Link)`
  color: inherit;
`;

const Title = styled.h1`
  margin: 0;
  color: ${props => props.theme.titleColor};
`;

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
`;

const HeaderWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Nav = styled.nav`
  width: 70%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 600px) {
    width: 100%;
    justify-content: flex-start;
    margin-top: 35px;
  }
`;

const List = styled.ul`
  display: flex;
  margin: 0;
  align-items: center;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  margin-bottom: 0;
  margin-left: 50px;
  &:first-child {
    margin: 0;
  }
`;

const SLink = styled.span`
  text-decoration: none;
  font-weight: 600;
  color: ${props => (props.isActive ? "black" : "#676767")};
`;

const Header = props => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Title>
          <TitleLink to="/">Nomadcoin Explorer</TitleLink>
        </Title>
        <Nav>
          <List>
            <ListItem>
              <Link to="/">
                <SLink isActive={window.location.pathname === "/"}>Home</SLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/blocks">
                <SLink
                  to="/blocks"
                  isActive={window.location.pathname.startsWith("/blocks")}
                >
                  Blocks
                </SLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/transactions">
                <SLink
                  isActive={window.location.pathname.startsWith(
                    "/transactions"
                  )}
                >
                  Transactions
                </SLink>
              </Link>
            </ListItem>
          </List>
        </Nav>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
