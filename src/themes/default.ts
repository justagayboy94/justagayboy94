const RHYTHM_BASE = 4;

export enum Color {
  Primary = "#FAEDA2",
  MainFontColor = "#3B3B3B",
  White = "white",
  Black = "black"
}

export interface Theme {
  rythmBase: number;

  container: {
    paddingLeft: number;
    paddingRight: number;
  };

  header: {
    color: Color;
    backgroundColor: Color;
    fontSize: number;
    fontFamily: string;
    padding: number;
    marginBottom: number;
  };
}

export const theme: Theme = {
  container: {
    paddingLeft: RHYTHM_BASE * 4,
    paddingRight: RHYTHM_BASE * 4
  },

  header: {
    backgroundColor: Color.Black,
    color: Color.White,
    fontFamily: "Black Ops One",
    fontSize: RHYTHM_BASE * 7,
    marginBottom: RHYTHM_BASE * 8,
    padding: RHYTHM_BASE * 5
  },

  rythmBase: RHYTHM_BASE
};
