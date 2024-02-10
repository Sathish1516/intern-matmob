import React, { useEffect, useState } from 'react';
import './Productcardforpackage.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
 

  return (
// <div className='d'>
  <div className="product-card1">
    {console.log('hi product')}
    {console.log(product)}
    <div className="image-container1">
      <img src={product.image} alt={product.name} className="product-image1" />
    </div>
    <div className="product-details1">
      <div className="product-info1">
        <h2 className="product-title1">{product.name}</h2>
        {console.log(product.description)}
        <p className="product-description1">{product.description}</p>
      </div>
      <div className="product-price-container">
        <div className="offer2">
          <p className="product-price1">{product.offer}% off</p>
        </div>
        <div className="price2">
          <p className="product-price1">&#8377;{product.price}</p>
        </div>
      </div>
      <Link to  = {{ pathname: `/product/${product.id}` }} className="purchase-button1">
          Purchase
        </Link>
    </div>
  </div>
// </div>



  );
};

const Productcard1forpackage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.29.9:5000/display-product');
        const data = await response.json();
        console.log(data['message']);

        if (response.ok) {
          const furnitureProducts = data.message.filter(product => product.category === 'package');
          setProducts(furnitureProducts);
        } else {
          console.error('Response error:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Productcard1forpackage;