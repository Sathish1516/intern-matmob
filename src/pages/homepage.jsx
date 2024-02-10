import React ,{useState }from 'react'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Searchbar } from "../components/Searchbar/Searchbar";
import { Searchresultslist } from "../components/Searchbar/Searchresultslist";
import Slider from '../components/Slider/Carousel';
import Blog from '../components/Blog/Blog';
import Ads1 from '../components/Ads1/Ads1';
import Ads2 from '../components/Ads2/Ads2';

const Homepage = () => {
    const [results, setResults] = useState([]);
  return (
    <>
    <Header/>
    <div className='search'>
        <div className="search-bar-container">
          <Searchbar setResults={setResults} />
          {results && results.length > 0 && <Searchresultslist results={results} />}
        </div>
      </div>
      <Slider/>
      <Ads1/>
      <Ads2/>
      <Blog/>
     <Footer/>
    </> 
  )
}

export default Homepage