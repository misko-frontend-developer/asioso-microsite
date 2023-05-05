import { MantineTheme, MantineThemeOverride } from "@mantine/core";

const defaultTheme: MantineThemeOverride = {
  fontFamily: "Montserrat, sans-serif",
  globalStyles: (theme: MantineTheme) => ({
    "*": {
      boxSizing: "border-box",
      padding: 0,
      margin: 0,
    },
  }),

  colors: {},
};
export default defaultTheme;
