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
        onColor="white"
        offColor="black"
        width={20}
        handleDiameter={10}
      />
    </Container>
  );
};

export default Header;
