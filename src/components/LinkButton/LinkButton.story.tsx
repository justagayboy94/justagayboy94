import { storiesOf } from "@storybook/react";
import React from "react";
import { LinkButton } from "./LinkButton";

storiesOf("Components/LinkButton", module).add("default", () => (
  <LinkButton href="http://example.com" target="_blank">
    I am a button
  </LinkButton>
));
