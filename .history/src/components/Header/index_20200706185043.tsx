import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { Container, Box, Elipse1 } from "./styles";
import logo from "./../../assets/logo.png";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <>
      <Container>
        <Elipse1>
          <img src={logo} alt="Logo Site" />
        </Elipse1>
      </Container>
      <Box>
        <Switch
          onChange={toggleTheme}
          checked={title == "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor="#b15"
          offColor="#bbb5"
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
