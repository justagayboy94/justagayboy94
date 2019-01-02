const RHYTHM_BASE = 4;

const HEADLINE_FONT_FAMILY = "Black Ops One";

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
    width: number;
    height: number;
  };

  headline: {
    fontFamily: string;
    borderWidth: number;
    borderHeight: number;
    borderColor: Color;
    borderMargin: number;
  };

  heroImage: {
    backgroundColor: Color;
    borderSize: number;
    marginBottom: number;
    borderColor: Color;
    padding: number;
  };

  layoutWithHeroImage: {
    headerHeight: number;
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
    fontFamily: HEADLINE_FONT_FAMILY,
    fontSize: RHYTHM_BASE * 7,
    height: RHYTHM_BASE * 17,
    marginBottom: RHYTHM_BASE * 2,
    padding: RHYTHM_BASE * 5,
    width: RHYTHM_BASE * 35
  },

  headline: {
    borderColor: Color.Black,
    borderHeight: RHYTHM_BASE * 17,
    borderMargin: RHYTHM_BASE * 2,
    borderWidth: RHYTHM_BASE,
    fontFamily: HEADLINE_FONT_FAMILY
  },

  heroImage: {
    backgroundColor: Color.White,
    borderColor: Color.Black,
    borderSize: RHYTHM_BASE,
    marginBottom: RHYTHM_BASE * 10,
    padding: RHYTHM_BASE * 2
  },

  layoutWithHeroImage: {
    headerHeight: RHYTHM_BASE * 17
  },

  rythmBase: RHYTHM_BASE
};
