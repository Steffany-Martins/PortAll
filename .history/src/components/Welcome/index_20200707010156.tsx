import React, { useEffect, useRef } from "react";
import { Box, Pluzze, Title, Span, Form, Label, Input, Submit } from "./styles";
import lottie from "lottie-web";

interface Props {
  container: void;
}
const Welcome: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current)
      lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("./../../assets/pluzze.json"),
      });
  }, []);

  return (
    <>
      <Pluzze ref={container} />
      <Box>
        <Title>
          Seja bem-vindo ao
          <Span> PortAll</Span>
          <Form>
            <Label aria-label="e-mail">
              E-mail :
              <Input
                aria-label="Digite Email"
                aria-placeholder="Digite Email"
                type="email"
                placeholder="Digite o seu e-mail"
              />
            </Label>
            <Label aria-label="e-mail">
              Senha :
              <Input
                aria-label="Digite Senha"
                aria-placeholder="Digite Senha"
                type="password"
                placeholder="Digite a sua senha"
              />
            </Label>
            <Submit
              aria-label="Clique Entrar"
              aria-placeholder="Entrar"
              type="submit"
              value="Entrar"
            />
          </Form>
        </Title>
      </Box>
    </>
  );
};

export default Welcome;
