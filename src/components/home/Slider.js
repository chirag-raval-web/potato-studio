import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnerSlider = () => {
  const logos = [
    { src: "../media/partners/collab.svg", alt: "Collab" },
    { src: "../media/partners/fighter.svg", alt: "Fighter" },
    { src: "../media/partners/homeSome.svg", alt: "HomeSome" },
    { src: "../media/partners/hypo.svg", alt: "Hypo" },
    { src: "../media/partners/infinitIQ.svg", alt: "InfinitIQ" },
    { src: "../media/partners/koovers.svg", alt: "Koovers" },
    { src: "../media/partners/nowFloats.svg", alt: "NowFloats" },
    { src: "../media/partners/obvious.svg", alt: "Obvious" },
    { src: "../media/partners/patel.svg", alt: "Patel" },
    { src: "../media/partners/realince.svg", alt: "Realince" },
    { src: "../media/partners/sall.svg", alt: "Sall" },
    { src: "../media/partners/shine.svg", alt: "Shine" },
    { src: "../media/partners/spres.svg", alt: "Spres" },
    { src: "../media/partners/strid.svg", alt: "Strid" },
    { src: "../media/partners/tally.svg", alt: "Tally" },
    { src: "../media/partners/videoZone.svg", alt: "VideoZone" },
  ];

  const settings = {
    dots: false,                   // Hide the dots at the bottom
    infinite: true,                // Infinite loop
    speed: 3000,                   // Adjust the speed of the auto-slide
    autoplay: true,                // Auto-slide enabled
    autoplaySpeed: 0,              // Continuous sliding (set speed to 0 for infinite smooth scroll)
    slidesToShow: 5,               // Show 5 logos at a time
    slidesToScroll: 1,             // Scroll 1 logo at a time
    pauseOnHover: true,            // Pause the auto-slide when hovered
    cssEase: 'linear',             // Smooth transition
    draggable: true,               // Allow dragging with mouse
    swipeToSlide: true,            // Allow swipe control
    arrows: false,                 // No navigation arrows
    responsive: [                  // Breakpoints for responsiveness
      {
        breakpoint: 1440,          // Screen width 1440px and below
        settings: {
          slidesToShow: 5,         // Show 5 logos
          slidesToScroll: 1,       // Scroll 1 logo at a time
        }
      },
      {
        breakpoint: 1200,          // Screen width 1200px and below
        settings: {
          slidesToShow: 4,         // Show 4 logos
          slidesToScroll: 1,       // Scroll 1 logo at a time
        }
      },
      {
        breakpoint: 1024,          // Screen width 1024px and below
        settings: {
          slidesToShow: 4,         // Show 4 logos
          slidesToScroll: 1,       // Scroll 1 logo at a time
        }
      },
      {
        breakpoint: 768,           // Screen width 768px and below
        settings: {
          slidesToShow: 3,         // Show 3 logos
          slidesToScroll: 1,       // Scroll 1 logo at a time
        }
      },
      {
        breakpoint: 600,           // Screen width 600px and below
        settings: {
          slidesToShow: 2,         // Show 2 logos
          slidesToScroll: 1,       // Scroll 1 logo at a time
        }
      },
      {
        breakpoint: 480,           // Screen width 480px and below
        settings: {
          slidesToShow: 2,         // Show 2 logos
          slidesToScroll: 1,       // Scroll 1 logo at a time
        }
      },
      {
        breakpoint: 360,           // Screen width 360px and below
        settings: {
          slidesToShow: 1,         // Show 1 logo
          slidesToScroll: 1,       // Scroll 1 logo at a time
        }
      }
    ]
  };

  return (
    <div className="container-fluid my-5">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="logo-item">
            <img
              src={logo.src}
              alt={logo.alt}
              className="img-fluid"
              style={{ maxWidth: '150px', maxHeight: '100px' }}  // Corrected Width and Height properties
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnerSlider;
