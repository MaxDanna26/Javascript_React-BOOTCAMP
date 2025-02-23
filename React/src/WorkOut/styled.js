import styled from "styled-components";

export const Carousel = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
img{
  width: 240px;
}
`;

export const Body = styled.div`
width: 800px;
margin: auto;
text-align: center;
img{cursor:pointer;}

`;


export const Img = styled.img`
border: 3px solid ${({ $isSelected }) => $isSelected ? 'red' : 'transparent'};
border-radius: 20px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
  background: none;
  border: none;
  &:last-of-type img{
    transform: rotate(180deg);
  }
  }

`;