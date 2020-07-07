import React from "react";
import { Title, Span } from "./styles";
import Welcome from "./../../components/Welcome";

const Login: React.FC = () => {
  return (
    <>
      <Welcome>
        <Title>
          Seja bem-vindo ao
          <Span> PortAll</Span>
        </Title>
      </Welcome>
    </>
  );
};

export default Login;
