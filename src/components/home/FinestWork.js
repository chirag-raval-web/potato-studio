import React from 'react';
import SectionText from "../common/sectionText";
import { GetInTouchWhite } from '../common/button';
import workApi from '../work/WorkApi'; 

const CaseStudyBtn = () =>{
    return (
        <a href="#" className="btn   work-btn mt-auto bg-white text-black border-white rounded-pill py-3 ps-2">
                     <span>
                     Open Case Study
                        </span>  <img src="../media/smalll-icons/rigthArrow.webp" width="24" height="24" alt="rightArrow"  />
        </a>
    )
}
const FinestWork = () => {
  return (
    <>
      {/* <!-- Our Finest Work section  --> */}
      <div className="container-fluid">
        <div className="work-container">
          <SectionText title={"Our Finest Work"} />
          <div className="row work-item-container d-flex justify-content-center ">
            {workApi.homeData.map((item, index) => (
              <div key={index} className="col-12 mb-2 work-item">
                <div className="row">
                  <div className="col-12 col-xl-6 work-dtl-container order-2 order-xl-1">
                    <h1>{item.title}</h1>
                    <div className="d-flex flex-wrap workdone text-center">
                      {item.workDone.map((work, i) => (
                        <p key={i} className="p-2">{work}</p>
                      ))}
                    </div>
                    <p className="work-info text-black-50">
                      {item.description}
                    </p>
                     
                    <CaseStudyBtn />
                  </div>
                  <div className={`col-12 col-xl-6  work-bg rounded-4 order-1 order-xl-2 d-flex justify-content-center" work-item-${index+1}`} >
                    <img src={item.img} className="img-fluid" alt={item.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <GetInTouchWhite btnTxt='See all work' className='d-flex justify-content-center align-self-center' src='/work' />
        </div>
      </div>
    </>
  );
}

export default FinestWork;
