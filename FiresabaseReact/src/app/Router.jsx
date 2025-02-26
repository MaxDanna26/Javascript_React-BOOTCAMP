import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from '../Create'
import Delete from '../Delete'
import Home from '../Home'
import Layout from '../components/Layout';

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/delete" element={<Delete />} />
        { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;