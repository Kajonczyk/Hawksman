import React from "react";
import HomePage from "./Pages/HomePage/HomePage";
import { AboutPage } from "./Pages/About/AboutPage";
import { GlobalStyle } from "./Utils/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./Utils/theme";
import NavbarProvider from "./Shared/NavbarContext";
import {Router,Switch,Route} from "react-router-dom";
import history from "./Utils/history"
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavbarProvider>
          <Router history={history}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/about" exact component={AboutPage} />
            </Switch>
          <GlobalStyle />
          </Router>

          
        </NavbarProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
