import { MantineTheme, MantineThemeOverride } from "@mantine/core";

const defaultTheme: MantineThemeOverride = {
  globalStyles: (theme: MantineTheme) => ({
    "*": {
      boxSizing: "border-box",
      padding: 0,
      margin: 0,
      fontFamily: "Greycliff CF, sans-serif",
    },
  }),
  colors: {},
};
export default defaultTheme