import styled from "styled-components";

export const Parrafo = styled.p`
  padding: 8px;
  border-radius: 4px;
  background-color: ${({ $activo }) => ($activo ? "red" : "transparent")};
  transition: background-color 0.3s ease;
`;
