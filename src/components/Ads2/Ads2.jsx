import React from 'react'
import "./Ads2.css"
import { ad2} from '../../assets'
import SecondProductList from '../Productcard/SecondProductList'

const Ads2 = () => {
  return (
    <section className="section">
          <div className="offer">
      <img src={ad2} alt="Offer"  className='animated-image'/>
    </div>
    <div className="products">
     
        <div className="product" >
       <SecondProductList/>
   
        </div>
     
    </div>
  
  </section>
  )
}




export default Ads2