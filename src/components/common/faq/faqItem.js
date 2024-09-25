import React from "react";

const FaqItem = ({ faqData }) => {
  return (
    <>
      {faqData.map((elm) => (
        <div className="accordion-item bg-body-tertiary" key={elm.id}>
          <h2 className="accordion-header" id={`heading${elm.id}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${elm.id}`}
              aria-expanded="false"
              aria-controls={`collapse${elm.id}`}
            >
              {elm.question}
              <img
                src="../media/smalll-icons/PlushIcon.svg"
                alt="plus icon"
                className="icon icon-plus ms-auto"
              />
              <img
                src="../media/smalll-icons/closeIcon.svg"
                alt="close icon"
                className="icon icon-close ms-auto"
              />
            </button>
          </h2>
          <div
            id={`collapse${elm.id}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${elm.id}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">{elm.answer}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FaqItem;
