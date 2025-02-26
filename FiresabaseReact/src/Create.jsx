import { createItem, getItems } from '../services/api';
import { useEffect, useState, useRef } from 'react';
import { Button, Input, P } from './styled';

function Create() {
  const name = useRef();
  const [items, setItems] = useState();

  useEffect(() => update, []);

  const update = () => {
    getItems().then(setItems);
  }

  const createObj = (name) => {
    const obj = { 'name': name };
    return obj;
  }
  return (
    <div>
      <Input ref={name} placeholder="name" />
      <Button onClick={() => {
        const obj = createObj(name.current.value);
        createItem(obj);
        update();
      }}>Añadir</Button>

      {items?.map(item => <P key={item.id}>{item.id} - {item.name}</P>)}
    </div>
  )
}

export default Create
