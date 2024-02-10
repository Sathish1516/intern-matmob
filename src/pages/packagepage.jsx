import React  from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
// import { Searchbar } from "../components/Searchbar/Searchbar";
// import { Searchresultslist } from "../components/Searchbar/Searchresultslist";
import PackageCarousel from '../components/packagepage/packagecarousel';
import Packagecover from '../components/packagepage/packagecover';
import Ad9 from '../components/packagepage/Ad9/Ad9';
import Productcard1forpackage from '../components/Productcard/Productcard1forpackage';




const Packagepage = () => {
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
  <Packagecover/>
  <Productcard1forpackage/>
  <Ad9/>
  <PackageCarousel/>
 
 
  
  
 

  <Footer/>
</>
  )
}

export default Packagepage