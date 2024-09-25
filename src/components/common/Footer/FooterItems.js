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
  return <img src="../media/logo/footer-logo.svg" alt="footer-logo" />;
};

  const CopyRight = () => {
  return (
    <p class="copyright text-white">
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

  const PrivacyPolicy = ({ PrivacyPage }) => {
  return (
    <>
      <a href={PrivacyPage} class="text-decoration-none text-white-50 ">
        Our Privacy Policy{" "}
        <img src="media\smalll-icons\right-arrow.svg" alt="right-arrow" />
      </a>
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
            src={`media/social-icons/${icon.img}`}
            alt={icon.img}
            style={{ width: "24px", height: "24px" }}
          />
        </a>
      ))}
    </>
  );
};

export const PrivacySection = ({className}) => {
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
