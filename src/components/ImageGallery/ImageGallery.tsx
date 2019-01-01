import React from "react";
import styled from "../../helpers/styled-components";

export interface Props {
  title: string;
  images: string[];
  moreButton: {
    href: string;
    label: string;
  };
}

const StyledImageGallery = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Headline = styled.h1`
  font-family: "Black Ops One";
  margin-top: 20px;
  margin-bottom: 20px;
  text-transform: lowercase;
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const Image = styled.div<{ src: string }>`
  width: 300px;
  height: 300px;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.src});
  border: 4px solid white;
  flex-grow: 1;
  filter: grayscale(100%);
`;

const LinkButton = styled.a`
  margin: 0 auto;
  border: 2px solid black;
  background-color: transparent;
  padding: 8px 12px;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

export const ImageGallery: React.SFC<Props> = ({
  title,
  images,
  moreButton
}) => (
  <StyledImageGallery>
    <Headline>{title}</Headline>
    <Gallery>
      {images.map(image => (
        <Image key={image} src={image} />
      ))}
    </Gallery>
    <LinkButton href={moreButton.href} target="_blank">
      {moreButton.label}
    </LinkButton>
  </StyledImageGallery>
);
