import { storiesOf } from "@storybook/react";
import React from "react";
import { ImageGallery } from "./ImageGallery";

const images = ["600.jpeg", "800.jpeg", "1000.jpeg", "400.jpeg", "1000.jpeg"];

storiesOf("Components/ImageGallery", module).add("default", () => (
  <ImageGallery
    moreButton={{ href: "http://example.com", label: "More on Twitter" }}
    title="latest pics"
    images={images}
  />
));
