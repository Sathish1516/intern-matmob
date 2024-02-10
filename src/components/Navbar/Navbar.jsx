// import React from 'react';
// import './Navbar.css';
// import {  NavLink } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <NavLink exact to="/furniture" activeClassName="activeLink" className="furniture">
//             Furniture
//           </NavLink>
//         </li>
//         <li>
//           <NavLink exact to="/appliances" activeClassName="activeLink" className="appliances">
//             Appliances
//           </NavLink>
//         </li>
//         <li>
//           <NavLink exact to="/kitchen" activeClassName="activeLink" className="kitchen">
//             Kitchen
//           </NavLink>
//         </li>
//         <li>
//           <NavLink exact to="/package" activeClassName="activeLink" className="package">
//             Package
//           </NavLink>
//         </li>
//         <li>
//           <NavLink exact to="/login" activeClassName="activeLink" className="login">
//             Login
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect  } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  
  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/furniture"
            className={activeLink === '/furniture' ? 'activeLink' : 'furniture'}
            onClick={() => handleLinkClick('/furniture')}
          >
            Furniture
          </Link>
        </li>
        <li>
          <Link
            to="/appliances"
            className={activeLink === '/appliances' ? 'activeLink' : 'appliances'}
            onClick={() => handleLinkClick('/appliances')}
          >
            Appliances
          </Link>
        </li>
        <li>
          <Link
            to="/kitchen"
            className={activeLink === '/kitchen' ? 'activeLink' : 'kitchen'}
            onClick={() => handleLinkClick('/kitchen')}
          >
            Kitchen
          </Link>
        </li>
        <li>
          <Link
            to="/package"
            className={activeLink === '/package' ? 'activeLink' : 'package'}
            onClick={() => handleLinkClick('/package')}
          >
            Package
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className={activeLink === '/login' ? 'activeLink' : 'login'}
            onClick={() => handleLinkClick('/login')}
          >
            Login
          </Link>
        </li>
      </ul>
    
    </nav>
  );
};
export default Navbar;

