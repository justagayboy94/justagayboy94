import { storiesOf } from "@storybook/react";
import React from "react";
import { Header } from "./Header";

storiesOf("Components/Header", module).add("default", () => (
  <Header siteTitle="My website" />
));
