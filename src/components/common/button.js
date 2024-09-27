import React from "react";
import { Link } from "react-router-dom";

const Contact = ({ src = "/contact-us" }) => {
  return (
    <>
      <div className="d-flex mb-sm-4 mb-lg-0 me-xxl-5" role="button">
        <button className="rounded-pill contact" type="button">
          <Link to={src} className="text-decoration-none text-white">
            Contact
          </Link>
        </button>
      </div>
    </>
  );
};

export const GetInTouchWhite = ({ btnTxt = "Get in touch", className = "", src = "#" }) => {
  return (
    <>
      <Link
        to={src}
        className={`btn get-in-touch-btn bg-white text-black border-white rounded-pill ${className}`}
      >
        <span>{btnTxt}</span>
        <img
          className="ms-2 rightArrow"
          src="../media/smalll-icons/rigthArrow.webp"
          width="24"
          height="24"
          alt="rightArrow"
        />
      </Link>
    </>
  );
};

export const GetInTouchPurple = ({ btnTxt = "Get in touch", src = "../html-files/contact" }) => {
  return (
    <>
      <button className="rounded-pill get-in-touch-btn-2" type="button">
        <Link to={src} className="text-decoration-none text-white">
          {btnTxt}
        </Link>
      </button>
    </>
  );
};

export default Contact;
