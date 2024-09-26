import React from "react";
import SectionText from "../common/sectionText";
import { GetInTouchWhite } from "../common/button";

const services = [
  {
    src: "../media/services/ui-ux.svg",
    alt: "UX/UI Design",
    title: "UX/UI Design",
  },
  {
    src: "../media/services/mobile.svg",
    alt: "Mobile App Design",
    title: "Mobile App Design",
  },
  {
    src: "../media/services/website.svg",
    alt: "Website Design",
    title: "Website Design",
  },
  {
    src: "../media/services/dashboard.svg",
    alt: "Dashboard Design (SaaS)",
    title: "Dashboard Design",
    extra: "(SaaS)",
  },
  {
    src: "../media/services/uxResearch.svg",
    alt: "UX Research",
    title: "UX Research",
  },
  { src: "../media/services/branding.svg", alt: "Branding", title: "Branding" },
  {
    src: "../media/services/audit.svg",
    alt: "Design Audit",
    title: "Design Audit",
  },
  {
    src: "../media/services/prototype.svg",
    alt: "Prototyping & Interactions",
    title: "Prototyping & Interactions",
  },
];

const ServiceItem = ({ src, alt, title, extra }) => (
  <div className="col-lg-3 col-md-4 col-sm-6 text-center mb-4">
    <div className="serviceItem">
      <img src={src} alt={alt} className="img-fluid" />
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black text-decoration-none d-block mt-2"
      >
        {title} {extra && <span className="text-black-50">{extra}</span>}
      </a>
    </div>
  </div>
);

const ServiceItems = () => (
  <div className="container">
    <div className="container-fluid service-section">
      <SectionText title="Our Services" />
      <div className="service-inner-section">
        <div className="container">
          <div className="row justify-content-center">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                src={service.src}
                alt={service.alt}
                title={service.title}
                extra={service.extra}
              />
            ))}
            <div className="d-flex justify-content-center  ">
              <GetInTouchWhite />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
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

const ApproachData = [
  {
    img: "/media/approach/apr1.webp",
    title: "Research",
    description: "The methodical study of users to derive user insights.",
    link: [
      { text: "Design Audit", url: "#" },
      { text: "UX Research ", url: "#" },
      { text: "Competitor Analysis", url: "#" },
      { text: "UX Workshop", url: "#" },
    ],
  },
  {
    img: "/media/approach/apr2.webp",
    title: "Strategy",
    description: "The process of aligning accurate research insights with the goals.",
    link: [
      { text: "Design Thinking", url: "#" },
      { text: "Product Roadmap", url: "#" },
      { text: "Growth Strategy", url: "#" },
      { text: "Service Design", url: "#" },
    ],
  },
  {
    img: "/media/approach/apr3.webp",
    title: "Design",
    description: "Designing seamless experiences, solving user pain points.",
    link: [
      { text: "UX/UI Design", url: "#" },
      { text: "Wire-framing", url: "#" },
      { text: "Information Architecture", url: "#" },
      { text: "Visual Communication", url: "#" },
    ],
  },
];

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
