import React from 'react';
import { Link, useParams } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'iPhone 11',
    capacity: '128 GB',
    description: 'El iPhone 11 es un smartphone potente con una cámara dual y una batería de larga duración.',
    color: 'Negro',
    price: '$799',
  },
  {
    id: 2,
    name: 'iPhone 12',
    capacity: '128 GB',
    description: 'El iPhone 12 ofrece una pantalla OLED brillante y un diseño elegante.',
    color: 'Blanco',
    price: '$899',
  },
  {
    id: 3,
    name: 'iPhone 13',
    capacity: '128 GB',
    description: 'El iPhone 13 tiene un potente procesador y una cámara avanzada para capturar fotos impresionantes.',
    color: 'Azul',
    price: '$999',
    category: 'Nuevos Ingresos',
  },
  {
    id: 4,
    name: 'iPhone 14',
    capacity: '128 GB',
    description: 'El iPhone 14 cuenta con tecnología innovadora y una pantalla de alta resolución.',
    color: 'Plateado',
    price: '$1099',
    category: 'Nuevos Ingresos',
  },
  {
    id: 5,
    name: 'iPad Pro',
    capacity: '256 GB',
    description: 'La mejor tablet del mercado.',
    color: 'Space Gray',
    price: '$1200',
    category: 'Tablets',
  },
  {
    id: 6,
    name: 'Macbook Air',
    capacity: '256 GB',
    description: 'M2, la nueva, la mas veloz.',
    color: 'Plateado',
    price: '$1199',
    category: 'Laptops',
  },
];

const ItemListContainer = ({ greeting }) => {
  const { selectedCategory } = useParams();

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      {selectedCategory && <h3>{selectedCategory}</h3>}
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/item/${product.id}`}>
              <h3>{product.name}</h3>
              <p>Capacidad: {product.capacity}</p>
              <p>Color: {product.color}</p>
              <p>Precio: {product.price}</p>
              <p>{product.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
