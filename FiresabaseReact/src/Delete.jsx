import { useEffect, useRef, useState } from 'react';
import { deleteItem, getItems } from '../services/api';
import { Button, Container, Input, P } from './styled';

function Delete() {
  const idObj = useRef();
  const [items, setItems] = useState();

  useEffect(() => { getItems().then(setItems) }, [])

  const update = () => { getItems().then(setItems) }

  return (
    <Container>
      <Input ref={idObj} placeholder='Id guest'></Input>
      <Button onClick={() => {
        deleteItem(idObj.current.value);
        update();
      }}>Borrar</Button>

      {items?.map(item => <P key={item.id}>{item.id} - {item.name}</P>)}
    </Container>

  )
}

export default Delete
