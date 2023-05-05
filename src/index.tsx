import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import defaultTheme from "./theme";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider theme={defaultTheme}>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
