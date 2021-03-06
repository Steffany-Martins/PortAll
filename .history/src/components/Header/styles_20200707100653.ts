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

  height: 200px;
  width: 130vh;
  right: 40vh;
  top: 10vh;
  border-radius: 25px;
  background: ${(props) => props.theme.colors.primary};
`;
export const Img = styled.img`
  border-radius: 10px;
`;
export const Progress = styled.div`
  width: 506px;
  height: 18px;
  left: 559px;
  top: 327px;

  background: #ffffff;
  border-radius: 20px;
`;
