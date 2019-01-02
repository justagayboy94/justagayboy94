import styled from "../../helpers/styled-components";

export const LinkButton = styled.a`
  border: 2px solid ${props => props.theme.linkButton.borderColor};
  background-color: transparent;
  padding: ${props => props.theme.linkButton.paddingTopBottom}px ${props =>
  props.theme.linkButton.paddingLeftRight}px;
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.linkButton.color};
  box-sizing; border-box;
  display: inline-block;
  box-shadow: ${props => props.theme.linkButton.boxShadowOffset}px ${props =>
  props.theme.linkButton.boxShadowOffset}px 2px 0 ${props =>
  props.theme.linkButton.boxShadowColor};
  margin-bottom: ${props => props.theme.linkButton.marginBottom}px;
`;
