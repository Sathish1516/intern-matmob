import React, { useState, useEffect } from 'react';
import './Carousel.css';
import { images } from '../Slider/CarouselData';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrImg((prevImg) => (prevImg < images.length - 1 ? prevImg + 1 : 0));
    }, 3000); // Auto slide interval in milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        {/* Left arrow */}
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackIos style={{ fontSize: 30 }} />
        </div>

        {/* Image title and subtitle */}
        <div className="center">
          <h1>{images[currImg].title}</h1>
          <p>{images[currImg].subtitle}</p>
        </div>

        {/* Right arrow */}
        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIos style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;












































// import React, {useState} from 'react'
// import './Carousel.css'
// import { images } from "../Slider/CarouselData";
// import { ArrowBackIos } from '@mui/icons-material';
// import {ArrowForwardIos} from '@mui/icons-material';

// function Carousel() {

//     const [currImg, setCurrImg] = useState(0)
//   return (
//     <div className="carousel">
//       <div
//         className="carouselInner"
//         style={{ backgroundImage: `url(${images[currImg].img})` }}
//       >  
//         <div className ="left"
//         onClick={()=>{ currImg > 0 && setCurrImg(currImg-1);}}>
//             <ArrowBackIos style ={{fontSize:30}}/>
//         </div>
//         <div className ="center">
//             <h1>{images[currImg].title}</h1>
//         <p>{images[currImg].subtitle}</p>
//         </div>
//         <div className ="right"
//         onClick={()=>{ currImg< images.length-1 &&setCurrImg(currImg+1);}}>
//             <ArrowForwardIos style ={{fontSize:30}}/>
//         </div>
//     </div>
//     </div>
//   )
// }

// export default Carousel