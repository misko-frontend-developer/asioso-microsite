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
  colors: {
    asiosoGreen: ["#93bd32", "#618117", "", "", "", "", "", "", "", ""],
  },
  fontSizes: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    xxl: "4rem",
  },
  components: {
    TextInput: {
      styles: (theme) => ({
        input: {
          fontSize: theme.fontSizes.sm,
          borderRadius: 10,
        },
        error: {
          fontSize: theme.fontSizes.sm,
          mt: 20,
        },
      }),
    },
  },
};
export default defaultTheme;
