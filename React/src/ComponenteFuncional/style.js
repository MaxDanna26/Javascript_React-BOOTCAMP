import styled, { createGlobalStyle } from "styled-components";
import font from '../../../ back_peace / Back Peace.otf';

const desktopStartWidth = 996;
const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const GlobalStyle = createGlobalStyle`
body{
@font-face {
  font-family: myFont;
  src: ${font};
}
  width: 90%;
  box-sizing: border-box;
  margin: auto;
  background-color: bisque;

}`;

export const StyledComponent1 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 200px;
height: 200px;
background-color: red;
  ${mobile}{
    border-radius:400px;
  }
`;

export const StyledComponent2 = styled(StyledComponent1)`
background-color:blue;
transition: 1s;
border-radius: 20px;
width: ${({ $size }) => $size ? $size : '200px'};
height: ${({ $size }) => $size ? $size : '200px'};
&:hover{
  background-color: red;
}

p{
  font - family: myFont;
}
`;