import React from "react";
import HomePage from "./Pages/HomePage";
import { GlobalStyle } from "./Utils/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./Utils/theme";
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <HomePage />
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
