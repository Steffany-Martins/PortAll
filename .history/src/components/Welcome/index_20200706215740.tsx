import React, { useEffect, useRef } from "react";
import { Box } from "./styles";
import lottie from "lottie-web";

const Welcome: React.FC = () => {
  const container = useRef();

  useEffect(() => {
    lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: true,
      autoplay: true,
    });
  }, []);

  return (
    <>
      <Box>TEXT ME</Box>
    </>
  );
};

export default Welcome;
