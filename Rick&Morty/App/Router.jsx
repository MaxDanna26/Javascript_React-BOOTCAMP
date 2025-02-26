import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/Home';
import Page2 from '../src/Page2';
import Layout from '../Components/Layout';

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="/page2" element={<Page2 />} /> */}
        <Route path="/page2/:id" element={<Page2 />} />
        { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;