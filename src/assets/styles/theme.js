import DesignSystem from "design-system-utils"

const pxFontSize = {
  base: 20,
}

const fontFamily = {
  base:
    '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
  headings: {
    h1:
      '"MontserratBlack", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
    h2:
      '"MontserratLight", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
  },
  tooltip: {
    title:
      '"MontserratLight", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
  },
  burgerData: {
    default:
      '"MontserratLight", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
    percentage:
      '"MontserratBlack", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
  },
}

const colorPalette = {
  americanDarkBlue: "#020E28",
  americanDeepBlue: "#052870",
  americanMediumBlue: "#37538C",
  americanLightBlue: "#4286d9",
  americanRed: "#f0362d",
  americanLightRed: "#f3726c",
  americanYellow: "#FFD34D",
  americanLightYellow: "#FFE953",
  americanBlack: "#212121",
  americanLightGrey: "#f9f9f9",
  americanDarkGrey: "#e4e4e4",
  americanWhite: "#ffffff",
  americanGreen: "#D9EF54",
}

export const myDesignSystem = {
  grid: {
    width: {
      xs: "100%",
      sm: 750,
      md: 970,
      lg: 1170,
    },
  },
  typo: {
    sizes: {
      base: 20,
      headings: {
        h1: 50,
        h2: 14,
      },
      legend: 18,
    },
    fontFamily,
    fontWeight: {
      light: 300,
      normal: 400,
      black: 900,
    },
    lineHeight: {
      headings: {
        h1: 24,
        h2: 12,
      },
      base: 12,
    },
  },
  chartLines: [
    {
      color: colorPalette.americanWhite,
      dash: [1, 0],
    },
    {
      color: colorPalette.americanLightYellow,
      dash: [1, 0],
    },

    {
      color: colorPalette.americanLightBlue,
      dash: [1, 0],
    },
    {
      color: colorPalette.americanLightRed,
      dash: [1, 0],
    },
    {
      color: colorPalette.americanYellow,
      dash: [1, 0],
    },
    {
      color: colorPalette.americanDarkBlue,
      dash: [1, 0],
    },
    {
      color: colorPalette.americanGreen,
      dash: [5, 5],
    },
    {
      color: colorPalette.americanWhite,
      dash: [5, 5],
    },
    {
      color: colorPalette.americanLightYellow,
      dash: [5, 5],
    },

    {
      color: colorPalette.americanLightBlue,
      dash: [5, 5],
    },
    {
      color: colorPalette.americanLightRed,
      dash: [5, 5],
    },
    {
      color: colorPalette.americanYellow,
      dash: [5, 5],
    },
    {
      color: colorPalette.americanDarkBlue,
      dash: [5, 5],
    },
  ],
  colors: {
    ...colorPalette,
    backgrounds: {
      dark: colorPalette.americanDeepBlue,
      medium: colorPalette.americanMediumBlue,
      light: colorPalette.americanLightGrey,
    },
    texts: {
      headings: {
        light: colorPalette.americanWhite,
        dark: colorPalette.americanRed,
      },
      paragraphs: {
        dark: colorPalette.americanBlack,
        light: colorPalette.americanWhite,
      },
      legends: {
        dark: colorPalette.americanBlack,
        colorful: colorPalette.americanLightBlue,
        light: colorPalette.americanWhite,
      },
      navigation: colorPalette.americanLightBlue,
    },
  },
  zIndex: {
    base: 0,
    legend: 5,
  },
  spacing: {},
  transition: {
    fast: "all 350ms ease-in-out",
  },
}

export const ds = new DesignSystem(myDesignSystem, {
  useModularScale: true,
  fontSizeUnit: "rem",
})
