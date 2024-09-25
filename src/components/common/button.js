import React from "react";

const Contact = () => {
  return (
    <>
      <div className="d-flex mb-sm-4 mb-lg-0 me-xxl-5" role="button">
        <button className="rounded-pill contact" type="button">
          <a href="#" className="text-decoration-none text-white ">
            Contact
          </a>
        </button>
      </div>
    </>
  );
};
export default Contact;
export const GetInTouchWhite = ({ btnTxt = "Get in touch", className = "" }) => {
  return (
    <>
      <a
        href="#"
         className={`btn get-in-touch-btn bg-white  text-black border-white rounded-pill  py-3 ps-2 ${className}`}
      >
       {btnTxt}
        <img
          src="../media/smalll-icons/rigthArrow.webp"
          width="24"
          height="24"
          alt="rightArrow"
        />
      </a>
    </>
  );
};
export const GetInTouchPurple = ({ btnTxt = "Get in touch" }) => {
  return (
    <>
      <button className="rounded-pill get-in-touch-btn-2" type="button">
        <a
          href="../html-files/contact"
          className="text-decoration-none text-white"
        >
          {btnTxt}
        </a>
      </button>
    </>
  );
};

 
