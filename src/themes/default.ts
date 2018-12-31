const RHYTHM_BASE = 4;

export enum Color {
  Primary = "#FAEDA2",
  MainFontColor = "#3B3B3B",
  White = "white",
  Black = "black"
}

export interface Theme {
  breakpoints: {
    m: string;
  };

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

  heroImage: {
    borderSize: number;
    marginBottom: number;
    borderColor: Color;
    padding: number;
  };
}

export const theme: Theme = {
  breakpoints: {
    m: "min-width: 768px"
  },

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

  heroImage: {
    borderColor: Color.Black,
    borderSize: RHYTHM_BASE,
    marginBottom: RHYTHM_BASE * 10,
    padding: RHYTHM_BASE * 2
  },

  rythmBase: RHYTHM_BASE
};
