const RHYTHM_BASE = 4;

export enum Color {
  Primary = "#FAEDA2",
  MainFontColor = "#3B3B3B",
  White = "white"
}

export interface Theme {
  rythmBase: number;

  avatar: {
    size: number;
    marginBottom: number;
  };

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
  avatar: {
    marginBottom: RHYTHM_BASE * 4,
    size: RHYTHM_BASE * 35
  },

  container: {
    paddingLeft: RHYTHM_BASE * 4,
    paddingRight: RHYTHM_BASE * 4
  },

  header: {
    backgroundColor: Color.Primary,
    color: Color.MainFontColor,
    fontSize: RHYTHM_BASE * 7,
    paddingBottom: RHYTHM_BASE * 5,
    paddingTop: RHYTHM_BASE * 5
  },

  rythmBase: RHYTHM_BASE
};
