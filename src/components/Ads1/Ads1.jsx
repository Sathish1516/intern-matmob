import React from 'react'
import "./Ads1.css"
import { ad1} from '../../assets'
import FirstProductList from '../Productcard/FirstProductList'

const Ads1 = () => {
  return (
    <section className="section">
    <div className="products">
     
        <div className="product" >
       
        <FirstProductList/>
        </div>
     
    </div>
    <div className="offer">
      <img src={ad1} alt="Offer" className='animated-image' />
    </div>
  </section>
  )
}


// {/* <div className="products">
// {/* Render your product components here */}
// {/* {products.map((product, index) => ( */}
//   <div className="product" key={index}>
//     {/* <img src={product.image} alt={product.name} />
//     <h3>{product.name}</h3>
//     <p>{product.description}</p> */}
//   </div>
// {/* ))} */}
// </div> */}

export default Ads1