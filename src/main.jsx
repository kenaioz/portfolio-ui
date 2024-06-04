import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { Home } from "./pages/Home/";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </I18nextProvider>
  </StrictMode>
);
