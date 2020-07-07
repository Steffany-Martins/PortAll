import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 162px;
  height: 1024px;
  left: 0px;
  top: 0px;

  background: ${(props) => props.theme.colors.primary};
  justify-content: center;
  border-radius: 35px;
`;
