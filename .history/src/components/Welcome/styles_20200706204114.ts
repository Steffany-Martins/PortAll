import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 162px;
  height: 1000px;
  top: 0px;
  background: ${(props) => props.theme.colors.primary};
`;

export const Box = styled.div`
  position: absolute;
  right: 20vh;
  top: 2vh;
`;
