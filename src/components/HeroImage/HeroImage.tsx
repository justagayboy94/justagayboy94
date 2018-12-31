import React from "react";
import styled from "../../helpers/styled-components";
import { Container } from "../Container/Container";

export interface Props {
  image: string;
}

const StyledHeroImage = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${props => props.theme.heroImage.marginBottom};
`;

const ImageBorder = styled.div`
  position: relative;

  &:before,
  &:after {
    content: "";
    width: ${props => props.theme.heroImage.borderSize}px;
    height: ${props => props.theme.rythmBase * 25}px;
    background-color: ${props => props.theme.heroImage.borderColor};
    display: block;
    margin-bottom: ${props => props.theme.heroImage.padding}px;
    margin-left: calc(50% - 2px);

    @media (${props => props.theme.breakpoints.m}) {
      height: ${props => props.theme.rythmBase * 50}px;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  filter: grayscale(100%);
  border: ${props => props.theme.heroImage.borderSize}px solid
    ${props => props.theme.heroImage.borderColor};
  padding: ${props => props.theme.heroImage.padding}px;
  box-sizing: border-box;
`;

export const HeroImage: React.SFC<Props> = ({ image }) => (
  <StyledHeroImage>
    <ImageBorder>
      <Image src={image} />
    </ImageBorder>
  </StyledHeroImage>
);
