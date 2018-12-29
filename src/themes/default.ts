import { Color } from "./color";

export interface Theme {
  header: {
    backgroundColor: Color;
  };
}

export const theme: Theme = {
  header: {
    backgroundColor: Color.Primary
  }
};
