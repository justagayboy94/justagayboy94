import { storiesOf } from "@storybook/react";
import React from "react";
import { Avatar } from "../Avatar/Avatar";
import { Header } from "./Header";

storiesOf("Components/Header", module).add("default", () => (
  <Header title="justawebsite" avatar={<Avatar src="avatar.jpeg" />} />
));
