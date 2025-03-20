import { useState, useEffect } from 'react';
import { Container, P } from './styled';
import { readCiudadanos } from './services/api';

function Home() {
  const [items, setItems] = useState();

  useEffect(() => { readCiudadanos().then(setItems) }, [])

  return (
    <Container>
      {items?.map(item => <P key={item.id}>{item.id} - {item.contraseña} - {item.dni} - {item.nombre} </P>)}
    </Container>
  )
}

export default Home
