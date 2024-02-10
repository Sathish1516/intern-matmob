import React  from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
// import { Searchbar } from "../components/Searchbar/Searchbar";
// import { Searchresultslist } from "../components/Searchbar/Searchresultslist";
import Productcardforkitchen from '../components/Productcard/Productcardforkitchen';
import Kitchencover from '../components/kitchenpage/kitchencover';
import Ad7 from '../components/kitchenpage/Ad7/Ad7';
import Ad8 from '../components/kitchenpage/Ad8/Ad8';

const Kitchenpage = () => {
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
  <Kitchencover/>
  <Productcardforkitchen/>
  <Ad7/>
  <Ad8/>
  
  
 

  <Footer/>
</>
  )
}

export default Kitchenpage