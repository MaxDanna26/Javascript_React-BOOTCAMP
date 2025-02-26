import { useState, useEffect } from 'react';
import { getItems } from '../services/api';
import { Container, P } from './styled';

function Home() {
  const [items, setItems] = useState();

  useEffect(() => { getItems().then(setItems) }, [])

  return (
    <Container>
      {items?.map(item => <P key={item.id}>{item.id} - {item.name} </P>)}
    </Container>
  )
}

export default Home
