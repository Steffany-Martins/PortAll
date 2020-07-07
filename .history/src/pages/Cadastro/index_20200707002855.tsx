import React from "react";
import { Title, Span } from "./styles";
import Welcome from "../../components/Welcome";

const Cadastro: React.FC = () => {
  return (
    <>
      <Welcome>
        <Title>
          Seja bem-vindo ao
          <Span> PortAll</Span>
        </Title>
        <form>
          <label>
            Nome:
            <input type="email" value="email" />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </Welcome>
    </>
  );
};

export default Cadastro;
