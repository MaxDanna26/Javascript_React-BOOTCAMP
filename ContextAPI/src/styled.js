import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { TfiSave } from "react-icons/tfi";
import backgroundImage from '../public/marek-piwnicki-FrR0nSrJyyw-unsplash.jpg'

const desktopStartWidth = 996;
const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}
  body{
    margin: 0;
    padding: 0;
    ${'' /* overflow-x: hidden; */}
    background: url(${backgroundImage});
    background-size: cover;
    text-align: center;
    background-repeat: no-repeat;
    background-position: 50%;
    height: 100vh;

    ${desktop}
    {
    }
  }
  #root{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const IconStyled = styled(TfiSave).attrs(() => ({
  size: 25,
}))`
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  padding: 8px;
  border-radius: 5px;
`;

export const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
border-radius: 15px;
background-color: ${({ $bg }) => $bg ? $bg : 'transparent'};
color: white;
font-weight: bold;
transition: 0.4s;
cursor: pointer;
&:hover{
  background-color: #0378A6;
  box-shadow: 0px 0px 7px 3px #EBEFF2;
    transform: scale(1.04); 
}
`;

export const Logout = styled.button`
padding: 8px;
border: 1px solid #403B22;
background-color: #735B2F;
color: #EBEFF2;
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
font-weight: bold;
cursor: pointer;
`;

export const NavLinks = styled(Link)`
color: white;
background-color:#A68E46;
color: #EBEFF2;
padding: 0.4rem;
margin: .5rem;
text-decoration: none;
border-radius: 5px;
border: 2px solid #403B22;
`;

export const Nav = styled.div`
position: fixed;
top: 0;
right: 0;
left: 0;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`;

export const Container = styled.div`
display: flex;
flex-direction: ${({ $direction }) => $direction ? $direction : 'column'};
align-items: center;
justify-content: center;
gap: ${({ $gap }) => $gap ? $gap : '.5rem'};
background-color: ${({ $bg }) => $bg ? $bg : 'transparent'};
margin: ${({ $mg }) => $mg ? $mg : '0'};
`;

export const Card = styled.div`
  background-color: #A68E46;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;
  overflow: hidden;

  ${mobile} {
    width: 100%
  }

  ${desktop}{
    min-width: 996px;
    width: 80%;
    }
`;

export const Botonera = styled.div`
display: flex;
background-color:${({ $bg }) => $bg ? $bg : 'transparent'}  ;
gap: 0.5rem;
`;

export const Input = styled.input`
padding: ${({ $pd }) => $pd ? $pd : '8px'};
background-color: #EBEFF2;
border: 0px solid #EBEFF2;
border-radius: 4px;
width: 90%;
transition: 0.1s;
&:hover{
  box-shadow: 0px 0px 4px 4px #EBEFF2;
  scale: 1.01;
} 
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: ${({ $visible }) => ($visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
`;

export const Back = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F4EDE0;
  width: 320px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(143, 138, 138, 0.1);
  position: relative;
`;

export const Relative = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  bottom: 30px;
  right: 20px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #735B2F;
  transition: 0.2s;

  &:hover {
    color: #A68E46;
    transform: scale(1.1);
  }
`;


