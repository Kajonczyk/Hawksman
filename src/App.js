import React from "react";
import HomePage from "./Pages/HomePage/HomePage";
import { AboutPage } from "./Pages/About/AboutPage";
import { GlobalStyle } from "./Utils/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./Utils/theme";
import NavbarProvider from "./Shared/NavbarContext";
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavbarProvider>
          <GlobalStyle />
          {/* <HomePage /> */}
          <AboutPage />
        </NavbarProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
