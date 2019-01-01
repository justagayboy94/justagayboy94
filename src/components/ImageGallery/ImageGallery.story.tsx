import { storiesOf } from "@storybook/react";
import React from "react";
import { ImageGallery } from "./ImageGallery";

const images = [
  "1000.jpeg",
  "1000.jpeg",
  "1000.jpeg",
  "1000.jpeg",
  "1000.jpeg"
];

storiesOf("Components/ImageGallery", module).add("default", () => (
  <ImageGallery images={images} />
));
