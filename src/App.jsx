import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Contact from './components/Contact'; // Importa el componente Contact

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:id" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/contacto" element={<Contact />} /> {/* Nueva ruta */}
          <Route exact path="/category/nuevos-ingresos" element={<ItemListContainer greeting="Nuevos Ingresos" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
