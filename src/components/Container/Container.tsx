import styled from "../../helpers/styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding-left: ${props => props.theme.container.paddingLeft}px;
  padding-right: ${props => props.theme.container.paddingRight}px;
  box-sizing: border-box;
  text-align: center;
`;
