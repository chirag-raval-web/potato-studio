import React from 'react';
import Slider from 'react-slick';
import SectionText from "../common/sectionText"


// Testimonial data (You can move this to a data file or fetch from an API)
const testimonialsData = [
  {
    title: "Best in Business",
    text: "Hard-working, no-nonsense bunch who were willing to roll their sleeves up. I genuinely believe they’re one of the best in the business.",
    author: "Head of Product",
    company: "Enterprise Management",
    logo: "../media/partners/realince.svg"
  },
  {
    title: "Methodology & process",
    text: "They really understand the entire design methodology and process... not just eager to put pixels on the screen. They understand the user’s needs, research options in the market, present different approaches, etc.",
    author: "Head of Product",
    company: "Enterprise Management",
    logo: "../media/partners/realince.svg"
  },
  {
    title: "Methodology & process",
    text: "They really understand the entire design methodology and process... not just eager to put pixels on the screen. They understand the user’s needs, research options in the market, present different approaches, etc.",
    author: "Head of Product",
    company: "Enterprise Management",
    logo: "../media/partners/realince.svg"
  },
  
];

const TestimonialSlider = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
    autoplay: false,
    speed: 3000,
    cssEase: 'linear',
    arrows: false,
    draggable: true,
    swipeToSlide: true,
    pauseOnHover: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
    <div className="container-fluid testimonials">
      <SectionText title={"Our Client Testimonials"}/>
      <Slider {...settings} className="testimonials-slider">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonials-item">
            <div className="container-fluid h-100 d-flex flex-column justify-content-between">
              <div className="row">
                <div className="col-12 g-4">
                  <img
                    src="../media/smalll-icons/comma.webp"
                    className="float-start"
                    width="34.37px"
                    height="25.73px"
                    alt="comma"
                  />
                </div>
                <div className="col-12 g-4">
                  <h1>{testimonial.title}</h1>
                  <p className="text-black-50">{testimonial.text}</p>
                </div>
              </div>
              <div className="col-12 mt-auto">
                <div className="row">
                  <div className="col-6 ">
                    <p>{testimonial.author}</p>
                    <p className="text-black-50">{testimonial.company}</p>
                  </div>
                  <div className="col-6 ">
                    <img
                      src={testimonial.logo}
                      className="img-fluid"
                      alt={`${testimonial.company} logo`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
};

export default TestimonialSlider;
