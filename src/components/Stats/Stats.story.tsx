import { storiesOf } from "@storybook/react";
import React from "react";
import { Container } from "../Container/Container";
import { Stats } from "./Stats";

storiesOf("Components/Stats", module).add("default", () => (
  <Container>
    <Stats
      data={[
        {
          label: "days",
          value: 0
        },
        {
          label: "days",
          value: 10
        },
        {
          label: "days",
          value: 8
        }
      ]}
    />
  </Container>
));
