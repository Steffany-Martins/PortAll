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
export const Elipse1 = styled.div`
  position: absolute;
  url(https://images.unsplash.com/photo-1534318400171-5d69d3e4c394?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80);
  width: 103px;
  height: 103px;
  left: 30px;
  top: 59px;
  border-radius: 60%;
  box-shadow: inset 0 0 1em red, 0 0 0.5em white;
  background: #838383;
`;
export const Box = styled.div`
  position: absolute;
  left: 190vh;
  top: 2vh;
`;
