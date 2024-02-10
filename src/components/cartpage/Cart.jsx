import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addCart, delCart } from '../../redux/action';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Cart.css'

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };

  const handleDel = (item) => {
    dispatch(delCart(item));
  };

  const emptyCart = () => {
    return (
      <div className="emptycart">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const renderCartItems = () => {
    return state.map((product) => {
      return (
        <div
          key={product.id}
          className="px-4 my-5 bg-light rounded-3 py-5"
        >
          <div className="container py-4">
            <div className="cartp">
              <div className="cartimg">
                <img className='m'
                  src={product.image}
                  alt={product.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="cartdetails">
                    {console.log('hi')}
                    {console.log(product.name)}

                <div className='cartpname'>
                    <h1 >{product.name}</h1>
                    <h6>{product.description}</h6>
                </div>
                   <div className='carprice'>
                <button
                        className="minus-icon"
                        onClick={() => handleDel(product)}
                            >
                            {/* <i >-</i> */}
                            </button>
                            <p className="cartpara">
                        {product.qty} X &#8377;{product.price} = &#8377;
                        {product.qty * product.price}
                            </p>
                        
                            <button
                        className="plus-icon"
                        onClick={() => handleAdd(product)}
                            >
                        {/* <i >+</i> */}
                            </button>
                    </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const renderButtons = () => {
    // Calculate the total price
    const totalPrice = state.reduce(
      (accumulator, product) => accumulator + product.qty * product.price,
      0
    );
   
    return (
        <div className="container">
        <div className="row">
          <div className="total-price">Total Price: &#8377;{totalPrice}</div>
          <NavLink to="/checkout" className="check">
     
          
        
            Proceed to Checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
    <Header/>
       <div className='cart'> 
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && renderCartItems()}
      {state.length !== 0 && renderButtons()}
      </div>
    <Footer/>
    </>
  );
};

export default Cart;