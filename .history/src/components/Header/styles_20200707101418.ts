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
  right: 20vh;
  top: 10vh;
  border-radius: 25px;
  background: ${(props) => props.theme.colors.primary};
`;
export const Img = styled.img`
  border-radius: 10px;
`;
export const Progress = styled.div`
  position: absolute;

  width: 400px;
  height: 18px;
  color: black;
  right: 5vh;
  top: 20vh;
  background: #ffffff;
  border-radius: 20px;
`;

export const Bar = styled.div`
  position: absolute;
  width: 153px;
  height: 18px;
  right: 2h;
  top: 0vh;

  background: #f9c00e;
  border-radius: 20px;
`;
