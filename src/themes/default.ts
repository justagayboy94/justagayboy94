const RHYTHM_BASE = 4;

const HEADLINE_FONT_FAMILY = "Black Ops One";

export enum Color {
  Primary = "yellow",
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

  linkButton: {
    borderColor: Color;
    color: Color;
    paddingLeftRight: number;
    paddingTopBottom: number;
    boxShadowOffset: number;
    boxShadowColor: Color;
    marginBottom: number;
  };

  layoutWithHeroImage: {
    headerHeight: number;
  };

  stats: {
    fontFamily: string;
    fontSize: number;
    marginTop: number;
    marginBottom: number;

    dekstop: {
      marginBottom: number;
    };
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

  linkButton: {
    borderColor: Color.Black,
    boxShadowColor: Color.Primary,
    boxShadowOffset: RHYTHM_BASE * 2,
    color: Color.Black,
    marginBottom: RHYTHM_BASE * 4,
    paddingLeftRight: RHYTHM_BASE * 3,
    paddingTopBottom: RHYTHM_BASE * 2
  },

  rythmBase: RHYTHM_BASE,

  stats: {
    fontFamily: HEADLINE_FONT_FAMILY,
    fontSize: RHYTHM_BASE * 16,
    marginBottom: RHYTHM_BASE * 8,
    marginTop: RHYTHM_BASE * 4,

    dekstop: {
      marginBottom: RHYTHM_BASE * 10
    }
  }
};
