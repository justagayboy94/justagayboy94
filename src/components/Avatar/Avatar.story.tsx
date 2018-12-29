import { storiesOf } from "@storybook/react";
import React from "react";
import { Avatar } from "./Avatar";

storiesOf("Components/Avatar", module).add("default", () => (
  <Avatar src="avatar.jpeg" />
));
