import { storiesOf } from "@storybook/react";
import React from "react";
import { HeroImage } from "./HeroImage";

storiesOf("Components/HeroImage", module).add("default", () => (
  <div style={{ width: "100vw", height: "100vh" }}>
    <HeroImage image="1000.jpeg" />
  </div>
));
