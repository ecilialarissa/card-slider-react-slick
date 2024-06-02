
import React from "react";
import Slider from "react-slick";

import img1 from '../src/assets/img/img1.png'
import img2 from '../src/assets/img/img2.png'
import img3 from '../src/assets/img/img3.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {

  const settings = {
    dots: true,
    //fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
    
    waitForAnimate: true,
    

   responsive: [

      {
        breakpoint: 1024,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
        }
      },
      {
        breakpoint: 953,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
          
        }
      },
      {
        breakpoint: 940,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
          
        }
      },
      {
        breakpoint: 630,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
      },
      

    ]

  };

  return (

<div className="  w-3/4 m-auto">
  <div className="slider-container mt-20">
  <Slider {...settings}>
    {data.map ((d) => ( 
    <div className="bg-white h-[450px] font-md text-indigo-500 rounded-xl ">
      <div className="h-56 rounded-t-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center">
      <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 p-4">
      <p className="text-xl font-black"> {d.name}</p>
      <p className="text-sm md-font font-normal"> {d.review} </p>
      <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold text-lg px-6 py-1 rounded-xl ">Read more</button>
      
      </div>
  
    </div>
    ))}
      </Slider>
  </div>
</div>

  );
}

 // eslint-disable-next-line
const data = [
    
{ 
  name: `Developer Girl 1`, 
  img: img1, 
  review: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`, 
},
{ 
  name: `Developer Girl 2`, 
  img: img2, 
  review: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`, 
},
{ 
  name: `Developer Girl 3`, 
  img: img3, 
  review: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`, 
},

]

export default App;
