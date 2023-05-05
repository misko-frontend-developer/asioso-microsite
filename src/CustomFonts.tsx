import { Global } from "@mantine/core";

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "Montserrat",
            src: `url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;700;800&display=swap') format("woff2")`,
            fontStyle: "normal",
          },
        },
      ]}
    />
  );
}
