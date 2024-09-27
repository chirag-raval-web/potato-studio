import React from "react";
import workApi from "./WorkApi";
import SectionText from "../common/sectionText";

const WorkItems = () => {
  return (
    <>
      <div className="container-fluid workContainer">
        <SectionText title={"Our Finest Work"} />
        <div className="row workItems">
          {workApi.workPageData.map((item, index) => (
            <div key={index} className="col-md-6 col-12">
              <div className="workImgContainer" style={{background:item.bg}}>
                <img src={item.img} alt={item.title} className="img-fluid" />
              </div>
              <div className="workInfo">
                <h1>{item.title}</h1>
                <div className="d-flex flex-wrap workdone text-center">
                  {item.workDone.map((work, i) => (
                    <p key={i} className="p-2">
                      {work}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkItems;

