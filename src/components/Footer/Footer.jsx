import React from 'react'
import './Footer.css'
import {insta,twitter,whatapp,facebook} from "../../assets"
import { Link } from 'react-router-dom';

const Footer = () => {

  const handleLogout = () => {
    // Remove session from local storage
    localStorage.removeItem("session");

    // Perform any additional logout logic or API requests if needed

    // Redirect to the logout page
    window.location.href = "/login";
  };
  return (
    <footer>
  <div className="wrapper">
    <div className="content-container">
      <div className="links">
        <Link to="/" className="logo">
          MATMOB
        </Link>
        <div className="social-icons">
          <Link to="https://chat.whatsapp.com/H0i7BdIknnR9NuBelbn59p">
            <img className="fimg" src={whatapp} alt="" />
          </Link>
          <Link to="https://instagram.com/matmob2023?igshid=MzNlNGNkZWQ4Mg==">
            <img className="fimg" src={insta} alt="" />
          </Link>
          <Link to="#">
            <img className="fimg" src={twitter} alt="" />
          </Link>
          <Link to="https://www.facebook.com/profile.php?id=100094149820043">
            <img className="fimg" src={facebook} alt="" />
          </Link>
        </div>
      </div>

      <div className="links">
        <ul>
          <li>
            <Link to="/Aboutus">About us</Link>
          </li>
          <li>
            <Link to="/privacypolicy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/faq">FAQs</Link>
          </li>
          <li>
            <Link to="/termsandcondition">Terms and Condition</Link>
          </li>
        </ul>
      </div>

      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/appliances">Appliances</Link>
          </li>
          <li>
            <Link to="/furniture">Furniture</Link>
          </li>
        </ul>
      </div>

      <div className="links">
        <ul>
          <li>
            <Link to="/kitchen">kitchen</Link>
          </li>
          <li>
            <Link to="/package">Package</Link>
          </li>
          <li>
            <Link to="/login" onClick={handleLogout}>Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer