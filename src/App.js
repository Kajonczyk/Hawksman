import React from "react";
import HomePage from "./Pages/HomePage/HomePage";
import { AboutPage } from "./Pages/AboutPage/AboutPage";
import { PortfolioPage } from "./Pages/PortfolioPage/PortfolioPage";
import { ContactPage } from "./Pages/ContactPage/ContactPage";
import { GlobalStyle } from "./Utils/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./Utils/theme";
import NavbarProvider from "./Shared/NavbarContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "./Utils/history";
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavbarProvider>
          <Router history={history} basename="/hawksman">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/about" exact component={AboutPage} />
              <Route path="/portfolio" exact component={PortfolioPage} />
              <Route path="/contact" exact component={ContactPage} />
            </Switch>
            <GlobalStyle />
          </Router>
        </NavbarProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
