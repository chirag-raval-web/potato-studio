import React, { useState   } from 'react';
import FaqItem from "./faqItem";
import SectionText from "../sectionText";
import FaqApi from "./faqApi";

const Faq = () => {
   
  const [faqData] = useState(FaqApi);
  return (
    <>
      <div className="faq-container">
       <SectionText title={"FAQ"}/>
        <div className="accordion-container">
          <div className="accordion" id="accordionExample">
            <FaqItem faqData={faqData}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
