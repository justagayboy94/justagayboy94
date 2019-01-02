import { storiesOf } from "@storybook/react";
import React from "react";
import { Headline } from "./Headline";

storiesOf("Components/Headline", module).add("default", () => (
  <Headline>I am a headline</Headline>
));
