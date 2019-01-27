import { storiesOf } from "@storybook/react";
import React from "react";
import { Month } from "./Month";

const entry1 = {
  color: "#9CE0F7",
  day: 1
};

const entry2 = {
  color: "#FA192F",
  day: 1
};

const entry3 = {
  color: "#EBFA43",
  day: 1
};

storiesOf("Components/Month", module).add("default", () => (
  <Month year={2019} month={0} entries={[entry1, entry2, entry3]} />
));
