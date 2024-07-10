import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import Tailwind CSS
import 'tailwindcss/tailwind.css';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 -translate-y-1/2 right-0 z-10 w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer`}
      style={style}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white transform rotate-180"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 -translate-y-1/2 left-0 z-10 w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer`}
      style={style}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
}

const imageStyle = {
  padding: '0 2rem',
  width: '100%', // Set image width to 100%
  height: '560px', // Set image height to 100%
  objectFit: 'cover', // Maintain aspect ratio and cover entire space
};

function HeroSection() {
  const sliderStyle = {
    width: '95%', // Set the width to 100%
    height: '500px', // Set a fixed height (you can change this value)
    paddingLeft:'30px',
    marginLeft:'20px'
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>   

    <Slider {...settings} style={sliderStyle}>
    
      <div className="flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/3373945/pexels-photo-3373945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          style={imageStyle}
          className="w-full"
        />
      </div>
      <div className="flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/60021/grapes-wine-fruit-vines-60021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          style={imageStyle}
          className="w-full"
        />
      </div>
    </Slider>
    </>
  );
}

export default HeroSection;
