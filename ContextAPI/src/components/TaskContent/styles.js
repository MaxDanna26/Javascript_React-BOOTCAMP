import styled from "styled-components";
import { TfiSave } from "react-icons/tfi";

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

export const Container = styled.div`
display: flex;
flex-direction: ${({ $direction }) => $direction ? $direction : 'column'};
align-items: center;
justify-content: center;
gap: ${({ $gap }) => $gap ? $gap : '.5rem'};
background-color: ${({ $bg }) => $bg ? $bg : 'transparent'};
margin: ${({ $mg }) => $mg ? $mg : '0'};
`;

export const TaskBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
background-color: #9BB1BF;
margin: .7rem;
padding: 7px;
border-radius: 10px;
border: 1px solid black;
`;

export const TaskText = styled.p`
background-color: #9BB1BF;
color: white;
font-weight: bold;
font-size: 1.2rem;
width: 100%;
white-space: normal;
word-wrap: break-word;
margin: 0;
`;

export const TaskButton = styled.button`
display: flex;
flex-direction: column;
color: black;
padding: 5px;
border-radius: 5px;
transition: 0.2s;
cursor: pointer;
&:hover{
  box-shadow: 0px 0px 5px 5px #EBEFF2;
}
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