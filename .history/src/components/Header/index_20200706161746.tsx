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
        onColor="#fff"
        offColor="#0005"
        width={40}
        height={20}
        handleDiameter={20}
        onHandleColor="#7575"
      />
    </Container>
  );
};

export default Header;
