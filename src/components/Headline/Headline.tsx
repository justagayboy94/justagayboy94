import React from "react";
import styled from "../../helpers/styled-components";

export interface Props {
  children: React.ReactNode;
  subheadline?: React.ReactNode;
}

const StyledHeadline = styled.h1`
  font-family: ${props => props.theme.headline.fontFamily};
  margin: 0 auto;
  text-transform: lowercase;
  position: relative;
  text-align: center;
  width: 70%;

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

const SubHeadline = styled.span`
  display: block;
  font-family: ${props => props.theme.headline.subHeadline.fontFamily};
  font-size: ${props => props.theme.headline.subHeadline.fontSize}px;
  line-height: ${props => props.theme.headline.subHeadline.lineHeight}px;
  text-transform: initial;
  margin-top: ${props => props.theme.headline.subHeadline.marginTop}px;
  margin-bottom: ${props => props.theme.headline.subHeadline.marginBottom}px;
  font-style: italic;
`;

export const Headline: React.SFC<Props> = ({ children, subheadline }) => (
  <StyledHeadline>
    {children}
    {subheadline && <SubHeadline>{subheadline}</SubHeadline>}
  </StyledHeadline>
);
