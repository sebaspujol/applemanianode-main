import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'iPhone 11',
    capacity: '128 GB',
    description: 'El iPhone 11 es un smartphone potente con una cámara dual y una batería de larga duración.',
    category: 'Nuevos Ingresos', // Nueva propiedad para la categoría
  },
  {
    id: 2,
    name: 'iPhone 12',
    capacity: '128 GB',
    description: 'El iPhone 12 ofrece una pantalla OLED brillante y un diseño elegante.',
    category: 'Nuevos Ingresos', // Nueva propiedad para la categoría
  },
  {
    id: 3,
    name: 'iPhone 13',
    capacity: '128 GB',
    description: 'El iPhone 13 tiene un potente procesador y una cámara avanzada para capturar fotos impresionantes.',
    category: 'Nuevos Ingresos', // Nueva propiedad para la categoría
  },
  {
    id: 4,
    name: 'iPhone 14',
    capacity: '128 GB',
    description: 'El iPhone 14 cuenta con tecnología innovadora y una pantalla de alta resolución.',
    category: 'Nuevos Ingresos', // Nueva propiedad para la categoría
  },
];

const ItemListContainer = ({ greeting, showCatalog }) => {
  if (showCatalog) { 
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <h3>Nuevos Ingresos</h3>
      <ul>
        {products.map((product) => {
          if (product.category === 'Nuevos Ingresos') {
            return (
              <li key={product.id}>
                <Link to={`/item/${product.id}`}>
                  <h3>{product.name}</h3>
                  <p>Capacidad: {product.capacity}</p>
                </Link>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};
}

export default ItemListContainer;
