import { useEffect, useState } from 'react';
import { getCharacters } from '../services/api';
import { Body, Container } from './styled';
import { Link } from 'react-router-dom';

function Home() {
  const [characters, setCharacters] = useState();

  useEffect(() => { getCharacters().then(setCharacters) }, [])
  return (
    <Body>
      {characters?.map(character => (
        <Container key={character.id + character.name}>
          <img key={character.id} src={character.image}></img>
          <Link to={`/page2/${character.id}`}>{character.name}</Link>
        </Container>
      ))}
    </Body>
  )
}

export default Home
