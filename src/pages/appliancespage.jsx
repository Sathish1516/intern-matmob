import React  from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
// import { Searchbar } from "../components/Searchbar/Searchbar";
// import { Searchresultslist } from "../components/Searchbar/Searchresultslist";
import Productcardforapplainces from '../components/Productcard/Productcardforappliances';
import Appliancescover from '../components/appliancespage/appliancescover';
import Ad5 from '../components/appliancespage/Ad5/ad5';
import Ad6 from '../components/appliancespage/Ad6/Ad6';

const Appliancespage = () => {
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
      <Appliancescover/>
      <Productcardforapplainces/>
      <Ad5/>
      <Ad6/>

      <Footer/>
    </>
  )
}

export default Appliancespage