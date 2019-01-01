import { Link } from "gatsby";
import React from "react";
import styled from "../../helpers/styled-components";

export interface Props {
  title: string;
}

const StyledHeader = styled.div`
  margin-bottom: ${props => props.theme.header.marginBottom}px;
`;

const HeaderContainer = styled.div`
  width: ${props => props.theme.header.width}px;
  height: ${props => props.theme.header.height}px;
  background: ${props => props.theme.header.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const WebsiteTitle = styled(Link)`
  color: ${props => props.theme.header.color};
  font-size: ${props => props.theme.header.fontSize}px;
  text-decoration: none;
  font-family: ${props => props.theme.header.fontFamily};
  text-transform: uppercase;
`;

export const Header: React.SFC<Props> = ({ title }) => (
  <StyledHeader>
    <HeaderContainer>
      <WebsiteTitle to="/">{title}</WebsiteTitle>
    </HeaderContainer>
  </StyledHeader>
);
