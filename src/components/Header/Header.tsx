import { Link } from "gatsby";
import React from "react";
import styled from "../../helpers/styled-components";

export interface Props {
  siteTitle: string;
}

const StyledHeader = styled.div`
  background: ${props => props.theme.header.backgroundColor};
  margin-bottom: 1.45rem;
`;

const HeaderInner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  font-size: 2rem;
`;

const HeaderTitle = styled(Link)`
  color: white;
  text-decoration: none;
`;

export const Header: React.SFC<Props> = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderInner>
      <HeaderTitle to="/">{siteTitle}</HeaderTitle>
    </HeaderInner>
  </StyledHeader>
);
