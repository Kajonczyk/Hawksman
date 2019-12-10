import React from "react";
import HomePage from "./Pages/HomePage";
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
          <HomePage />
        </NavbarProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
