import { Global } from "@mantine/core";

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "Montserrat",
            src: `url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap') format("woff2")`,
            fontStyle: "normal",
          },
        },
      ]}
    />
  );
}
