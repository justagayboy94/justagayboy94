import { storiesOf } from "@storybook/react";
import React from "react";
import { HeroImage } from "./HeroImage";

storiesOf("Components/HeroImage", module).add("default", () => (
  <HeroImage image="1000.jpeg" />
));
