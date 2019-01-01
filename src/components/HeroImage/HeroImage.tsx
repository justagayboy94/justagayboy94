import React from "react";
import styled from "../../helpers/styled-components";

export interface Props {
  image: string;
}

const StyledHeroImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.heroImage.backgroundColor};
  position: relative;

  &:before {
    content: "";
    width: ${props => props.theme.heroImage.borderSize}px;
    height: 100%;
    background-color: ${props => props.theme.heroImage.borderColor};
    position: absolute;
    top: 0;
    left: calc(50vw - ${props => props.theme.heroImage.borderSize / 2}px);
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 60%;
  filter: grayscale(100%);
  border: ${props => props.theme.heroImage.borderSize}px solid
    ${props => props.theme.heroImage.borderColor};
  padding: ${props => props.theme.heroImage.padding}px;
  box-sizing: border-box;
  background-color: ${props => props.theme.heroImage.backgroundColor};
  outline: ${props => props.theme.heroImage.padding}px solid
    ${props => props.theme.heroImage.backgroundColor};

  @media (${props => props.theme.breakpoints.m}) {
    width: 300px;
    max-width: unset;
  }
`;

export const HeroImage: React.SFC<Props> = ({ image }) => (
  <StyledHeroImage>
    <Image src={image} />
  </StyledHeroImage>
);
