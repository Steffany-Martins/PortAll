import React, { useEffect, useRef } from "react";
import { Link as Linked, useHistory } from "react-router-dom";
import {
  Box,
  Pluzze,
  Title,
  Link,
  Span,
  Form,
  Label,
  Input,
  Submit,
} from "./styles";
import lottie from "lottie-web";

interface Props {
  container: void;
}
const Cadastro: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const history = useHistory();
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
      <audio src="/test/audio.ogg">
        <p>Seu nevegador não suporta o elemento audio.</p>
      </audio>
      <Pluzze ref={container} />
      <Box>
        <Title>
          Seja bem-vindo ao
          <Span> PortAll</Span>
          <Form>
            <Label aria-label="e-mail">
              E-mail :<br />
              <Input
                aria-label="Digite Email"
                aria-placeholder="Digite Email"
                type="email"
                placeholder="Digite o seu e-mail"
              />
            </Label>
            <Label aria-label="nome">
              Nome completo :<br />
              <Input
                aria-label="Digite Nome"
                aria-placeholder="Digite Nome"
                type="text"
                placeholder="Digite o seu Nome"
              />
            </Label>
            <Label aria-label="Senha">
              Senha :<br />
              <Input
                aria-label="Digite Senha"
                aria-placeholder="Digite Senha"
                type="password"
                placeholder="Digite a sua senha"
              />
            </Label>
            <Label aria-label="confirme senha">
              Confirme a senha :<br />
              <Input
                aria-label="Digite Senha"
                aria-placeholder="Digite Senha"
                type="password"
                placeholder="Digite a sua senha"
              />
            </Label>
            <Submit
              aria-label="Clique Cadastrar"
              aria-placeholder="Cadastrar"
              type="submit"
              value="Cadastrar"
              onSubmit={() => {
                history.push("/SalaDeAula");
              }}
            />
          </Form>
        </Title>
        <Link>
          Se enganou sobre o cadastro?
          <Linked to="/">Login</Linked>
        </Link>
      </Box>
    </>
  );
};

export default Cadastro;
