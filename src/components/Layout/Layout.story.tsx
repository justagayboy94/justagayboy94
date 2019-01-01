import { storiesOf } from "@storybook/react";
import React from "react";
import { LayoutWithHeroImage } from "./LayoutWithHeroImage";

storiesOf("Components/Layout", module).add("/w HeroImage", () => (
  <LayoutWithHeroImage heroImage="1000.jpeg" title="jgb94">
    test
  </LayoutWithHeroImage>
));
