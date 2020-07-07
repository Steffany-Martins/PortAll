import React from "react";
import Switch from "react-switch";

import { Container, Box } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Box>
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
          offHandleColor="#fff"
          activeBoxShadow="0 0 2px 3px #b15"
        />
      </Box>
    </Container>
  );
};

export default Header;
