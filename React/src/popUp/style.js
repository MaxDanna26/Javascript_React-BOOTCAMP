import styled from "styled-components";

export const Back = styled.div`
display: ${({ $visible }) => $visible ? 'flex' : 'none'};
flex-direction: column;
justify-Content: center;
align-items: center;
position: absolute;
background-color: black;
width: 300px;
height: 300px;
border-radius: 10px;
top: 30%;
right: 30%;
color: white;

`;

export const Overlay = styled.div`
`;


export const Relative = styled.div`
position: relative;
width: 100%;
height: 100%;
button{
  position:absolute;
  right: 0;
  top: 0;
}
button:hover{
  cursor: pointer;
}
`;