// import "./Searchresult.css";

// export const Searchresult = ({ result }) => {
//   return (
//     <div
//       className="search-result"
//       onClick={(e) => alert(`You selected ${result}!`)}
//     >
//       {result}
//     </div>
//   );
// };


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Searchresult.css';

export const Searchresult = ({ result }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to a new page or route when the search result is clicked
    navigate('/searchproduct', { state: { result } }); // Replace '/new-page' with the desired route path
  };

  return (
    <div className="search-result" onClick={handleClick}>
      {result}
    </div>
  );
};


