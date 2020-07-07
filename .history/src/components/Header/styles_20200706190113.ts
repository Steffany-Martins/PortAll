import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 162px;
  height: 1000px;
  top: 0px;
  background: ${(props) => props.theme.colors.primary};
`;
export const Elipse1 = styled.div`
  position: absolute;
  width: 103px;
  height: 103px;
  left: 10%;
  top: 59px;
  border-radius: 60%;
  z-index: 1;
`;
export const Box = styled.div`
  position: absolute;
  left: 190vh;
  top: 2vh;
`;
