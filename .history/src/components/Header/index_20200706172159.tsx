import React from "react";
import Switch from "react-switch";

import { Container, Box, Elipse1 } from "./styles";

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <Elipse1 />
      </Container>
      <Box>
        <Switch
          onChange={() => {}}
          checked={true}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor="#b15"
          offColor="#bbbb"
          width={40}
          height={20}
          handleDiameter={20}
          onHandleColor="#fff"
          offHandleColor="#fff"
          activeBoxShadow="0 0 2px 3px #b155"
        />
      </Box>
    </>
  );
};

export default Header;
