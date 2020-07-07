import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 162px;
  height: 1024px;
  left: 0px;
  top: 0px;
  align-items: center;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 35px;
`;
