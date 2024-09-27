import React from "react";
import SectionText from "../common/sectionText";
import { GetInTouchWhite } from "../common/button";
import { servicesData,ApproachData,industryData } from "./serviceApi";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ServiceItems = () => {
  const location = useLocation();
  return(
  <div className="container">
    <div className="container-fluid service-section">
      <SectionText title="Our Services" />
      <div className="service-inner-section">
        <div className="container">
          <div className="row justify-content-center">
            {servicesData.map((service, index) => (
              <Link to={`/services${service.to}`} className="col-lg-3 col-md-4 col-sm-6 text-center mb-4  text-black text-decoration-none"  key={index}>
              <div className="serviceItem ">
                <img src={service.src} alt={service.alt} className="img-fluid" />
                <Link
                  rel="noopener noreferrer"
                  className="text-black text-decoration-none d-block mt-2 "
                >
                  {service.title}  
                </Link>
              </div>
            </Link>
            ))}
            <div className="d-flex justify-content-center  ">
 
            {location.pathname === "/" && <GetInTouchWhite src="/services" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}


export default ServiceItems;

const logos = [
  { id: 1, src: "/media/partners/realince.svg", alt: "realince Logo " },
  { id: 2, src: "/media/partners/obvious.svg", alt: "obvious Logo" },
  { id: 3, src: "/media/partners/fighter.svg", alt: "fighter Logo" },
];

export const EngagementItem = ({ title, description, imgSrc }) => {
  return (
    <div className="engagement-item container border rounded-3">
      <div className="row">
        {/* Text Section */}
        <div className="col-12 col-lg-6 order-2 order-lg-1 d-flex mt-2 flex-column justify-content-between">
          <div className="engagement-text">
            <h3>{title}</h3>
            <p>{description}</p>

            <div className="engagement-logos ">
              <p className="text-black-50">
                Some of the client we are engaged with
              </p>
              <div className="d-flex gap-4">
                {logos.map((logo) => (
                  <img
                    key={logo.id}
                    src={logo.src}
                    alt={logo.alt}
                    className="partnerLogo"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="col-12 order-1 order-lg-2 mt-2 col-lg-6 engagement-img-container rounded-3 d-flex justify-content-center">
          <img
            src={imgSrc}
            alt={title}
            className="w-100 rounded-3 engagement-img"
          />
        </div>
      </div>
    </div>
  );
};

export const EngagementModel = () => {
  return (
    <div className="engagement-model   d-flex flex-column container-fluid">
      <SectionText title={"Our Engagement Models"} />
      <EngagementItem
        title="Retainership"
        description="Retainership model is best suited for when your project scope is not clearly defined - in sense of timelines or tasks. You get a dedicated team of resources who help you constantly for the set duration."
        imgSrc="media\services\en1.webp"
      />

      <EngagementItem
        title="In-house Designs"
        description="For projects with well-defined requirements and timelines, the In-house Design model is the perfect fit. We outline the scope of work and deliver within an agreed timeline, with a seasoned team dedicated to bringing your vision to life."
        imgSrc="media\services\en2.webp"
      />
    </div>
  );
};

 
export const Approach = () => {
  return (
    <>
      <div className="container-fluid approach-container ">
        <SectionText title={"Our Approach"} />
        <div className="row ApproachItems  d-flex justify-content-between">
          {ApproachData.map((item, index) => (
            <div className="col-md-4 approach-item  " key={index}>
              <div className="card">
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <div className="d-flex ApproachLink flex-column">
                  {item.link.map((link, i) => (
                    <a key={i} href={link.url} className="text-decoration-none">
                    {link.text}
                  </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// ----------------------Approch end------------------------------------

export const Industry = () => {
  return (
    <>
    <div className="container-fluid industry-container">
      <SectionText title={"Our Diverse Industry Expertise"} />
      <div className="row  industryItems">
      {industryData.map((item, index) => (
        <div key={index} className="col-md-auto col-sm-6 row flex-column">
          <h5 className="industryTitle col-12">
          {item.title}
          </h5>
           <img src={item.icon} className="industryIcon" alt={item.title} />
        </div>
      ))}
      </div>
      </div>   
    </>
  )
}

