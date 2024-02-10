import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";
import { useParams, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './Product.css'

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addProductToCart = (product) => {
    // Check if the user is logged in
    const email = localStorage.getItem("email");
    const session = localStorage.getItem("session");

    if (email && session) {
      // User is logged in, dispatch the action
      dispatch(addCart(product));
      navigate("/cart"); // Redirect to the cart page
    } else {
      // User is not logged in, redirect to the login page
      navigate("/login");
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://192.168.29.9:5000/get-product-details`,
          {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id })
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setProduct(data.message[0]);
        } else {
          console.error("Error:", response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    if (!product) {
      return null; // Return null if product is not available yet
    }

    const { image, name, category, price, description } = product;

    return (
      < div className="product-container10">
        <div className="product-image10">
          <img src={image} alt={name} height="400px" width="400px " className="img10" />
        </div>
        <div className="product-details10">
          <h4 className="category10">{category}</h4>
          <h1 className="product-name10">{name}</h1>
          <h2 className="product-price10">&#8377; {price}</h2>
          <p className="product-description10">{description}</p>
          <button
            className="add-to-cart-btn10"
            onClick={() => addProductToCart(product)}
          >
            Add to Cart
          </button>
          <NavLink to="/cart" className="go-to-cart-btn10">
            Go to Cart
          </NavLink>
        </div>
      </div>
    );
  };

  return (

    <div>
        <Header/>
      <div >
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Product;
