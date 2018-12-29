const RHYTHM_BASE = 4;

export enum Color {
  Primary = "#FAEDA2",
  MainFontColor = "#3B3B3B",
  White = "white"
}

export interface Theme {
  container: {
    paddingLeft: number;
    paddingRight: number;
  };

  header: {
    color: Color;
    backgroundColor: Color;
    fontSize: number;
    paddingTop: number;
    paddingBottom: number;
  };
}

export const theme: Theme = {
  container: {
    paddingLeft: RHYTHM_BASE * 4,
    paddingRight: RHYTHM_BASE * 4
  },

  header: {
    backgroundColor: Color.Primary,
    color: Color.MainFontColor,
    fontSize: RHYTHM_BASE * 7,
    paddingBottom: RHYTHM_BASE * 4,
    paddingTop: RHYTHM_BASE * 4
  }
};
