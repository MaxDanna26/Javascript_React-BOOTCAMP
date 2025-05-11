import { Link } from "react-router-dom";
import styled from "styled-components";

export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
margin: 1rem;
grid-gap: 1rem;
`;

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 1rem;
border: 2px solid black;
color: blue;
&:hover{
  cursor: pointer;
}
`;

export const Player = styled.div`
margin: 5px;
padding: 5px;
border: 2px solid black;
text-align: center;
&:hover{
  cursor: pointer;
}
`;

export const Img = styled.img`  
  width: 50px;
  height: auto;
  image-rendering: crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  object-fit: contain;
`;

export const Enlace = styled(Link)`
text-decoration: none;
`;