import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import usePersistedState from "../utils/usePersistedState";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

import GlobalStyle from "../styles/global";
import Header from "./../components/Header";
import Login from "./Cadastro";

const App = () => {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title == "light" ? dark : light);
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalStyle />
          <Header toggleTheme={toggleTheme} />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
