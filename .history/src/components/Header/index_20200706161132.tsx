import React from "react";
import Switch from "react-switch";

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Switch
        onChange={() => {}}
        checked={true}
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </Container>
  );
};

export default Header;
