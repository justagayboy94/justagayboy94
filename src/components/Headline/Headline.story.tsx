import { storiesOf } from "@storybook/react";
import React from "react";
import { Headline } from "./Headline";

storiesOf("Components/Headline", module)
  .add("default", () => <Headline>I am a headline</Headline>)
  .add("with subheadline", () => (
    <Headline subheadline="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu neque nunc. Praesent finibus nibh et mi fringilla porta. Nullam at lacus ac urna imperdiet venenatis. Maecenas imperdiet odio velit.">
      I am a headline
    </Headline>
  ));
