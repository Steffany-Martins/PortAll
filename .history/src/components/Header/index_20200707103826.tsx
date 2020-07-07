import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { Container, Box, Elipse1 } from "./styles";
import logo from "./../../assets/logo.png";
import ongs from "./../../assets/ongs.png";
import voluntarios from "./../../assets/voluntarios.png";
import LeanCanvas from "./../../assets/Lean_Canva_1.png";
import { Box2, Img, Progress, Bar, Title, H1 } from "./styles";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);
  return (
    <>
      <Container>
        <Elipse1>
          <img src={logo} width={146} height={146} alt="Logo PortAll" />
          <img src={ongs} width={146} height={146} alt="Logo PortAll" />
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
        <H1>Sala De Aula</H1>
        <Box2>
          <Img src={LeanCanvas} width={290} height={200} />
          <Title>Lean Canvas - Primeiros Passos</Title>
          <Progress>
            <Bar>92%</Bar>
          </Progress>
        </Box2>
      </Box>
    </>
  );
};

export default Header;
