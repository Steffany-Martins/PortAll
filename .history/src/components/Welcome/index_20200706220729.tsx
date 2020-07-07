import React, { useEffect, useRef } from "react";
import { Box, Pluzze } from "./styles";
import lottie from "lottie-web";

interface Props {
  container: void;
}
const Welcome: React.FC = () => {
  const container = useRef<Props>(null);

  useEffect(() => {
    lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./../../assets/pluzze.json"),
    });
  }, []);

  return (
    <>
      <Pluzze ref={container} />
      <Box>TEXT ME</Box>
    </>
  );
};

export default Welcome;
