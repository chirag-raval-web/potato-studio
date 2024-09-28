import React from "react";
import SectionText from "../common/sectionText";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Video = () => {
  return (
    <div className="video-container p-4">
      <video
        className="rounded-4"
        autoPlay
        loop
        unmuted="true" // This doesn't actually work as an attribute in HTML
        style={{ width: "100%", height: "auto" }}
      >
        <source src="media/potato-studio-final.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
export default Video;

export const PostMessage = () => {
  return (
    <>
      <div className="container-fluid p-5">
        <div className="row d-flex">
          <div className="col-6 ">
            <span>
              <img
                src="media/smalll-icons/sectionArrow.webp"
                width={24}
                height={24}
                alt="sectionArrow"
                className="mb-3"
              />
              <span className="h3"> Potato! Really?</span>
            </span>
          </div>
          <div className="col-6 text-black-50">
            <p className="fs-5">
              Our name comes from a simple philosophy. Nothing matches the
              versatility of a potato. A culinary star on its own, and subtle
              enhancement to when you need it - there’s so much to love in every
              single potato!
            </p>
            <p className="fs-5">
              Quite like that, we’re a bunch of talented, resourceful and rooted
              designers that can pretty much solve anything you throw at us!
              Experience design is second nature to us - but let our creativity
              flow, and we promise there’s no design challenge we won’t fulfill!
            </p>
            <p className="fs-5">
              Besides, all of us have been called potatoes at least once. So we
              decided to own it.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const ValueData = [
  {
    title: "Do Big Things",
    description:
      "We strive to push boundaries and deliver exceptional results that make a significant impact.",
  },
  {
    title: "We Before Me",
    description:
      "Collaboration and teamwork are at the heart of our agency, prioritizing collective success over individual achievements.",
  },
  {
    title: "Great Not Good",
    description:
      "Excellence is our standard; we go beyond the ordinary to ensure our work stands out in the industry.",
  },
  {
    title: "Radical Candor",
    description:
      "Honest and open communication is essential to our process, fostering trust and growth within our team.",
  },
  {
    title: "Play Offense",
    description:
      "We are proactive and forward-thinking, always looking for opportunities to innovate and lead.",
  },
  {
    title: "Glass Half Full",
    description:
      "Optimism drives our creativity, allowing us to see possibilities and solutions in every challenge.",
  },
];

export const Values = () => {
  return (
    <>
      <div className="ValuesContainer">
        <SectionText title={"Values that Define Us"} />
        <div className="row valueItems">
          {ValueData.map((item, index) => {
            return (
              <div className="col-md-4" key={item.title}>
                <div className="valueIndex">
                  <h1>
                    {`0${index + 1}`}
                    <span style={{ color: "#EA5A0B" }}>.</span>
                  </h1>
                </div>
                <div className="valueInfo">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};


const settings = {
  dots: false, // Hide the dots at the bottom
  infinite: true, // Infinite loop
  speed: 3000, // Adjust the speed of the auto-slide
  autoplay: true, // Auto-slide enabled
  autoplaySpeed: 0, // Continuous sliding (set speed to 0 for infinite smooth scroll)
  slidesToShow: 3, // Show 5 logos at a time
  slidesToScroll: 1, // Scroll 1 logo at a time
  pauseOnHover: true, // Pause the auto-slide when hovered
  cssEase: "linear", // Smooth transition
  draggable: true, // Allow dragging with mouse
  swipeToSlide: true, // Allow swipe control
  arrows: false, // No navigation arrows
  responsive: [
    // Breakpoints for responsiveness
    {
      breakpoint: 1440, // Screen width 1440px and below
      settings: {
        slidesToShow: 3, // Show 5 logos
        slidesToScroll: 1, // Scroll 1 logo at a time
      },
    },
    {
      breakpoint: 1200, // Screen width 1200px and below
      settings: {
        slidesToShow: 2, // Show 4 logos
        slidesToScroll: 1, // Scroll 1 logo at a time
      },
    },
    {
      breakpoint: 1024, // Screen width 1024px and below
      settings: {
        slidesToShow: 2, // Show 4 logos
        slidesToScroll: 1, // Scroll 1 logo at a time
      },
    },
    {
      breakpoint: 768, // Screen width 768px and below
      settings: {
        slidesToShow: 1, // Show 3 logos
        slidesToScroll: 1, // Scroll 1 logo at a time
      },
    },
    {
      breakpoint: 600, // Screen width 600px and below
      settings: {
        slidesToShow: 1, // Show 2 logos
        slidesToScroll: 1, // Scroll 1 logo at a time
      },
    },
    {
      breakpoint: 480, // Screen width 480px and below
      settings: {
        slidesToShow: 1, // Show 2 logos
        slidesToScroll: 1, // Scroll 1 logo at a time
      },
    },
    {
      breakpoint: 360, // Screen width 360px and below
      settings: {
        slidesToShow: 1, // Show 1 logo
        slidesToScroll: 1, // Scroll 1 logo at a time
      },
    },
  ],
};

export const MagicSlider = () => {
  const MagicImg = [
    "media/magic/magic1.webp",
    "media/magic/magic2.webp",
    "media/magic/magic3.webp",
    "media/magic/magic4.webp",
    "media/magic/magic5.webp",
  ];
  return (
    <>
      <div className="container-fluid magicContainer">
        <SectionText title={"Where the Magic Happens"} />
        <div className="row magicItems">
          <Slider {...settings}>
            {MagicImg.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item} alt="magic" className="magicImg rounded-4" />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

const PartnerLogos = [
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

export const Client = () => {
  return (
    <>
      <div className="container-fluid clientCon">
        <SectionText title={"Our Clients"} />
        <div className="row clientItems">
          {PartnerLogos.map((partner, index) => {
            return (
              <div className="col-auto clientLogo" key={partner.alt}>
                <img src={partner.src} alt={partner.alt} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};


