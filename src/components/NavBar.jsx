import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li>
          <div>
            <span>Productos</span>
            <ul>
              <li>
                <Link to="/category/Nuevos%20Ingresos">Nuevos Ingresos</Link>
              </li>
              <li>
                <Link to="/category/Laptops">Laptops</Link>
              </li>
              <li>
                <Link to="/category/Tablets">Tablets</Link>
              </li>
            </ul>
          </div>
        </li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
