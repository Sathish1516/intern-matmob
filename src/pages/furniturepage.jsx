import React  from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
// import { Searchbar } from "../components/Searchbar/Searchbar";
// import { Searchresultslist } from "../components/Searchbar/Searchresultslist";
import Coversection from '../components/furniturepage/coversection';
import Ads3 from '../components/furniturepage/Ads3/Ads3';
import Ads4 from '../components/furniturepage/Ad4/Ad4';

import Productcardforfurniture from '../components/Productcard/Productcardforfurniture';
const Furniturepage = () => {
    // const [results, setResults] = useState([]);
  return (
    <>
        <Header/>
        {/* <div className='search'>
        <div className="search-bar-container">
          <Searchbar setResults={setResults} />
          {results && results.length > 0 && <Searchresultslist results={results} />}
        </div>
      </div> */}
        <Coversection/>
        
        <Productcardforfurniture/>
        <Ads3/>
        <Ads4/>
        <Footer/>

    
    </>
  )
}

export default Furniturepage