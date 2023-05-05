import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import defaultTheme from "./theme";
import { CustomFonts } from "CustomFonts";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider theme={defaultTheme}>
        <CustomFonts />
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
