import { Link } from "gatsby";
import React from "react";
import styled from "../../helpers/styled-components";

export interface Props {
  title: string;
}

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${props => props.theme.header.marginBottom}px;
`;

const HeaderContainer = styled.div`
  background: ${props => props.theme.header.backgroundColor};
  padding: ${props => props.theme.header.padding}px;
  margin: 0 auto;
`;

const WebsiteTitle = styled(Link)`
  color: ${props => props.theme.header.color};
  font-size: ${props => props.theme.header.fontSize}px;
  text-decoration: none;
  font-family: ${props => props.theme.header.fontFamily};
  display: inline-block;
  text-transform: uppercase;
`;

export const Header: React.SFC<Props> = ({ title }) => (
  <StyledHeader>
    <HeaderContainer>
      <WebsiteTitle to="/">{title}</WebsiteTitle>
    </HeaderContainer>
  </StyledHeader>
);
