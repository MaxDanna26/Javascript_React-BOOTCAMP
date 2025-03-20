import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/components/Home';
import Layout from '../src/components/Layout'
import SeeMessage from '../src/components/SeeMessage';
import WriteMessage from '../src/components/WriteMessage';

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/seemessage" element={<SeeMessage />} />
        <Route path="/writemessage" element={<WriteMessage />} />
        { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;