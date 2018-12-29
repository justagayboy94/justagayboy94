import { storiesOf } from "@storybook/react";
import React from "react";
import { Header } from "./Header";

storiesOf("Components/Header", module).add("default", () => (
  <Header title="justawebsite" avatar="avatar.jpeg" />
));
