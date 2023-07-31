import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer'; // Importa el componente ItemListContainer

const NavBar = () => {
  const [showCatalog, setShowCatalog] = useState(false);

  const handleCatalogClick = () => {
    setShowCatalog(true);
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/iphone" onClick={handleCatalogClick}>Productos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li>
          <CartWidget />
        </li>
      </ul>
      <ItemListContainer greeting="¡Bienvenido!" showCatalog={showCatalog} />
    </nav>
  );
};

export default NavBar;
