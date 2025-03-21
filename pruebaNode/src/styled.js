import { Link } from "react-router-dom";
import styled from "styled-components";

export const P = styled.p`
background-color: orange;
padding: 10px;
border-radius: 10px;
`;

export const Enlace = styled(Link)`
text-decoration: none;
background-color: black;
color: white;
padding: 10px;
font-weight: bold;
border-radius: 10px;
`;

export const Li = styled.li`
list-style: none;
`;

export const Ul = styled.ul`
display: flex;
justify-content: center;
align-items: center;
gap: 0.5rem;
`;

export const Container = styled.div`
width: 70%;
margin: auto;
text-align: center;
`;

export const Input = styled.input`
padding: 10px;
border-radius: 5px;
border: 2px solid black;
text-align: center;
`;

export const Button = styled.button`
padding: 12px;
margin: 0.2rem;
border-radius: 5px;
background-color: red;
color: white;
border: none;
&:hover{
  cursor: pointer;
}
`;