import React from "react";
import { Link } from "react-router-dom";

// MenuItem Component
const MenuItem = () => {
  const menuLinks = [
    { path: "/", text: "Home" },
    { path: "/services", text: "Services" },
    { path: "/work", text: "Work" },
    { path: "/about", text: "About us" },
    { path: "/blog", text: "Blogs" },
    { path: "/career", text: "Careers" },
  ];

  return (
    <>
      {menuLinks.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          className="text-decoration-none text-white"
        >
          {link.text}
        </Link>
      ))}
    </>
  );
};

export default MenuItem;

export const FooterLogo = () => {
  return  <img src={`${process.env.PUBLIC_URL}/media/logo/footer-logo.svg`} alt="footer-logo" />
};

const CopyRight = () => {
  return (
    <p className="copyright text-white">
      ©The Potato Studio 2024. All rights reserved.
    </p>
  );
};

export const ContactMail = ({ MailAddress }) => {
  return (
    <>
      <h1>Contact</h1>
      <p>{MailAddress}</p>
    </>
  );
};

export const OfficeAddress = ({ Address }) => {
  return (
    <>
      <h1>Office</h1>
      <p>{Address}</p>
    </>
  );
};

const PrivacyPolicy = () => {
  return (
    <>
      <Link to="/privacy" className="text-decoration-none text-white-50 ">
        Our Privacy Policy{" "}
        <img
          src={`${process.env.PUBLIC_URL}/media/smalll-icons/right-arrow.svg`}
          alt="right-arrow"
        />
      </Link>
    </>
  );
};

const SocialIcons = () => {
  const Icons = [
    { path: "#", img: "behance.svg" },
    { path: "#", img: "dribbble.svg" },
    { path: "#", img: "instagram.svg" },
    { path: "#", img: "linkedin.svg" },
  ];

  return (
    <>
      {Icons.map((icon, index) => (
        <a
          key={index}
          href={icon.path}
          className="text-decoration-none text-white"
        >
          <img
            src={`${process.env.PUBLIC_URL}/media/social-icons/${icon.img}`}
            alt={icon.img}
            style={{ width: "24px", height: "24px" }}
          />
        </a>
      ))}
    </>
  );
};

export const PrivacySection = ({ className }) => {
  return (
    <>
      <div className={`privacy-section d-xl-block ${className}`}>
        <div className="d-flex flex-row social-icons mb-3">
          <SocialIcons />
        </div>
        <CopyRight />
        <PrivacyPolicy PrivacyPage={"#"} />
      </div>
    </>
  );
};
