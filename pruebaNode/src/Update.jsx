import { useEffect, useState } from 'react';
import { Button, Container, Input, P } from './styled';
import { getCiudadanoById, readCiudadanos, updateCiudadano } from './services/api';

function Update() {
  const [id, setId] = useState('');
  const [items, setItems] = useState([]);

  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  useEffect(() => { readCiudadanos().then(setItems) }, [])

  const update = () => { readCiudadanos().then(setItems) }
  const handleEdit = async (id) => {
    const c = await getCiudadanoById(id);
    const ciudadano = c[0];
    await setDni(ciudadano.dni);
    await setPassword(ciudadano.contraseña);
    setName(ciudadano.nombre);
  }

  return (
    <Container>
      <Input value={id} placeholder='Id to update' onChange={(e) => setId(e.target.value)}></Input>
      <Button onClick={() => {
        handleEdit(id);
      }}>Editar</Button>

      {items?.map(item => <P key={item.id}>{item.id} - {item.dni} - {item.nombre} - {item.contraseña}</P>)}

      <Container>
        <Input value={dni} onChange={(e) => setDni(e.target.value)} type='text' placeholder="dni" />
        <Input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder="password" />
        <Input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder="nombre" />

        <Button onClick={async () => {
          await updateCiudadano(id, dni, password, name);
          update();
        }}>Actualizar</Button>
      </Container>
    </Container>

  )
}

export default Update
