import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";

const App = () => {
  return (
    <ThemeProvider>
      {" "}
      <div className="App">
        <GlobalStyle />
        <Header />
      </div>
    </ThemeProvider>
  );
};

export default App;
