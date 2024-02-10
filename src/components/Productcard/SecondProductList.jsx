import React, { useEffect, useState } from 'react';
import './Productcard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
 

  return (
    <div className="product-card-container">
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <h2 className="product-title">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <div className='price-container'>
            <div className='offer1'>
            <p className="product-price">{product.offer}%off</p>
            </div>
            <div className='price1'>
            <p className="product-price">&#8377;{product.price}</p>
            </div>
            
        </div>
        <Link to  = {{ pathname: `/product/${product.id}` }} className="purchase-button">
          Purchase
        </Link>
      </div>
    </div>
  );
};
const SecondProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.29.9:5000/display-product', {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        const data = await response.json();
        console.log(data['message']);

        if (typeof data === 'object' && data.hasOwnProperty('message')) {
          setProducts(data.message.slice(2, 4));
        } else {
          console.error('Invalid data format:', data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default SecondProductList;
