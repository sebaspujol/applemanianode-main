import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'iPhone 11',
    capacity: '128 GB',
    description: 'El iPhone 11 es un smartphone potente con una cámara dual y una batería de larga duración.',
  },
  {
    id: 2,
    name: 'iPhone 12',
    capacity: '128 GB',
    description: 'El iPhone 12 ofrece una pantalla OLED brillante y un diseño elegante.',
  },
  {
    id: 3,
    name: 'iPhone 13',
    capacity: '128 GB',
    description: 'El iPhone 13 tiene un potente procesador y una cámara avanzada para capturar fotos impresionantes.',
  },
  {
    id: 4,
    name: 'iPhone 14',
    capacity: '128 GB',
    description: 'El iPhone 14 cuenta con tecnología innovadora y una pantalla de alta resolución.',
  },
];

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/item/${product.id}`}>
              <h3>{product.name}</h3>
              <p>Capacidad: {product.capacity}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
