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
        width={50}
        height={50}
        handleDiameter={50}
      />
    </Container>
  );
};

export default Header;
