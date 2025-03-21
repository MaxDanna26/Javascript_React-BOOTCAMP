import { useEffect, useState } from 'react';
import { Button, Container, Input, P } from './styled';
import { readCiudadanos, deleteCiudadano } from './services/api';

function Delete() {
  const [id, setId] = useState('');
  const [items, setItems] = useState();

  useEffect(() => { readCiudadanos().then(setItems) }, [])

  const update = () => { readCiudadanos().then(setItems) }

  return (
    <Container>
      <Input value={id} placeholder='Id to delete' onChange={(e) => setId(e.target.value)}></Input>
      <Button onClick={() => {
        deleteCiudadano(id);
        update();
      }}>Borrar</Button>

      {items?.map(item => <P key={item.id}>{item.id} - {item.dni} - {item.nombre} - {item.contraseña}</P>)}
    </Container>

  )
}

export default Delete
