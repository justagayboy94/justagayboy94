import * as styledComponents from "styled-components";

import { Theme } from "../themes/default";

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
  withTheme
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export { css, keyframes, ThemeProvider, withTheme };
export default styled;
