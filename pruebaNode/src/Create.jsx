import { useEffect, useState, useRef } from 'react';
import { Button, Container, Input, P } from './styled';
import { Insert, readCiudadanos } from './services/api';


function Create() {
  const name = useRef();
  const dni = useRef();
  const contrasenya = useRef();
  const [items, setItems] = useState();

  useEffect(() => update, []);

  const update = () => {
    readCiudadanos().then(setItems);
  }

  return (
    <div>
      <Container>
        <Input type='text' ref={name} placeholder="nombre" />
        <Input type='password' ref={contrasenya} placeholder="password" />
        <Input type='text' ref={dni} placeholder="dni" />
      </Container>

      <Button onClick={async () => {
        await Insert(dni.current.value, contrasenya.current.value, name.current.value);
        update();
      }}>Añadir</Button>

      {items?.map(item => <P key={item.id}>{item.id} - {item.dni} - {item.nombre} - {item.contraseña}</P>)}
    </div>
  )
}

export default Create
