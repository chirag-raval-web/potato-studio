import React from "react";
import MenuItem from "./FooterItems";
import {
  FooterLogo,
  ContactMail,
  OfficeAddress,
  PrivacySection,
} from "./FooterItems";
import { GetInTouchWhite } from "../button";

const Footer = () => {
  return (
    <>
      <footer className="container-fluid footer">
        {/* <!-- -------top section----------- --> */}
        <div className="d-md-flex footer-section-1 text-center flex-md-row text-white  justify-content-between">
          <h1 className="me-md-4 footer-heading">Let's talk!</h1>
          <GetInTouchWhite className="footer-btn" src="/contact-us" />
        </div>
        <div className="hr mt-4 mt-md-0"></div>

        {/* <!-- -------footer menu section----------- --> */}
        <div className="row  footer-items">
          <div className="col-12 col-xl-auto">
            {/* <!-- -------footer logo section----------- --> */}
            <div className=" col-xl-auto col-12 order-xl-1 order-1">
              <FooterLogo />
              <PrivacySection className="d-none" />
            </div>
          </div>
          <div className="col-12  order-xl-2 order-3  col-xl-auto">
            <div className=" col-xl-auto col-12 contact-address order-3 order-xl-2 text-white">
              <div>
                <ContactMail MailAddress={"hello@thepotatostudio.co.in"} />
              </div>
              <div>
                <OfficeAddress
                  Address={
                    "1st floor/ 938, Sri Krsna Fortitude, BTM 4th Stage, Vijaya Bank Layout, Bengaluru, Karnataka 560076 "
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-auto  order-xl-3 order-2">
            <div className="d-flex flex-column g-34 mb-5">
              <MenuItem />
            </div>
          </div>
          <div className="col-12 d-xl-none  order-xl-4 order-4">
            <div className=" col-xl-auto col-12 d-block d-xl-none order-xl-4 order-4   ">
              <PrivacySection />
            </div>
          </div>
        </div>
        {/* <!-- -------footer menu section----------- --> */}
      </footer>
    </>
  );
};

export default Footer;
