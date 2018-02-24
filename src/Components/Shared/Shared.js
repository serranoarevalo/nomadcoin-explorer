import styled from "styled-components";

export const KeyName = styled.span`
  color: #999;
`;

export const Title = styled.h2`
  margin-bottom: 20px !important;
  color: ${props => props.theme.titleColor};
`;

export const Key = styled.h3`
  margin-bottom: 20px;
  color: ${props => props.theme.titleColor};
  &:last-child {
    margin-bottom: 0;
  }
`;
