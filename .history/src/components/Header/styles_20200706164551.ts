import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 162px;
  height: 1000px;
  left: 0px;
  top: 0px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 35px;
`;
export const Box = styled.div`
  position: absolute;
  left: 190vh;
  top: 10vh;
`;
