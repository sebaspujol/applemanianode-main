import React from 'react';
import { useParams } from 'react-router-dom';

const products = {
  1: {
    name: 'iPhone 11',
    capacity: '128 GB',
    description: 'El iPhone 11 es un smartphone potente con una cámara dual y una batería de larga duración.',
    color: 'Negro',
    price: '$799',
  },
  2: {
    name: 'iPhone 12',
    capacity: '128 GB',
    description: 'El iPhone 12 ofrece una pantalla OLED brillante y un diseño elegante.',
    color: 'Blanco',
    price: '$899',
  },
  3: {
    name: 'iPhone 13',
    capacity: '128 GB',
    description: 'El iPhone 13 tiene un potente procesador y una cámara avanzada para capturar fotos impresionantes.',
    color: 'Azul',
    price: '$999',
  },
  4: {
    name: 'iPhone 14',
    capacity: '128 GB',
    description: 'El iPhone 14 cuenta con tecnología innovadora y una pantalla de alta resolución.',
    color: 'Plateado',
    price: '$1099',
  },
};

const ItemDetailContainer = () => {
  const { id } = useParams();
  const product = products[id];

  return (
    <div className="item-detail-container">
      {product ? (
        <>
          <h2>{product.name}</h2>
          <p>Capacidad: {product.capacity}</p>
          <p>Color: {product.color}</p>
          <p>Precio: {product.price}</p>
          <p>{product.description}</p>
        </>
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
