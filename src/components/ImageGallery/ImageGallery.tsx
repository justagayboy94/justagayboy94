import React from "react";
import styled from "../../helpers/styled-components";
import { Headline } from "../Headline/Headline";

export interface Image {
  src: string;
  url: string;
  alt: string;
}

export interface Props {
  title: string;
  images: Image[];
  moreButton: React.ReactNode;
}

const StyledImageGallery = styled.div`
  text-align: center;
  margin-bottom: 16px;
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: 24px;
`;

const Link = styled.a`
  width: 100%;
  border: 4px solid white;
  flex-grow: 1;

  @media (${props => props.theme.breakpoints.m}) {
    width: 200px;
    height: 400px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  object-fit: cover;
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
        <Link key={image.src} href={image.url} target="_blank">
          <Image src={image.src} alt={image.alt} title={image.alt} />
        </Link>
      ))}
    </Gallery>
    {moreButton}
  </StyledImageGallery>
);
