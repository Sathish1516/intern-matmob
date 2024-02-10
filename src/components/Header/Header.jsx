import React ,{useState,useRef,useEffect}from 'react'
import './Header.css'
import Navbar from "../Navbar/Navbar"
import {Link  } from "react-router-dom";
import {user,mycart,aboutus,privacy,terms,faq,logout} from '../../assets'
import { useSelector } from "react-redux";

const Header = () => {
  const [open, setOpen] = useState(false);
  const state = useSelector((state) => state.handleCart);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });
  const handleLogout = () => {
    // Remove session from local storage
    localStorage.removeItem("session");
    localStorage.removeItem("email");
    

    // Perform any additional logout logic or API requests if needed

    // Redirect to the logout page
    window.location.href = "/login";
  };

  return (
    <header>
          <Link to="/" className="log">
          MATMOB
        </Link>
        <div className='wrapper'>
            <Navbar/>
          
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={user}></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          {/* <h3>The Kiet<br/><span>Website Designer</span></h3> */}
          <ul>
             {/* <DropdownItem img={mycart} text="My Cart" to="/cart" noBorder={true} /> */}
             <DropdownItem img={mycart} text="My Cart" to="/cart" noBorder={true} cartItemCount={state.length} />
              <DropdownItem img={aboutus} text="aboutus" to="/aboutus" />
              <DropdownItem img={privacy} text="Privacy Policy" to="/privacypolicy" />
              <DropdownItem img={terms} text="Terms And Condition" to="/termsandcondition" />
              <DropdownItem img={faq} text="FAQs" to="/faq" />
              {/* <DropdownItem img={logout} text="Logout" to="/logout" /> */}
              <DropdownItem img={logout} text="Logout" onClick={handleLogout} to="/login" />
             
          </ul>
        </div>
      </div>
    

        </div>
    </header>
  )
  function DropdownItem(props){
    return(
 


          //   <li className={`dropdownItem ${props.noBorder ? 'no-border' : ''}`}>
          //   <Link to={props.to} onClick={props.onClick}>
          //     <img src={props.img} alt="Dropdown Item Icon" />
          //     <span>{props.text}</span>
          //   </Link>
          // </li>




          <li className={`dropdownItem ${props.noBorder ? 'no-border' : ''}`}>
          <Link to={props.to} onClick={props.onClick}>
            <img src={props.img} alt="Dropdown Item Icon" />
            <span>{props.text}</span>
            {props.cartItemCount && props.cartItemCount > 0 && (
              <span className="cart-item-count">{props.cartItemCount}</span>
            )}
          </Link>
        </li>
    );
  }
}


export default Header