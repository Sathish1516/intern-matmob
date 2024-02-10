



// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const Searchproductpage = () => {
//   const location = useLocation();
//   const result = location.state.result;
//   const [productDetails, setProductDetails] = useState([]);


//   const handlePurchase = (productId) => {
//     // Add logic for handling the purchase
//     // You can use the productId parameter to identify the specific product being purchased
//     // For example, you can redirect to a checkout page or perform any other desired action
//     console.log(`Product ${productId} purchased!`);
//   };

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         console.log("im there")
//         const response = await fetch('http://192.168.29.9:5000/display-results', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ result }),
//         });
//         const data = await response.json();
//         console.log(data);
//         setProductDetails(data);
//       } catch (error) {
//         console.error('Error fetching product details:', error);
//       }
//     };

//     fetchProductDetails();
//   }, [result]);

//   return (
//     <div>
//      { productDetails >0? (
//         <div className="product-card-container">
//           {productDetails.map((product) => (
//             <div className="product-card" key={product.id}>
//               <img
//                 src={productDetails.image}
//                 alt={productDetails.name}
//                 className="product-image"
//               />
//               <h2 className="product-title">{productDetails.name}</h2>
//               {/* <p className="product-description">{product.description}</p> */}
//               <div className='price-container'>
//                 <div className='offer1'>
//                   <p className="product-price">{product.offer}% off</p>
//                 </div>
//                 <div className='price1'>
//                   <p className="product-price">&#8377;{product.price}</p>
//                 </div>
//               </div>
//               <button className="purchase-button" onClick={handlePurchase}>
//                 Purchase
//               </button>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>Loading product details...</p>
//       )}
//     </div>
//   );
// };

// export default Searchproductpage;


// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const SearchProductPage = () => {
//   const location = useLocation();
//   const result = location.state.result;
//   const [productDetails, setProductDetails] = useState({});
//   const [loading, setLoading] = useState(true);

//   const handlePurchase = (productId) => {
//     // Add logic for handling the purchase
//     // You can use the productId parameter to identify the specific product being purchased
//     // For example, you can redirect to a checkout page or perform any other desired action
//     console.log(`Product ${productId} purchased!`);
//   };

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const response = await fetch('http://192.168.29.9:5000/display-results', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ result }),
//         });
//         const data = await response.json();
//          setLoading(false);
//         console.log( 'hi' ,data.message)
//         setProductDetails(data.message);

//         setLoading(false);
//         console.log( 'hi' ,data)
//       } catch (error) {
//         console.error('Error fetching product details:', error);
//       }
//     };

//     fetchProductDetails();
//   }, [result]);

//   return (
//     <div>
//       {loading ? (
//         <p>Loading product details...</p>
//       ) : (
        
//         <div className="product-card">
//             {console.log("im the dsatafa")}
//             {console.log(productDetails)}
//           <img
//             src={productDetails[0].image}
//             alt={productDetails.name}
//             className="product-image"
//           />
//           <h2 className="product-title">{productDetails[0].name}</h2>
//           {/* <p className="product-description">{productDetails.description}</p> */}
//           <div className='price-container'>
//             <div className='offer1'>
//               <p className="product-price">{productDetails[0].offer}% off</p>
//             </div>
//             <div className='price1'>
//               <p className="product-price">&#8377;{productDetails[0].price}</p>
//             </div>
//           </div>
//           <button className="purchase-button" onClick={() => handlePurchase(productDetails[0].id)}>
//             Purchase
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchProductPage;
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './searchproductpage.css'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Searchbar } from "../components/Searchbar/Searchbar";
import { Searchresultslist } from "../components/Searchbar/Searchresultslist";
import { Link } from 'react-router-dom';

const SearchProductPage = () => {
  const location = useLocation();
  const result = location.state.result;
  const [productDetails, setProductDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch('http://192.168.29.9:5000/display-results', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ result }),
        });
        const data = await response.json();
        setLoading(false);
        console.log( 'hi' ,data.message)
        setProductDetails(data.message);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [result]);

  return (
    <>
    <Header/>
    <div className='search'>
        <div className="search-bar-container">
          <Searchbar setResults={setResults} />
          {results && results.length > 0 && <Searchresultslist results={results} />}
        </div>
      </div>
    <div>
      {loading ? (
        <p>Loading product details...</p>
      ) : (
        <div className='searchproduct'>
          {productDetails.map((product) => (
            <div className="product-card2" key={product.id}>
                  {console.log("im the dsatafa")}
             {console.log(productDetails)}
              <img
                src={product.image}
                alt={product.name}
                className="product-image2"
              />
              <h2 className="product-title2">{product.name}</h2>
              <div className='price-container2'>
                <div className='offer3'>
                  <p className="product-price2">{product.offer}% off</p>
                </div>
                <div className='price3'>
                  <p className="product-price2">&#8377;{product.price}</p>
                </div>
              </div>
              <Link to  = {{ pathname: `/product/${product.id}` }} className="purchase-button2">
          Purchase
        </Link>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default SearchProductPage;






