import styled from "../../helpers/styled-components";

export interface Props {
  src: string;
}

export const Avatar = styled.div<Props>`
  width: ${props => props.theme.avatar.size}px;
  height: ${props => props.theme.avatar.size}px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 100%;
  margin-bottom: ${props => props.theme.avatar.marginBottom}px;
`;
