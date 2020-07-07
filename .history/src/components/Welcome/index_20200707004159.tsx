import React, { useEffect, useRef } from "react";
import { Box, Pluzze, Title, Span, Form, Label, Input } from "./styles";
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
            <Label>
              Nome:
              <Input type="email" value="email" />
            </Label>
            <Input type="submit" value="Enviar" />
          </Form>
        </Title>
      </Box>
    </>
  );
};

export default Welcome;
