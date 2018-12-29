import { Link } from "gatsby";
import React from "react";
import styled from "../../helpers/styled-components";
import { Container } from "../Container/Container";

export interface Props {
  avatar: string;
  title: string;
}

const StyledHeader = styled.div`
  background: ${props => props.theme.header.backgroundColor};
  margin-bottom: 1.45rem;
  padding-top: ${props => props.theme.header.paddingTop}px;
  padding-bottom: ${props => props.theme.header.paddingBottom}px;
`;

const Avatar = styled.div<{ src: string }>`
  width: ${props => props.theme.rythmBase * 35}px;
  height: ${props => props.theme.rythmBase * 35}px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 100%;
  margin-bottom: ${props => props.theme.rythmBase * 4}px;
`;

const WebsiteTitle = styled(Link)`
  color: ${props => props.theme.header.color};
  font-size: ${props => props.theme.header.fontSize}px;
  text-decoration: none;
  font-family: Kalam;
  display: inline-block;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header: React.SFC<Props> = ({ avatar, title }) => (
  <StyledHeader>
    <HeaderContainer>
      <Avatar src={avatar} />
      <WebsiteTitle to="/">{title}</WebsiteTitle>
    </HeaderContainer>
  </StyledHeader>
);
