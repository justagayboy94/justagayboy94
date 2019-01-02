import { storiesOf } from "@storybook/react";
import React from "react";
import { LinkButton } from "../LinkButton/LinkButton";
import { ImageGallery } from "./ImageGallery";

const image1 = {
  alt: "Image 1",
  src: "600.jpeg",
  url: "http://example.com"
};

const image2 = {
  alt: "Image 2",
  src: "800.jpeg",
  url: "http://example.com"
};

const image3 = {
  alt: "Image 3",
  src: "1000.jpeg",
  url: "http://example.com"
};

const image4 = {
  alt: "Image 4",
  src: "400.jpeg",
  url: "http://example.com"
};

const image5 = {
  alt: "Image 5",
  src: "1000.jpeg",
  url: "http://example.com"
};

const images = [image1, image2, image3, image4, image5];

storiesOf("Components/ImageGallery", module).add("default", () => (
  <ImageGallery
    moreButton={
      <LinkButton href="http://example.com" target="_blank">
        More on Twitter
      </LinkButton>
    }
    title="latest pics"
    images={images}
  />
));
