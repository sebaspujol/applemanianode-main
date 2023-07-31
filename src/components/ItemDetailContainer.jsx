import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';

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
  5: {
    name: 'iPad Pro',
    capacity: '256 GB',
    description: 'La mejor tablet del mercado.',
    color: 'Space Gray',
    price: '$1200',
  },
  6: {
    name: 'Macbook Air',
    capacity: '256 GB',
    description: 'M2, la nueva, la mas veloz.',
    color: 'Plateado',
    price: '$1199',
  },
};

const getProductById = (itemId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products[itemId];
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Producto no encontrado'));
      }
    }, 1000);
  });
};

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(itemId)
      .then((product) => {
        setProduct(product);
      })
      .catch((error) => {
        console.log(error.message);
        setProduct(null);
      });
  }, [itemId]);

  return (
    <div className="item-detail-container">
      {product ? (
        <>
          <h2>{product.name}</h2>
          <p>Capacidad: {product.capacity}</p>
          <p>Color: {product.color}</p>
          <p>Precio: {product.price}</p>
          <p>{product.description}</p>
          <ItemCount initialCount={1} />
        </>
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
