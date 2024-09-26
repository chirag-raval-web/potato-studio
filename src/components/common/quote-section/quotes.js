import { useState, useEffect } from "react";
import React from "react";
import { GetInTouchPurple, GetInTouchWhite } from "../button"; // Adjust the import path as needed
import QuoteApi from "./quotesApi"; // Adjust the import path as needed
import { useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const QuoteItem = ({ quoteData }) => {
  const location = useLocation();
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <>
      {/* <TransitionGroup> */}
      {quoteData.map((elm) => (
        // <CSSTransition key={elm.id} in={inProp} timeout={500} classNames="fade">
          <div className="quotes container-fluid" key={elm.id}>
            <div className="container d-flex">
              <div className="row justify-content-center">
                <div className="section-1">
                  {location.pathname === "/" && ( 
                    <>
                      <img
                        src="../media/smalll-icons/harsha.webp"
                        className="float-start mt-3 d-none d-md-block"
                        alt="harsha"
                      />
                      <img
                        src="../media/smalll-icons/amruta.webp"
                        className="float-end d-none d-md-block"
                        alt="amruta"
                      />
                    </>
                  )}
                  
                  <p className="bold-quote">{elm.quote}</p>
                </div>

                <div className="section-2 mt-2">
                  <p className="text-black-50">{elm.description}</p>
                </div>

                <div className="section-3 mt-5">
                  <div className="row d-flex justify-content-center">
                    <GetInTouchPurple btnTxt={location.pathname === "/career" ? "Explore Jobs" : "Get in Touch"} />
                    {location.pathname === "/" && ( 
                      <>
                        <GetInTouchWhite className="" />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        // </CSSTransition>
      ))}
    {/* // </TransitionGroup> */}
    </>
  );
};

const QuoteSection = () => {
  const location = useLocation();
  const [quoteData] = useState(QuoteApi);

  // Determine the current path
  let currentPath = location.pathname === "/" ? "home" : location.pathname.substring(1);
  
  // Filter quotes based on the current path
  const filteredQuotes = quoteData.filter((quote) => quote.page === currentPath);

  return (
    <>
      <QuoteItem quoteData={filteredQuotes} />
    </>
  );
};

export default QuoteSection;
