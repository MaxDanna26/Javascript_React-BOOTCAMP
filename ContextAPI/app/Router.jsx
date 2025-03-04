import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../src/components/Layout';
import Login from '../src/components/Login'
import Home from '../src/components/Home';
import Task from '../src/components/Task';

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/task" element={<Task />} />
        { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;