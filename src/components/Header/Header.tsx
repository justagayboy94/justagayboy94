import { Link } from "gatsby";
import React from "react";
import styled from "../../helpers/styled-components";
import { Container } from "../Container/Container";

export interface Props {
  title: string;
}

const StyledHeader = styled.div`
  background: ${props => props.theme.header.backgroundColor};
  margin-bottom: 1.45rem;
  text-align: center;
  padding-top: ${props => props.theme.header.paddingTop}px;
  padding-bottom: ${props => props.theme.header.paddingBottom}px;
`;

const HeaderTitle = styled(Link)`
  color: ${props => props.theme.header.color};
  font-size: ${props => props.theme.header.fontSize}px;
  text-decoration: none;
`;

export const Header: React.SFC<Props> = ({ title }) => (
  <StyledHeader>
    <Container>
      <HeaderTitle to="/">{title}</HeaderTitle>
    </Container>
  </StyledHeader>
);
