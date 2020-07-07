import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";

const App = () => {
  const [theme, setTheme] = useState(light);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header />
      </div>
    </ThemeProvider>
  );
};

export default App;
