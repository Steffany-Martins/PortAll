import React from "react";
import Switch from "react-switch";

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      Hello Wolrd <Switch onChange={() => {}}></Switch>
    </Container>
  );
};

export default Header;
