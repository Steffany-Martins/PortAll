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
  left: 5%;
  top: 2%;
  border-radius: 60%;
`;
export const Box = styled.div`
  position: absolute;
  right: 20vh;
  top: 2vh;
`;
export const Box2 = styled.div`
  position: absolute;
  width: 110%;
  height: 223px;

  background: ${(props) => props.theme.colors.primary};
  border-radius: 25px;
`;
