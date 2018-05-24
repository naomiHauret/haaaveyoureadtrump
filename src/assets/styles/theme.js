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
}

const colorPalette = {
  americanDeepBlue: "#052870",
  americanLightBlue: "#4286d9",
  americanRed: "#f0362d",
  americanLightRed: "#f3726c",
  americanBlack: "#212121",
  americanLightGrey: "#e5e5e5",
  americanWhite: "#ffffff",
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
  colors: {
    ...colorPalette,
    backgrounds: {
      dark: colorPalette.americanDeepBlue,
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
        light: colorPalette.americanLightBlue,
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
