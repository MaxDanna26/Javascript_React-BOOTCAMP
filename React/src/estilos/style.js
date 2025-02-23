import styled from "styled-components";

export const Box = styled.div`
background-color: ${({ color }) => color ? 'red' : 'orange'};
width: 300px;
height: 300px;
`;

