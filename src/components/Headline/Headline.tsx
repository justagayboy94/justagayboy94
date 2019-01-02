import React from "react";
import styled from "../../helpers/styled-components";

export interface Props {
  children: React.ReactNode;
}

const StyledHeadline = styled.h1`
  font-family: ${props => props.theme.headline.fontFamily};
  margin: 0;
  text-transform: lowercase;
  position: relative;
  text-align: center;

  &:before,
  &:after {
    content: "";
    width: ${props => props.theme.headline.borderWidth}px;
    height: ${props => props.theme.headline.borderHeight}px;
    background-color: ${props => props.theme.headline.borderColor};
    margin-left: calc(50% - ${props => props.theme.headline.borderWidth / 2}px);
    display: block;
  }

  &:before {
    margin-bottom: ${props => props.theme.headline.borderMargin}px;
  }

  &:after {
    margin-top: ${props => props.theme.headline.borderMargin}px;
  }
`;

export const Headline: React.SFC<Props> = ({ children }) => (
  <StyledHeadline>{children}</StyledHeadline>
);
