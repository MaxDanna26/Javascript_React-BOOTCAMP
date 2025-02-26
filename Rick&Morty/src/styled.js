import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
a{
  padding: 10px;
  color: black;
  text-decoration: none;
  background-color: bisque;
  width:95%;
}
img{
  width: 100%;
}
`;

export const Body = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 0.4rem;
`;

export const ContainerB = styled.div`
background-color: bisque;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
img{width:50%;}
`;

export const MagicLink = styled(Link)`
color: white;
background-color: black;
padding: 0.5rem;
margin: 0.5rem;
text-decoration: none;
font-weight: bold;
`;